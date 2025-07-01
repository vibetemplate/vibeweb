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
  Zap,
  Image
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chatbox 配置指南 - VibeCLI 2.0',
  description: 'Chatbox 桌面客户端详细配置指南，包含下载、安装、配置和使用说明。',
};

export default function ChatboxPage() {
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
              <MessageSquare className="h-12 w-12 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold">Chatbox 配置指南</h1>
                <p className="text-muted-foreground">跨平台桌面AI聊天客户端</p>
              </div>
              <Badge variant="success" className="ml-auto">
                桌面客户端
              </Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>配置概览</CardTitle>
              <CardDescription>
                Chatbox 是一个简洁易用的桌面AI聊天应用，支持多种AI模型，界面友好，非常适合非程序员用户
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
                  <div className="text-2xl font-bold text-purple-600 mb-1">全平台</div>
                  <div className="text-sm text-muted-foreground">支持系统</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 1: Download */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <CardTitle className="text-xl">下载并安装 Chatbox</CardTitle>
                  <CardDescription>从官方网站下载适合你操作系统的版本</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Chatbox 支持 Windows、macOS 和 Linux 三大平台，提供现代化的聊天界面：
                </p>
                <Button asChild>
                  <Link href="https://chatbox.app/" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    下载 Chatbox
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>特色功能：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 简洁现代的用户界面</li>
                        <li>• 支持多种AI模型切换</li>
                        <li>• 对话历史管理</li>
                        <li>• 跨设备数据同步</li>
                        <li>• MCP协议原生支持</li>
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
                      <strong>安装成功标志：</strong>看到 "installed successfully" 信息即表示安装完成。
                      当前版本：v1.2.8
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Configure MCP */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  3
                </div>
                <div>
                  <CardTitle className="text-xl">在 Chatbox 中配置 MCP 服务器</CardTitle>
                  <CardDescription>通过图形界面添加 VibeCLI MCP 服务器</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Image className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>配置指南准备中：</strong>我们正在准备详细的图文配置指南，包含每一步的截图说明。
                      敬请期待！
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">配置步骤预览：</h4>
                  <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>打开 Chatbox 应用</li>
                    <li>进入设置 (Settings) 页面</li>
                    <li>找到 MCP 服务器配置选项</li>
                    <li>添加新的 MCP 服务器</li>
                    <li>填入 VibeCLI 服务器信息</li>
                    <li>测试连接并保存配置</li>
                  </ol>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>服务器配置信息：</strong>
                      <ul className="mt-2 space-y-1 font-mono text-xs">
                        <li>命令: npx</li>
                        <li>参数: -y --package=vibe-cli-tool@latest vibecli-mcp-server</li>
                        <li>环境: NODE_ENV=production</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Verify */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  4
                </div>
                <div>
                  <CardTitle className="text-xl">验证配置</CardTitle>
                  <CardDescription>测试 VibeCLI 是否正常工作</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  配置完成后，在 Chatbox 中测试 VibeCLI 是否正常工作：
                </p>
                
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">测试命令：</h4>
                  <code className="text-sm">
                    "我想创建一个个人博客网站，包含文章发布和评论功能"
                  </code>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    成功标志：
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Chatbox 识别到 VibeCLI MCP 服务器</li>
                    <li>• 开始项目需求分析</li>
                    <li>• 提供技术栈建议</li>
                    <li>• 询问项目保存路径</li>
                    <li>• 开始生成项目文件</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Coming Soon */}
          <Card className="mb-8 border-yellow-200 dark:border-yellow-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                <Image className="h-5 w-5" />
                详细图文指南即将推出
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                我们正在制作包含每一步截图的详细配置指南，让非程序员用户也能轻松完成配置。
                图文指南将包括：
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Chatbox 界面介绍和基本操作</li>
                <li>• MCP 服务器配置的详细步骤截图</li>
                <li>• 常见问题的解决方案</li>
                <li>• 实际使用案例演示</li>
              </ul>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                期待详细指南？
              </h3>
              <p className="text-muted-foreground mb-6">
                可以先尝试其他已完善的客户端，或体验在线Demo了解VibeCLI功能
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="/clients/claude-desktop">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Claude Desktop 配置
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