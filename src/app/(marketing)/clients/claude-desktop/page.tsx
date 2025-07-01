import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CopyButton } from '@/components/ui/copy-button';
import { 
  MessageSquare, 
  Download,
  ExternalLink,
  ArrowLeft,
  CheckCircle,
  Copy,
  AlertCircle,
  FileText,
  Settings,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Claude Desktop 配置指南 - VibeCLI 2.0',
  description: 'Claude Desktop 详细配置指南，包含下载、安装、配置和使用说明。',
};

const configSteps = [
  {
    step: 1,
    title: '下载并安装 Claude Desktop',
    description: '从官方网站下载适合你操作系统的版本',
    action: 'download'
  },
  {
    step: 2, 
    title: '安装 VibeCLI MCP 服务器',
    description: '全局安装 VibeCLI 工具包',
    action: 'install'
  },
  {
    step: 3,
    title: '配置 MCP 服务器',
    description: '在 Claude Desktop 中添加 VibeCLI 配置',
    action: 'config'
  },
  {
    step: 4,
    title: '验证配置',
    description: '测试 VibeCLI 是否正常工作',
    action: 'verify'
  }
];

const troubleshooting = [
  {
    problem: '配置文件找不到',
    solution: 'macOS: ~/Library/Application Support/Claude/claude_desktop_config.json\nWindows: %APPDATA%\\Claude\\claude_desktop_config.json'
  },
  {
    problem: 'MCP 服务器无法启动',
    solution: '确保已全局安装 vibe-cli-tool，运行: npm list -g vibe-cli-tool'
  },
  {
    problem: '权限错误',
    solution: 'macOS/Linux 用户可能需要使用 sudo 安装: sudo npm install -g vibe-cli-tool'
  }
];

export default function ClaudeDesktopPage() {
  const installCommand = 'npm install -g vibe-cli-tool@latest';
  const configJson = `{
  "mcpServers": {
    "vibecli": {
      "command": "npx",
      "args": ["-y", "--package=vibe-cli-tool@latest", "vibecli-mcp-server"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}`;

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
              <MessageSquare className="h-12 w-12 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold">Claude Desktop 配置指南</h1>
                <p className="text-muted-foreground">最简单直观的AI客户端配置</p>
              </div>
              <Badge variant="success" className="ml-auto">
                推荐使用
              </Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>配置概览</CardTitle>
              <CardDescription>
                Claude Desktop 是使用 VibeCLI 最简单的方式，通过自然语言对话即可创建完整项目
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2分钟</div>
                  <div className="text-sm text-muted-foreground">配置时间</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">简单</div>
                  <div className="text-sm text-muted-foreground">难度等级</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">稳定</div>
                  <div className="text-sm text-muted-foreground">支持状态</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Steps */}
          <div className="space-y-8">
            {configSteps.map((step, index) => (
              <Card key={step.step} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {step.action === 'download' && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        访问 Claude Desktop 官方下载页面，选择适合你操作系统的版本：
                      </p>
                      <Button asChild>
                        <Link href="https://claude.ai/download" target="_blank">
                          <Download className="mr-2 h-4 w-4" />
                          下载 Claude Desktop
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <div className="text-sm">
                            <strong>提示：</strong>下载完成后，按照正常软件安装流程完成安装。
                            macOS 用户可能需要在系统偏好设置的安全性与隐私中允许应用运行。
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.action === 'install' && (
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
                            <strong>安装成功标志：</strong>看到 "installed successfully" 信息即表示安装完成。
                            当前版本：v1.2.8
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.action === 'config' && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        找到 Claude Desktop 配置文件并添加 VibeCLI MCP 服务器配置：
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-2">配置文件位置：</h4>
                          <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm font-mono">
                            <div><strong>macOS:</strong> ~/Library/Application Support/Claude/claude_desktop_config.json</div>
                            <div><strong>Windows:</strong> %APPDATA%\\Claude\\claude_desktop_config.json</div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">配置内容：</h4>
                          <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-xs text-slate-400">claude_desktop_config.json</span>
                              <CopyButton
                                text={configJson}
                                variant="ghost"
                                size="sm"
                                className="text-slate-400 hover:text-white"
                              >
                                <Copy className="h-3 w-3" />
                              </CopyButton>
                            </div>
                            <pre className="text-sm text-green-400 overflow-x-auto">
                              {configJson}
                            </pre>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                          <div className="text-sm">
                            <strong>重要：</strong>配置完成后需要重启 Claude Desktop 应用才能生效。
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.action === 'verify' && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        重启 Claude Desktop 后，测试 VibeCLI 是否正常工作：
                      </p>
                      
                      <div className="space-y-3">
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">测试命令：</h4>
                          <code className="text-sm">
                            "我想创建一个简单的博客网站，包含文章列表和详情页"
                          </code>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            成功标志：
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Claude 理解你的需求并开始分析项目</li>
                            <li>• 显示技术栈推荐（如 Next.js + TypeScript）</li>
                            <li>• 询问项目路径和具体配置选项</li>
                            <li>• 开始生成项目文件结构</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Troubleshooting */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                常见问题解决
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-medium text-sm mb-1">{item.problem}</h4>
                    <pre className="text-xs text-muted-foreground whitespace-pre-wrap">{item.solution}</pre>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                配置完成！🎉
              </h3>
              <p className="text-muted-foreground mb-6">
                现在你可以在 Claude Desktop 中用自然语言创建任何 Web 项目了
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="/demo">
                    <Zap className="mr-2 h-4 w-4" />
                    体验在线Demo
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs">
                    <FileText className="mr-2 h-4 w-4" />
                    查看更多文档
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