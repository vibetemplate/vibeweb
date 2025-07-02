import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Code, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  FileText,
  Settings,
  Target,
  GitBranch
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Project Analyzer - VibeCLI MCP Tools',
  description: '智能项目分析器文档 - 通过自然语言理解项目需求，自动推荐最佳技术栈和架构方案',
  keywords: ['项目分析', 'AI分析', '技术栈推荐', '架构设计', 'MCP工具'],
};

export default function ProjectAnalyzerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Brain className="mr-2 h-4 w-4" />
              MCP Tool
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Project Analyzer
              <span className="gradient-text"> 智能项目分析器</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              通过自然语言理解项目需求，智能分析项目复杂度，自动推荐最佳技术栈和架构方案。
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">基础用法：</p>
                  <code className="text-sm">
                    project_analyzer(description="创建一个现代化的电商平台", requirements=["用户认证", "商品管理", "支付系统"])
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo">
                      <Brain className="mr-2 h-4 w-4" />
                      在线体验
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/mcp">
                      <FileText className="mr-2 h-4 w-4" />
                      MCP集成指南
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
{`project_analyzer(
  description: string,
  requirements: string[],
  constraints?: {
    budget: 'low' | 'medium' | 'high',
    timeline: 'urgent' | 'normal' | 'flexible',
    team_size: number,
    complexity: 'simple' | 'medium' | 'complex'
  }
) -> ProjectAnalysisResult`}
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
                      <h5 className="font-medium">description</h5>
                      <p className="text-sm text-muted-foreground">项目描述 - 用自然语言描述你想要构建的项目</p>
                      <Badge variant="outline" className="mt-1">string</Badge>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-medium">requirements</h5>
                      <p className="text-sm text-muted-foreground">功能需求列表 - 项目需要实现的核心功能</p>
                      <Badge variant="outline" className="mt-1">string[]</Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">可选参数</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">constraints.budget</h5>
                      <p className="text-sm text-muted-foreground">预算约束 - 影响技术栈选择</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline">low</Badge>
                        <Badge variant="outline">medium</Badge>
                        <Badge variant="outline">high</Badge>
                      </div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">constraints.timeline</h5>
                      <p className="text-sm text-muted-foreground">时间要求 - 影响开发策略</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline">urgent</Badge>
                        <Badge variant="outline">normal</Badge>
                        <Badge variant="outline">flexible</Badge>
                      </div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">constraints.team_size</h5>
                      <p className="text-sm text-muted-foreground">团队规模 - 影响架构复杂度</p>
                      <Badge variant="outline" className="mt-1">number</Badge>
                    </div>
                  </div>
                </div>
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
  project_type: string,           // 项目类型识别结果
  recommended_template: string,   // 推荐的项目模板
  tech_stack: {
    frontend: string[],          // 前端技术栈
    backend: string[],           // 后端技术栈
    database: string,            // 数据库推荐
    deployment: string[]         // 部署方案
  },
  complexity_score: number,       // 复杂度评分 (1-10)
  estimated_timeline: string,     // 预估开发时间
  key_features: string[],         // 核心功能分解
  architecture_suggestions: string[], // 架构建议
  potential_challenges: string[], // 潜在挑战
  confidence: number              // 分析置信度 (0-100)
}`}
                </pre>
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
                    电商平台分析
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`project_analyzer(
  description="构建一个现代化的B2C电商平台",
  requirements=[
    "用户注册和认证",
    "商品展示和搜索",
    "购物车功能",
    "在线支付",
    "订单管理",
    "管理员后台"
  ],
  constraints={
    "budget": "medium",
    "timeline": "normal",
    "team_size": 3,
    "complexity": "medium"
  }
)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-blue-500" />
                    SaaS应用分析
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`project_analyzer(
  description="团队协作的项目管理SaaS工具",
  requirements=[
    "多租户架构",
    "实时协作",
    "任务管理",
    "文件共享",
    "权限控制",
    "数据分析"
  ]
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
                    <h5 className="font-medium">详细描述项目愿景</h5>
                    <p className="text-sm text-muted-foreground">提供具体的业务场景和用户群体信息，帮助AI更准确理解需求</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">明确列出核心功能</h5>
                    <p className="text-sm text-muted-foreground">按优先级列出必需功能，避免过度复杂的需求描述</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">设置合理约束</h5>
                    <p className="text-sm text-muted-foreground">提供准确的预算、时间和团队信息，获得更贴近实际的建议</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">迭代优化需求</h5>
                    <p className="text-sm text-muted-foreground">根据分析结果调整需求描述，进行多轮分析获得最佳方案</p>
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
                  <h5 className="font-medium text-orange-600 mb-2">分析结果置信度低</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：需求描述过于模糊或矛盾</p>
                  <p className="text-sm"><strong>解决方案：</strong> 提供更具体的项目描述和明确的功能需求</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">推荐的技术栈不合适</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：约束条件设置不准确</p>
                  <p className="text-sm"><strong>解决方案：</strong> 调整预算、时间和团队规模参数</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">复杂度评估偏高</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：功能需求列表过长或包含高难度功能</p>
                  <p className="text-sm"><strong>解决方案：</strong> 按MVP思路精简核心功能，分阶段实施</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Tools */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关工具</CardTitle>
              <CardDescription>
                基于项目分析结果，可以使用以下工具继续开发流程
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/template_generator">
                    <Settings className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Template Generator</div>
                      <div className="text-xs text-muted-foreground">基于分析结果生成项目模板</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/feature_composer">
                    <Code className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Feature Composer</div>
                      <div className="text-xs text-muted-foreground">添加和组合功能模块</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/deployment_manager">
                    <Zap className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Deployment Manager</div>
                      <div className="text-xs text-muted-foreground">部署和发布管理</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Navigation */}
          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs">
                ← 返回文档
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/tools/template_generator">
                Template Generator →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}