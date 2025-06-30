#!/bin/bash

# VibeCLI Web Cloudflare 部署脚本

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查必需的工具
check_dependencies() {
    log_info "检查部署依赖..."
    
    if ! command -v node &> /dev/null; then
        log_error "Node.js 未安装"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        log_error "npm 未安装"
        exit 1
    fi
    
    if ! command -v wrangler &> /dev/null; then
        log_warning "Wrangler CLI 未安装，正在安装..."
        npm install -g wrangler
    fi
    
    log_success "依赖检查完成"
}

# 环境变量检查
check_env_vars() {
    log_info "检查环境变量..."
    
    required_vars=(
        "NEXT_PUBLIC_SUPABASE_URL"
        "NEXT_PUBLIC_SUPABASE_ANON_KEY"
        "SUPABASE_SERVICE_ROLE_KEY"
        "NEXTAUTH_SECRET"
    )
    
    missing_vars=()
    
    for var in "${required_vars[@]}"; do
        if [[ -z "${!var}" ]]; then
            missing_vars+=("$var")
        fi
    done
    
    if [[ ${#missing_vars[@]} -gt 0 ]]; then
        log_error "缺少以下环境变量:"
        for var in "${missing_vars[@]}"; do
            echo "  - $var"
        done
        log_info "请在 .env.local 文件中设置这些变量"
        exit 1
    fi
    
    log_success "环境变量检查完成"
}

# 构建项目
build_project() {
    log_info "构建项目..."
    
    # 安装依赖
    npm ci
    
    # 生成 Prisma 客户端
    npm run db:generate
    
    # 类型检查
    npm run type-check
    
    # 构建项目
    npm run build
    
    log_success "项目构建完成"
}

# 部署到 Cloudflare Pages
deploy_to_cloudflare() {
    local environment=${1:-production}
    
    log_info "部署到 Cloudflare Pages ($environment)..."
    
    # 设置环境变量到 Cloudflare
    log_info "设置环境变量..."
    wrangler secret put DATABASE_URL --env $environment
    wrangler secret put SUPABASE_SERVICE_ROLE_KEY --env $environment
    wrangler secret put NEXTAUTH_SECRET --env $environment
    
    if [[ -n "$GITHUB_CLIENT_ID" ]]; then
        wrangler secret put GITHUB_CLIENT_ID --env $environment
    fi
    
    if [[ -n "$GITHUB_CLIENT_SECRET" ]]; then
        wrangler secret put GITHUB_CLIENT_SECRET --env $environment
    fi
    
    # 部署项目
    wrangler pages deploy .next --project-name vibecli-web --env $environment
    
    log_success "部署完成"
}

# 设置 KV 命名空间
setup_kv_namespaces() {
    log_info "设置 KV 命名空间..."
    
    # 创建生产环境 KV 命名空间
    if ! wrangler kv:namespace list | grep -q "vibecli-web-cache"; then
        log_info "创建缓存 KV 命名空间..."
        wrangler kv:namespace create "CACHE" --env production
    fi
    
    if ! wrangler kv:namespace list | grep -q "vibecli-web-sessions"; then
        log_info "创建会话 KV 命名空间..."
        wrangler kv:namespace create "SESSIONS" --env production
    fi
    
    # 创建预览环境 KV 命名空间
    if ! wrangler kv:namespace list | grep -q "vibecli-web-cache-preview"; then
        log_info "创建预览缓存 KV 命名空间..."
        wrangler kv:namespace create "CACHE" --env staging --preview
    fi
    
    if ! wrangler kv:namespace list | grep -q "vibecli-web-sessions-preview"; then
        log_info "创建预览会话 KV 命名空间..."
        wrangler kv:namespace create "SESSIONS" --env staging --preview
    fi
    
    log_success "KV 命名空间设置完成"
}

# 配置自定义域名
setup_custom_domain() {
    local domain=${1:-vibecli.com}
    
    log_info "配置自定义域名: $domain"
    
    # 添加自定义域名到 Cloudflare Pages
    wrangler pages domain add $domain --project-name vibecli-web
    
    log_success "自定义域名配置完成"
}

# 健康检查
health_check() {
    local url=${1:-https://vibecli.com}
    
    log_info "执行健康检查: $url"
    
    if curl -f -s "$url" > /dev/null; then
        log_success "健康检查通过"
    else
        log_error "健康检查失败"
        exit 1
    fi
}

# 主函数
main() {
    local command=${1:-deploy}
    local environment=${2:-production}
    
    echo "🚀 VibeCLI Web Cloudflare 部署脚本"
    echo "================================="
    
    case $command in
        "check")
            check_dependencies
            check_env_vars
            ;;
        "build")
            check_dependencies
            check_env_vars
            build_project
            ;;
        "setup-kv")
            check_dependencies
            setup_kv_namespaces
            ;;
        "setup-domain")
            check_dependencies
            setup_custom_domain ${3:-vibecli.com}
            ;;
        "deploy")
            check_dependencies
            check_env_vars
            build_project
            deploy_to_cloudflare $environment
            ;;
        "full-deploy")
            check_dependencies
            check_env_vars
            setup_kv_namespaces
            build_project
            deploy_to_cloudflare $environment
            setup_custom_domain ${3:-vibecli.com}
            health_check "https://${3:-vibecli.com}"
            ;;
        "health-check")
            health_check ${3:-https://vibecli.com}
            ;;
        *)
            echo "用法: $0 [command] [environment] [domain]"
            echo ""
            echo "Commands:"
            echo "  check         - 检查依赖和环境变量"
            echo "  build         - 构建项目"
            echo "  setup-kv      - 设置 KV 命名空间"
            echo "  setup-domain  - 配置自定义域名"
            echo "  deploy        - 部署到 Cloudflare"
            echo "  full-deploy   - 完整部署流程"
            echo "  health-check  - 健康检查"
            echo ""
            echo "Environments: production, staging"
            echo ""
            echo "示例:"
            echo "  $0 check"
            echo "  $0 deploy production"
            echo "  $0 full-deploy production vibecli.com"
            ;;
    esac
}

# 执行主函数
main "$@"