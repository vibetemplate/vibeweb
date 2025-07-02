import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Zap, 
  Code, 
  Cloud, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Settings,
  Globe,
  Server,
  Database,
  Monitor,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deployment Manager - VibeCLI MCP Tools',
  description: '部署管理器文档 - 智能部署管理，支持Vercel、Netlify、AWS等多平台一键部署',
  keywords: ['部署管理', '云部署', '自动化部署', 'CI/CD', 'MCP工具'],
};

export default function DeploymentManagerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Zap className="mr-2 h-4 w-4" />
              MCP Tool
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Deployment Manager
              <span className="gradient-text"> 部署管理器</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              智能部署管理系统，支持多平台一键部署、环境配置、域名管理和监控集成。
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8 border-indigo-200 dark:border-indigo-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-indigo-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">基础用法：</p>
                  <code className="text-sm">
                    deployment_manager(project_path="./my-app", platform="vercel", environment="production")
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo">
                      <Cloud className="mr-2 h-4 w-4" />
                      在线体验
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/tools/feature_composer">
                      <Settings className="mr-2 h-4 w-4" />
                      功能组合器
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Function Signature */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                函数签名
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-950 text-green-400 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`deployment_manager(
  project_path: string,
  platform: 'vercel' | 'netlify' | 'aws' | 'docker' | 'railway' | 'render',
  environment: 'development' | 'staging' | 'production',
  configuration?: {
    domain?: string,
    env_variables?: object,
    build_settings?: object,
    monitoring?: boolean,
    auto_ssl?: boolean
  }
) -> DeploymentResult`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supported Platforms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                支持的部署平台
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">▲</span>
                    </div>
                    <h5 className="font-medium">Vercel</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Next.js 原生支持，极速部署</p>
                  <div className="space-y-1 text-xs">
                    <div>• 零配置部署</div>
                    <div>• 自动 SSL 证书</div>
                    <div>• 全球 CDN</div>
                    <div>• 预览部署</div>
                  </div>
                  <Badge variant="secondary" className="mt-3">推荐</Badge>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">N</span>
                    </div>
                    <h5 className="font-medium">Netlify</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">静态站点优化，强大功能</p>
                  <div className="space-y-1 text-xs">
                    <div>• 表单处理</div>
                    <div>• 函数部署</div>
                    <div>• A/B 测试</div>
                    <div>• 分析统计</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AWS</span>
                    </div>
                    <h5 className="font-medium">AWS</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">企业级云服务，灵活配置</p>
                  <div className="space-y-1 text-xs">
                    <div>• S3 + CloudFront</div>
                    <div>• Lambda 函数</div>
                    <div>• 自定义配置</div>
                    <div>• 企业级安全</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">🐳</span>
                    </div>
                    <h5 className="font-medium">Docker</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">容器化部署，环境一致</p>
                  <div className="space-y-1 text-xs">
                    <div>• 容器化打包</div>
                    <div>• 多环境支持</div>
                    <div>• 可移植性强</div>
                    <div>• 微服务架构</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">R</span>
                    </div>
                    <h5 className="font-medium">Railway</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">现代化部署平台</p>
                  <div className="space-y-1 text-xs">
                    <div>• Git 集成</div>
                    <div>• 数据库服务</div>
                    <div>• 自动扩缩容</div>
                    <div>• 开发友好</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">R</span>
                    </div>
                    <h5 className="font-medium">Render</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">简单易用，免费层级</p>
                  <div className="space-y-1 text-xs">
                    <div>• 免费 SSL</div>
                    <div>• 自动部署</div>
                    <div>• 数据库托管</div>
                    <div>• 简单配置</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Parameters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>参数说明</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">必需参数</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-medium">project_path</h5>
                      <p className="text-sm text-muted-foreground">项目路径 - 要部署的项目目录</p>
                      <Badge variant="outline" className="mt-1">string</Badge>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-medium">platform</h5>
                      <p className="text-sm text-muted-foreground">部署平台 - 选择目标部署平台</p>
                      <div className="flex gap-2 mt-1 flex-wrap">
                        <Badge variant="outline">vercel</Badge>
                        <Badge variant="outline">netlify</Badge>
                        <Badge variant="outline">aws</Badge>
                        <Badge variant="outline">docker</Badge>
                        <Badge variant="outline">railway</Badge>
                        <Badge variant="outline">render</Badge>
                      </div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-medium">environment</h5>
                      <p className="text-sm text-muted-foreground">部署环境 - 目标部署环境</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline">development</Badge>
                        <Badge variant="outline">staging</Badge>
                        <Badge variant="outline">production</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">可选配置</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">domain</h5>
                      <p className="text-sm text-muted-foreground">自定义域名 - 绑定自定义域名</p>
                      <Badge variant="outline" className="mt-1">string</Badge>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">env_variables</h5>
                      <p className="text-sm text-muted-foreground">环境变量 - 部署时的环境变量配置</p>
                      <Badge variant="outline" className="mt-1">object</Badge>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">build_settings</h5>
                      <p className="text-sm text-muted-foreground">构建设置 - 自定义构建命令和输出目录</p>
                      <Badge variant="outline" className="mt-1">object</Badge>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">monitoring</h5>
                      <p className="text-sm text-muted-foreground">监控集成 - 启用性能监控和错误追踪</p>
                      <Badge variant="outline" className="mt-1">boolean</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Value */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>返回值结构</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
                <pre className="text-sm">
{`{
  success: boolean,              // 部署是否成功
  platform: string,             // 部署平台
  environment: string,          // 部署环境
  deployment_url: string,       // 部署后的访问URL
  custom_domain?: string,       // 自定义域名(如果配置)
  build_time: string,           // 构建耗时
  deployment_id: string,        // 部署ID
  status: {
    build: 'success' | 'failed',    // 构建状态
    deployment: 'success' | 'failed', // 部署状态
    ssl: 'enabled' | 'pending'       // SSL状态
  },
  monitoring: {                 // 监控信息
    enabled: boolean,
    dashboard_url?: string,
    alerts_configured: boolean
  },
  next_steps: string[],         // 建议的后续操作
  rollback_info?: {             // 回滚信息
    previous_deployment: string,
    rollback_command: string
  }
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Deployment Workflow */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                部署流程
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-medium">项目分析</h5>
                    <p className="text-sm text-muted-foreground">分析项目结构、依赖和构建配置</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-medium">环境配置</h5>
                    <p className="text-sm text-muted-foreground">设置环境变量和构建参数</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-medium">代码构建</h5>
                    <p className="text-sm text-muted-foreground">执行构建命令，优化资源文件</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h5 className="font-medium">部署发布</h5>
                    <p className="text-sm text-muted-foreground">上传文件到目标平台并配置服务</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h5 className="font-medium">健康检查</h5>
                    <p className="text-sm text-muted-foreground">验证部署结果并配置监控</p>
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
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs">▲</span>
                    </div>
                    Vercel 部署
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`deployment_manager(
  project_path="./my-nextjs-app",
  platform="vercel",
  environment="production",
  configuration={
    "domain": "myapp.com",
    "env_variables": {
      "DATABASE_URL": "postgresql://...",
      "NEXTAUTH_SECRET": "...",
      "STRIPE_SECRET_KEY": "..."
    },
    "auto_ssl": true,
    "monitoring": true
  }
)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AWS</span>
                    </div>
                    AWS 企业部署
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`deployment_manager(
  project_path="./enterprise-app",
  platform="aws",
  environment="production",
  configuration={
    "build_settings": {
      "build_command": "npm run build",
      "output_directory": "out",
      "node_version": "18"
    },
    "env_variables": {
      "NODE_ENV": "production",
      "AWS_REGION": "us-east-1"
    },
    "monitoring": true
  }
)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs">🐳</span>
                    </div>
                    Docker 容器部署
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`deployment_manager(
  project_path="./microservice-app",
  platform="docker",
  environment="staging",
  configuration={
    "build_settings": {
      "dockerfile": "Dockerfile.prod",
      "context": ".",
      "target": "production"
    },
    "env_variables": {
      "PORT": "3000",
      "DATABASE_URL": "postgresql://..."
    }
  }
)`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                最佳实践
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">选择合适的部署平台</h5>
                    <p className="text-sm text-muted-foreground">Next.js选择Vercel，静态站点选择Netlify，企业级选择AWS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">分环境部署</h5>
                    <p className="text-sm text-muted-foreground">使用staging环境测试，确认无误后再部署到production</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">环境变量安全</h5>
                    <p className="text-sm text-muted-foreground">敏感信息使用平台的环境变量功能，不要硬编码到代码中</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">启用监控</h5>
                    <p className="text-sm text-muted-foreground">生产环境务必启用监控，及时发现和解决问题</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">备份部署信息</h5>
                    <p className="text-sm text-muted-foreground">保存deployment_id和rollback_info，便于问题排查和回滚</p>
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
                  <h5 className="font-medium text-orange-600 mb-2">构建失败</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：依赖缺失、环境变量未配置或构建命令错误</p>
                  <p className="text-sm"><strong>解决方案：</strong> 检查构建日志，确保所有依赖和环境变量正确配置</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">部署后访问失败</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：路由配置错误、API端点不可用或数据库连接问题</p>
                  <p className="text-sm"><strong>解决方案：</strong> 检查应用日志和网络连接，验证API端点和数据库配置</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">域名SSL证书问题</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：DNS配置未生效或SSL证书申请失败</p>
                  <p className="text-sm"><strong>解决方案：</strong> 检查DNS设置，等待SSL证书自动申请完成</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Tools */}
          <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关工具</CardTitle>
              <CardDescription>
                部署完成后，可以使用以下工具进行监控和维护
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/feature_composer">
                    <Settings className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Feature Composer</div>
                      <div className="text-xs text-muted-foreground">添加更多功能模块</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/project_analyzer">
                    <Monitor className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Project Analyzer</div>
                      <div className="text-xs text-muted-foreground">分析项目性能</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/best-practices">
                    <FileText className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Best Practices</div>
                      <div className="text-xs text-muted-foreground">部署最佳实践</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Navigation */}
          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/tools/feature_composer">
                ← Feature Composer
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs">
                返回文档 →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}