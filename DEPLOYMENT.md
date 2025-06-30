# VibeCLI 2.0 Web 部署指南

本文档详细说明如何将VibeCLI 2.0官方网站部署到Cloudflare Pages。

## 🚀 快速部署

### 1. 环境准备

**必需工具:**
- Node.js 18+
- npm 或 yarn
- Git
- Cloudflare 账户

**安装 Wrangler CLI:**
```bash
npm install -g wrangler
wrangler auth login
```

### 2. 环境变量配置

复制环境变量模板：
```bash
cp .env.example .env.local
```

配置以下环境变量：

**公开变量 (可在 Cloudflare Pages 设置中配置):**
```env
NEXT_PUBLIC_APP_URL=https://vibecli.com
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-tracking-id
```

**私密变量 (通过 wrangler secret 设置):**
```env
DATABASE_URL=your-database-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXTAUTH_SECRET=your-nextauth-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### 3. 一键部署

```bash
# 完整部署流程
npm run deploy:full

# 或分步执行
npm run cf:kv:setup        # 设置KV命名空间
npm run build              # 构建项目
npm run deploy:production  # 部署到生产环境
npm run health-check       # 健康检查
```

## 📋 详细部署步骤

### 步骤 1: Cloudflare Pages 项目创建

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 Pages 部分
3. 创建新项目，连接 Git 仓库
4. 设置构建配置：
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/`

### 步骤 2: KV 命名空间设置

```bash
# 创建生产环境KV命名空间
wrangler kv:namespace create "CACHE" --env production
wrangler kv:namespace create "SESSIONS" --env production

# 创建预览环境KV命名空间
wrangler kv:namespace create "CACHE" --env staging --preview
wrangler kv:namespace create "SESSIONS" --env staging --preview
```

将返回的命名空间ID更新到 `wrangler.toml` 文件中。

### 步骤 3: 环境变量设置

**在 Cloudflare Pages 设置中配置公开变量:**
```
NEXT_PUBLIC_APP_URL=https://vibecli.com
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

**通过 Wrangler 设置私密变量:**
```bash
wrangler secret put DATABASE_URL --env production
wrangler secret put SUPABASE_SERVICE_ROLE_KEY --env production
wrangler secret put NEXTAUTH_SECRET --env production
wrangler secret put GITHUB_CLIENT_ID --env production
wrangler secret put GITHUB_CLIENT_SECRET --env production
```

### 步骤 4: 自定义域名配置

```bash
# 添加自定义域名
wrangler pages domain add vibecli.com --project-name vibecli-web

# 或通过 Cloudflare Dashboard 配置
```

DNS 设置：
```
Type: CNAME
Name: vibecli.com (或 @)
Target: vibecli-web.pages.dev
Proxy: Yes (橙色云朵)
```

### 步骤 5: SSL/TLS 配置

1. 在 Cloudflare Dashboard 中进入 SSL/TLS 设置
2. 设置加密模式为 "Full (strict)"
3. 启用 "Always Use HTTPS"
4. 配置 HSTS 设置

## 🔧 CI/CD 配置

### GitHub Actions 自动部署

项目已配置 GitHub Actions 工作流 (`.github/workflows/deploy.yml`)：

**触发条件:**
- `main` 分支推送 → 生产环境部署
- `staging` 分支推送 → 预览环境部署
- Pull Request → 预览部署

**所需 GitHub Secrets:**
```
CLOUDFLARE_API_TOKEN=your-api-token
CLOUDFLARE_ACCOUNT_ID=your-account-id
DATABASE_URL=your-database-url
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXTAUTH_SECRET=your-nextauth-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### 手动部署

```bash
# 检查部署环境
npm run deploy check

# 构建项目
npm run build

# 部署到生产环境
npm run deploy:production

# 部署到预览环境
npm run deploy:staging
```

## 📊 监控和分析

### 性能监控

1. **Cloudflare Analytics**: 自动启用
2. **Web Vitals**: 通过 Next.js 内置支持
3. **Real User Monitoring (RUM)**: 在 Cloudflare Dashboard 中配置

### 错误追踪

配置 Sentry (可选)：
```env
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

### 日志监控

Cloudflare Pages 提供实时日志：
```bash
wrangler pages deployment tail --project-name vibecli-web
```

## 🛡️ 安全配置

### 安全头

项目已配置以下安全头 (在 `_headers` 文件中)：
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security
- Content-Security-Policy
- Referrer-Policy

### 速率限制

通过边缘中间件实现：
- API 路由：100 请求/分钟/IP
- 地理位置阻止
- 机器人检测

### 数据保护

- 敏感环境变量通过 Cloudflare Secrets 管理
- 数据库连接通过 SSL 加密
- 用户会话存储在 KV 中，带有过期时间

## 🔄 回滚和恢复

### 快速回滚

```bash
# 查看部署历史
wrangler pages deployment list --project-name vibecli-web

# 回滚到特定部署
wrangler pages deployment promote <deployment-id> --project-name vibecli-web
```

### 蓝绿部署

利用 Cloudflare Pages 的分支部署：
1. 部署到 `staging` 分支进行测试
2. 测试通过后合并到 `main` 分支
3. 生产环境自动更新

## 📈 性能优化

### 缓存策略

- 静态资源：1年缓存
- 图片：1天缓存
- HTML：5分钟缓存
- API：不缓存

### CDN 优化

- 全球边缘节点分发
- 自动 Brotli/Gzip 压缩
- HTTP/3 支持
- 图片优化

### 代码分割

- 自动代码分割
- 动态导入
- 组件懒加载

## 🚨 故障排除

### 常见问题

**1. 构建失败**
```bash
# 检查依赖
npm ci
npm run type-check
npm run lint
```

**2. 环境变量问题**
```bash
# 验证环境变量
wrangler secret list --env production
```

**3. KV 存储问题**
```bash
# 检查 KV 命名空间
wrangler kv:namespace list
```

**4. 域名解析问题**
- 检查 DNS 记录
- 验证 SSL 证书
- 清除 Cloudflare 缓存

### 调试工具

```bash
# 实时日志
wrangler pages deployment tail --project-name vibecli-web

# 本地预览
npm run build
wrangler pages dev .next

# 健康检查
npm run health-check
```

## 📞 支持

遇到部署问题？

1. 查看 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
2. 检查项目 Issues
3. 联系技术支持

---

**注意**: 首次部署可能需要 5-10 分钟进行 DNS 传播和 SSL 证书生成。