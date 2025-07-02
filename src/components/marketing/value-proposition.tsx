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
  Star,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const comparisonData = [
  {
    feature: '项目初始化',
    traditional: '手动配置各种依赖和配置文件',
    vibecli: '自然语言描述需求，AI智能分析生成',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
  {
    feature: '技术栈选择',
    traditional: '需要经验判断，容易选择不当',
    vibecli: 'AI根据需求推荐最佳技术栈',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
  {
    feature: '开发时间',
    traditional: '几小时到几天的配置时间',
    vibecli: '10分钟生成完整项目结构',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
  {
    feature: '功能扩展',
    traditional: '手动编写和集成新功能',
    vibecli: '对话式添加功能，自动集成',
    traditionalIcon: XCircle,
    vibecliIcon: CheckCircle,
  },
  {
    feature: '部署配置',
    traditional: '复杂的CI/CD和环境配置',
    vibecli: '智能部署管理，一键多平台发布',
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
    title: '五大核心MCP工具',
    description: '智能分析、模板生成、功能合成、部署管理、提示词生成',
    icon: Brain,
    details: ['project_analyzer', 'template_generator', 'feature_composer', 'deployment_manager', 'prompt_generator'],
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
            让<span className="gradient-text">非程序员</span>也能
            <br />
            快速构建全栈应用
          </h2>
          <p className="text-lg text-muted-foreground">
            专为产品经理、运营人员、大学生、创业者、设计师、市场人员、内容创作者、小企业主等非技术背景用户设计，基于MCP协议的AI驱动开发工具
          </p>
        </div>

        {/* Before vs After Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">传统开发方式 vs VibeCLI</h3>
            <p className="text-muted-foreground">一目了然的对比，看见AI驱动开发的力量</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">对比维度</th>
                  <th className="text-left p-4 font-medium text-red-600">传统开发方式</th>
                  <th className="text-left p-4 font-medium text-green-600">VibeCLI MCP</th>
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


        {/* Efficiency Metrics */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">效率提升数据</h3>
              <p className="text-muted-foreground">真实的性能提升，量化的开发效率</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
                <div className="text-lg font-medium mb-1">编程基础要求</div>
                <div className="text-sm text-muted-foreground">自然语言描述需求即可</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">10分钟</div>
                <div className="text-lg font-medium mb-1">项目生成时间</div>
                <div className="text-sm text-muted-foreground">从想法到可运行项目</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">8+</div>
                <div className="text-lg font-medium mb-1">客户端生态</div>
                <div className="text-sm text-muted-foreground">
                  <Link href="/clients" className="text-blue-600 hover:underline">
                    查看配置指南 →
                  </Link>
                </div>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <Link href="/demo">
                    立即体验零门槛开发
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/story">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    了解创新故事
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                从DXT启发到VibeCLI诞生的技术创新之路
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}