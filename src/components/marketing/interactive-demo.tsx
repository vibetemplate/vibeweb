'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play,
  Pause,
  RotateCcw,
  Send,
  Terminal,
  FileCode,
  Database,
  Cloud,
  CheckCircle,
  Clock,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Copy,
  Download
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  duration: number;
  tool: string;
  input: string;
  output: any;
  status: 'pending' | 'running' | 'completed';
}

const demoScenarios = [
  {
    id: 'ecommerce',
    title: '电商平台项目',
    description: '创建一个完整的电商网站，包含用户认证、商品管理、购物车和支付功能',
    estimatedTime: '10分钟',
    complexity: 'Medium',
    icon: '🛒',
  },
  {
    id: 'saas',
    title: 'SaaS仪表板',
    description: '构建企业级SaaS应用，包含用户管理、订阅计费、数据分析功能',
    estimatedTime: '12分钟',
    complexity: 'Complex',
    icon: '📊',
  },
  {
    id: 'blog',
    title: '个人博客',
    description: '创建现代化博客网站，支持Markdown、评论系统、SEO优化',
    estimatedTime: '8分钟',
    complexity: 'Simple',
    icon: '📝',
  },
];

const ecommerceDemoSteps: DemoStep[] = [
  {
    id: 'analyze',
    title: '智能需求分析',
    description: '分析项目需求，推荐技术栈',
    duration: 2000,
    tool: 'project_analyzer',
    input: '创建一个电商网站，需要用户认证、商品管理、购物车和支付功能，团队2人，预算中等',
    output: {
      projectType: 'E-commerce Platform',
      techStack: {
        frontend: 'Next.js 14',
        backend: 'Next.js API Routes',
        database: 'PostgreSQL + Prisma',
        payment: 'Stripe',
        deployment: 'Vercel'
      },
      complexity: 'Medium',
      estimatedTime: '10分钟',
      features: ['用户认证', '商品管理', '购物车', '支付集成', '订单管理'],
      risks: ['支付安全配置', '库存数据一致性'],
      recommendations: ['使用Next.js SSR提升SEO', '集成Stripe Webhooks']
    },
    status: 'pending'
  },
  {
    id: 'generate',
    title: '项目模板生成',
    description: '生成完整的项目结构和基础代码',
    duration: 3000,
    tool: 'template_generator',
    input: '基于分析结果生成Next.js电商项目模板',
    output: {
      structure: {
        'src/app': '17个文件',
        'src/components': '23个组件',
        'src/lib': '8个工具库',
        'prisma': '数据库schema',
        'public': '静态资源'
      },
      features: [
        '✅ 用户认证系统',
        '✅ 商品CRUD操作',
        '✅ 购物车状态管理',
        '✅ Stripe支付集成',
        '✅ 订单管理系统'
      ],
      configs: ['TypeScript配置', 'Tailwind配置', 'Prisma配置', 'Next.js配置']
    },
    status: 'pending'
  },
  {
    id: 'compose',
    title: '功能模块集成',
    description: '添加高级功能和优化代码',
    duration: 2500,
    tool: 'feature_composer',
    input: '添加商品搜索、评论系统和推荐算法',
    output: {
      newFeatures: [
        '全文搜索 (ElasticSearch)',
        '用户评论系统',
        '智能推荐算法',
        '实时库存更新',
        '邮件通知系统'
      ],
      integrations: [
        'Search API集成',
        'WebSocket实时更新',
        'Email服务配置',
        'Redis缓存优化'
      ],
      tests: '生成15个测试用例'
    },
    status: 'pending'
  },
  {
    id: 'deploy',
    title: '自动部署配置',
    description: '配置生产环境部署',
    duration: 2000,
    tool: 'deployment_manager',
    input: '部署到Vercel生产环境，配置自定义域名',
    output: {
      platform: 'Vercel',
      url: 'https://my-ecommerce.vercel.app',
      features: [
        '✅ 自动HTTPS/SSL',
        '✅ 全球CDN加速',
        '✅ 环境变量配置',
        '✅ 数据库连接',
        '✅ 支付Webhook配置'
      ],
      monitoring: '性能监控已启用',
      analytics: 'Web Analytics配置完成'
    },
    status: 'pending'
  }
];

