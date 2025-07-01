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
  Zap,
  Image,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cherry Studio 配置指南 - VibeCLI 2.0',
  description: 'Cherry Studio 详细配置指南，内置MCP支持，可视化界面操作。',
};

export default function CherryStudioPage() {
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
              <Settings className="h-12 w-12 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold">Cherry Studio 配置指南</h1>
                <p className="text-muted-foreground">可视化界面，内置MCP支持</p>
              </div>
              <Badge variant="success" className="ml-auto">
                直接可用
              </Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                配置概览
              </CardTitle>
              <CardDescription>
                Cherry Studio 是一个现代化的AI助手界面，内置了对MCP协议的原生支持，配置最简单
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">1分钟</div>
                  <div className="text-sm text-muted-foreground">配置时间</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">最简单</div>
                  <div className="text-sm text-muted-foreground">难度等级</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">内置支持</div>
                  <div className="text-sm text-muted-foreground">MCP协议</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advantages */}
          <Card className="mb-8 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                Cherry Studio 的优势
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">✨ 开箱即用</h4>
                  <p className="text-sm text-muted-foreground">内置MCP协议支持，无需复杂配置</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🎨 可视化界面</h4>
                  <p className="text-sm text-muted-foreground">拖拽操作，图形化配置界面</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">👀 项目预览</h4>
                  <p className="text-sm text-muted-foreground">实时预览生成的项目结构</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🔄 自动更新</h4>
                  <p className="text-sm text-muted-foreground">自动检测和更新MCP服务器</p>
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
                  <CardTitle className="text-xl">下载并安装 Cherry Studio</CardTitle>
                  <CardDescription>从 GitHub 获取最新版本</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Cherry Studio 是一个开源项目，支持 Windows、macOS 和 Linux：
                </p>
                <Button asChild>
                  <Link href="https://github.com/kangfenmao/cherry-studio" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    下载 Cherry Studio
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>下载提示：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 访问 GitHub Releases 页面</li>
                        <li>• 选择适合你操作系统的安装包</li>
                        <li>• Windows: .exe 安装程序</li>
                        <li>• macOS: .dmg 磁盘镜像</li>
                        <li>• Linux: .AppImage 或 .deb 包</li>
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
                      <strong>安装完成：</strong>Cherry Studio 会自动检测系统中已安装的MCP服务器，
                      包括我们刚刚安装的 VibeCLI。
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Auto Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 font-bold">
                  ✨
                </div>
                <div>
                  <CardTitle className="text-xl">自动配置 MCP 服务器</CardTitle>
                  <CardDescription>Cherry Studio 自动检测并配置 VibeCLI</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>自动化优势：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 启动时自动扫描已安装的MCP服务器</li>
                        <li>• 自动配置连接参数</li>
                        <li>• 提供可视化的服务器状态显示</li>
                        <li>• 支持一键启用/禁用服务器</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Image className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>图文指南制作中：</strong>我们正在制作详细的界面操作指南，
                      包含Cherry Studio界面的每个功能点的说明。
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Start Using */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 font-bold">
                  🚀
                </div>
                <div>
                  <CardTitle className="text-xl">开始使用</CardTitle>
                  <CardDescription>在可视化界面中创建你的第一个项目</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Cherry Studio 提供了友好的图形界面来使用 VibeCLI：
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">使用步骤：</h4>
                  <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>打开 Cherry Studio 应用</li>
                    <li>在MCP服务器列表中找到 VibeCLI</li>
                    <li>点击启用按钮激活服务器</li>
                    <li>在聊天界面中描述你的项目需求</li>
                    <li>使用项目预览功能查看生成结果</li>
                    <li>确认后保存项目到指定目录</li>
                  </ol>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">测试命令：</h4>
                  <code className="text-sm">
                    "创建一个在线商店，包含商品展示、购物车和用户管理功能"
                  </code>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    成功标志：
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Cherry Studio 界面显示 VibeCLI 已连接</li>
                    <li>• 项目分析面板显示技术栈建议</li>
                    <li>• 项目预览区域显示文件结构</li>
                    <li>• 可以实时查看代码生成进度</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Features Highlight */}
          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                <Settings className="h-5 w-5" />
                Cherry Studio 独特功能
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">🎨 可视化配置</h4>
                  <p className="text-sm text-muted-foreground">
                    通过拖拽界面配置项目参数，无需编写配置文件
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">📁 项目管理</h4>
                  <p className="text-sm text-muted-foreground">
                    内置项目管理器，可以保存和管理多个生成的项目
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🔄 实时预览</h4>
                  <p className="text-sm text-muted-foreground">
                    生成过程中实时显示项目结构和代码片段
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🎯 智能建议</h4>
                  <p className="text-sm text-muted-foreground">
                    基于项目类型提供智能的配置建议和优化方案
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                准备体验最简单的配置方式？
              </h3>
              <p className="text-muted-foreground mb-6">
                Cherry Studio 让MCP配置变得像安装普通软件一样简单
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="https://github.com/kangfenmao/cherry-studio" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    下载 Cherry Studio
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