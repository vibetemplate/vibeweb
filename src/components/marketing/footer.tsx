'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Twitter, 
  Mail, 
  Heart,
  Zap,
  MessageSquare,
  BookOpen,
  Users,
  ExternalLink,
  ArrowRight,
  GitBranch
} from 'lucide-react';

const footerLinks = {
  product: [
    { name: '功能特性', href: '/features' },
    { name: '在线演示', href: '/demo' },
    { name: '使用案例', href: '/showcase' },
    { name: '定价方案', href: '/pricing' },
  ],
  resources: [
    { name: '快速开始', href: '/docs' },
    { name: 'API 文档', href: '/docs/api' },
    { name: 'MCP 协议', href: '/docs/mcp' },
    { name: '最佳实践', href: '/docs/best-practices' },
    { name: '更新日志', href: '/changelog' },
  ],
  community: [
    { name: 'GitHub', href: 'https://github.com/vibetemplate/vibecli', external: true },
    { name: '社区论坛', href: 'https://github.com/vibetemplate/vibecli/discussions', external: true },
    { name: '问题反馈', href: 'https://github.com/vibetemplate/vibecli/issues', external: true },
    { name: '贡献指南', href: '/docs/contributing' },
  ],
  support: [
    { name: '技术支持', href: '/support' },
    { name: '客户端下载', href: '/download' },
    { name: '常见问题', href: '/faq' },
    { name: '联系我们', href: '/contact' },
  ],
};

const targetUsers = [
  { name: '产品经理', icon: Users, description: '快速验证产品原型' },
  { name: '创业者', icon: Zap, description: '低成本快速试错' },
  { name: '大学生', icon: BookOpen, description: '学习全栈开发' },
  { name: '设计师', icon: Heart, description: '让设计可视化' },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">VibeCLI 2.0</span>
                <Badge variant="gradient" className="text-xs">MCP</Badge>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                基于官方MCP协议的AI驱动全栈开发工具，让非程序员也能快速构建专业级Web应用。
                零门槛、高效率、智能化。
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="text-sm">
                  <span className="font-medium text-foreground">目标用户：</span>
                  <span className="text-muted-foreground">产品经理、创业者、大学生、设计师、运营人员等</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-foreground">技术要求：</span>
                  <span className="text-muted-foreground">零编程基础，自然语言描述需求即可</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://twitter.com/vibecli" target="_blank">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="mailto:support@vibecli.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">产品</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold mb-4">资源</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community & Support */}
            <div>
              <h3 className="font-semibold mb-4">社区 & 支持</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {link.name}
                      {link.external && <ExternalLink className="h-3 w-3" />}
                    </Link>
                  </li>
                ))}
                <Separator className="my-3" />
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Target Users Section */}
        <div className="py-8 border-t">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">专为非技术用户设计</h3>
            <p className="text-sm text-muted-foreground">无需编程基础，人人都能成为全栈开发者</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetUsers.map((user) => (
              <div key={user.name} className="text-center p-4 rounded-lg bg-background">
                <user.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h4 className="font-medium text-sm mb-1">{user.name}</h4>
                <p className="text-xs text-muted-foreground">{user.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 VibeCLI. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  隐私政策
                </Link>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  服务条款
                </Link>
                <Link href="/license" className="hover:text-foreground transition-colors">
                  开源协议
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-muted-foreground">for developers worldwide</span>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="py-8 border-t">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">准备开始您的第一个项目？</h3>
            <p className="text-muted-foreground mb-4">10分钟内从想法变成可运行的Web应用</p>
            <Button variant="gradient" asChild>
              <Link href="/demo">
                立即开始体验
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}