'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Brain,
  MessageSquare,
  Zap,
  Shield,
  Users,
  Clock,
  Code,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Play,
  Download
} from 'lucide-react';
import Link from 'next/link';

const coreTools = [
  {
    id: 'project_analyzer',
    title: 'project_analyzer',
    subtitle: '项目分析器',
    description: '智能分析用户需求，推荐最适合的技术栈和架构',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    features: [
      '智能识别项目类型',
      '技术栈推荐算法', 
      '复杂度评估分析',
      '风险预警机制',
      '成本时间估算',
      '替代方案建议'
    ],
    demo: {
      input: '我想创建一个电商网站，需要用户认证、商品管理、购物车和支付功能',
      output: {
        projectType: 'E-commerce Platform',
        techStack: 'Next.js + Prisma + Stripe',
        complexity: 'Medium',
        estimatedTime: '45分钟',
        risks: ['支付安全', '数据一致性'],
      }
    }
  },
  {
    id: 'template_generator',
    title: 'template_generator', 
    subtitle: '模板生成器',
    description: '基于分析结果生成完整项目模板',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    features: [
      '完整项目结构生成',
      '配置文件自动创建',
      '基础代码模板',
      '依赖管理配置',
      '环境变量模板',
      '文档自动生成'
    ],
    demo: {
      input: 'Next.js + TypeScript + Prisma + Stripe电商模板',
      output: {
        files: 150,
        structure: '7层目录结构',
        features: ['认证', '商品', '购物车', '支付'],
        time: '生成用时: 2分钟',
      }
    }
  },
  {
    id: 'feature_composer',
    title: 'feature_composer',
    subtitle: '功能合成器', 
    description: '动态添加和组合复杂功能模块',
    icon: Sparkles,
    color: 'from-green-500 to-emerald-500',
    features: [
      '功能模块智能组合',
      '现有代码无缝集成',
      '配置文件自动更新',
      '测试用例生成',
      '文档同步更新',
      '依赖冲突解决'
    ],
    demo: {
      input: '为现有项目添加实时聊天功能',
      output: {
        integration: 'WebSocket + Socket.io',
        files: '新增18个文件',
        updates: '更新12个配置',
        tests: '生成6个测试用例',
      }
    }
  },
  {
    id: 'deployment_manager',
    title: 'deployment_manager',
    subtitle: '部署管理器',
    description: '智能部署配置和多平台发布',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    features: [
      '多平台部署支持',
      'CI/CD流水线配置',
      '环境变量管理',
      '监控日志设置',
      '域名SSL配置',
      '性能优化建议'
    ],
    demo: {
      input: '部署到Vercel生产环境',
      output: {
        platform: 'Vercel',
        domain: 'your-app.vercel.app',
        ssl: '自动HTTPS',
        cdn: '全球CDN加速',
        monitoring: '性能监控已启用',
      }
    }
  },
];

const mcpCapabilities = [
  {
    title: 'Streamable HTTP Transport',
    description: '基于HTTP的流式传输协议',
    icon: MessageSquare,
    details: [
      '会话状态持久化管理',
      '双向实时通信支持',
      'SSE流式响应机制',
      '智能断线重连恢复',
      '事件重播和恢复',
      'Last-Event-ID追踪'
    ]
  },
  {
    title: 'OAuth 2.1 Security',
    description: '企业级安全认证体系',
    icon: Shield,
    details: [
      'RFC 8707资源指示器',
      '受保护资源元数据',
      'audience限制验证',
      '令牌误用防护',
      '强化安全合规',
      '企业级访问控制'
    ]
  },
  {
    title: 'Elicitation System',
    description: '智能信息获取机制',
    icon: Brain,
    details: [
      'AI主动澄清需求',
      '上下文理解增强',
      '需求完整性验证',
      '智能补充建议',
      '交互式需求收集',
      '个性化推荐系统'
    ]
  },
  {
    title: 'Structured Output',
    description: '结构化数据输出',
    icon: Database,
    details: [
      'JSON Schema标准化',
      '类型安全保障',
      '元数据丰富支持',
      '资源链接集成',
      'title字段支持',
      '开发者友好格式'
    ]
  },
];

