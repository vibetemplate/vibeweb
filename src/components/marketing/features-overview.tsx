'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Store, 
  Cloud, 
  Globe, 
  GraduationCap, 
  Shield, 
  Brain,
  ArrowRight
} from 'lucide-react';

const coreFeatures = [
  {
    id: 'template_store',
    title: '模板商店生态系统',
    description: '远程模板市场，数字签名保护，社区驱动',
    icon: Store,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'deploy_generator',
    title: '智能部署生成器',
    description: '多平台支持，CI/CD自动化，最佳实践集成',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'i18n_support',
    title: '国际化支持',
    description: '多语言CLI界面，本地化模板，区域化配置',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'learning_system',
    title: '交互式学习系统',
    description: '分步教程指导，实时代码提示，知识库集成',
    icon: GraduationCap,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'enterprise_security',
    title: '企业级安全',
    description: 'Ed25519数字签名，SHA-256哈希验证，权限管理',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'mcp_context',
    title: 'MCP智能上下文',
    description: 'AI决策引擎，渐进式理解，智能降级处理',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
  },
];

export function FeaturesOverview() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            六大核心特性
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">全方位能力</span>
            <br />
            重新定义开发体验
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从模板管理到智能部署，从国际化支持到企业级安全，VibeCLI为现代化开发提供完整解决方案
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreFeatures.map((feature, index) => (
            <Card 
              key={feature.id} 
              className="card-hover group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              集成五大MCP智能工具，提供完整的AI驱动开发体验
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/features">
                  查看详细功能
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  在线体验Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}