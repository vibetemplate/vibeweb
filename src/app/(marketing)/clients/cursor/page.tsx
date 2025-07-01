import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CopyButton } from '@/components/ui/copy-button';
import { 
  Settings, 
  Download,
  ExternalLink,
  ArrowLeft,
  CheckCircle,
  Copy,
  AlertCircle,
  FileText,
  Code,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cursor IDE 配置指南 - VibeCLI 2.0',
  description: 'Cursor IDE 详细配置指南，包含下载、安装、配置和使用说明。',
};

const configSteps = [
  {
    step: 1,
    title: '下载并安装 Cursor IDE',
    description: '下载这个专为AI开发设计的编辑器',
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
    title: '创建 MCP 配置文件',
    description: '在项目根目录创建 .cursor/mcp.json 配置',
    action: 'config'
  },
  {
    step: 4,
    title: '验证配置',
    description: '测试 VibeCLI 是否正常工作',
    action: 'verify'
  }
];

export default function CursorPage() {
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
              <Settings className="h-12 w-12 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold">Cursor IDE 配置指南</h1>
                <p className="text-muted-foreground">专为AI开发设计的代码编辑器</p>
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
                Cursor IDE 集成了强大的AI能力，配合 VibeCLI 可以实现代码编辑和项目生成的无缝体验
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">3分钟</div>
                  <div className="text-sm text-muted-foreground">配置时间</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">简单</div>
                  <div className="text-sm text-muted-foreground">难度等级</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">完全支持</div>
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
                        Cursor 是基于 VS Code 构建的AI代码编辑器，提供了强大的AI编程辅助功能：
                      </p>
                      <Button asChild>
                        <Link href="https://cursor.sh/" target="_blank">
                          <Download className="mr-2 h-4 w-4" />
                          下载 Cursor IDE
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <div className="text-sm">
                            <strong>特色功能：</strong>
                            <ul className="mt-2 space-y-1">
                              <li>• AI 代码补全和生成</li>
                              <li>• 自然语言编程</li>
                              <li>• 智能重构和调试</li>
                              <li>• 与现有 VS Code 扩展兼容</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.action === 'install' && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        打开终端（Terminal）或 Cursor 内置终端，运行以下命令：
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
                            <strong>安装提示：</strong>在 Cursor 中可以使用 Ctrl+` (或 Cmd+`) 打开内置终端运行命令。
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.action === 'config' && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        在你的项目根目录创建 MCP 配置文件：
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-2">1. 创建配置目录和文件：</h4>
                          <div className="bg-slate-900 dark:bg-slate-800 p-3 rounded text-sm font-mono text-green-400">
                            mkdir .cursor<br/>
                            touch .cursor/mcp.json
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">2. 配置文件内容：</h4>
                          <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-xs text-slate-400">.cursor/mcp.json</span>
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
                            <strong>注意：</strong>配置文件需要在项目根目录创建。如果是新项目，建议先创建一个空的文件夹作为工作目录。
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.action === 'verify' && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        重启 Cursor IDE 后，测试 VibeCLI 是否正常工作：
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-2">测试方法：</h4>
                          <ol className="text-sm space-y-2 list-decimal list-inside">
                            <li>在 Cursor 中打开你的工作目录</li>
                            <li>使用 Ctrl+L (或 Cmd+L) 打开 AI 聊天</li>
                            <li>输入测试命令</li>
                          </ol>
                        </div>
                        
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">测试命令：</h4>
                          <code className="text-sm">
                            "使用 VibeCLI 创建一个 Todo 应用，包含添加、删除和标记完成功能"
                          </code>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            成功标志：
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Cursor 识别到 VibeCLI MCP 服务器</li>
                            <li>• 开始项目分析和技术栈推荐</li>
                            <li>• 生成项目文件结构</li>
                            <li>• 可以在文件树中看到生成的代码</li>
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

          {/* Cursor Specific Tips */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Cursor 专属技巧
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">快捷键：</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded">
                      <strong>Ctrl+L (Cmd+L):</strong> 打开AI聊天
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded">
                      <strong>Ctrl+K (Cmd+K):</strong> 行内AI编辑
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded">
                      <strong>Ctrl+` (Cmd+`):</strong> 打开终端
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded">
                      <strong>Ctrl+Shift+L:</strong> 全局AI聊天
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">最佳实践：</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 使用 @workspace 标签让AI了解整个项目上下文</li>
                    <li>• 结合 VibeCLI 生成项目骨架，用 Cursor AI 完善细节</li>
                    <li>• 利用 Cursor 的代码预览功能查看生成效果</li>
                    <li>• 使用版本控制（Git）跟踪 AI 生成的代码变更</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                配置完成！🚀
              </h3>
              <p className="text-muted-foreground mb-6">
                现在你拥有了最强大的AI开发环境：Cursor IDE + VibeCLI
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