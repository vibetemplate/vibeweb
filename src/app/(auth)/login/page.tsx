import { Metadata } from 'next';
import { LoginForm } from '@/components/auth/login-form';

export const metadata: Metadata = {
  title: '登录 - VibeCLI 2.0',
  description: '登录您的VibeCLI账户，访问个人仪表板和项目管理功能。',
};

export default function LoginPage() {
  return <LoginForm />;
}