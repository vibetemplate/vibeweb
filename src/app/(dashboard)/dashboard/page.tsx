import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  FolderOpen, 
  Clock, 
  Zap, 
  TrendingUp,
  Plus,
  ExternalLink,
  Github
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '仪表板 - VibeCLI 2.0',
  description: '管理您的VibeCLI项目，查看使用统计和项目分析。',
};

const stats = [
  {
    title: '总项目数',
    value: '24',
    change: '+12%',
    icon: FolderOpen,
    description: '本月新增3个项目',
  },
  {
    title: '生成时间',
    value: '8.5分钟',
    change: '-23%',
    icon: Clock,
    description: '平均项目生成时间',
  },
  {
    title: '效率提升',
    value: '32x',
    change: '+5%',
    icon: Zap,
    description: '相比传统开发方式',
  },
  {
    title: '成功率',
    value: '98.5%',
    change: '+2%',
    icon: TrendingUp,
    description: '项目生成成功率',
  },
];

const recentProjects = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: '完整的电商平台项目',
    status: 'completed',
    createdAt: '2小时前',
    type: 'Next.js',
    url: 'https://ecommerce-demo.vercel.app',
  },
  {
    id: '2',
    name: 'SaaS Dashboard',
    description: '企业级仪表板应用',
    status: 'completed',
    createdAt: '1天前',
    type: 'React',
    url: 'https://saas-demo.vercel.app',
  },
  {
    id: '3',
    name: 'Blog Platform',
    description: '现代化博客系统',
    status: 'completed',
    createdAt: '3天前',
    type: 'Next.js',
    url: 'https://blog-demo.vercel.app',
  },
];

const quickActions = [
  {
    title: '创建新项目',
    description: '使用AI快速生成全栈项目',
    icon: Plus,
    href: '/projects/new',
    variant: 'gradient' as const,
  },
  {
    title: '查看项目',
    description: '管理所有已创建的项目',
    icon: FolderOpen,
    href: '/projects',
    variant: 'outline' as const,
  },
  {
    title: '体验Demo',
    description: '在线体验VibeCLI功能',
    icon: ExternalLink,
    href: '/demo',
    variant: 'outline' as const,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">仪表板</h1>
        <p className="text-muted-foreground">
          欢迎回来！查看您的项目统计和最新活动。
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge variant={stat.change.startsWith('+') ? 'success' : 'secondary'} className="text-xs">
                  {stat.change}
                </Badge>
                <span>{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>最近项目</CardTitle>
            <CardDescription>
              您最近创建的项目
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project) => (
              <div 
                key={project.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium">{project.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    创建于 {project.createdAt}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.url}>
                      <ExternalLink className="h-3 w-3 mr-1" />
                      预览
                    </Link>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={`/projects/${project.id}`}>
                      <Github className="h-3 w-3 mr-1" />
                      代码
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/projects">
                  查看所有项目
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>快速操作</CardTitle>
            <CardDescription>
              常用功能快捷入口
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action) => (
              <Button
                key={action.title}
                variant={action.variant}
                className="w-full justify-start h-auto p-4"
                asChild
              >
                <Link href={action.href}>
                  <div className="flex items-start space-x-3">
                    <action.icon className="h-5 w-5 mt-0.5" />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {action.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Usage Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>使用趋势</CardTitle>
          <CardDescription>
            最近30天的项目创建趋势
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center space-y-2">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">图表数据加载中...</p>
              <p className="text-xs text-muted-foreground">
                未来版本将展示详细的使用统计和趋势分析
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}