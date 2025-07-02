import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MessageSquare, 
  Code, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Target,
  GitBranch,
  Brain,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prompt Generator - VibeCLI MCP Tools',
  description: '智能提示词生成器文档 - MCP智能上下文感知，自动生成高质量AI交互提示词',
  keywords: ['提示词生成', 'AI提示', 'MCP智能', '上下文感知', '智能对话'],
};

export default function PromptGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <MessageSquare className="mr-2 h-4 w-4" />
              MCP Tool
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Prompt Generator
              <span className="gradient-text"> 智能提示词生成器</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              基于MCP智能上下文感知技术，自动生成高质量AI交互提示词，提升AI对话效率和准确性。
            </p>
          </div>

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
                    prompt_generator(task="创建React组件", context={`{"framework": "React 18", "style": "Tailwind CSS"}`})
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

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                核心特性
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">智能提示生成</h4>
                      <p className="text-sm text-muted-foreground">
                        基于任务上下文自动生成优化的AI提示词
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Brain className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">上下文感知</h4>
                      <p className="text-sm text-muted-foreground">
                        记住项目历史和用户偏好，提供个性化建议
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">质量优化</h4>
                      <p className="text-sm text-muted-foreground">
                        多层次优化策略，确保提示词质量和效果
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Target className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">多场景适配</h4>
                      <p className="text-sm text-muted-foreground">
                        支持代码生成、文档编写、架构设计等多种场景
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关工具</CardTitle>
              <CardDescription>
                与其他MCP工具配合使用，构建完整的AI辅助开发流程
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/project_analyzer">
                    <Brain className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Project Analyzer</div>
                      <div className="text-xs text-muted-foreground">为项目分析生成专业提示词</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/feature_composer">
                    <Sparkles className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Feature Composer</div>
                      <div className="text-xs text-muted-foreground">优化功能开发的AI对话</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs">
                ← 返回文档
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/tools/deployment_manager">
                Deployment Manager →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}