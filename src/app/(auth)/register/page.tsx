import { Metadata } from 'next';
import { RegisterForm } from '@/components/auth/register-form';

export const metadata: Metadata = {
  title: '注册 - VibeCLI 2.0',
  description: '创建您的VibeCLI账户，开始使用AI驱动的智能开发工具。',
};

export default function RegisterPage() {
  return <RegisterForm />;
}