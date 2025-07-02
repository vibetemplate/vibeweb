import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  Code, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Brain,
  Target,
  Folder,
  Download
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Template Generator - VibeCLI MCP Tools',
  description: '智能模板生成器文档 - 基于项目分析结果生成完整的项目代码模板和配置文件',
  keywords: ['模板生成', '代码生成', '项目脚手架', '自动化开发', 'MCP工具'],
};

export default function TemplateGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Settings className="mr-2 h-4 w-4" />
              MCP Tool
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Template Generator
              <span className="gradient-text"> 智能模板生成器</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              基于项目分析结果生成完整的项目代码模板，包含最佳实践的项目结构、配置文件和核心代码。
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">基础用法：</p>
                  <code className="text-sm">
                    template_generator(analysis_result, project_name="my-app", target_directory="./projects")
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo">
                      <Settings className="mr-2 h-4 w-4" />
                      在线体验
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/tools/project_analyzer">
                      <Brain className="mr-2 h-4 w-4" />
                      项目分析器
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
{`template_generator(
  analysis_result: ProjectAnalysisResult,
  project_name: string,
  target_directory?: string,
  customizations?: {
    ui_framework?: string,
    css_framework?: string,
    auth_provider?: string,
    database_config?: object,
    deployment_target?: string
  }
) -> TemplateGenerationResult`}
                  </pre>
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
                      <h5 className="font-medium">analysis_result</h5>
                      <p className="text-sm text-muted-foreground">项目分析结果 - 来自 project_analyzer 的输出</p>
                      <Badge variant="outline" className="mt-1">ProjectAnalysisResult</Badge>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-medium">project_name</h5>
                      <p className="text-sm text-muted-foreground">项目名称 - 将用作目录名和包名</p>
                      <Badge variant="outline" className="mt-1">string</Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">可选参数</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">target_directory</h5>
                      <p className="text-sm text-muted-foreground">目标目录 - 项目生成位置，默认为当前目录</p>
                      <Badge variant="outline" className="mt-1">string</Badge>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">customizations</h5>
                      <p className="text-sm text-muted-foreground">自定义配置 - 覆盖默认的技术栈选择</p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Badge variant="outline">ui_framework</Badge>
                        <Badge variant="outline">css_framework</Badge>
                        <Badge variant="outline">auth_provider</Badge>
                        <Badge variant="outline">database_config</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Generated Structure */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Folder className="h-5 w-5" />
                生成的项目结构
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950 text-green-400 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`my-app/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (auth)/             # 认证相关页面
│   │   ├── (dashboard)/        # 仪表板页面
│   │   ├── api/                # API路由
│   │   ├── globals.css         # 全局样式
│   │   └── layout.tsx          # 根布局
│   ├── components/             # React组件
│   │   ├── ui/                 # 基础UI组件
│   │   ├── forms/              # 表单组件
│   │   └── layout/             # 布局组件
│   ├── lib/                    # 工具库
│   │   ├── auth.ts             # 认证逻辑
│   │   ├── db.ts               # 数据库连接
│   │   └── utils.ts            # 工具函数
│   └── types/                  # TypeScript类型定义
├── prisma/                     # 数据库Schema
│   ├── schema.prisma
│   └── migrations/
├── public/                     # 静态资源
├── package.json               # 项目配置
├── tailwind.config.js         # Tailwind配置
├── next.config.js             # Next.js配置
├── .env.example               # 环境变量示例
└── README.md                  # 项目文档`}
                </pre>
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
  success: boolean,              // 生成是否成功
  project_path: string,          // 项目完整路径
  generated_files: string[],     // 生成的文件列表
  template_used: string,         // 使用的模板名称
  tech_stack: {                  // 实际使用的技术栈
    frontend: string[],
    backend: string[],
    database: string,
    styling: string[]
  },
  setup_instructions: string[],  // 安装和配置指令
  next_steps: string[],          // 建议的下一步操作
  estimated_setup_time: string, // 预计配置时间
  documentation_links: string[] // 相关文档链接
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Template Types */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>支持的模板类型</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    电商平台 (ecommerce)
                  </h5>
                  <p className="text-sm text-muted-foreground mb-2">包含商品管理、购物车、支付集成</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">Next.js</Badge>
                    <Badge variant="secondary" className="text-xs">Stripe</Badge>
                    <Badge variant="secondary" className="text-xs">Prisma</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-600" />
                    SaaS应用 (saas)
                  </h5>
                  <p className="text-sm text-muted-foreground mb-2">多租户架构、订阅计费、仪表板</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">多租户</Badge>
                    <Badge variant="secondary" className="text-xs">计费</Badge>
                    <Badge variant="secondary" className="text-xs">分析</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-green-600" />
                    内容管理 (blog)
                  </h5>
                  <p className="text-sm text-muted-foreground mb-2">博客系统、CMS、SEO优化</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">MDX</Badge>
                    <Badge variant="secondary" className="text-xs">SEO</Badge>
                    <Badge variant="secondary" className="text-xs">CMS</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Settings className="h-4 w-4 text-orange-600" />
                    管理后台 (dashboard)
                  </h5>
                  <p className="text-sm text-muted-foreground mb-2">数据可视化、用户管理、权限控制</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">Charts</Badge>
                    <Badge variant="secondary" className="text-xs">RBAC</Badge>
                    <Badge variant="secondary" className="text-xs">Admin</Badge>
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
                    <Target className="h-4 w-4 text-orange-500" />
                    基础模板生成
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 先分析项目
analysis = project_analyzer(
  description="电商平台",
  requirements=["用户认证", "商品管理", "支付"]
)

