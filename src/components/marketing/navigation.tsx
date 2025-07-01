'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Moon, Sun, Menu, X, Github, Terminal, Zap, BookOpen, Settings, Lightbulb, GitBranch } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  {
    name: '产品',
    href: '/features',
    icon: Zap,
    description: '强大的AI驱动开发功能',
  },
  {
    name: '更新日志',
    href: '/changelog',
    icon: GitBranch,
    description: '产品版本更新和功能演进',
  },
  {
    name: '项目故事',
    href: '/story',
    icon: Lightbulb,
    description: '从DXT启发到VibeCLI的创新故事',
  },
  {
    name: '客户端',
    href: '/clients',
    icon: Settings,
    description: '8大AI客户端配置指南',
  },
  {
    name: '文档',
    href: '/docs',
    icon: BookOpen,
    description: '完整的开发者文档',
  },
  {
    name: '案例',
    href: '/showcase',
    icon: Terminal,
    description: '成功项目案例展示',
  },
  {
    name: '定价',
    href: '/pricing',
    icon: null,
  },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
            <Terminal className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">VibeCLI</span>
            <Badge variant="gradient" className="text-xs">
              2.0 MCP
            </Badge>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative flex items-center space-x-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.name}</span>
              <div className="absolute -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">切换主题</span>
          </Button>

          {/* GitHub Link */}
          <Button variant="ghost" size="icon" asChild className="h-9 w-9">
            <Link href="https://github.com/vibetemplate/vibecli">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link href="/login">登录</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">开始使用</Link>
            </Button>
            <Button variant="gradient" asChild>
              <Link href="/demo">在线体验</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">切换菜单</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <div>
                    <div>{item.name}</div>
                    {item.description && (
                      <div className="text-xs text-muted-foreground">
                        {item.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link href="/login">登录</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs">开始使用</Link>
                </Button>
                <Button variant="gradient" asChild>
                  <Link href="/demo">在线体验</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}