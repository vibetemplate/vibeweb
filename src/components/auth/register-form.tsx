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
import { Checkbox } from '@/components/ui/checkbox';
import { Github, Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/lib/auth';

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const { register, loginWithGitHub, isLoading } = useAuth();

  const passwordStrength = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
  };

  const isPasswordStrong = Object.values(passwordStrength).every(Boolean);
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPasswordStrong) {
      toast({
        title: '密码强度不足',
        description: '请确保密码符合所有安全要求',
        variant: 'destructive',
      });
      return;
    }

    if (!passwordsMatch) {
      toast({
        title: '密码不匹配',
        description: '请确保两次输入的密码相同',
        variant: 'destructive',
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: '请同意服务条款',
        description: '您需要同意我们的服务条款才能注册',
        variant: 'destructive',
      });
      return;
    }

    const result = await register(formData.name, formData.email, formData.password);
    
    if (result.success) {
      toast({
        title: '注册成功！',
        description: '欢迎加入VibeCLI！',
      });
      router.push('/dashboard');
    } else {
      toast({
        title: '注册失败',
        description: result.error || '注册过程中出现问题，请稍后重试',
        variant: 'destructive',
      });
    }
  };

  const handleGitHubRegister = async () => {
    const result = await loginWithGitHub();
    
    if (result.success) {
      toast({
        title: 'GitHub注册成功',
        description: '欢迎加入VibeCLI！',
      });
      router.push('/dashboard');
    } else {
      toast({
        title: '注册失败',
        description: result.error || 'GitHub注册出现问题',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="border-0 shadow-2xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">创建您的账户</CardTitle>
        <CardDescription>
          开始您的VibeCLI 2.0之旅
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Social Registration */}
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleGitHubRegister}
          disabled={isLoading}
        >
          <Github className="mr-2 h-4 w-4" />
          使用GitHub注册
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

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              type="text"
              placeholder="输入您的姓名"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">邮箱地址</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                placeholder="创建安全密码"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-2 mt-2">
                <p className="text-xs text-muted-foreground">密码强度要求：</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className={`flex items-center gap-1 ${passwordStrength.length ? 'text-green-600' : 'text-red-500'}`}>
                    <CheckCircle className="h-3 w-3" />
                    至少8个字符
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.uppercase ? 'text-green-600' : 'text-red-500'}`}>
                    <CheckCircle className="h-3 w-3" />
                    包含大写字母
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.lowercase ? 'text-green-600' : 'text-red-500'}`}>
                    <CheckCircle className="h-3 w-3" />
                    包含小写字母
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.number ? 'text-green-600' : 'text-red-500'}`}>
                    <CheckCircle className="h-3 w-3" />
                    包含数字
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">确认密码</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="再次输入密码"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              disabled={isLoading}
            />
            {formData.confirmPassword && (
              <p className={`text-xs ${passwordsMatch ? 'text-green-600' : 'text-red-500'}`}>
                {passwordsMatch ? '✓ 密码匹配' : '✗ 密码不匹配'}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              disabled={isLoading}
            />
            <Label htmlFor="terms" className="text-sm">
              我同意{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">
                服务条款
              </Link>
              {' '}和{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                隐私政策
              </Link>
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            variant="gradient"
            disabled={isLoading || !isPasswordStrong || !passwordsMatch || !acceptTerms}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                注册中...
              </>
            ) : (
              '创建账户'
            )}
          </Button>
        </form>
      </CardContent>
      
      <CardFooter className="text-center">
        <p className="text-sm text-muted-foreground">
          已有账户？{' '}
          <Link href="/login" className="text-blue-600 hover:underline font-medium">
            立即登录
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}