# 生成模板
result = template_generator(
  analysis_result=analysis,
  project_name="my-ecommerce",
  target_directory="./projects"
)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Settings className="h-4 w-4 text-blue-500" />
                    自定义配置生成
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`template_generator(
  analysis_result=analysis,
  project_name="custom-saas",
  customizations={
    "ui_framework": "antd",
    "css_framework": "styled-components",
    "auth_provider": "auth0",
    "database_config": {
      "provider": "mysql",
      "connection_pooling": true
    },
    "deployment_target": "aws"
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
                    <h5 className="font-medium">确保分析结果质量</h5>
                    <p className="text-sm text-muted-foreground">使用高置信度的项目分析结果，避免基于不准确的分析生成模板</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">选择合适的项目名称</h5>
                    <p className="text-sm text-muted-foreground">使用有意义的项目名称，遵循命名规范（小写、连字符分隔）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">谨慎使用自定义配置</h5>
                    <p className="text-sm text-muted-foreground">只在必要时覆盖默认配置，保持技术栈的一致性和兼容性</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">检查目标目录</h5>
                    <p className="text-sm text-muted-foreground">确保目标目录存在且有写入权限，避免重名项目覆盖</p>
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
                  <h5 className="font-medium text-orange-600 mb-2">模板生成失败</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：目标目录权限不足或磁盘空间不够</p>
                  <p className="text-sm"><strong>解决方案：</strong> 检查目录权限，确保有足够的磁盘空间</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">依赖冲突</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：自定义配置导致的包版本冲突</p>
                  <p className="text-sm"><strong>解决方案：</strong> 使用推荐的默认配置，或检查包兼容性</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">项目无法启动</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：环境变量未配置或数据库连接问题</p>
                  <p className="text-sm"><strong>解决方案：</strong> 按照 setup_instructions 完成环境配置</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Tools */}
          <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关工具</CardTitle>
              <CardDescription>
                生成模板后，可以使用以下工具继续开发和部署
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/feature_composer">
                    <Code className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Feature Composer</div>
                      <div className="text-xs text-muted-foreground">添加更多功能模块</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/deployment_manager">
                    <Zap className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Deployment Manager</div>
                      <div className="text-xs text-muted-foreground">部署到生产环境</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/project_analyzer">
                    <Brain className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Project Analyzer</div>
                      <div className="text-xs text-muted-foreground">重新分析项目需求</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Navigation */}
          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/tools/project_analyzer">
                ← Project Analyzer
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/tools/feature_composer">
                Feature Composer →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}