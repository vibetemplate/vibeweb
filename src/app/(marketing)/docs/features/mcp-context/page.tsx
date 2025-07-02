import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Brain, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Target,
  Cpu,
  Layers,
  Zap,
  RefreshCw
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MCP智能上下文 - VibeCLI 核心功能',
  description: 'AI决策引擎，渐进式理解，智能降级处理，上下文感知。让AI真正理解开发意图。',
  keywords: ['MCP', '智能上下文', 'AI决策', '渐进式理解', '智能降级', '上下文感知'],
};

export default function MCPContextPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <MessageSquare className="mr-2 h-4 w-4" />
              核心功能
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              MCP智能上下文
              <span className="gradient-text"> MCP Intelligent Context</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              基于Model Context Protocol的AI决策引擎，渐进式理解用户意图，智能降级处理，上下文感知。让AI真正理解你的开发需求。
            </p>
          </div>

          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">自然语言描述需求：</p>
                  <code className="text-sm">
                    "我想做一个类似抖音的短视频应用"
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo#mcp-context">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      体验智能对话
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/mcp">
                      <FileText className="mr-2 h-4 w-4" />
                      MCP协议文档
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>核心特性</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">AI决策引擎</h4>
                      <p className="text-sm text-muted-foreground">
                        基于上下文的智能项目分析和决策支持
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Layers className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">渐进式理解</h4>
                      <p className="text-sm text-muted-foreground">
                        多轮对话构建完整项目画像，逐步细化需求
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <RefreshCw className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">智能降级处理</h4>
                      <p className="text-sm text-muted-foreground">
                        当无完美匹配时提供最佳替代方案
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Cpu className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">上下文感知</h4>
                      <p className="text-sm text-muted-foreground">
                        记住用户偏好和项目历史，提供个性化建议
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>MCP协议优势</CardTitle>
              <CardDescription>
                基于最新MCP 2025-06-18版本的先进特性
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Streamable HTTP Transport</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>• 会话状态持久化管理</div>
                    <div>• 双向实时通信支持</div>
                    <div>• SSE流式响应机制</div>
                    <div>• 智能断线重连恢复</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Elicitation System</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>• AI主动澄清需求</div>
                    <div>• 上下文理解增强</div>
                    <div>• 需求完整性验证</div>
                    <div>• 智能补充建议</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Structured Output</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>• JSON Schema标准化</div>
                    <div>• 类型安全保障</div>
                    <div>• 元数据丰富支持</div>
                    <div>• 资源链接集成</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>智能对话示例</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                      U
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">"我想做一个类似抖音的短视频应用"</p>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-semibold">
                      AI
                    </div>
                    <div className="flex-1">
                      <p className="text-sm mb-2"><strong>理解度: 85%</strong></p>
                      <p className="text-sm mb-2">我理解您想开发一个短视频社交平台。为了提供最适合的解决方案，请告诉我：</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>• 目标用户群体是什么？(青少年/成人/专业创作者)</div>
                        <div>• 预计的用户规模？(小型社区/中型平台/大型应用)</div>
                        <div>• 核心功能优先级？(视频录制/编辑/社交/算法推荐)</div>
                        <div>• 技术预算和团队规模？</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                      U
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">"主要面向年轻用户，需要视频编辑和社交功能，团队3人，预算中等"</p>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-semibold">
                      AI
                    </div>
                    <div className="flex-1">
                      <p className="text-sm mb-2"><strong>分析结果:</strong></p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium">推荐技术栈:</div>
                          <div className="text-muted-foreground">React Native + Node.js</div>
                        </div>
                        <div>
                          <div className="font-medium">复杂度评估:</div>
                          <div className="text-muted-foreground">高复杂度 (8/10)</div>
                        </div>
                        <div>
                          <div className="font-medium">预计周期:</div>
                          <div className="text-muted-foreground">12-16周</div>
                        </div>
                        <div>
                          <div className="font-medium">建议方案:</div>
                          <div className="text-muted-foreground">MVP分阶段实现</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
                    <h5 className="font-medium">详细描述项目愿景</h5>
                    <p className="text-sm text-muted-foreground">提供具体的业务场景和用户群体信息，帮助AI更准确理解需求</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">多轮对话细化需求</h5>
                    <p className="text-sm text-muted-foreground">通过多次交互逐步完善项目需求，获得更精准的解决方案</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">接受智能建议</h5>
                    <p className="text-sm text-muted-foreground">当AI提供替代方案时，仔细考虑其合理性，可能更适合实际情况</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">保持上下文连续性</h5>
                    <p className="text-sm text-muted-foreground">在同一个项目的不同阶段继续使用，AI会记住之前的决策和偏好</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关功能</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/project_analyzer">
                    <Brain className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Project Analyzer</div>
                      <div className="text-xs text-muted-foreground">基于MCP的智能项目分析</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/prompt_generator">
                    <MessageSquare className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Prompt Generator</div>
                      <div className="text-xs text-muted-foreground">智能提示词生成和上下文优化</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/features/enterprise-security">
                ← 企业级安全
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/features">
                返回功能列表 →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}