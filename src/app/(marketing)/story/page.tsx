import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Lightbulb, 
  Code,
  Zap,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Brain,
  Puzzle,
  Rocket,
  Clock,
  Target,
  Users,
  BookOpen,
  Github
} from 'lucide-react';

export const metadata: Metadata = {
  title: '项目起源故事 - VibeCLI 2.0',
  description: '从Anthropic DXT的AI友好设计理念到VibeCLI的Web开发革命，一个关于技术创新和效率突破的真实故事。',
  keywords: 'VibeCLI起源,DXT启发,AI友好开发,Web开发工具,技术创新故事',
};

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              项目起源故事
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              从<span className="gradient-text">DXT启发</span>到VibeCLI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              如何将Anthropic DXT的AI友好设计理念转化为Web开发的效率革命
            </p>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Problem Discovery */}
                <div className="relative flex items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 text-red-600 font-bold">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                        痛点发现：AI协作的困境
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          开发第7个项目时的深夜2点，我再次面对着同样的Prisma配置。更让人抓狂的是，
                          每次想让AI帮我扩展功能时，都得把整个项目结构解释一遍...
                        </p>
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">传统模板的AI协作问题：</h4>
                          <ul className="text-sm space-y-1">
                            <li>• AI搞不清楚哪些是模板代码，哪些是业务代码</li>
                            <li>• 生成的代码总是跟现有架构不兼容</li>
                            <li>• 每次都要重新解释项目结构和设计理念</li>
                            <li>• 模板太死板，定制功能需要大动干戈</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Inspiration Moment */}
                <div className="relative flex items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 font-bold">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                        灵感火花：DXT的AI友好设计
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          无意中读到Anthropic工程团队的《Desktop Extensions》文章，
                          DXT项目的设计理念瞬间点亮了我的思路！
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <Brain className="h-4 w-4 text-blue-600" />
                              DXT的AI友好核心
                            </h4>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>标准化结构</strong>：manifest.json让AI准确理解扩展能力</li>
                              <li>• <strong>模块化拆分</strong>：每个功能独立，AI可精确操作</li>
                              <li>• <strong>清晰文档</strong>：标准化描述让AI理解架构</li>
                              <li>• <strong>分步执行</strong>：逐步添加功能，不破坏整体</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <Target className="h-4 w-4 text-green-600" />
                              关键启发
                            </h4>
                            <ul className="text-sm space-y-1">
                              <li>• AI能够理解标准化的项目结构</li>
                              <li>• 模块化设计让AI精确知道要修改什么</li>
                              <li>• 清晰的架构文档是AI协作的关键</li>
                              <li>• 这种理念完全可以应用到Web开发！</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button variant="outline" asChild>
                            <Link href="https://www.anthropic.com/engineering/desktop-extensions" target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              阅读DXT原文
                            </Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href="https://github.com/anthropics/dxt" target="_blank">
                              <Github className="mr-2 h-4 w-4" />
                              DXT项目地址
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Innovation Solution */}
                <div className="relative flex items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                    <Puzzle className="h-6 w-6" />
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                        创新转化：VibeCLI的AI友好架构
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          将DXT的AI友好设计理念转化到Web全栈开发，创造了一个真正适合AI协作的开发工具。
                        </p>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                          <h4 className="font-medium mb-4 text-center">核心技术转化</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">DXT理念</h5>
                              <ul className="text-sm space-y-1">
                                <li>• manifest.json描述扩展能力</li>
                                <li>• 模块化ZIP包结构</li>
                                <li>• 标准化安装流程</li>
                                <li>• 清晰的依赖管理</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">VibeCLI实现</h5>
                              <ul className="text-sm space-y-1">
                                <li>• ARCHITECTURE.md描述项目结构</li>
                                <li>• 模块化功能生成</li>
                                <li>• 标准化CLI命令</li>
                                <li>• 清晰的技术栈配置</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">AI友好的关键特性：</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p>• <strong>标准化项目结构</strong>：AI一眼就能理解项目架构</p>
                              <p>• <strong>模块化功能生成</strong>：`vibe generate auth` 让AI知道要生成什么</p>
                            </div>
                            <div>
                              <p>• <strong>清晰技术栈</strong>：Next.js 14 + TypeScript + Prisma + Tailwind</p>
                              <p>• <strong>完整文档</strong>：ARCHITECTURE.md + API.md + examples/</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Results */}
                <div className="relative flex items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 font-bold">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                        革命性效果：从3-4天到40分钟
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          VibeCLI不仅仅提升了开发效率，更重要的是解决了AI协作的根本问题。
                        </p>
                        
                        <div className="grid gap-4">
                          {/* Time Comparison */}
                          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-3">开发时间对比</h4>
                            <div className="grid md:grid-cols-4 gap-4 text-center">
                              <div>
                                <div className="text-lg font-bold text-red-600">3-4天</div>
                                <div className="text-sm text-muted-foreground">传统开发</div>
                              </div>
                              <div className="flex items-center justify-center">
                                <ArrowRight className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-lg font-bold text-green-600">40分钟</div>
                                <div className="text-sm text-muted-foreground">使用VibeCLI</div>
                              </div>
                              <div>
                                <div className="text-lg font-bold text-purple-600">99%</div>
                                <div className="text-sm text-muted-foreground">时间节省</div>
                              </div>
                            </div>
                          </div>

                          {/* AI Collaboration Benefits */}
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 flex items-center gap-2">
                              <Brain className="h-4 w-4 text-blue-600" />
                              AI协作质量提升
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <ul className="space-y-1">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-600" />
                                  AI能准确理解项目架构
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-600" />
                                  生成代码与现有结构兼容
                                </li>
                              </ul>
                              <ul className="space-y-1">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-600" />
                                  无需重复解释项目结构
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-600" />
                                  模块化扩展更加精确
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Innovation Details */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">技术创新深度解析</h2>
            
            <div className="grid gap-8">
              {/* DXT vs VibeCLI Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    DXT理念在Web开发的具体应用
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">设计理念</th>
                          <th className="text-left p-3">DXT实现</th>
                          <th className="text-left p-3">VibeCLI转化</th>
                          <th className="text-left p-3">AI友好程度</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b">
                          <td className="p-3 font-medium">标准化描述</td>
                          <td className="p-3">manifest.json</td>
                          <td className="p-3">ARCHITECTURE.md + API.md</td>
                          <td className="p-3">
                            <Badge variant="success">极高</Badge>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">模块化结构</td>
                          <td className="p-3">独立扩展包</td>
                          <td className="p-3">功能模块生成</td>
                          <td className="p-3">
                            <Badge variant="success">极高</Badge>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">安装流程</td>
                          <td className="p-3">一键安装.dxt</td>
                          <td className="p-3">CLI命令生成</td>
                          <td className="p-3">
                            <Badge variant="success">高</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">扩展性</td>
                          <td className="p-3">动态配置</td>
                          <td className="p-3">AI提示词体系</td>
                          <td className="p-3">
                            <Badge variant="success">极高</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* AI Prompt Systems */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    AI友好的双提示词体系
                  </CardTitle>
                  <CardDescription>
                    基于DXT设计理念，VibeCLI创造了两套互补的AI协作方式
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-400">
                        🚀 标准化快速开发
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        使用VibeCLI命令快速生成标准功能
                      </p>
                      <div className="bg-slate-900 dark:bg-slate-800 p-3 rounded text-green-400 font-mono text-xs">
                        npx vibe-cli-tool create my-app<br/>
                        vibe generate auth<br/>
                        vibe generate crud products
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-purple-700 dark:text-purple-400">
                        🛠️ 深度定制开发
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        基于VibeCLI架构进行AI辅助定制
                      </p>
                      <div className="bg-slate-900 dark:bg-slate-800 p-3 rounded text-green-400 font-mono text-xs">
                        "使用VibeCLI模式构建..."<br/>
                        "请阅读ARCHITECTURE.md..."<br/>
                        "遵循现有技术栈..."
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                体验AI友好的Web开发革命
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                从DXT的设计理念中汲取灵感，VibeCLI让AI真正理解你的项目架构。
                现在就开始体验这种全新的AI协作开发方式。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="/docs">
                    <BookOpen className="mr-2 h-4 w-4" />
                    开始使用VibeCLI
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/demo">
                    <Zap className="mr-2 h-4 w-4" />
                    在线体验Demo
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/clients">
                    <Users className="mr-2 h-4 w-4" />
                    配置AI客户端
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