const clientEcosystem = [
  { name: 'Claude Desktop', support: '完全支持', status: 'success', features: ['原生AI对话', '自然语言描述', 'Elicitation交互'] },
  { name: 'Cursor IDE', support: '完全支持', status: 'success', features: ['代码编辑集成', '实时生成调试', '资源链接导航'] },
  { name: 'Cline', support: '兼容模式', status: 'warning', features: ['终端内管理', '向后兼容', '渐进升级'] },
  { name: 'Cherry Studio', support: '直接可用', status: 'success', features: ['可视化界面', '拖拽配置', '项目预览'] },
  { name: 'Trae', support: '多版本支持', status: 'success', features: ['CI/CD集成', '安全令牌', '协议协商'] },
  { name: 'DeepChat', support: '技术支持', status: 'success', features: ['深度讨论', '架构设计', '最佳实践'] },
  { name: 'Chatbox', support: '桌面客户端', status: 'success', features: ['桌面应用', 'OAuth流程', '跨设备同步'] },
  { name: 'Custom Apps', support: '完整API', status: 'success', features: ['定制平台', '企业集成', '团队协作'] },
];

export function FeaturesShowcase() {
  const [activeDemo, setActiveDemo] = React.useState<string>(coreTools[0].id);

  return (
    <div className="space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="outline" className="mb-4">
          MCP 核心功能
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          四大智能工具
          <span className="gradient-text"> 重新定义</span>
          <br />
          开发体验
        </h1>
        <p className="text-xl text-muted-foreground">
          基于MCP协议的智能工具集，从需求分析到项目部署的全流程AI驱动自动化
        </p>
      </div>

      {/* Core Tools Showcase */}
      <div className="space-y-16">
        {coreTools.map((tool, index) => (
          <div key={tool.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.color}`}>
                    <tool.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 font-mono text-xs">
                      {tool.title}
                    </Badge>
                    <h3 className="text-2xl font-bold">{tool.subtitle}</h3>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {tool.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="gradient" asChild>
                    <Link href={`/demo#${tool.id}`}>
                      <Play className="mr-2 h-4 w-4" />
                      体验Demo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/docs/tools/${tool.id}`}>
                      文档详情
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <Card className="bg-slate-50 dark:bg-slate-900 border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    实时演示
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">输入:</p>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border text-sm">
                      {tool.demo.input}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">输出:</p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="space-y-2 text-sm">
                        {Object.entries(tool.demo.output).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="font-medium">
                              {Array.isArray(value) ? value.join(', ') : value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-16" />

      {/* MCP Protocol Capabilities */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            MCP协议核心能力
          </h2>
          <p className="text-lg text-muted-foreground">
            基于Model Context Protocol 2025-06-18版本的先进特性
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mcpCapabilities.map((capability, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                    <capability.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {capability.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-16" />

      {/* Client Ecosystem */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            8大客户端生态系统
          </h2>
          <p className="text-lg text-muted-foreground">
            支持8大主流AI客户端，随时随地使用VibeCLI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientEcosystem.map((client, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{client.name}</CardTitle>
                <Badge 
                  variant={
                    client.status === 'success' ? 'success' :
                    client.status === 'warning' ? 'warning' :
                    client.status === 'info' ? 'info' : 'default'
                  }
                  className="text-xs w-fit"
                >
                  {client.support}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {client.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground">
                      • {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            准备体验32x效率提升？
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            从需求分析到项目部署，VibeCLI 2.0让AI真正理解你的开发意图，
            自主完成复杂的全栈项目构建任务。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/demo">
                <Play className="mr-2 h-5 w-5" />
                在线体验Demo
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">
                <Download className="mr-2 h-5 w-5" />
                快速开始
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}