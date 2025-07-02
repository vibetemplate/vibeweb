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

const coreFeatures = [
  {
    id: 'template_store',
    title: '模板商店生态系统',
    subtitle: '🏪 Template Store Ecosystem',
    description: '远程模板市场，安全安装验证，数字签名保护。支持本地模板管理、离线开发和版本化管理，通过智能模板匹配算法为项目推荐最佳模板。社区驱动的开源生态系统，持续更新和优化。',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    features: [
      '远程模板市场 - 丰富的模板库，覆盖各种应用类型',
      '安全安装验证 - Ed25519数字签名保护',
      '数字签名保护 - 确保模板完整性和安全性',
      '本地模板管理 - 支持离线开发和自定义模板',
      '离线开发支持 - 无网络环境下正常使用',
      '版本化管理 - 模板版本控制和升级管理',
      '智能模板匹配 - 多层次匹配策略，精准推荐',
      '社区驱动生态 - 开源贡献，持续演进'
    ],
    demo: {
      input: 'vibecli template search ecommerce',
      output: {
        found: '12个模板',
        recommended: 'nextjs-stripe-ecommerce',
        rating: '4.8/5 (156 reviews)',
        security: 'Ed25519数字签名验证通过',
        features: ['Stripe支付', 'Prisma ORM', 'NextAuth'],
      }
    },
    documentation: {
      overview: '/docs/template-store',
      api: '/docs/api#template-store',
      examples: '/docs/examples/template-store',
      security: '/docs/security/digital-signature'
    }
  },
  {
    id: 'deploy_generator',
    title: '智能部署生成器',
    subtitle: '🧠 Intelligent Deploy Generator',
    description: '革命性的多平台部署解决方案，支持Vercel、Netlify、AWS、Docker等主流平台的一键配置。智能识别项目类型和依赖关系，自动生成最优的部署配置和CI/CD流程，集成安全性和性能优化最佳实践。',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    features: [
      '多平台支持 - Vercel、Netlify、AWS、Docker全覆盖',
      '一键配置 - 自动生成平台特定的配置文件',
      '环境自动检测 - 智能识别技术栈和依赖',
      '智能分析 - 项目复杂度和资源需求评估',
      'CI/CD集成 - 自动生成GitHub Actions/GitLab CI',
      '安全配置 - HTTPS、CORS、CSP自动设置',
      '性能优化 - CDN、缓存、压缩策略优化',
      '监控集成 - 自动配置性能和错误监控'
    ],
    demo: {
      input: 'vibecli deploy --platform vercel --env production',
      output: {
        platform: 'Vercel',
        config: 'vercel.json自动生成',
        env: '环境变量安全配置',
        ssl: 'HTTPS自动启用',
        cdn: '全球CDN优化',
        monitoring: '性能监控集成',
      }
    },
    documentation: {
      overview: '/docs/deploy-generator',
      platforms: '/docs/deploy/platforms',
      config: '/docs/deploy/configuration',
      cicd: '/docs/deploy/ci-cd'
    }
  },
  {
    id: 'i18n_support',
    title: '国际化支持',
    subtitle: '🌍 Internationalization Support',
    description: '多语言CLI界面，本地化模板，区域化配置，社区翻译',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    features: [
      '多语言CLI界面',
      '中文、英文界面切换',
      '本地化模板',
      '适应不同地区的开发习惯',
      '区域化配置',
      '自动适配时区、货币等本地设置',
      '社区翻译',
      '开放式翻译贡献机制'
    ],
    demo: {
      input: 'vibecli config set language zh-CN',
      output: {
        language: '界面语言已切换为中文',
        templates: '本地化模板推荐',
        timezone: '自动检测为Asia/Shanghai',
        currency: '默认货币设置为CNY',
        region: '中国区域优化配置',
      }
    }
  },
  {
    id: 'learning_system',
    title: '交互式学习系统',
    subtitle: '🎓 Interactive Learning System',
    description: '分步教程指导，实时代码提示，错误诊断，知识库集成',
    icon: Brain,
    color: 'from-yellow-500 to-orange-500',
    features: [
      '分步教程指导',
      '内置学习路径，从入门到进阶',
      '实时代码提示',
      '智能代码补全和最佳实践建议',
      '错误诊断',
      '友好的错误信息和解决方案',
      '知识库集成',
      '文档、示例、FAQ一站式查询'
    ],
    demo: {
      input: 'vibecli learn react-hooks',
      output: {
        tutorial: '8步React Hooks教程',
        progress: '当前进度: 3/8',
        nextStep: 'useEffect生命周期',
        tips: '3个最佳实践提示',
        examples: '5个实用代码示例',
      }
    }
  },
  {
    id: 'enterprise_security',
    title: '企业级安全',
    subtitle: '🔒 Enterprise Security',
    description: 'Ed25519数字签名，SHA-256哈希验证，权限管理，安全审计',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    features: [
      'Ed25519数字签名',
      '模板和代码包完整性验证',
      'SHA-256哈希验证',
      '文件传输安全保障',
      '权限管理',
      '细粒度的文件系统访问控制',
      '安全审计',
      '代码生成安全性检查'
    ],
    demo: {
      input: 'vibecli template verify nextjs-template',
      output: {
        signature: 'Ed25519签名验证通过',
        hash: 'SHA-256哈希匹配',
        publisher: '官方认证发布者',
        security: '安全扫描无风险',
        permissions: '最小权限原则',
      }
    }
  },
  {
    id: 'mcp_context',
    title: 'MCP智能上下文',
    subtitle: '🤖 MCP Intelligent Context',
    description: 'AI决策引擎，渐进式理解，智能降级处理，上下文感知',
    icon: MessageSquare,
    color: 'from-indigo-500 to-purple-500',
    features: [
      'AI决策引擎',
      '基于上下文的智能项目分析',
      '渐进式理解',
      '多轮对话构建完整项目画像',
      '智能降级处理',
      '当无完美匹配时提供最佳替代方案',
      '上下文感知',
      '记住用户偏好和项目历史'
    ],
    demo: {
      input: '我想做一个类似抖音的短视频应用',
      output: {
        understanding: '理解度: 85%',
        analysis: '短视频社交平台',
        complexity: '高复杂度项目',
        suggestions: '建议分阶段实现',
        alternatives: '3个简化方案',
        timeline: '预计开发周期12周',
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
  const [activeDemo, setActiveDemo] = React.useState<string>(coreFeatures[0].id);

  return (
    <div className="space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="outline" className="mb-4">
          六大核心特性 + 五大MCP工具
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          六大核心特性
          <span className="gradient-text"> 重新定义</span>
          <br />
          开发体验
        </h1>
        <p className="text-xl text-muted-foreground">
          集成五大MCP智能工具：project_analyzer、template_generator、feature_composer、deployment_manager、prompt_generator，提供完整的AI驱动开发体验
        </p>
      </div>

      {/* Core Features Showcase */}
      <div className="space-y-16">
        {coreFeatures.map((tool, index) => (
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
                    <Link href={`/docs/features/${tool.id.replace(/_/g, '-')}`}>
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

      {/* Five MCP Tools */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            五大核心MCP工具
          </h2>
          <p className="text-lg text-muted-foreground">
            智能分析、模板生成、功能合成、部署管理、提示词生成 - 完整的AI驱动开发流水线
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'project_analyzer',
              title: '项目分析器',
              description: '智能分析用户需求，推荐最佳技术栈和架构',
              icon: Brain,
              features: ['需求分析', '技术栈推荐', '复杂度评估', '时间估算']
            },
            {
              name: 'template_generator',
              title: '模板生成器',
              description: '基于分析结果生成完整项目模板',
              icon: Code,
              features: ['项目生成', '配置文件', '代码模板', '依赖管理']
            },
            {
              name: 'feature_composer',
              title: '功能合成器',
              description: '动态添加和组合复杂功能模块',
              icon: Sparkles,
              features: ['功能集成', '代码合并', '配置更新', '测试生成']
            },
            {
              name: 'deployment_manager',
              title: '部署管理器',
              description: '智能部署配置和多平台发布',
              icon: Cloud,
              features: ['部署配置', 'CI/CD设置', '环境管理', '性能优化']
            },
            {
              name: 'prompt_generator',
              title: '提示词生成器',
              description: 'MCP智能提示词生成，上下文感知',
              icon: MessageSquare,
              features: ['智能提示', '上下文理解', '个性化推荐', '会话管理']
            }
          ].map((tool, index) => (
            <Card key={tool.name} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                    <tool.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 font-mono text-xs">
                      {tool.name}
                    </Badge>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/docs/tools/${tool.name}`}>
                    查看详细文档
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
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