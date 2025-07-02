import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  BookOpen, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Target,
  Lightbulb,
  HelpCircle,
  Play,
  Users
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '交互式学习系统 - VibeCLI 核心功能',
  description: '分步教程指导，实时代码提示，错误诊断，知识库集成。从入门到进阶的完整学习路径。',
  keywords: ['交互式学习', '教程指导', '代码提示', '错误诊断', '知识库', '学习路径'],
};

export default function LearningSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Brain className="mr-2 h-4 w-4" />
              核心功能
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              交互式学习系统
              <span className="gradient-text"> Interactive Learning System</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              分步教程指导，实时代码提示，错误诊断，知识库集成。为开发者提供从入门到进阶的完整学习路径。
            </p>
          </div>

          <Card className="mb-8 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-blue-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">开始学习React Hooks：</p>
                  <code className="text-sm">
                    vibecli learn react-hooks
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo#learning-system">
                      <BookOpen className="mr-2 h-4 w-4" />
                      开始学习之旅
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/learning">
                      <FileText className="mr-2 h-4 w-4" />
                      学习指南
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
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">分步教程指导</h4>
                      <p className="text-sm text-muted-foreground">
                        内置学习路径，从入门到进阶的结构化教程
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Lightbulb className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">实时代码提示</h4>
                      <p className="text-sm text-muted-foreground">
                        智能代码补全和最佳实践建议
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">错误诊断</h4>
                      <p className="text-sm text-muted-foreground">
                        友好的错误信息和解决方案
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <HelpCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">知识库集成</h4>
                      <p className="text-sm text-muted-foreground">
                        文档、示例、FAQ一站式查询
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>学习路径</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">前端开发</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• React基础</div>
                    <div>• Vue.js入门</div>
                    <div>• TypeScript</div>
                    <div>• CSS架构</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">后端开发</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Node.js基础</div>
                    <div>• API设计</div>
                    <div>• 数据库操作</div>
                    <div>• 微服务架构</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">DevOps</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Docker容器</div>
                    <div>• CI/CD流程</div>
                    <div>• 云平台部署</div>
                    <div>• 监控运维</div>
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
                    <h5 className="font-medium">循序渐进学习</h5>
                    <p className="text-sm text-muted-foreground">按照推荐路径逐步学习，打好基础再进阶</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">理论结合实践</h5>
                    <p className="text-sm text-muted-foreground">在实际项目中应用所学知识，加深理解</p>
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
                  <Link href="/docs/features/i18n-support">
                    <Users className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">国际化支持</div>
                      <div className="text-xs text-muted-foreground">多语言学习资源</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/features/mcp-context">
                    <Brain className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">MCP智能上下文</div>
                      <div className="text-xs text-muted-foreground">智能学习建议和个性化指导</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/features/i18n-support">
                ← 国际化支持
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/features/enterprise-security">
                企业级安全 →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}