import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Settings, 
  Terminal, 
  Users,
  Download,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: '客户端配置 - VibeCLI 2.0',
  description: '选择你喜欢的AI客户端，获取详细的配置指南和下载链接。',
};

const clients = [
  {
    id: 'claude-desktop',
    name: 'Claude Desktop',
    icon: MessageSquare,
    description: '原生AI对话，自然语言描述需求，最直观的使用体验',
    status: '完全支持',
    statusColor: 'success',
    downloadUrl: 'https://claude.ai/download',
    features: ['原生AI对话', '自然语言描述', 'Elicitation交互', '智能补全'],
    difficulty: '简单',
    setupTime: '2分钟',
    popular: true,
    available: true
  },
  {
    id: 'cursor',
    name: 'Cursor IDE',
    icon: Settings,
    description: '代码编辑集成，实时生成调试，开发者首选',
    status: '完全支持',
    statusColor: 'success',
    downloadUrl: 'https://cursor.sh/',
    features: ['代码编辑集成', '实时生成调试', '资源链接导航', 'Git集成'],
    difficulty: '简单',
    setupTime: '3分钟',
    popular: true,
    available: true
  },
  {
    id: 'chatbox',
    name: 'Chatbox',
    icon: MessageSquare,
    description: '跨平台桌面客户端，界面简洁，支持多种AI模型',
    status: '桌面客户端',
    statusColor: 'success',
    downloadUrl: 'https://chatbox.app/',
    features: ['桌面应用', '跨平台支持', '多模型切换', '对话管理'],
    difficulty: '简单',
    setupTime: '3分钟',
    popular: false,
    available: true
  },
  {
    id: 'cherry-studio',
    name: 'Cherry Studio',
    icon: Settings,
    description: '可视化界面，拖拽配置，直接可用无需复杂设置',
    status: '直接可用',
    statusColor: 'success',
    downloadUrl: 'https://github.com/kangfenmao/cherry-studio',
    features: ['可视化界面', '拖拽配置', '项目预览', 'MCP内置'],
    difficulty: '简单',
    setupTime: '1分钟',
    popular: false,
    available: true
  },
  {
    id: 'cline',
    name: 'Cline',
    icon: Terminal,
    description: '终端内管理，向后兼容，推荐使用特定版本',
    status: '兼容模式',
    statusColor: 'warning',
    downloadUrl: 'https://github.com/saoudrizwan/claude-dev',
    features: ['终端内管理', '向后兼容', '渐进升级', '命令行操作'],
    difficulty: '中等',
    setupTime: '5分钟',
    popular: false,
    available: true
  },
  {
    id: 'trae',
    name: 'Trae',
    icon: Settings,
    description: 'CI/CD集成，安全令牌，多版本支持，企业级功能',
    status: '多版本支持',
    statusColor: 'success',
    downloadUrl: 'https://github.com/trae-ai/trae',
    features: ['CI/CD集成', '安全令牌', '协议协商', '企业部署'],
    difficulty: '复杂',
    setupTime: '10分钟',
    popular: false,
    available: true
  },
  {
    id: 'deepchat',
    name: 'DeepChat',
    icon: MessageSquare,
    description: '深度讨论，架构设计，技术支持丰富',
    status: '配置指南准备中',
    statusColor: 'info',
    downloadUrl: '#',
    features: ['深度讨论', '架构设计', '最佳实践', '技术支持'],
    difficulty: '中等',
    setupTime: '待更新',
    popular: false,
    available: false
  },
  {
    id: 'custom',
    name: 'Custom Apps',
    icon: Users,
    description: '自定义应用集成，完整API文档，企业级集成',
    status: '完整API',
    statusColor: 'success',
    downloadUrl: '/docs',
    features: ['定制平台', '企业集成', '团队协作', 'API文档'],
    difficulty: '复杂',
    setupTime: '15分钟',
    popular: false,
    available: true
  }
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              AI客户端配置
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              选择你的<span className="gradient-text">AI客户端</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              8大主流AI客户端任选其一，每个客户端都有详细的配置指南。
              选择最适合你的工作流程的客户端开始使用VibeCLI。
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {clients.map((client) => (
              <Card 
                key={client.id} 
                className={`card-hover relative ${client.popular ? 'ring-2 ring-blue-200 dark:ring-blue-800' : ''} ${!client.available ? 'opacity-60' : ''}`}
              >
                {client.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="gradient" className="text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      推荐
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <client.icon className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-lg">{client.name}</CardTitle>
                        <Badge 
                          variant={
                            client.statusColor === 'success' ? 'success' :
                            client.statusColor === 'warning' ? 'warning' :
                            client.statusColor === 'info' ? 'info' : 'default'
                          }
                          className="text-xs mt-1"
                        >
                          {client.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="h-3 w-3" />
                        {client.setupTime}
                      </div>
                      <div className="text-xs">
                        {client.difficulty}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="mb-4">
                    {client.description}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-4">
                    {client.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        {feature}
                      </div>
                    ))}
                    {client.features.length > 3 && (
                      <div className="text-xs text-muted-foreground">
                        +{client.features.length - 3} 更多功能
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {client.available ? (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <Link href={`/clients/${client.id}`}>
                          <Settings className="h-3 w-3 mr-1" />
                          配置指南
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        disabled
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        即将推出
                      </Button>
                    )}
                    
                    {client.downloadUrl !== '#' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <Link 
                          href={client.downloadUrl}
                          {...(client.downloadUrl.startsWith('http') && {
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          })}
                        >
                          <Download className="h-3 w-3" />
                          {client.downloadUrl.startsWith('http') && (
                            <ExternalLink className="h-3 w-3 ml-1" />
                          )}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                不确定选择哪个客户端？
              </h3>
              <p className="text-muted-foreground mb-6">
                推荐非程序员用户选择 <strong>Claude Desktop</strong> 或 <strong>Cursor IDE</strong>，
                配置简单，功能强大，有详细的图文指南。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="/clients/claude-desktop">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Claude Desktop 配置
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/clients/cursor">
                    <Settings className="mr-2 h-4 w-4" />
                    Cursor IDE 配置
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}