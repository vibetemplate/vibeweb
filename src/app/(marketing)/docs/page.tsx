import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  BookOpen, 
  Terminal, 
  Zap, 
  Shield, 
  ArrowRight, 
  Download,
  Copy,
  ExternalLink,
  CheckCircle,
  Settings,
  Users,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '开发文档 - VibeCLI 2.0',
  description: 'VibeCLI 2.0完整开发文档，包含安装指南、API参考、使用教程和最佳实践。',
};

const installMethods = [
  {
    title: 'NPM 全局安装',
    description: '推荐方式，适合长期使用',
    icon: Download,
    command: 'npm install -g vibe-cli-tool@latest',
    note: '当前版本: v1.2.8'
  },
  {
    title: 'NPX 临时使用',
    description: '无需安装，即用即走',
    icon: Zap,
    command: 'npx --package=vibe-cli-tool@latest vibecli-mcp-server',
    note: '适合测试和体验'
  },
  {
    title: '源码编译',
    description: '开发者和贡献者',
    icon: Terminal,
    command: 'git clone https://github.com/vibetemplate/vibecli.git',
    note: '可自定义和调试'
  }
];

const clientConfigs = [
  {
    name: 'Claude Desktop',
    icon: MessageSquare,
    description: '原生AI对话，自然语言描述需求',
    config: `{
  "mcpServers": {
    "vibecli": {
      "command": "npx",
      "args": ["-y", "--package=vibe-cli-tool@latest", "vibecli-mcp-server"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}`
  },
  {
    name: 'Cursor IDE',
    icon: Settings,
    description: '代码编辑集成，实时生成调试',
    config: `{
  "mcpServers": {
    "vibecli": {
      "command": "npx", 
      "args": ["-y", "--package=vibe-cli-tool@latest", "vibecli-mcp-server"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}`
  }
];

const mcpTools = [
  {
    name: 'project_analyzer',
    title: '项目分析器',
    description: '智能分析用户需求，推荐最适合的技术栈和架构',
    features: ['智能识别项目类型', '技术栈推荐算法', '复杂度评估分析', '风险预警机制']
  },
  {
    name: 'template_generator', 
    title: '模板生成器',
    description: '基于分析结果生成完整项目模板',
    features: ['完整项目结构生成', '配置文件自动创建', '基础代码模板', '依赖管理配置']
  },
  {
    name: 'feature_composer',
    title: '功能合成器',
    description: '动态添加和组合复杂功能模块', 
    features: ['功能模块智能组合', '现有代码无缝集成', '配置文件自动更新', '测试用例生成']
  },
  {
    name: 'deployment_manager',
    title: '部署管理器',
    description: '智能部署配置和多平台发布',
    features: ['多平台部署支持', 'CI/CD流水线配置', '环境变量管理', '监控日志设置']
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              开发文档
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-text">VibeCLI 2.0</span> 使用文档
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              从安装到使用，完整的VibeCLI开发指南。推荐先查看客户端配置，然后体验在线Demo
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-16">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">客户端配置</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    选择AI客户端，获取详细配置指南
                  </p>
                  <Button asChild>
                    <Link href="/clients">
                      <Settings className="mr-2 h-4 w-4" />
                      选择客户端
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">在线体验</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    无需安装，直接体验VibeCLI功能
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/demo">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      体验Demo
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <ExternalLink className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">GitHub 仓库</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    查看源码，提出问题和建议
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Installation Methods */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">🚀 三种安装方式</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {installMethods.map((method, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <method.icon className="h-6 w-6 text-blue-600" />
                      <div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg mb-3">
                      <code className="text-sm font-mono break-all">{method.command}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{method.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-16" />

          {/* Client Configuration */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">⚙️ 客户端配置</h2>
            <p className="text-center text-muted-foreground mb-8">
              在你的AI客户端中配置VibeCLI MCP服务器
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {clientConfigs.map((client, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <client.icon className="h-6 w-6 text-blue-600" />
                      <div>
                        <CardTitle>{client.name}</CardTitle>
                        <CardDescription>{client.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-xs font-mono whitespace-pre-wrap">
                        {client.config}
                      </pre>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm">
                        <Copy className="h-3 w-3 mr-1" />
                        复制配置
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-16" />

          {/* MCP Tools */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">🛠️ 四大MCP工具</h2>
            <p className="text-center text-muted-foreground mb-8">
              配置完成后，即可使用以下AI驱动工具
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {mcpTools.map((tool, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div>
                      <Badge variant="outline" className="mb-2 font-mono text-xs">
                        {tool.name}
                      </Badge>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-16" />

          {/* Quick Start Example */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">💡 快速开始示例</h2>
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">创建你的第一个项目</h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground mb-2">1. 在AI客户端中输入：</p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm">
                      "我想创建一个电商网站，包含用户认证、商品管理、购物车和支付功能"
                    </div>
                  </div>
                  <ArrowRight className="mx-auto h-5 w-5 text-muted-foreground" />
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground mb-2">2. VibeCLI 自动分析并生成：</p>
                    <ul className="space-y-1 text-sm">
                      <li>• 项目类型：E-commerce Platform</li>
                      <li>• 技术栈：Next.js + Prisma + Stripe</li>
                      <li>• 预计时间：45分钟</li>
                      <li>• 完整代码结构：150+ 文件</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                准备体验AI驱动开发？
              </h3>
              <p className="text-muted-foreground mb-6">
                按照上述步骤完成安装和配置，开始你的零门槛开发之旅
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="/demo">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    在线体验Demo
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    GitHub仓库
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.npmjs.com/package/vibe-cli-tool" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    NPM包
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}