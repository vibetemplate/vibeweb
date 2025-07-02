import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Store, 
  Download, 
  Star, 
  Shield, 
  GitBranch, 
  Zap,
  Globe,
  Rocket,
  Users,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: '模板商店 - VibeCLI 2.0',
  description: '探索VibeCLI革命性的模板商店生态系统，50+优质模板，Ed25519数字签名验证，安全可靠。',
};

const templateCategories = [
  {
    name: '全栈应用',
    icon: Zap,
    count: 15,
    description: '完整的前后端项目模板',
    color: 'blue',
  },
  {
    name: '电商系统',
    icon: Store,
    count: 8,
    description: '购物车、支付、订单管理',
    color: 'green',
  },
  {
    name: '企业官网',
    icon: Globe,
    count: 12,
    description: '公司展示、产品介绍页面',
    color: 'purple',
  },
  {
    name: '管理后台',
    icon: Users,
    count: 10,
    description: '数据管理、用户权限系统',
    color: 'orange',
  },
  {
    name: 'SaaS应用',
    icon: Rocket,
    count: 7,
    description: '订阅模式、多租户架构',
    color: 'red',
  },
  {
    name: '博客CMS',
    icon: GitBranch,
    count: 6,
    description: '内容管理、SEO优化',
    color: 'indigo',
  },
];

const featuredTemplates = [
  {
    id: 'ecommerce-pro',
    name: 'E-Commerce Pro',
    description: '现代化电商平台，包含支付、库存、订单管理',
    author: 'VibeCLI Team',
    downloads: 2150,
    rating: 4.9,
    verified: true,
    tags: ['Next.js', 'Stripe', 'Prisma', 'TypeScript'],
    image: '🛍️',
    category: '电商系统',
  },
  {
    id: 'saas-starter',
    name: 'SaaS Starter Kit',
    description: '完整的SaaS应用脚手架，多租户、订阅计费',
    author: 'Community',
    downloads: 1890,
    rating: 4.8,
    verified: true,
    tags: ['React', 'Supabase', 'Tailwind', 'Stripe'],
    image: '🚀',
    category: 'SaaS应用',
  },
  {
    id: 'admin-dashboard',
    name: 'Admin Dashboard',
    description: '企业级管理后台，权限管理、数据可视化',
    author: 'Enterprise',
    downloads: 3200,
    rating: 4.7,
    verified: true,
    tags: ['Vue.js', 'Element Plus', 'Charts', 'Auth'],
    image: '📊',
    category: '管理后台',
  },
  {
    id: 'blog-cms',
    name: 'Modern Blog CMS',
    description: '现代化博客系统，SEO优化、评论系统',
    author: 'VibeCLI Team',
    downloads: 1650,
    rating: 4.6,
    verified: false,
    tags: ['Gatsby', 'MDX', 'CMS', 'SEO'],
    image: '📝',
    category: '博客CMS',
  },
  {
    id: 'portfolio-pro',
    name: 'Portfolio Pro',
    description: '专业作品集网站，动画效果、响应式设计',
    author: 'Designer',
    downloads: 980,
    rating: 4.5,
    verified: false,
    tags: ['Nuxt.js', 'Framer Motion', 'GSAP'],
    image: '🎨',
    category: '企业官网',
  },
  {
    id: 'marketplace',
    name: 'Marketplace Platform',
    description: '多商家市场平台，佣金系统、评价管理',
    author: 'Community',
    downloads: 750,
    rating: 4.4,
    verified: true,
    tags: ['Laravel', 'MySQL', 'Redis', 'Docker'],
    image: '🏪',
    category: '电商系统',
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: 'Ed25519数字签名',
    description: '每个模板都经过加密签名验证，确保代码完整性',
  },
  {
    icon: CheckCircle,
    title: 'SHA-256完整性检查',
    description: '自动验证模板文件，防止恶意代码注入',
  },
  {
    icon: Users,
    title: '社区审核机制',
    description: '专业团队审核，社区评分，确保模板质量',
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container">
            <div className="section-padding text-center">
              <Badge variant="gradient" className="mb-4">
                <Store className="mr-2 h-4 w-4" />
                革命性模板商店
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">50+精选模板</span>
                <br />
                安全可靠的开发者生态
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                探索经过Ed25519数字签名验证的优质模板，一键安装，快速启动项目。
                从电商平台到SaaS应用，满足各种开发需求。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="gradient">
                  <Download className="mr-2 h-5 w-5" />
                  立即安装 VibeCLI
                </Button>
                <Button size="lg" variant="outline">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  查看文档
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Template Categories */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">模板分类</h2>
              <p className="text-lg text-muted-foreground">
                按项目类型浏览，快速找到适合的模板
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {templateCategories.map((category) => (
                <Card key={category.name} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/20`}>
                        <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <CardDescription>{category.count} 个模板</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Templates */}
        <section className="section-padding bg-slate-50 dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">精选模板</h2>
              <p className="text-lg text-muted-foreground">
                社区最受欢迎的高质量模板
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTemplates.map((template) => (
                <Card key={template.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{template.image}</div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <CardTitle className="text-lg">{template.name}</CardTitle>
                            {template.verified && (
                              <Badge variant="default" className="text-xs">
                                <CheckCircle className="mr-1 h-3 w-3" />
                                已验证
                              </Badge>
                            )}
                          </div>
                          <CardDescription>{template.author}</CardDescription>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      {template.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{template.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{template.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      使用模板
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">企业级安全保障</h2>
              <p className="text-lg text-muted-foreground">
                多重安全验证，确保每个模板都安全可靠
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
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

        {/* CLI Commands */}
        <section className="section-padding bg-slate-50 dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">简单易用的CLI命令</h2>
              <p className="text-lg text-muted-foreground">
                一行命令，开启你的项目之旅
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Store className="h-5 w-5" />
                    <span>浏览模板商店</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg">
                    <code className="text-green-400 font-mono">
                      vibecli template --browse
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    浏览远程模板市场，查看所有可用模板
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>安装模板</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg">
                    <code className="text-green-400 font-mono">
                      vibecli create my-project --template ecommerce-pro
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    使用指定模板创建新项目，自动验证数字签名
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GitBranch className="h-5 w-5" />
                    <span>发布模板</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg">
                    <code className="text-green-400 font-mono">
                      vibecli publish-template ./my-template
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    将你的模板发布到社区，贡献开发者生态
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 