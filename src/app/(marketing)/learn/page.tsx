import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  BookOpen, 
  PlayCircle, 
  CheckCircle,
  Clock,
  Users,
  Star,
  Trophy,
  Target,
  Lightbulb,
  Code,
  Rocket,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: '学习中心 - VibeCLI 2.0',
  description: '交互式学习系统，分步教程指导，从新手到专家的完整学习路径。实例化学习体验，掌握现代化开发技能。',
};

const learningPaths = [
  {
    id: 'beginner',
    title: '新手入门',
    description: '零基础学习现代化Web开发',
    level: '入门',
    duration: '2-3周',
    modules: 8,
    students: 1200,
    rating: 4.9,
    color: 'green',
    icon: '🌱',
    topics: ['VibeCLI基础', '项目创建', '模板使用', '基础部署'],
  },
  {
    id: 'frontend',
    title: '前端开发',
    description: 'React/Vue/Next.js全栈开发',
    level: '进阶',
    duration: '4-6周',
    modules: 12,
    students: 890,
    rating: 4.8,
    color: 'blue',
    icon: '🎨',
    topics: ['组件设计', '状态管理', 'UI框架', '性能优化'],
  },
  {
    id: 'fullstack',
    title: '全栈开发',
    description: '前后端一体化开发实战',
    level: '高级',
    duration: '6-8周',
    modules: 16,
    students: 650,
    rating: 4.7,
    color: 'purple',
    icon: '🚀',
    topics: ['数据库设计', 'API开发', '认证授权', '微服务'],
  },
  {
    id: 'devops',
    title: 'DevOps实战',
    description: '部署、监控、CI/CD完整流程',
    level: '专家',
    duration: '8-10周',
    modules: 20,
    students: 420,
    rating: 4.6,
    color: 'orange',
    icon: '⚙️',
    topics: ['容器化', '自动化部署', '监控告警', '性能调优'],
  },
];

const tutorials = [
  {
    id: '001',
    title: '5分钟创建你的第一个项目',
    description: '使用VibeCLI快速创建现代化Web应用',
    type: '视频教程',
    duration: '5分钟',
    difficulty: '入门',
    completed: 2350,
    tags: ['快速开始', 'CLI基础'],
  },
  {
    id: '002',
    title: 'E-Commerce项目实战',
    description: '从零构建完整的电商系统',
    type: '项目实战',
    duration: '2小时',
    difficulty: '进阶',
    completed: 1890,
    tags: ['电商', 'Next.js', 'Stripe'],
  },
  {
    id: '003',
    title: 'SaaS应用架构设计',
    description: '多租户、订阅模式的SaaS应用开发',
    type: '深度教程',
    duration: '3小时',
    difficulty: '高级',
    completed: 1200,
    tags: ['SaaS', '架构', '多租户'],
  },
  {
    id: '004',
    title: '智能部署配置实战',
    description: '掌握多平台部署的最佳实践',
    type: '实操教程',
    duration: '1.5小时',
    difficulty: '进阶',
    completed: 980,
    tags: ['部署', 'DevOps', 'CI/CD'],
  },
  {
    id: '005',
    title: '模板开发与发布',
    description: '创建自己的模板并发布到社区',
    type: '进阶教程',
    duration: '2.5小时',
    difficulty: '高级',
    completed: 750,
    tags: ['模板开发', '社区贡献'],
  },
  {
    id: '006',
    title: '性能优化实战',
    description: 'Web应用性能调优的完整指南',
    type: '专家教程',
    duration: '4小时',
    difficulty: '专家',
    completed: 620,
    tags: ['性能优化', '监控', '调试'],
  },
];

const features = [
  {
    icon: PlayCircle,
    title: '交互式教程',
    description: '边学边练，实时反馈，掌握更快速',
  },
  {
    icon: Code,
    title: '实例化学习',
    description: '真实项目案例，学完即可上手工作',
  },
  {
    icon: Target,
    title: '个性化路径',
    description: '根据基础和目标定制专属学习计划',
  },
  {
    icon: Users,
    title: '社区支持',
    description: '活跃的学习社区，导师答疑解惑',
  },
  {
    icon: Trophy,
    title: '认证体系',
    description: '完成学习获得权威技能认证证书',
  },
  {
    icon: Rocket,
    title: '项目驱动',
    description: '每个模块都有完整项目作品产出',
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container">
            <div className="section-padding text-center">
              <Badge variant="gradient" className="mb-4">
                <GraduationCap className="mr-2 h-4 w-4" />
                交互式学习系统
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">从零到专家</span>
                <br />
                的完整学习路径
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                分步教程指导，实例化学习体验。掌握VibeCLI生态系统，
                从模板使用到智能部署，成为现代化开发专家。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="gradient">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  开始学习
                </Button>
                <Button size="lg" variant="outline">
                  <BookOpen className="mr-2 h-5 w-5" />
                  浏览课程
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">学习路径</h2>
              <p className="text-lg text-muted-foreground">
                按照技能水平选择适合的学习路径
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPaths.map((path) => (
                <Card key={path.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-3xl">{path.icon}</div>
                      <Badge variant="outline" className="text-xs">
                        {path.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">时长</span>
                        <span className="font-medium">{path.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">模块数</span>
                        <span className="font-medium">{path.modules}个</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">学员数</span>
                        <span className="font-medium">{path.students}+</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">评分</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{path.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">主要内容：</p>
                      <div className="flex flex-wrap gap-1">
                        {path.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      开始学习
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="section-padding bg-slate-50 dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">热门教程</h2>
              <p className="text-lg text-muted-foreground">
                最受欢迎的实战教程，学完即可应用
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <Card key={tutorial.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {tutorial.type}
                          </Badge>
                          <Badge 
                            variant={
                              tutorial.difficulty === '入门' ? 'default' :
                              tutorial.difficulty === '进阶' ? 'secondary' :
                              tutorial.difficulty === '高级' ? 'destructive' : 'default'
                            } 
                            className="text-xs"
                          >
                            {tutorial.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {tutorial.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{tutorial.completed}人完成</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      开始学习
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">学习特色</h2>
              <p className="text-lg text-muted-foreground">
                创新的学习方式，让技能提升更高效
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CLI Learning Commands */}
        <section className="section-padding bg-slate-50 dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">CLI学习命令</h2>
              <p className="text-lg text-muted-foreground">
                通过命令行开启你的学习之旅
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>开始学习</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg mb-4">
                    <code className="text-green-400 font-mono">
                      vibecli learn
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    启动交互式学习系统，选择学习路径
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>查看教程列表</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg mb-4">
                    <code className="text-green-400 font-mono">
                      vibecli learn --list
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    查看所有可用的教程和学习路径
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>开始特定教程</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg mb-4">
                    <code className="text-green-400 font-mono">
                      vibecli learn --tutorial ecommerce-basics
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    直接开始特定的教程学习
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Stats */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">学习成果</h2>
              <p className="text-lg text-muted-foreground">
                数据见证学习效果
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  label: '学员总数',
                  value: '5000+',
                  icon: Users,
                  description: '活跃学习者',
                },
                {
                  label: '完成率',
                  value: '85%',
                  icon: CheckCircle,
                  description: '平均完成率',
                },
                {
                  label: '满意度',
                  value: '4.8/5',
                  icon: Star,
                  description: '学员评分',
                },
                {
                  label: '就业率',
                  value: '92%',
                  icon: Trophy,
                  description: '学习后就业',
                },
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 