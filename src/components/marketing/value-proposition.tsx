'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MessageSquare, 
  Brain, 
  Zap, 
  Shield, 
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle,
  Star
} from 'lucide-react';
import Link from 'next/link';

const comparisonData = [
  {
    feature: '学习成本',
    traditional: '需要记忆复杂命令',
    vibecli: '自然语言交互',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
  {
    feature: '错误率',
    traditional: '容易参数配置错误',
    vibecli: 'AI智能验证',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
  {
    feature: '开发时间',
    traditional: '320分钟手动配置',
    vibecli: '10分钟智能生成',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
  {
    feature: '灵活性',
    traditional: '固定模板限制',
    vibecli: '动态适应需求',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
  {
    feature: '安全性',
    traditional: '手动安全配置',
    vibecli: 'OAuth 2.1 + RFC 8707',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
];

const mcpFeatures = [
  {
    title: 'Streamable HTTP Transport',
    description: '支持渐进式项目生成和实时反馈',
    icon: MessageSquare,
    details: ['会话状态管理', '双向通信', 'SSE流式响应', '断线重连机制'],
  },
  {
    title: '四大核心MCP工具',
    description: '智能分析、模板生成、功能合成、部署管理',
    icon: Brain,
    details: ['project_analyzer', 'template_generator', 'feature_composer', 'deployment_manager'],
  },
  {
    title: '智能能力协商',
    description: 'AI递归决策和自主任务分解',
    icon: Zap,
    details: ['Resources管理', 'Tools调用', 'Prompts预设', 'Sampling决策'],
  },
  {
    title: 'OAuth 2.1安全层',
    description: '企业级安全保障和令牌管理',
    icon: Shield,
    details: ['RFC 8707保护', '资源元数据', '强化合规', 'audience验证'],
  },
];

const clientSupport = [
  { name: 'Claude Desktop', status: '完全支持', color: 'success' },
  { name: 'Cursor IDE', status: '完全支持', color: 'success' },
  { name: 'Cline', status: '推荐2025-03-26', color: 'warning' },
  { name: 'Cherry Studio', status: '开发中', color: 'info' },
  { name: 'Trae', status: '多版本支持', color: 'success' },
  { name: 'DeepChat', status: '支持新特性', color: 'success' },
  { name: 'Chatbot UI', status: 'API兼容', color: 'success' },
  { name: 'Custom Apps', status: '全版本支持', color: 'success' },
];

export function ValueProposition() {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            核心价值升级
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            颠覆性技术升级带来的
            <span className="gradient-text"> 全新体验</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            基于官方MCP协议的深度集成，实现从传统CLI到智能对话驱动的根本性进化
          </p>
        </div>

        {/* Before vs After Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">传统CLI vs VibeCLI 2.0 MCP</h3>
            <p className="text-muted-foreground">一目了然的对比，看见技术革新的力量</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">对比维度</th>
                  <th className="text-left p-4 font-medium text-red-600">传统VibeCLI 1.0</th>
                  <th className="text-left p-4 font-medium text-green-600">VibeCLI 2.0 MCP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">{item.feature}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-red-600">
                        <item.traditionalIcon className="h-4 w-4" />
                        {item.traditional}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-green-600">
                        <item.vibecliIcon className="h-4 w-4" />
                        {item.vibecli}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MCP Core Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">MCP协议核心特性</h3>
            <p className="text-muted-foreground">基于官方Model Context Protocol 2025-06-18版本</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mcpFeatures.map((feature, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Ecosystem Support */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">8大客户端生态全面支持</h3>
            <p className="text-muted-foreground">与主流AI开发工具深度集成，随时随地使用VibeCLI</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clientSupport.map((client, index) => (
              <Card key={index} className="text-center p-4 card-hover">
                <h4 className="font-medium mb-2">{client.name}</h4>
                <Badge 
                  variant={
                    client.color === 'success' ? 'success' :
                    client.color === 'warning' ? 'warning' :
                    client.color === 'info' ? 'info' : 'default'
                  }
                  className="text-xs"
                >
                  {client.status}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Efficiency Metrics */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">效率提升数据</h3>
              <p className="text-muted-foreground">真实的性能提升，量化的开发效率</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">32x</div>
                <div className="text-lg font-medium mb-1">效率提升倍数</div>
                <div className="text-sm text-muted-foreground">从320分钟降至10分钟</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">85%+</div>
                <div className="text-lg font-medium mb-1">首次生成成功率</div>
                <div className="text-sm text-muted-foreground">AI智能理解需求</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">95%+</div>
                <div className="text-lg font-medium mb-1">会话恢复成功率</div>
                <div className="text-sm text-muted-foreground">断线重连保障</div>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="text-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/demo">
                  立即体验32x效率提升
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}