import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Cloud, 
  Users, 
  Brain, 
  Shield, 
  MessageSquare,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '核心功能 - VibeCLI 文档',
  description: 'VibeCLI的六大核心功能详细介绍，包括模板商店、智能部署、国际化支持等。',
  keywords: ['VibeCLI功能', '模板商店', '智能部署', '国际化', '学习系统', '企业安全', 'MCP'],
};

const coreFeatures = [
  {
    id: 'template-store',
    title: '模板商店生态系统',
    subtitle: 'Template Store Ecosystem',
    description: '远程模板市场，安全安装验证，数字签名保护。支持本地模板管理、离线开发和版本化管理。',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'deploy-generator',
    title: '智能部署生成器',
    subtitle: 'Intelligent Deploy Generator',
    description: '革命性的多平台部署解决方案，支持Vercel、Netlify、AWS、Docker等主流平台的一键配置。',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'i18n-support',
    title: '国际化支持',
    subtitle: 'Internationalization Support',
    description: '多语言CLI界面，本地化模板，区域化配置，社区翻译支持。',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'learning-system',
    title: '交互式学习系统',
    subtitle: 'Interactive Learning System',
    description: '分步教程指导，实时代码提示，错误诊断，知识库集成。',
    icon: Brain,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'enterprise-security',
    title: '企业级安全',
    subtitle: 'Enterprise Security',
    description: 'Ed25519数字签名，SHA-256哈希验证，权限管理，安全审计。',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'mcp-context',
    title: 'MCP智能上下文',
    subtitle: 'MCP Intelligent Context',
    description: 'AI决策引擎，渐进式理解，智能降级处理，上下文感知。',
    icon: MessageSquare,
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              核心功能
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              六大核心功能
              <span className="gradient-text"> 详细介绍</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              VibeCLI 2.0 的六大核心功能，每个功能都经过精心设计，为开发者提供完整的AI驱动开发体验。
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {coreFeatures.map((feature) => (
              <Card key={feature.id} className="card-hover h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{feature.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {feature.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/docs/features/${feature.id}`}>
                      查看详细文档
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* MCP Tools Section */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>五大MCP工具</CardTitle>
              <CardDescription>
                基于Model Context Protocol的智能工具集，与核心功能协同工作
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/project_analyzer">
                    <Brain className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Project Analyzer</div>
                      <div className="text-xs text-muted-foreground">智能项目分析器</div>
                    </div>
                  </Link>
                </Button>
                
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/template_generator">
                    <Code className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Template Generator</div>
                      <div className="text-xs text-muted-foreground">模板生成器</div>
                    </div>
                  </Link>
                </Button>
                
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/feature_composer">
                    <Code className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Feature Composer</div>
                      <div className="text-xs text-muted-foreground">功能合成器</div>
                    </div>
                  </Link>
                </Button>
                
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/deployment_manager">
                    <Cloud className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Deployment Manager</div>
                      <div className="text-xs text-muted-foreground">部署管理器</div>
                    </div>
                  </Link>
                </Button>
                
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/tools/prompt_generator">
                    <MessageSquare className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">Prompt Generator</div>
                      <div className="text-xs text-muted-foreground">提示词生成器</div>
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
                ← 返回文档首页
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/features">
                查看功能演示 →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}