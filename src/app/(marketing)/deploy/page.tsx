import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Settings, 
  Cloud, 
  Server, 
  GitBranch,
  CheckCircle,
  ArrowRight,
  Code,
  Zap,
  Globe,
  Shield,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: '智能部署 - VibeCLI 2.0',
  description: '革命性的智能部署生成器，一键生成多平台配置文件，支持Vercel、Netlify、AWS等8大平台。',
};

const platforms = [
  {
    name: 'Vercel',
    logo: '▲',
    description: '前端部署首选，零配置部署',
    features: ['自动CI/CD', 'Edge Functions', '域名管理'],
    color: 'slate',
  },
  {
    name: 'Netlify',
    logo: '◆',
    description: 'JAMstack部署专家',
    features: ['表单处理', 'Functions', 'Split Testing'],
    color: 'teal',
  },
  {
    name: 'AWS',
    logo: '☁',
    description: '企业级云服务',
    features: ['EC2', 'S3', 'Lambda', 'CloudFront'],
    color: 'orange',
  },
  {
    name: 'Docker',
    logo: '🐳',
    description: '容器化部署',
    features: ['多环境', '扩容管理', '服务编排'],
    color: 'blue',
  },
  {
    name: 'Railway',
    logo: '🚄',
    description: '现代化部署平台',
    features: ['Git集成', '数据库', '环境变量'],
    color: 'purple',
  },
  {
    name: 'GitHub Pages',
    logo: '🐙',
    description: '开源项目托管',
    features: ['免费托管', 'Actions集成', '自定义域名'],
    color: 'gray',
  },
  {
    name: 'Cloudflare',
    logo: '🌩',
    description: '边缘计算平台',
    features: ['Workers', 'Pages', 'R2存储'],
    color: 'yellow',
  },
  {
    name: 'Firebase',
    logo: '🔥',
    description: 'Google云平台',
    features: ['Hosting', 'Functions', 'Database'],
    color: 'red',
  },
];

const deployFeatures = [
  {
    icon: Settings,
    title: '智能配置生成',
    description: '根据项目类型自动生成最优配置文件',
  },
  {
    icon: Zap,
    title: '一键部署',
    description: '简化部署流程，减少手动配置错误',
  },
  {
    icon: GitBranch,
    title: 'CI/CD集成',
    description: '自动生成GitHub Actions等持续集成配置',
  },
  {
    icon: Shield,
    title: '安全最佳实践',
    description: '内置安全配置，环境变量管理',
  },
  {
    icon: Globe,
    title: '多环境支持',
    description: '开发、测试、生产环境配置管理',
  },
  {
    icon: Clock,
    title: '快速上线',
    description: '从代码到上线，只需几分钟',
  },
];

const configExamples = [
  {
    platform: 'Vercel',
    filename: 'vercel.json',
    config: `{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    }
  ],
  "env": {
    "DATABASE_URL": "@database_url"
  }
}`,
  },
  {
    platform: 'Docker',
    filename: 'Dockerfile',
    config: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`,
  },
  {
    platform: 'GitHub Actions',
    filename: '.github/workflows/deploy.yml',
    config: `name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: vercel/action@v24
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}`,
  },
];

export default function DeployPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container">
            <div className="section-padding text-center">
              <Badge variant="gradient" className="mb-4">
                <Rocket className="mr-2 h-4 w-4" />
                智能部署生成器
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">一键生成</span>
                <br />
                多平台部署配置
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                智能分析项目结构，自动生成针对8大主流平台的最优部署配置。
                从Vercel到AWS，从Docker到Railway，让部署变得前所未有的简单。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="gradient">
                  <Code className="mr-2 h-5 w-5" />
                  立即生成配置
                </Button>
                <Button size="lg" variant="outline">
                  <GitBranch className="mr-2 h-5 w-5" />
                  查看示例
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">支持平台</h2>
              <p className="text-lg text-muted-foreground">
                覆盖主流部署平台，满足不同项目需求
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform) => (
                <Card key={platform.name} className="card-hover">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{platform.logo}</div>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {platform.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-slate-50 dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">核心特性</h2>
              <p className="text-lg text-muted-foreground">
                让部署配置变得智能化、自动化
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deployFeatures.map((feature, index) => (
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

        {/* Configuration Examples */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">配置示例</h2>
              <p className="text-lg text-muted-foreground">
                一键生成的专业级配置文件
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {configExamples.map((example, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="h-5 w-5" />
                      <span>{example.platform}</span>
                    </CardTitle>
                    <CardDescription>{example.filename}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                        {example.config}
                      </pre>
                    </div>
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
              <h2 className="text-3xl font-bold mb-4">使用方法</h2>
              <p className="text-lg text-muted-foreground">
                简单的命令，强大的功能
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>生成部署配置</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg mb-4">
                    <code className="text-green-400 font-mono">
                      vibecli deploy --generate
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    智能检测项目类型，生成适合的部署配置文件
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cloud className="h-5 w-5" />
                    <span>指定平台</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg mb-4">
                    <code className="text-green-400 font-mono">
                      vibecli deploy --platform vercel,netlify,docker
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    为特定平台生成配置，支持多平台同时生成
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="h-5 w-5" />
                    <span>环境配置</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg mb-4">
                    <code className="text-green-400 font-mono">
                      vibecli deploy --env production --with-ci
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    生成生产环境配置，包含CI/CD流水线
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">部署流程</h2>
              <p className="text-lg text-muted-foreground">
                从开发到上线，只需4个步骤
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: '项目分析',
                  description: '智能检测框架、依赖和构建方式',
                  icon: Code,
                },
                {
                  step: '02',
                  title: '配置生成',
                  description: '为目标平台生成最优配置文件',
                  icon: Settings,
                },
                {
                  step: '03',
                  title: 'CI/CD设置',
                  description: '自动生成持续集成和部署流水线',
                  icon: GitBranch,
                },
                {
                  step: '04',
                  title: '一键部署',
                  description: '推送代码，自动触发部署流程',
                  icon: Rocket,
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 h-6 w-6 text-muted-foreground hidden lg:block" />
                    )}
                  </div>
                  <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 