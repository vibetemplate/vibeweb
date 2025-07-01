'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Github, Mail, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/lib/auth';

export function LoginForm() {
  const [email, setEmail] = useState('demo@vibecli.com');
  const [password, setPassword] = useState('demo123');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const { login, loginWithGitHub, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await login(email, password);
    
    if (result.success) {
      toast({
        title: '登录成功',
        description: '欢迎回到VibeCLI！',
      });
      router.push('/dashboard');
    } else {
      toast({
        title: '登录失败',
        description: result.error || '请检查您的邮箱和密码',
        variant: 'destructive',
      });
    }
  };

  const handleGitHubLogin = async () => {
    const result = await loginWithGitHub();
    
    if (result.success) {
      toast({
        title: 'GitHub登录成功',
        description: '欢迎回到VibeCLI！',
      });
      router.push('/dashboard');
    } else {
      toast({
        title: '登录失败',
        description: result.error || 'GitHub登录出现问题',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="border-0 shadow-2xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">登录您的账户</CardTitle>
        <CardDescription>
          使用邮箱或GitHub账户登录
        </CardDescription>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-sm">
          <p className="font-medium text-blue-800 dark:text-blue-200">演示账户</p>
          <p className="text-blue-600 dark:text-blue-300">邮箱: demo@vibecli.com</p>
          <p className="text-blue-600 dark:text-blue-300">密码: demo123</p>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Social Login */}
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleGitHubLogin}
          disabled={isLoading}
        >
          <Github className="mr-2 h-4 w-4" />
          使用GitHub登录
        </Button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              或
            </span>
          </div>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">邮箱地址</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">密码</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="输入您的密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link 
              href="/forgot-password" 
              className="text-sm text-blue-600 hover:underline"
            >
              忘记密码？
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            variant="gradient"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                登录中...
              </>
            ) : (
              '登录'
            )}
          </Button>
        </form>
      </CardContent>
      
      <CardFooter className="text-center">
        <p className="text-sm text-muted-foreground">
          还没有账户？{' '}
          <Link href="/register" className="text-blue-600 hover:underline font-medium">
            立即注册
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}