import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Terminal, Zap, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '开发文档 - VibeCLI 2.0',
  description: 'VibeCLI 2.0完整开发文档，包含安装指南、API参考、使用教程和最佳实践。',
};

const docSections = [
  {
    title: '快速开始',
    description: '5分钟上手VibeCLI 2.0',
    icon: Zap,
    items: ['安装指南', '第一个项目', '基础配置', 'MCP客户端设置']
  },
  {
    title: 'MCP工具详解',
    description: '四大核心工具深度指南',
    icon: Terminal,
    items: ['project_analyzer', 'template_generator', 'feature_composer', 'deployment_manager']
  },
  {
    title: 'API参考',
    description: '完整的API文档',
    icon: BookOpen,
    items: ['工具调用', '参数配置', '响应格式', '错误处理']
  },
  {
    title: '安全最佳实践',
    description: 'OAuth 2.1和安全配置',
    icon: Shield,
    items: ['认证配置', '令牌管理', '安全策略', '企业部署']
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              开发文档
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              完整的<span className="gradient-text">开发指南</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              从安装到部署，掌握VibeCLI 2.0的所有功能
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {docSections.map((section, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <section.icon className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle>{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                准备开始使用VibeCLI 2.0？
              </h3>
              <div className="flex gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="/demo">体验演示</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/vibetemplate/vibecli">GitHub</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}