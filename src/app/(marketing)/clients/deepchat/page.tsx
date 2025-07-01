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
  Brain,
  Users,
  Layers,
  Image
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'DeepChat 配置指南 - VibeCLI 2.0',
  description: 'DeepChat 深度讨论客户端详细配置指南，架构设计，技术深度分析。',
};

export default function DeepChatPage() {
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
              <MessageSquare className="h-12 w-12 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold">DeepChat 配置指南</h1>
                <p className="text-muted-foreground">深度讨论，架构设计</p>
              </div>
              <Badge variant="success" className="ml-auto">
                技术支持
              </Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-500" />
                配置概览
              </CardTitle>
              <CardDescription>
                DeepChat 专注于深度技术讨论和架构设计，通过AI助手进行复杂项目的系统分析和设计
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">5分钟</div>
                  <div className="text-sm text-muted-foreground">配置时间</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">简单</div>
                  <div className="text-sm text-muted-foreground">难度等级</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">深度分析</div>
                  <div className="text-sm text-muted-foreground">专业特色</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DeepChat Features */}
          <Card className="mb-8 border-indigo-200 dark:border-indigo-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                <Layers className="h-5 w-5" />
                DeepChat 专业特性
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">🏗️ 架构设计</h4>
                  <p className="text-sm text-muted-foreground">深度分析系统架构，提供专业设计建议</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">💭 技术讨论</h4>
                  <p className="text-sm text-muted-foreground">多轮深度对话，探讨技术细节和实现方案</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">📋 需求分析</h4>
                  <p className="text-sm text-muted-foreground">系统化需求梳理和功能点拆解</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🔍 代码审查</h4>
                  <p className="text-sm text-muted-foreground">智能代码分析和优化建议</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 1: Access DeepChat */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <CardTitle className="text-xl">访问 DeepChat 平台</CardTitle>
                  <CardDescription>通过支持MCP协议的聊天客户端使用</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  DeepChat 是基于MCP协议的专业技术讨论平台，可以通过多种客户端访问：
                </p>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-indigo-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>支持的客户端：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Claude Desktop (推荐)</li>
                        <li>• Cursor IDE (代码集成)</li>
                        <li>• Cherry Studio (可视化)</li>
                        <li>• 其他MCP兼容客户端</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Image className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>访问说明：</strong>DeepChat 通过配置特定的对话模式和专业提示词来实现深度技术讨论。
                      详细的配置指南正在准备中。
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
                  <CardDescription>为深度分析提供技术支持</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  安装 VibeCLI 以支持 DeepChat 的深度技术分析功能：
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
                      <strong>深度分析支持：</strong>VibeCLI 为 DeepChat 提供项目分析、架构建议和代码生成等后端支持。
                      当前版本：v1.2.8
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Configure for Deep Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  3
                </div>
                <div>
                  <CardTitle className="text-xl">配置深度分析模式</CardTitle>
                  <CardDescription>在选择的客户端中配置DeepChat模式</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  在你选择的MCP客户端中添加VibeCLI配置并启用深度分析模式：
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">基础 MCP 配置：</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
{`{
  "mcpServers": {
    "vibecli-deepchat": {
      "command": "npx",
      "args": ["-y", "--package=vibe-cli-tool@latest", "vibecli-mcp-server"],
      "env": {
        "NODE_ENV": "production",
        "DEEPCHAT_MODE": "true",
        "ANALYSIS_DEPTH": "maximum"
      }
    }
  }
}`}
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Brain className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>深度模式特性：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 启用详细的架构分析</li>
                        <li>• 提供多种技术方案对比</li>
                        <li>• 深度代码质量评估</li>
                        <li>• 性能优化建议分析</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Deep Discussion Usage */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 font-bold">
                  4
                </div>
                <div>
                  <CardTitle className="text-xl">开始深度技术讨论</CardTitle>
                  <CardDescription>使用专业的技术讨论方式</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  在配置完成的客户端中开始深度技术讨论：
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">深度讨论示例：</h4>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-3">
                    <div>
                      <strong className="text-sm">架构设计讨论：</strong>
                      <code className="block text-sm mt-1">
                        "我需要设计一个高并发的电商系统，请从架构、数据库、缓存、消息队列等多个维度进行深度分析"
                      </code>
                    </div>
                    <div>
                      <strong className="text-sm">技术选型分析：</strong>
                      <code className="block text-sm mt-1">
                        "对比 React、Vue、Angular 三种前端框架在大型企业项目中的优劣势，考虑团队、性能、生态等因素"
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    深度分析特色：
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• 多轮对话深入探讨技术细节</li>
                    <li>• 提供多种解决方案的对比分析</li>
                    <li>• 结合实际项目经验给出建议</li>
                    <li>• 生成详细的技术文档和设计图</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Professional Use Cases */}
          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                <Settings className="h-5 w-5" />
                专业应用场景
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">🏗️ 系统架构设计</h4>
                  <p className="text-sm text-muted-foreground">
                    大型系统的架构设计、微服务拆分、技术选型分析
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">📊 性能优化</h4>
                  <p className="text-sm text-muted-foreground">
                    代码性能分析、数据库优化、系统瓶颈诊断
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🔍 代码审查</h4>
                  <p className="text-sm text-muted-foreground">
                    代码质量评估、最佳实践建议、重构方案设计
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">📝 技术文档</h4>
                  <p className="text-sm text-muted-foreground">
                    技术方案文档、API设计文档、部署手册编写
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon */}
          <Card className="mb-8 border-yellow-200 dark:border-yellow-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                <Image className="h-5 w-5" />
                详细配置指南开发中
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                我们正在开发专门的 DeepChat 深度讨论配置指南，将包括：
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 专业的技术讨论提示词模板</li>
                <li>• 深度分析模式的详细配置</li>
                <li>• 多种客户端的最佳实践配置</li>
                <li>• 实际技术讨论案例和演示</li>
              </ul>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                准备开始深度技术讨论？
              </h3>
              <p className="text-muted-foreground mb-6">
                先体验已完善的客户端配置，或尝试在线Demo了解深度分析功能
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