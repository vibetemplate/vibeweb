import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Code, 
  Puzzle, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Shield,
  CreditCard,
  Upload,
  Mail,
  Users,
  Settings
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Feature Composer - VibeCLI MCP Tools',
  description: '功能组合器文档 - 模块化添加和组合项目功能，支持认证、支付、上传等企业级功能模块',
  keywords: ['功能模块', '代码组合', '模块化开发', '功能集成', 'MCP工具'],
};

export default function FeatureComposerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Code className="mr-2 h-4 w-4" />
              MCP Tool
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Feature Composer
              <span className="gradient-text"> 功能组合器</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              模块化添加和组合项目功能，支持认证、支付、文件上传、邮件等企业级功能模块的智能集成。
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
                  <p className="text-sm text-muted-foreground mb-2">基础用法：</p>
                  <code className="text-sm">
                    feature_composer(project_path="./my-app", feature_type="auth", integration_method="component")
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo">
                      <Puzzle className="mr-2 h-4 w-4" />
                      在线体验
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/tools/template_generator">
                      <Settings className="mr-2 h-4 w-4" />
                      模板生成器
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
{`feature_composer(
  project_path: string,
  feature_type: 'auth' | 'payment' | 'upload' | 'email' | 'realtime' | 'admin',
  integration_method?: 'component' | 'service' | 'middleware',
  configuration?: {
    provider?: string,
    options?: object,
    styling?: string,
    permissions?: string[]
  }
) -> FeatureIntegrationResult`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Available Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Puzzle className="h-5 w-5" />
                可用功能模块
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <h5 className="font-medium">用户认证 (auth)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">完整的用户认证系统</p>
                  <div className="space-y-1 text-xs">
                    <div>• 注册/登录/登出</div>
                    <div>• 密码重置</div>
                    <div>• 角色权限管理</div>
                    <div>• JWT Token 管理</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">NextAuth</Badge>
                    <Badge variant="secondary" className="text-xs">JWT</Badge>
                    <Badge variant="secondary" className="text-xs">RBAC</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="h-5 w-5 text-green-600" />
                    <h5 className="font-medium">支付集成 (payment)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">企业级支付解决方案</p>
                  <div className="space-y-1 text-xs">
                    <div>• 多种支付方式</div>
                    <div>• 订单管理</div>
                    <div>• 退款处理</div>
                    <div>• 支付回调</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">Stripe</Badge>
                    <Badge variant="secondary" className="text-xs">PayPal</Badge>
                    <Badge variant="secondary" className="text-xs">支付宝</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Upload className="h-5 w-5 text-orange-600" />
                    <h5 className="font-medium">文件上传 (upload)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">文件上传和管理系统</p>
                  <div className="space-y-1 text-xs">
                    <div>• 多文件上传</div>
                    <div>• 图片处理</div>
                    <div>• 云存储集成</div>
                    <div>• 文件预览</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">AWS S3</Badge>
                    <Badge variant="secondary" className="text-xs">Cloudinary</Badge>
                    <Badge variant="secondary" className="text-xs">本地存储</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <h5 className="font-medium">邮件系统 (email)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">邮件发送和模板管理</p>
                  <div className="space-y-1 text-xs">
                    <div>• 模板邮件</div>
                    <div>• 批量发送</div>
                    <div>• 邮件队列</div>
                    <div>• 发送统计</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">SendGrid</Badge>
                    <Badge variant="secondary" className="text-xs">Resend</Badge>
                    <Badge variant="secondary" className="text-xs">SMTP</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-yellow-600" />
                    <h5 className="font-medium">实时通信 (realtime)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">实时数据和通信功能</p>
                  <div className="space-y-1 text-xs">
                    <div>• WebSocket 连接</div>
                    <div>• 实时消息</div>
                    <div>• 状态同步</div>
                    <div>• 推送通知</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">Socket.IO</Badge>
                    <Badge variant="secondary" className="text-xs">Pusher</Badge>
                    <Badge variant="secondary" className="text-xs">SSE</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-5 w-5 text-red-600" />
                    <h5 className="font-medium">管理后台 (admin)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">完整的管理后台系统</p>
                  <div className="space-y-1 text-xs">
                    <div>• 用户管理</div>
                    <div>• 数据统计</div>
                    <div>• 系统配置</div>
                    <div>• 操作日志</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="secondary" className="text-xs">Dashboard</Badge>
                    <Badge variant="secondary" className="text-xs">Charts</Badge>
                    <Badge variant="secondary" className="text-xs">Tables</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integration Methods */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>集成方式</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-blue-600" />
                      Component 组件模式
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">直接集成React组件</p>
                    <ul className="text-xs space-y-1">
                      <li>• 即插即用的UI组件</li>
                      <li>• 完整的样式和交互</li>
                      <li>• 适合前端功能</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Settings className="h-4 w-4 text-green-600" />
                      Service 服务模式
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">后端服务集成</p>
                    <ul className="text-xs space-y-1">
                      <li>• API路由和业务逻辑</li>
                      <li>• 数据库操作</li>
                      <li>• 适合后端功能</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-purple-600" />
                      Middleware 中间件模式
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">请求处理中间件</p>
                    <ul className="text-xs space-y-1">
                      <li>• 全局功能处理</li>
                      <li>• 认证和权限</li>
                      <li>• 适合横切关注点</li>
                    </ul>
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
  success: boolean,              // 集成是否成功
  feature_type: string,          // 集成的功能类型
  integration_method: string,    // 使用的集成方式
  files_modified: string[],      // 修改的文件列表
  files_created: string[],       // 新创建的文件列表
  dependencies_added: string[],  // 添加的依赖包
  configuration_updates: {       // 配置文件更新
    env_variables: string[],     // 需要设置的环境变量
    database_changes: string[],  // 数据库schema变更
    api_routes: string[]         // 新增的API路由
  },
  setup_instructions: string[],  // 配置指令
  usage_examples: string[],      // 使用示例代码
  documentation_links: string[] // 相关文档链接
}`}
                </pre>
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
                    <Shield className="h-4 w-4 text-blue-500" />
                    添加用户认证
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`feature_composer(
  project_path="./my-ecommerce",
  feature_type="auth",
  integration_method="component",
  configuration={
    "provider": "nextauth",
    "options": {
      "providers": ["google", "github", "credentials"],
      "session_strategy": "jwt",
      "pages": {
        "signin": "/auth/signin",
        "signup": "/auth/signup"
      }
    },
    "styling": "tailwind",
    "permissions": ["user", "admin", "moderator"]
  }
)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-green-500" />
                    集成支付功能
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`feature_composer(
  project_path="./my-saas",
  feature_type="payment",
  integration_method="service",
  configuration={
    "provider": "stripe",
    "options": {
      "currency": "usd",
      "subscription_plans": true,
      "webhooks": true,
      "payment_methods": ["card", "paypal"]
    }
  }
)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Upload className="h-4 w-4 text-orange-500" />
                    添加文件上传
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`feature_composer(
  project_path="./my-blog",
  feature_type="upload",
  integration_method="component",
  configuration={
    "provider": "cloudinary",
    "options": {
      "max_file_size": "10MB",
      "allowed_types": ["image", "document"],
      "image_transformations": true,
      "storage_path": "uploads/{year}/{month}"
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
                    <h5 className="font-medium">选择合适的集成方式</h5>
                    <p className="text-sm text-muted-foreground">UI功能使用component，API功能使用service，全局功能使用middleware</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">逐步集成功能</h5>
                    <p className="text-sm text-muted-foreground">先添加核心功能，再逐步添加高级功能，避免一次性集成过多模块</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">遵循配置指南</h5>
                    <p className="text-sm text-muted-foreground">严格按照setup_instructions配置环境变量和依赖</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">测试功能集成</h5>
                    <p className="text-sm text-muted-foreground">每次添加功能后进行完整测试，确保与现有功能兼容</p>
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
                  <h5 className="font-medium text-orange-600 mb-2">功能冲突</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：不同功能模块之间的依赖冲突或API路由重复</p>
                  <p className="text-sm"><strong>解决方案：</strong> 检查files_modified列表，避免重复集成相似功能</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">环境配置错误</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：环境变量未正确设置或第三方服务配置错误</p>
                  <p className="text-sm"><strong>解决方案：</strong> 仔细检查env_variables列表，确保所有配置正确</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">样式冲突</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：新集成的组件样式与现有样式冲突</p>
                  <p className="text-sm"><strong>解决方案：</strong> 使用CSS模块或指定styling配置确保样式隔离</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Tools */}
          <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关工具</CardTitle>
              <CardDescription>
                功能集成完成后，可以使用以下工具进行部署和管理
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/template_generator">
                    <Settings className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Template Generator</div>
                      <div className="text-xs text-muted-foreground">生成基础项目模板</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/deployment_manager">
                    <Zap className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Deployment Manager</div>
                      <div className="text-xs text-muted-foreground">部署集成后的应用</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/api">
                    <FileText className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">API Reference</div>
                      <div className="text-xs text-muted-foreground">查看完整API文档</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Navigation */}
          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/tools/template_generator">
                ← Template Generator
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/tools/deployment_manager">
                Deployment Manager →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}