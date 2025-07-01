'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  HelpCircle,
  Search,
  MessageSquare,
  Mail,
  Github,
  Book,
  Video,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Phone,
  Users,
  Zap,
  Bug,
  Settings,
  Globe,
  Download,
  ExternalLink,
  ChevronRight,
  Star,
  CreditCard
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const supportChannels = [
  {
    type: '在线文档',
    icon: Book,
    description: '完整的使用文档和API参考',
    response: '即时',
    availability: '7x24小时',
    color: 'from-blue-500 to-cyan-500',
    actions: [
      { label: '快速开始', href: '/docs', icon: Zap },
      { label: 'API文档', href: '/docs/api', icon: FileText },
      { label: '最佳实践', href: '/docs/best-practices', icon: Star }
    ]
  },
  {
    type: '社区支持',
    icon: Users,
    description: 'GitHub讨论区和社区问答',
    response: '2-24小时',
    availability: '社区驱动',
    color: 'from-green-500 to-emerald-500',
    actions: [
      { label: 'GitHub讨论', href: 'https://github.com/vibetemplate/vibecli/discussions', icon: MessageSquare },
      { label: '问题反馈', href: 'https://github.com/vibetemplate/vibecli/issues', icon: Bug },
      { label: '功能建议', href: 'https://github.com/vibetemplate/vibecli/issues/new', icon: HelpCircle }
    ]
  },
  {
    type: '邮件支持',
    icon: Mail,
    description: '专业技术支持团队邮件回复',
    response: '24小时内',
    availability: '工作日',
    color: 'from-orange-500 to-red-500',
    actions: [
      { label: '技术咨询', href: 'mailto:wutongci@gmail.com?subject=VibeCLI技术咨询', icon: Mail },
      { label: '问题报告', href: 'mailto:wutongci@gmail.com?subject=VibeCLI问题报告', icon: Bug },
      { label: '合作咨询', href: 'mailto:wutongci@gmail.com?subject=VibeCLI合作咨询', icon: Users }
    ]
  },
  {
    type: '企业支持',
    icon: Phone,
    description: '企业级专属技术支持服务',
    response: '2小时内',
    availability: '7x24小时',
    color: 'from-purple-500 to-pink-500',
    actions: [
      { label: '联系销售', href: '/contact', icon: Phone },
      { label: '企业咨询', href: 'mailto:wutongci@gmail.com?subject=企业服务咨询', icon: Mail },
      { label: '定制开发', href: '/contact', icon: Settings }
    ]
  }
];

const faqCategories = [
  {
    category: '安装和配置',
    icon: Download,
    faqs: [
      {
        question: '如何安装VibeCLI？',
        answer: '使用npm全局安装：npm install -g vibe-cli-tool@latest。确保您的Node.js版本在16以上。',
        tags: ['安装', '环境']
      },
      {
        question: '支持哪些操作系统？',
        answer: 'VibeCLI支持Windows、macOS和Linux操作系统。推荐使用最新版本的操作系统以获得最佳体验。',
        tags: ['系统兼容性']
      },
      {
        question: '如何配置AI客户端？',
        answer: '查看客户端配置指南，选择适合的AI客户端（Claude Desktop、Cursor等）并按照说明配置MCP连接。',
        tags: ['配置', 'MCP']
      },
      {
        question: 'API密钥在哪里获取？',
        answer: '登录VibeCLI控制台，在设置页面可以生成和管理您的API密钥。请妥善保管您的密钥。',
        tags: ['API', '认证']
      }
    ]
  },
  {
    category: '使用问题',
    icon: HelpCircle,
    faqs: [
      {
        question: '项目生成失败怎么办？',
        answer: '检查网络连接、API密钥有效性，确认需求描述清晰。如果问题持续，请查看错误日志或联系技术支持。',
        tags: ['故障排除', '生成']
      },
      {
        question: '生成的项目如何部署？',
        answer: 'VibeCLI支持多平台部署，使用deployment_manager工具可以一键部署到Vercel、Netlify等平台。',
        tags: ['部署', '平台']
      },
      {
        question: '可以自定义项目模板吗？',
        answer: '可以！VibeCLI支持自定义模板。您可以创建自己的模板或在现有模板基础上修改。',
        tags: ['模板', '自定义']
      },
      {
        question: '如何添加新功能到现有项目？',
        answer: '使用feature_composer工具，描述您需要添加的功能，系统会智能集成到现有项目中。',
        tags: ['功能', '集成']
      }
    ]
  },
  {
    category: '计费和订阅',
    icon: CreditCard,
    faqs: [
      {
        question: '免费版有什么限制？',
        answer: '免费版每月可生成3个项目，包含基础模板库和标准部署支持。升级到专业版可获得更多功能。',
        tags: ['免费版', '限制']
      },
      {
        question: '如何升级到专业版？',
        answer: '访问计费页面选择专业版套餐，支持多种支付方式。升级后立即生效，享受更多项目配额和高级功能。',
        tags: ['升级', '专业版']
      },
      {
        question: '可以随时取消订阅吗？',
        answer: '是的，您可以随时取消订阅。取消后在当前计费周期结束前仍可使用付费功能。',
        tags: ['取消', '订阅']
      },
      {
        question: '支持哪些支付方式？',
        answer: '支持信用卡、PayPal、支付宝等多种支付方式。企业用户可申请发票和对公转账。',
        tags: ['支付', '发票']
      }
    ]
  },
  {
    category: '技术集成',
    icon: Settings,
    faqs: [
      {
        question: '如何集成到现有工作流？',
        answer: 'VibeCLI提供完整的API和CLI工具，可以轻松集成到CI/CD流水线和现有开发工作流中。',
        tags: ['集成', 'API']
      },
      {
        question: 'MCP协议是什么？',
        answer: 'Model Context Protocol是AI模型与外部工具交互的标准化协议。VibeCLI基于MCP实现与AI客户端的通信。',
        tags: ['MCP', '协议']
      },
      {
        question: '支持哪些编程语言？',
        answer: 'VibeCLI主要支持JavaScript/TypeScript生态，包括React、Next.js、Vue.js等框架。',
        tags: ['语言', '框架']
      },
      {
        question: '如何贡献代码？',
        answer: 'VibeCLI是开源项目，欢迎贡献代码。请查看贡献指南了解详细流程和代码规范。',
        tags: ['开源', '贡献']
      }
    ]
  }
];

