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
  { label: '编程基础要求', value: '0', icon: Zap },
  { label: '项目生成时间', value: '10分钟', icon: Clock },
  { label: '支持客户端', value: '8+', icon: Users },
  { label: 'NPM 版本', value: 'v1.2.8', icon: Star },
];

const highlights = [
  {
    title: '零编程基础',
    description: '自然语言描述需求，AI自动生成代码',
    icon: '🗣️',
  },
  {
    title: 'MCP协议驱动',
    description: 'AI理解意图，智能分析和生成项目',
    icon: '🧠',
  },
  {
    title: '10分钟建站',
    description: '从想法到可运行的Web应用',
    icon: '⚡',
  },
  {
    title: '8大客户端支持',
    description: 'Claude Desktop、Cursor等主流AI工具',
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
              让
              <span className="gradient-text">非程序员</span>
              也能
              <br />
              <span className="gradient-text">10分钟建站</span>
              <br />
              的AI驱动工具
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              VibeCLI 2.0基于MCP协议，专为产品经理、创业者、大学生等非技术用户设计。
              用自然语言描述想法，AI自动生成完整的Web应用。
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