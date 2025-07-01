'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search,
  Filter,
  Plus,
  FolderOpen,
  ExternalLink,
  Github,
  Download,
  Trash2,
  Edit,
  Calendar,
  Clock,
  Code,
  Globe,
  Star,
  MoreHorizontal
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mockProjects = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: '完整的电商平台，包含用户认证、商品管理、购物车和支付功能',
    status: 'completed',
    type: 'Next.js',
    framework: 'React',
    database: 'Prisma + PostgreSQL',
    createdAt: '2024-06-28',
    lastModified: '2小时前',
    deployUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/user/ecommerce-platform',
    isStarred: true,
    progress: 100,
  },
  {
    id: '2',
    name: 'SaaS Dashboard',
    description: '企业级仪表板应用，包含数据可视化、用户管理和API集成',
    status: 'in_progress',
    type: 'React',
    framework: 'React',
    database: 'Firebase',
    createdAt: '2024-06-25',
    lastModified: '1天前',
    deployUrl: 'https://saas-demo.vercel.app',
    githubUrl: 'https://github.com/user/saas-dashboard',
    isStarred: false,
    progress: 75,
  },
  {
    id: '3',
    name: 'Blog Platform',
    description: '现代化博客系统，支持Markdown编辑、标签分类和评论功能',
    status: 'completed',
    type: 'Next.js',
    framework: 'Next.js',
    database: 'Supabase',
    createdAt: '2024-06-20',
    lastModified: '3天前',
    deployUrl: 'https://blog-demo.vercel.app',
    githubUrl: 'https://github.com/user/blog-platform',
    isStarred: true,
    progress: 100,
  },
  {
    id: '4',
    name: 'Task Management App',
    description: '团队任务管理工具，支持看板视图、时间跟踪和团队协作',
    status: 'planning',
    type: 'Vue.js',
    framework: 'Vue.js',
    database: 'MongoDB',
    createdAt: '2024-06-18',
    lastModified: '5天前',
    deployUrl: '',
    githubUrl: 'https://github.com/user/task-manager',
    isStarred: false,
    progress: 20,
  },
  {
    id: '5',
    name: 'Portfolio Website',
    description: '个人作品集网站，响应式设计，包含项目展示和联系表单',
    status: 'completed',
    type: 'Next.js',
    framework: 'Next.js',
    database: 'None',
    createdAt: '2024-06-15',
    lastModified: '1周前',
    deployUrl: 'https://portfolio-demo.vercel.app',
    githubUrl: 'https://github.com/user/portfolio',
    isStarred: false,
    progress: 100,
  },
  {
    id: '6',
    name: 'API Gateway',
    description: '微服务API网关，包含身份验证、限流和日志记录功能',
    status: 'error',
    type: 'Node.js',
    framework: 'Express',
    database: 'Redis + MySQL',
    createdAt: '2024-06-12',
    lastModified: '2周前',
    deployUrl: '',
    githubUrl: 'https://github.com/user/api-gateway',
    isStarred: false,
    progress: 60,
  },
];

const statusConfig = {
  completed: { label: '已完成', color: 'success', icon: '✓' },
  in_progress: { label: '进行中', color: 'warning', icon: '⚡' },
  planning: { label: '规划中', color: 'info', icon: '📋' },
  error: { label: '错误', color: 'destructive', icon: '⚠️' },
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">我的项目</h1>
          <p className="text-muted-foreground">
            管理您的VibeCLI生成的所有项目
          </p>
        </div>
        <Button variant="gradient" asChild>
          <Link href="/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            创建新项目
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '总项目', value: mockProjects.length, icon: FolderOpen },
          { label: '已完成', value: mockProjects.filter(p => p.status === 'completed').length, icon: Star },
          { label: '进行中', value: mockProjects.filter(p => p.status === 'in_progress').length, icon: Clock },
          { label: '已部署', value: mockProjects.filter(p => p.deployUrl).length, icon: Globe },
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索项目..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              状态筛选
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setStatusFilter('all')}>
              全部状态
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setStatusFilter('completed')}>
              已完成
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter('in_progress')}>
              进行中
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter('planning')}>
              规划中
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter('error')}>
              错误
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    {project.isStarred && (
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    )}
                    <Badge 
                      variant={statusConfig[project.status as keyof typeof statusConfig].color as any}
                      className="text-xs"
                    >
                      {statusConfig[project.status as keyof typeof statusConfig].icon} {statusConfig[project.status as keyof typeof statusConfig].label}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      编辑项目
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      下载代码
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      删除项目
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Progress Bar */}
                {project.progress < 100 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>项目进度</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    <Code className="mr-1 h-3 w-3" />
                    {project.framework}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {project.database}
                  </Badge>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      创建于 {project.createdAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {project.lastModified}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {project.deployUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.deployUrl} target="_blank">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        预览
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-3 w-3" />
                      代码
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>
                      <Edit className="mr-2 h-3 w-3" />
                      管理
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Card className="p-12 text-center">
          <FolderOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">没有找到项目</h3>
          <p className="text-muted-foreground mb-4">
            {searchQuery ? '尝试修改搜索条件' : '开始创建您的第一个项目'}
          </p>
          <Button variant="gradient" asChild>
            <Link href="/projects/new">
              <Plus className="mr-2 h-4 w-4" />
              创建新项目
            </Link>
          </Button>
        </Card>
      )}
    </div>
  );
}