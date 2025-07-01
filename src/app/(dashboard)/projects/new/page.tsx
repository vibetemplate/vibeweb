'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft,
  Zap,
  Code,
  Database,
  Globe,
  Smartphone,
  Store,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const projectTemplates = [
  {
    id: 'ecommerce',
    name: '电商平台',
    description: '完整的电商解决方案，包含商品管理、购物车、支付集成',
    icon: Store,
    features: ['用户认证', '商品管理', '购物车', '支付集成', '订单管理', '库存管理'],
    techStack: ['Next.js', 'Prisma', 'Stripe', 'Tailwind CSS'],
    estimatedTime: '45分钟',
    difficulty: 'medium',
    popular: true
  },
  {
    id: 'saas',
    name: 'SaaS应用',
    description: '企业级SaaS应用模板，包含仪表板、用户管理、API集成',
    icon: BarChart3,
    features: ['多租户架构', '仪表板', 'API管理', '用户权限', '计费系统', '数据分析'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    estimatedTime: '60分钟',
    difficulty: 'hard',
    popular: true
  },
  {
    id: 'blog',
    name: '博客平台',
    description: '现代化博客系统，支持Markdown、评论、SEO优化',
    icon: BookOpen,
    features: ['Markdown编辑', '标签分类', '评论系统', 'SEO优化', '社交分享', '搜索功能'],
    techStack: ['Next.js', 'MDX', 'Supabase', 'Vercel'],
    estimatedTime: '30分钟',
    difficulty: 'easy',
    popular: false
  },
  {
    id: 'portfolio',
    name: '个人作品集',
    description: '专业的个人作品集网站，响应式设计，项目展示',
    icon: Globe,
    features: ['响应式设计', '项目展示', '联系表单', '技能展示', '简历下载', '暗黑模式'],
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    estimatedTime: '20分钟',
    difficulty: 'easy',
    popular: false
  },
  {
    id: 'social',
    name: '社交应用',
    description: '社交网络应用，包含动态、聊天、好友系统',
    icon: Users,
    features: ['用户动态', '实时聊天', '好友系统', '消息通知', '图片分享', '隐私设置'],
    techStack: ['React', 'Socket.io', 'MongoDB', 'AWS S3'],
    estimatedTime: '75分钟',
    difficulty: 'hard',
    popular: false
  },
  {
    id: 'mobile',
    name: '移动应用',
    description: 'React Native移动应用，跨平台解决方案',
    icon: Smartphone,
    features: ['跨平台', '原生性能', '推送通知', '离线支持', '地图集成', '摄像头功能'],
    techStack: ['React Native', 'Expo', 'Firebase', 'Redux'],
    estimatedTime: '90分钟',
    difficulty: 'hard',
    popular: false
  },
  {
    id: 'admin',
    name: '后台管理',
    description: '功能完整的后台管理系统，数据管理、用户权限',
    icon: Settings,
    features: ['数据管理', '用户权限', '角色管理', '操作日志', '系统监控', '报表导出'],
    techStack: ['Vue.js', 'Element Plus', 'Express', 'MySQL'],
    estimatedTime: '50分钟',
    difficulty: 'medium',
    popular: false
  },
  {
    id: 'api',
    name: 'API服务',
    description: 'RESTful API服务，包含认证、限流、文档生成',
    icon: Code,
    features: ['RESTful API', 'JWT认证', '限流控制', 'API文档', '数据验证', '错误处理'],
    techStack: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
    estimatedTime: '40分钟',
    difficulty: 'medium',
    popular: false
  },
  {
    id: 'chat',
    name: '聊天应用',
    description: '实时聊天应用，支持群聊、文件分享',
    icon: MessageSquare,
    features: ['实时消息', '群聊支持', '文件分享', '表情包', '消息加密', '在线状态'],
    techStack: ['React', 'Socket.io', 'Node.js', 'Redis'],
    estimatedTime: '55分钟',
    difficulty: 'medium',
    popular: false
  }
];

const difficultyConfig = {
  easy: { label: '简单', color: 'success', icon: '🟢' },
  medium: { label: '中等', color: 'warning', icon: '🟡' },
  hard: { label: '困难', color: 'destructive', icon: '🔴' }
};

export default function NewProjectPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [customRequirements, setCustomRequirements] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleCreateProject = async () => {
    if (!selectedTemplate || !projectName.trim()) {
      toast({
        title: '请完善项目信息',
        description: '请选择模板并填写项目名称',
        variant: 'destructive'
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      // 模拟项目生成过程
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: '项目创建成功！',
        description: `${projectName} 已生成完成，正在跳转到项目详情...`
      });
      
      // 这里应该跳转到新创建的项目页面
      // router.push(`/projects/${newProjectId}`);
      
    } catch (error) {
      toast({
        title: '项目创建失败',
        description: '创建过程中出现问题，请稍后重试',
        variant: 'destructive'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const selectedTemplateData = projectTemplates.find(t => t.id === selectedTemplate);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回项目列表
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">创建新项目</h1>
          <p className="text-muted-foreground">
            选择模板，描述需求，让AI为您生成完整项目
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Template Selection */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                选择项目模板
              </CardTitle>
              <CardDescription>
                从预设模板中选择，或者描述您的自定义需求
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {projectTemplates.map((template) => (
                  <Card 
                    key={template.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedTemplate === template.id 
                        ? 'ring-2 ring-blue-500 border-blue-200' 
                        : ''
                    } ${template.popular ? 'relative' : ''}`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    {template.popular && (
                      <div className="absolute -top-2 -right-2">
                        <Badge variant="gradient" className="text-xs">
                          热门
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <template.icon className="h-6 w-6 text-blue-600" />
                        <div>
                          <CardTitle className="text-base">{template.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge 
                              variant={difficultyConfig[template.difficulty as keyof typeof difficultyConfig].color as any}
                              className="text-xs"
                            >
                              {difficultyConfig[template.difficulty as keyof typeof difficultyConfig].icon} {difficultyConfig[template.difficulty as keyof typeof difficultyConfig].label}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {template.estimatedTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-3">
                        {template.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs font-medium">主要功能：</p>
                        <div className="flex flex-wrap gap-1">
                          {template.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {template.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{template.features.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Configuration */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>项目配置</CardTitle>
              <CardDescription>
                完善项目信息和特殊要求
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectName">项目名称 *</Label>
                <Input
                  id="projectName"
                  placeholder="输入项目名称"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription">项目描述</Label>
                <Textarea
                  id="projectDescription"
                  placeholder="描述您的项目（可选）"
                  rows={3}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customRequirements">自定义需求</Label>
                <Textarea
                  id="customRequirements"
                  placeholder="描述任何特殊需求或功能..."
                  rows={4}
                  value={customRequirements}
                  onChange={(e) => setCustomRequirements(e.target.value)}
                />
              </div>

              {selectedTemplateData && (
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-medium">选中模板详情</h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>技术栈：</strong> {selectedTemplateData.techStack.join(', ')}
                    </p>
                    <p className="text-sm">
                      <strong>预计时间：</strong> {selectedTemplateData.estimatedTime}
                    </p>
                    <div>
                      <p className="text-sm font-medium mb-1">包含功能：</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedTemplateData.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button 
                className="w-full" 
                variant="gradient"
                onClick={handleCreateProject}
                disabled={!selectedTemplate || !projectName.trim() || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    生成中...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    开始生成项目
                  </>
                )}
              </Button>

              {isGenerating && (
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    正在分析项目需求...
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    生成项目架构...
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    创建代码文件...
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Start Tip */}
          <Card className="mt-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                    💡 快速开始提示
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    选择热门模板可以更快生成。在自定义需求中详细描述您的想法，AI会更好地理解您的需求。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}