export function InteractiveDemo() {
  const [selectedScenario, setSelectedScenario] = React.useState(demoScenarios[0]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [steps, setSteps] = React.useState<DemoStep[]>(ecommerceDemoSteps);
  const [progress, setProgress] = React.useState(0);

  const runDemo = async () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setProgress(0);
    
    // Reset all steps
    const resetSteps = steps.map(step => ({ ...step, status: 'pending' as const }));
    setSteps(resetSteps);

    for (let i = 0; i < resetSteps.length; i++) {
      setCurrentStep(i);
      
      // Set current step to running
      setSteps(prev => prev.map((step, idx) => 
        idx === i ? { ...step, status: 'running' } : step
      ));

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, resetSteps[i].duration));
      
      // Set current step to completed
      setSteps(prev => prev.map((step, idx) => 
        idx === i ? { ...step, status: 'completed' } : step
      ));
      
      setProgress(((i + 1) / resetSteps.length) * 100);
    }
    
    setIsPlaying(false);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
    setSteps(prev => prev.map(step => ({ ...step, status: 'pending' as const })));
  };

  const formatDuration = (ms: number) => {
    return `${(ms / 1000).toFixed(1)}s`;
  };

  return (
    <div className="space-y-8">
      {/* Demo Control Panel */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                VibeCLI 2.0 实时演示
              </CardTitle>
              <CardDescription>
                体验从需求分析到项目部署的完整AI驱动开发流程
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant={isPlaying ? "outline" : "gradient"}
                onClick={isPlaying ? () => setIsPlaying(false) : runDemo}
                disabled={isPlaying}
              >
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    运行中...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    开始演示
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={resetDemo} disabled={isPlaying}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Scenario Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {demoScenarios.map((scenario) => (
              <Card 
                key={scenario.id}
                className={cn(
                  "cursor-pointer transition-all hover:shadow-md",
                  selectedScenario.id === scenario.id && "ring-2 ring-blue-500"
                )}
                onClick={() => setSelectedScenario(scenario)}
              >
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">{scenario.icon}</div>
                  <h3 className="font-semibold mb-1">{scenario.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {scenario.description}
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {scenario.estimatedTime}
                    </Badge>
                    <Badge 
                      variant={
                        scenario.complexity === 'Simple' ? 'success' :
                        scenario.complexity === 'Medium' ? 'warning' : 'destructive'
                      }
                      className="text-xs"
                    >
                      {scenario.complexity}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>进度</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Demo Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card 
            key={step.id}
            className={cn(
              "transition-all duration-300",
              step.status === 'running' && "ring-2 ring-blue-500 shadow-lg",
              step.status === 'completed' && "bg-green-50 dark:bg-green-900/20 border-green-200"
            )}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium",
                    step.status === 'pending' && "bg-gray-200 text-gray-600",
                    step.status === 'running' && "bg-blue-500 text-white animate-pulse",
                    step.status === 'completed' && "bg-green-500 text-white"
                  )}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-sm">{step.title}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {step.tool}
                    </Badge>
                  </div>
                </div>
                {step.status === 'running' && (
                  <div className="flex items-center gap-1 text-xs text-blue-600">
                    <Clock className="h-3 w-3" />
                    {formatDuration(step.duration)}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-3">
                {step.description}
              </p>
              
              {(step.status === 'running' || step.status === 'completed') && (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">输入:</p>
                    <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-xs">
                      {step.input}
                    </div>
                  </div>
                  
                  {step.status === 'completed' && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">输出:</p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded text-xs space-y-1">
                        {Object.entries(step.output).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="font-medium">
                              {Array.isArray(value) ? `${value.length} items` : 
                               typeof value === 'object' ? 'Object' : 
                               String(value).substring(0, 20)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Results Display */}
      {progress === 100 && (
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              项目生成完成！
            </CardTitle>
            <CardDescription>
              恭喜！您的{selectedScenario.title}项目已成功生成并部署
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10分钟</div>
                <div className="text-sm text-muted-foreground">总用时</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-muted-foreground">生成文件</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-muted-foreground">可运行</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="gradient">
                <Download className="mr-2 h-4 w-4" />
                下载项目代码
              </Button>
              <Button variant="outline">
                <Copy className="mr-2 h-4 w-4" />
                复制部署链接
              </Button>
              <Button variant="outline">
                <FileCode className="mr-2 h-4 w-4" />
                查看源码
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}