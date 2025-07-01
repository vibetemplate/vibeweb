import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CopyButton } from '@/components/ui/copy-button';
import { 
  Terminal, 
  Download,
  ExternalLink,
  ArrowLeft,
  CheckCircle,
  Copy,
  AlertCircle,
  FileText,
  Settings,
  Zap,
  GitBranch,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cline 配置指南 - VibeCLI 2.0',
  description: 'Cline 终端管理工具详细配置指南，向后兼容，终端内项目管理。',
};

export default function ClinePage() {
  const installCommand = 'npm install -g vibe-cli-tool@latest';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/clients">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回客户端选择
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <Terminal className="h-12 w-12 text-orange-600" />
              <div>
                <h1 className="text-3xl font-bold">Cline 配置指南</h1>
                <p className="text-muted-foreground">终端内管理，向后兼容</p>
              </div>
              <Badge variant="warning" className="ml-auto">
                兼容模式
              </Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-orange-500" />
                配置概览
              </CardTitle>
              <CardDescription>
                Cline 是一个基于终端的代码管理工具，支持多版本向后兼容，适合熟悉命令行的开发者
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">5分钟</div>
                  <div className="text-sm text-muted-foreground">配置时间</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">中等</div>
                  <div className="text-sm text-muted-foreground">难度等级</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">多版本</div>
                  <div className="text-sm text-muted-foreground">兼容支持</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compatibility Notice */}
          <Card className="mb-8 border-yellow-200 dark:border-yellow-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                <Clock className="h-5 w-5" />
                版本兼容性说明
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <div className="text-sm">
                    <strong>推荐版本配置：</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• <strong>推荐版本</strong>：2025-03-26 (最稳定)</li>
                      <li>• <strong>当前版本</strong>：支持但可能有兼容性问题</li>
                      <li>• <strong>历史版本</strong>：2024年版本需要适配器</li>
                      <li>• <strong>开发版本</strong>：实验性功能，不建议生产使用</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 1: Download and Install */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <CardTitle className="text-xl">安装 Cline</CardTitle>
                  <CardDescription>从 GitHub 下载推荐版本</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Cline 是开源项目，建议使用稳定的推荐版本：
                </p>
                <Button asChild>
                  <Link href="https://github.com/saoudrizwan/claude-dev" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    下载 Cline (推荐版本)
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>安装提示：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 克隆仓库：git clone https://github.com/saoudrizwan/claude-dev.git</li>
                        <li>• 切换到推荐分支：git checkout v2025-03-26</li>
                        <li>• 安装依赖：npm install</li>
                        <li>• 构建项目：npm run build</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Install VibeCLI */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  2
                </div>
                <div>
                  <CardTitle className="text-xl">安装 VibeCLI MCP 服务器</CardTitle>
                  <CardDescription>全局安装 VibeCLI 工具包</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  打开终端（Terminal）或命令提示符，运行以下命令：
                </p>
                <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg flex items-center justify-between">
                  <code className="text-green-400 font-mono text-sm flex-1">
                    {installCommand}
                  </code>
                  <CopyButton
                    text={installCommand}
                    variant="ghost"
                    size="sm"
                    className="ml-2 text-slate-400 hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                  </CopyButton>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>安装验证：</strong>运行 vibecli-mcp-server --version 检查安装成功。
                      当前版本：v1.2.8
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Configure Cline */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  3
                </div>
                <div>
                  <CardTitle className="text-xl">配置 Cline MCP 集成</CardTitle>
                  <CardDescription>在 Cline 配置文件中添加 VibeCLI</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  在 Cline 项目目录中创建或编辑配置文件：
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">1. 创建 MCP 配置文件：</h4>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <code className="text-sm font-mono">~/.cline/mcp-servers.json</code>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">2. 添加 VibeCLI 配置：</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
{`{
  "mcpServers": {
    "vibecli": {
      "command": "npx",
      "args": ["-y", "--package=vibe-cli-tool@latest", "vibecli-mcp-server"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}`}
                    </pre>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>兼容性配置：</strong>不同版本的 Cline 配置文件位置可能不同，
                      请查阅对应版本的文档确认配置文件路径。
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Terminal Usage */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 font-bold">
                  4
                </div>
                <div>
                  <CardTitle className="text-xl">终端内使用</CardTitle>
                  <CardDescription>在 Cline 终端中调用 VibeCLI 功能</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  配置完成后，在 Cline 终端中可以直接使用 VibeCLI 命令：
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">启动 Cline 并测试：</h4>
                  <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>启动 Cline 终端环境</li>
                    <li>加载 MCP 服务器配置</li>
                    <li>验证 VibeCLI 连接状态</li>
                    <li>使用自然语言描述项目需求</li>
                    <li>查看生成的项目结构</li>
                  </ol>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">测试命令：</h4>
                  <code className="text-sm">
                    "使用 VibeCLI 创建一个 React 组件库项目"
                  </code>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    成功标志：
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Cline 终端显示 MCP 连接成功</li>
                    <li>• VibeCLI 开始项目分析</li>
                    <li>• 在终端内显示项目生成进度</li>
                    <li>• 可以通过命令行交互式配置</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Terminal Features */}
          <Card className="mb-8 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <Terminal className="h-5 w-5" />
                Cline 独特优势
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">💻 终端内管理</h4>
                  <p className="text-sm text-muted-foreground">
                    直接在终端环境中管理和生成项目，无需图形界面
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🔄 版本兼容</h4>
                  <p className="text-sm text-muted-foreground">
                    支持多个版本的向后兼容，适合不同环境部署
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">⚡ 轻量快速</h4>
                  <p className="text-sm text-muted-foreground">
                    最小化资源占用，快速启动和项目生成
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🛠️ 开发者友好</h4>
                  <p className="text-sm text-muted-foreground">
                    熟悉的命令行界面，适合有技术背景的开发者
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                准备在终端中体验？
              </h3>
              <p className="text-muted-foreground mb-6">
                Cline 为熟悉命令行的开发者提供了最直接的项目生成体验
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="https://github.com/saoudrizwan/claude-dev" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    下载 Cline
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/demo">
                    <Zap className="mr-2 h-4 w-4" />
                    体验在线Demo
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