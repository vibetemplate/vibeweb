'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Terminal,
  BarChart3,
  FolderOpen,
  Settings,
  CreditCard,
  LogOut,
  User,
  Bell,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth';

const navigation = [
  {
    name: '概览',
    href: '/dashboard',
    icon: BarChart3,
  },
  {
    name: '项目',
    href: '/projects',
    icon: FolderOpen,
  },
  {
    name: '设置',
    href: '/settings',
    icon: Settings,
  },
  {
    name: '计费',
    href: '/billing',
    icon: CreditCard,
  },
];

export function DashboardNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    router.push('/');
  };

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

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground relative",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* New Project Button */}
          <Button variant="gradient" size="sm" asChild>
            <Link href="/projects/new">
              <Plus className="mr-2 h-4 w-4" />
              新建项目
            </Link>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bell className="h-4 w-4" />
            <span className="sr-only">通知</span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="用户头像" />
                  <AvatarFallback>用户</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user?.name || '用户'}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email || ''}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <User className="mr-2 h-4 w-4" />
                  <span>个人资料</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/billing">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>计费</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>设置</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>退出登录</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}