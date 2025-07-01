'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MessageSquare, 
  Settings, 
  Terminal, 
  Users,
  Download,
  Copy,
  ExternalLink,
  ArrowRight,
  Zap,
  CheckCircle
} from 'lucide-react';

const clients = [
  {
    name: 'Claude Desktop',
    icon: MessageSquare,
    description: '原生AI对话，自然语言描述需求',
    status: '完全支持',
    statusColor: 'success',
    downloadUrl: 'https://claude.ai/download',
    configNote: '添加MCP配置即可使用',
    popular: true
  },
  {
    name: 'Cursor IDE',
    icon: Settings,
    description: '代码编辑集成，实时生成调试',
    status: '完全支持',
    statusColor: 'success',
    downloadUrl: 'https://cursor.sh/',
    configNote: '在.cursor/mcp.json中配置',
    popular: true
  },
  {
    name: 'Chatbox',
    icon: MessageSquare,
    description: '桌面客户端，跨平台支持',
    status: '桌面客户端',
    statusColor: 'success',
    downloadUrl: 'https://chatbox.app/',
    configNote: '配置界面添加MCP服务器'
  },
  {
    name: 'Cherry Studio',
    icon: Settings,
    description: '可视化界面，拖拽配置',
    status: '直接可用',
    statusColor: 'success',
    downloadUrl: 'https://github.com/kangfenmao/cherry-studio',
    configNote: '内置MCP支持，直接使用'
  },
  {
    name: 'DeepChat',
    icon: MessageSquare,
    description: '深度讨论，架构设计',
    status: '技术支持',
    statusColor: 'success',
    downloadUrl: '#',
    configNote: '支持MCP协议的聊天客户端'
  },
  {
    name: 'Cline',
    icon: Terminal,
    description: '终端内管理，向后兼容',
    status: '兼容模式',
    statusColor: 'warning',
    downloadUrl: 'https://github.com/saoudrizwan/claude-dev',
    configNote: '推荐使用2025-03-26版本'
  },
  {
    name: 'Trae',
    icon: Settings,
    description: 'CI/CD集成，安全令牌',
    status: '多版本支持',
    statusColor: 'success',
    downloadUrl: 'https://github.com/trae-ai/trae',
    configNote: '企业级部署和协议协商'
  },
  {
    name: 'Custom Apps',
    icon: Users,
    description: '定制平台，企业集成',
    status: '完整API',
    statusColor: 'success',
    downloadUrl: '/docs',
    configNote: '完整的MCP API文档'
  }
];

const installCommand = 'npm install -g vibe-cli-tool@latest';

export function QuickInstall() {
  const [copiedCommand, setCopiedCommand] = React.useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            快速开始
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            两步开始使用
            <span className="gradient-text"> VibeCLI 2.0</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            安装工具，配置客户端，立即体验AI驱动的零门槛开发
          </p>
        </div>

        {/* Step 1: Install */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-2xl font-bold mb-2">安装 VibeCLI</h3>
            <p className="text-muted-foreground">一行命令全局安装</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg flex items-center justify-between">
                <code className="text-green-400 font-mono text-sm sm:text-base flex-1">
                  {installCommand}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyCommand}
                  className="ml-2 text-slate-400 hover:text-white"
                >
                  {copiedCommand ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                当前版本：v1.2.8 | 或使用 npx 临时运行
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-16" />

        {/* Step 2: Choose Client */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-2xl font-bold mb-2">选择AI客户端</h3>
            <p className="text-muted-foreground">8大客户端生态全面支持，任选其一配置使用</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => (
              <Card key={index} className={`card-hover ${client.popular ? 'ring-2 ring-blue-200 dark:ring-blue-800' : ''}`}>
                {client.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="gradient" className="text-xs">
                      推荐
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <client.icon className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-base">{client.name}</CardTitle>
                      <Badge 
                        variant={
                          client.statusColor === 'success' ? 'success' :
                          client.statusColor === 'warning' ? 'warning' : 'default'
                        }
                        className="text-xs mt-1"
                      >
                        {client.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-3">
                    {client.description}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground mb-4">
                    {client.configNote}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <Link href="/clients">
                      <Settings className="h-3 w-3 mr-1" />
                      配置指南
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              配置完成？开始你的第一个项目！
            </h3>
            <p className="text-muted-foreground mb-6">
              在AI客户端中说："我想创建一个电商网站"，看VibeCLI如何理解并生成完整项目
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" asChild>
                <Link href="/demo">
                  <Zap className="mr-2 h-4 w-4" />
                  在线体验Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  详细配置指南
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}