'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex justify-center items-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">VibeCLI</span>
            <Badge variant="gradient" className="text-xs">
              2.0 MCP
            </Badge>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex relative items-center space-x-1 text-sm font-medium transition-colors group",
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
                <div className={cn(
                  "absolute -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all",
                  isActive 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9"
          >
            <Sun className="w-4 h-4 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute w-4 h-4 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
            <span className="sr-only">切换主题</span>
          </Button>

          {/* GitHub Link */}
          <Button variant="ghost" size="icon" asChild className="w-9 h-9">
            <Link href="https://github.com/vibetemplate/vibecli">
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-2 md:flex">
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
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
            <span className="sr-only">切换菜单</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t backdrop-blur md:hidden bg-background/95">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 text-sm font-medium transition-colors",
                      isActive 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <div>
                      <div>{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-muted-foreground">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
              <div className="flex flex-col pt-4 space-y-2 border-t">
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