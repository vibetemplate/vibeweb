import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '项目案例 - VibeCLI 2.0',
  description: '查看使用VibeCLI 2.0创建的优秀项目案例，从电商平台到SaaS应用的完整实现。',
};

const showcaseProjects = [
  {
    id: 'ecommerce-pro',
    title: 'ECommerce Pro',
    description: '完整的电商平台，包含用户认证、商品管理、购物车、支付集成和订单管理',
    image: '🛒',
    category: 'E-commerce',
    techStack: ['Next.js 14', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS'],
    features: ['用户认证', '商品管理', '购物车', 'Stripe支付', '订单管理', '管理后台'],
    stats: { views: '2.3k', stars: '156', forks: '43' },
    demoUrl: 'https://ecommerce-pro-demo.vercel.app',
    githubUrl: 'https://github.com/vibecli-examples/ecommerce-pro',
    generationTime: '8分钟',
    complexity: 'Medium'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: '企业级SaaS仪表板，包含数据可视化、用户管理、订阅计费和实时分析',
    image: '📊',
    category: 'SaaS',
    techStack: ['Next.js 14', 'TypeScript', 'Supabase', 'Recharts', 'Stripe'],
    features: ['数据可视化', '用户管理', '订阅计费', '实时分析', '团队协作', 'API集成'],
    stats: { views: '1.8k', stars: '89', forks: '28' },
    demoUrl: 'https://saas-dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/vibecli-examples/saas-dashboard',
    generationTime: '12分钟',
    complexity: 'Complex'
  },
  {
    id: 'blog-platform',
    title: 'Modern Blog Platform',
    description: '现代化博客平台，支持Markdown、评论系统、标签分类和SEO优化',
    image: '📝',
    category: 'Blog',
    techStack: ['Next.js 14', 'MDX', 'Prisma', 'NextAuth.js', 'Tailwind CSS'],
    features: ['Markdown支持', '评论系统', '标签分类', 'SEO优化', '搜索功能', '响应式设计'],
    stats: { views: '3.1k', stars: '234', forks: '67' },
    demoUrl: 'https://blog-platform-demo.vercel.app',
    githubUrl: 'https://github.com/vibecli-examples/blog-platform',
    generationTime: '6分钟',
    complexity: 'Simple'
  },
  {
    id: 'portfolio-site',
    title: 'Developer Portfolio',
    description: '个人作品集网站，展示项目、技能、博客和联系方式的完整解决方案',
    image: '👨‍💻',
    category: 'Portfolio',
    techStack: ['Next.js 14', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    features: ['项目展示', '技能图表', '博客集成', '联系表单', '动画效果', '深色模式'],
    stats: { views: '1.2k', stars: '76', forks: '21' },
    demoUrl: 'https://portfolio-demo.vercel.app',
    githubUrl: 'https://github.com/vibecli-examples/portfolio-site',
    generationTime: '5分钟',
    complexity: 'Simple'
  },
  {
    id: 'task-manager',
    title: 'Team Task Manager',
    description: '团队任务管理工具，包含项目管理、任务分配、时间跟踪和团队协作功能',
    image: '📋',
    category: 'Productivity',
    techStack: ['Next.js 14', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind CSS'],
    features: ['项目管理', '任务分配', '时间跟踪', '团队协作', '进度统计', '通知系统'],
    stats: { views: '1.5k', stars: '98', forks: '32' },
    demoUrl: 'https://task-manager-demo.vercel.app',
    githubUrl: 'https://github.com/vibecli-examples/task-manager',
    generationTime: '10分钟',
    complexity: 'Medium'
  },
  {
    id: 'ai-chat-app',
    title: 'AI Chat Application',
    description: '智能聊天应用，集成OpenAI API，支持多模态对话和文件上传功能',
    image: '🤖',
    category: 'AI/ML',
    techStack: ['Next.js 14', 'TypeScript', 'OpenAI API', 'Prisma', 'WebSocket'],
    features: ['AI对话', '文件上传', '多模态支持', '聊天历史', '用户管理', '实时通信'],
    stats: { views: '2.7k', stars: '189', forks: '54' },
    demoUrl: 'https://ai-chat-demo.vercel.app',
    githubUrl: 'https://github.com/vibecli-examples/ai-chat-app',
    generationTime: '15分钟',
    complexity: 'Complex'
  }
];

const categories = ['All', 'E-commerce', 'SaaS', 'Blog', 'Portfolio', 'Productivity', 'AI/ML'];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              项目案例
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-text">成功案例</span>展示
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              探索使用VibeCLI 2.0快速创建的优秀项目，从创意到上线只需分钟级别
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
                <div className="text-sm text-muted-foreground">项目案例</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-1">10分钟</div>
                <div className="text-sm text-muted-foreground">平均生成时间</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-1">25k+</div>
                <div className="text-sm text-muted-foreground">代码下载</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-1">98%</div>
                <div className="text-sm text-muted-foreground">成功率</div>
              </CardContent>
            </Card>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project) => (
              <Card key={project.id} className="card-hover overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{project.image}</div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">技术栈</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">核心功能</p>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {project.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-1">
                          <div className="h-1 w-1 rounded-full bg-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {project.stats.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stats.stars}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Badge 
                        variant={project.complexity === 'Simple' ? 'success' : 
                                project.complexity === 'Medium' ? 'warning' : 'destructive'} 
                        className="text-xs"
                      >
                        {project.complexity}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.generationTime}
                      </Badge>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <Link href={project.demoUrl}>
                        <ExternalLink className="h-3 w-3 mr-1" />
                        演示
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="h-3 w-3 mr-1" />
                        代码
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                想要创建自己的项目？
              </h3>
              <p className="text-muted-foreground mb-6">
                使用VibeCLI 2.0，几分钟内创建专业级的全栈应用
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="/demo">开始创建</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs">查看文档</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}