const troubleshootingSteps = [
  {
    issue: '安装失败',
    steps: [
      '检查Node.js版本（需要16+）',
      '清除npm缓存：npm cache clean --force',
      '使用cnpm或yarn替代npm',
      '检查网络连接和防火墙设置'
    ],
    solution: '如果问题持续，请提供错误日志联系技术支持'
  },
  {
    issue: 'API调用超时',
    steps: [
      '检查网络连接稳定性',
      '验证API密钥是否正确',
      '确认请求参数格式正确',
      '尝试减少请求复杂度'
    ],
    solution: '大型项目生成可能需要更长时间，请耐心等待'
  },
  {
    issue: '生成项目错误',
    steps: [
      '检查需求描述是否清晰明确',
      '确认选择的技术栈兼容性',
      '验证项目名称符合命名规范',
      '检查磁盘空间是否充足'
    ],
    solution: '提供详细的错误信息有助于快速定位问题'
  },
  {
    issue: '部署失败',
    steps: [
      '检查目标平台配置信息',
      '验证环境变量设置正确',
      '确认部署权限和凭证',
      '检查项目构建是否成功'
    ],
    solution: '每个部署平台有不同要求，请查看相应平台文档'
  }
];

const responseTime = {
  docs: '即时',
  community: '2-24小时',
  email: '24小时内', 
  enterprise: '2小时内'
};

export function SupportCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(faqCategories);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredFaqs(faqCategories);
      return;
    }

    const filtered = faqCategories.map(category => ({
      ...category,
      faqs: category.faqs.filter(faq => 
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase()) ||
        faq.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    })).filter(category => category.faqs.length > 0);

    setFilteredFaqs(filtered);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">
          技术支持
        </Badge>
        <h1 className="text-4xl font-bold">
          VibeCLI 支持中心
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          获取专业的技术支持，解决使用过程中的各种问题。我们提供多种支持渠道，确保您获得及时有效的帮助
        </p>
      </div>

      {/* Quick Search */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
        <CardContent className="p-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-4">
              快速搜索解决方案
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜索问题、关键词或错误信息..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              尝试搜索：安装失败、API错误、部署问题、配置方法
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Support Channels */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">支持渠道</h2>
          <p className="text-lg text-muted-foreground">
            选择最适合您的支持方式，获得专业帮助
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${channel.color}`}>
                    <channel.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{channel.type}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                    <div className="flex gap-4 mt-2 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>响应时间: {channel.response}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        <span>{channel.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {channel.actions.map((action, actionIndex) => (
                    <Button
                      key={actionIndex}
                      variant="outline"
                      className="w-full justify-between"
                      asChild
                    >
                      <Link href={action.href} target={action.href.startsWith('http') ? '_blank' : undefined}>
                        <div className="flex items-center gap-2">
                          <action.icon className="h-4 w-4" />
                          {action.label}
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* FAQ Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">常见问题</h2>
          <p className="text-lg text-muted-foreground">
            查找常见问题的解答，快速解决您的疑问
          </p>
        </div>

        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {faqCategories.map((category, index) => (
              <TabsTrigger key={index} value={index.toString()} className="flex items-center gap-2">
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.category}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {filteredFaqs.map((category, categoryIndex) => (
            <TabsContent key={categoryIndex} value={categoryIndex.toString()} className="mt-6">
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <Card key={faqIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{faq.answer}</p>
                      <div className="flex flex-wrap gap-1">
                        {faq.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Separator />

      {/* Troubleshooting Guide */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">故障排除</h2>
            <p className="text-muted-foreground">常见问题的诊断步骤和解决方案</p>
          </div>
        </div>

        <div className="grid gap-6">
          {troubleshootingSteps.map((troubleshoot, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5 text-red-600" />
                  {troubleshoot.issue}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">诊断步骤：</h4>
                  <div className="space-y-2">
                    {troubleshoot.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-900 dark:text-green-100">解决方案</p>
                      <p className="text-sm text-green-700 dark:text-green-300">{troubleshoot.solution}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            需要进一步帮助？
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            如果您没有找到所需的答案，我们的技术支持团队随时为您提供帮助。
            请通过以下方式联系我们，我们会尽快回复。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                联系技术支持
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/vibetemplate/vibecli/discussions" target="_blank">
                <Users className="mr-2 h-4 w-4" />
                加入社区讨论
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">
                <Book className="mr-2 h-4 w-4" />
                查看完整文档
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}