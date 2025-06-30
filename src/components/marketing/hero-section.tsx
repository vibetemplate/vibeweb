'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Clock, 
  Shield, 
  Users,
  Play,
  Download,
  Star,
  GitBranch
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { label: '效率提升', value: '32x', icon: Zap },
  { label: '开发时间', value: '10分钟', icon: Clock },
  { label: '支持客户端', value: '8+', icon: Users },
  { label: 'GitHub Stars', value: '2.3k+', icon: Star },
];

const highlights = [
  {
    title: '零学习成本',
    description: '自然语言交互，告别复杂命令',
    icon: '🗣️',
  },
  {
    title: '智能适应性',
    description: 'AI理解意图，自主决策最优方案',
    icon: '🧠',
  },
  {
    title: '32x效率提升',
    description: '从320分钟降至10分钟',
    icon: '⚡',
  },
  {
    title: '生态兼容性',
    description: '支持8大主流MCP客户端平台',
    icon: '🌐',
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />

      <div className="container relative">
        <div className="section-padding">
          {/* Announcement Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4" />
              全新发布：VibeCLI 2.0 MCP版本
              <ArrowRight className="ml-2 h-4 w-4" />
            </Badge>
          </div>

          {/* Main Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              从
              <span className="gradient-text"> 命令驱动 </span>
              到
              <br />
              <span className="gradient-text">智能对话驱动</span>
              的
              <br />
              革命性升级
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              VibeCLI 2.0基于MCP协议的全面重构，让AI真正理解开发者意图，
              自主完成复杂的全栈项目构建任务。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="xl" variant="gradient" asChild>
                <Link href="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  在线体验Demo
                </Link>
              </Button>
              
              <Button size="xl" variant="outline" asChild>
                <Link href="/docs">
                  <Download className="mr-2 h-5 w-5" />
                  快速开始
                </Link>
              </Button>
            </div>

            {/* Quick Install */}
            <div className="max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-2">快速安装</p>
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-4">
                  <code className="text-green-400 text-sm font-mono">
                    npm install -g vibe-cli-tool@latest
                  </code>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="card-hover">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className={cn(
                  "card-hover",
                  `animate-fade-in-up animation-delay-${index * 200}`
                )}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{highlight.icon}</div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              受到全球开发者和企业团队的信赖
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                <span className="font-medium">GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">5000+ Developers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}