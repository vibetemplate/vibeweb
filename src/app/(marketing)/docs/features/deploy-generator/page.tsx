import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Cloud, 
  Zap, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  FileText,
  Target,
  GitBranch,
  Monitor,
  Shield,
  Gauge,
  Server,
  Globe,
  Database,
  Workflow
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '智能部署生成器 - VibeCLI 核心功能',
  description: '革命性的多平台部署解决方案，支持Vercel、Netlify、AWS、Docker等主流平台的一键配置。智能识别项目类型和依赖关系。',
  keywords: ['智能部署', '多平台部署', 'CI/CD', '自动配置', 'Vercel', 'Netlify', 'AWS', 'Docker'],
};

export default function DeployGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Cloud className="mr-2 h-4 w-4" />
              核心功能
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              智能部署生成器
              <span className="gradient-text"> Intelligent Deploy Generator</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              革命性的多平台部署解决方案，支持Vercel、Netlify、AWS、Docker等主流平台的一键配置。智能识别项目类型和依赖关系，自动生成最优的部署配置和CI/CD流程。
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">一键生成部署配置：</p>
                  <code className="text-sm">
                    vibecli deploy --platform vercel --env production
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo#deploy-generator">
                      <Cloud className="mr-2 h-4 w-4" />
                      体验部署生成
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/deployment">
                      <FileText className="mr-2 h-4 w-4" />
                      部署指南
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supported Platforms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>支持的部署平台</CardTitle>
              <CardDescription>
                全面支持主流云平台和容器化部署方案
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-black">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold">Vercel</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Next.js 优化</div>
                    <div>• 边缘函数支持</div>
                    <div>• 自动HTTPS</div>
                    <div>• 全球CDN</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-teal-500">
                      <Cloud className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold">Netlify</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• 静态站点优化</div>
                    <div>• 表单处理</div>
                    <div>• 分支部署</div>
                    <div>• 插件生态</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-orange-500">
                      <Server className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold">AWS</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• EC2 + ELB</div>
                    <div>• S3 + CloudFront</div>
                    <div>• Lambda Functions</div>
                    <div>• RDS 数据库</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-blue-500">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold">Docker</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• 多阶段构建</div>
                    <div>• 镜像优化</div>
                    <div>• Docker Compose</div>
                    <div>• 健康检查</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-blue-700">
                      <Workflow className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold">Kubernetes</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Deployment YAML</div>
                    <div>• Service 配置</div>
                    <div>• Ingress 路由</div>
                    <div>• 配置管理</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500">
                      <Monitor className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold">GitHub Pages</h4>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• 静态站点</div>
                    <div>• Actions 集成</div>
                    <div>• 自定义域名</div>
                    <div>• 版本控制</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>核心特性</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Settings className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">智能配置生成</h4>
                      <p className="text-sm text-muted-foreground">
                        自动分析项目结构，生成平台特定的配置文件
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">环境自动检测</h4>
                      <p className="text-sm text-muted-foreground">
                        智能识别技术栈和依赖，选择最佳部署策略
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Workflow className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">CI/CD集成</h4>
                      <p className="text-sm text-muted-foreground">
                        自动生成GitHub Actions、GitLab CI等配置
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Shield className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">安全配置</h4>
                      <p className="text-sm text-muted-foreground">
                        HTTPS、CORS、CSP等安全策略自动设置
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Gauge className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">性能优化</h4>
                      <p className="text-sm text-muted-foreground">
                        CDN、缓存、压缩等性能策略自动配置
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Monitor className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">监控集成</h4>
                      <p className="text-sm text-muted-foreground">
                        自动配置性能监控和错误追踪系统
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <Database className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">环境变量管理</h4>
                      <p className="text-sm text-muted-foreground">
                        安全的环境变量配置和密钥管理
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Globe className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">域名和SSL</h4>
                      <p className="text-sm text-muted-foreground">
                        自动配置自定义域名和SSL证书
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>使用示例</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-blue-500" />
                    Vercel 部署配置
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 生成 Vercel 部署配置
vibecli deploy --platform vercel --env production

# 自动生成 vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "env": {
    "DATABASE_URL": "@database-url"
  },
  "functions": {
    "app/api/**/*.js": {
      "maxDuration": 30
    }
  }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4 text-purple-500" />
                    Docker 容器化
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 生成 Docker 配置
vibecli deploy --platform docker --optimize

# 自动生成多阶段 Dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM base AS runtime
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["npm", "start"]`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Workflow className="h-4 w-4 text-green-500" />
                    GitHub Actions CI/CD
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 生成 CI/CD 流水线
vibecli deploy --ci github-actions --target production

# 自动生成 .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuration Options */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>配置选项</CardTitle>
              <CardDescription>
                丰富的配置选项满足不同部署需求
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold mb-2">环境配置</h5>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• --env production|staging|development</div>
                      <div>• --region auto|us|eu|asia</div>
                      <div>• --node-version 16|18|20</div>
                      <div>• --build-command "npm run build"</div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold mb-2">性能优化</h5>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• --optimize 启用性能优化</div>
                      <div>• --cdn 配置CDN加速</div>
                      <div>• --compress gzip|brotli</div>
                      <div>• --cache-strategy aggressive|normal</div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold mb-2">安全设置</h5>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• --https-only 强制HTTPS</div>
                      <div>• --cors-origin 配置CORS</div>
                      <div>• --csp 内容安全策略</div>
                      <div>• --rate-limit 限流配置</div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold mb-2">监控日志</h5>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• --analytics 启用分析统计</div>
                      <div>• --logging debug|info|warn|error</div>
                      <div>• --health-check 健康检查</div>
                      <div>• --alerts 告警配置</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-600" />
                最佳实践
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">分环境部署</h5>
                    <p className="text-sm text-muted-foreground">使用不同环境（开发、测试、生产）分别部署，确保代码质量</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">环境变量安全</h5>
                    <p className="text-sm text-muted-foreground">敏感信息使用环境变量管理，不要硬编码在代码中</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">性能监控</h5>
                    <p className="text-sm text-muted-foreground">启用监控和日志记录，及时发现和解决性能问题</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">自动化测试</h5>
                    <p className="text-sm text-muted-foreground">部署前运行自动化测试，确保代码质量和功能完整性</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Issues */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                常见问题
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">部署失败</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：构建命令错误或依赖缺失</p>
                  <p className="text-sm"><strong>解决方案：</strong> 检查构建日志，确认依赖安装和构建命令正确</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">环境变量未生效</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：环境变量配置错误或权限问题</p>
                  <p className="text-sm"><strong>解决方案：</strong> 检查环境变量名称和值，确认平台配置正确</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">性能问题</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：未启用优化或CDN配置不当</p>
                  <p className="text-sm"><strong>解决方案：</strong> 启用性能优化选项，配置合适的缓存策略</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Features */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关功能</CardTitle>
              <CardDescription>
                与其他核心功能协同工作，提供完整的开发体验
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/features/template-store">
                    <FileText className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">模板商店生态系统</div>
                      <div className="text-xs text-muted-foreground">为模板项目提供部署配置</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/features/enterprise-security">
                    <Shield className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">企业级安全</div>
                      <div className="text-xs text-muted-foreground">提供安全的部署配置和管理</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Navigation */}
          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/features/template-store">
                ← 模板商店生态系统
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/features/i18n-support">
                国际化支持 →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}