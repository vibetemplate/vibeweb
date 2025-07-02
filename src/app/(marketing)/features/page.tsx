import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { FeaturesShowcase } from '@/components/marketing/features-showcase';

export const metadata: Metadata = {
  title: '产品功能 - VibeCLI',
  description: '探索VibeCLI的六大核心特性：模板商店生态系统、智能部署生成器、国际化支持、交互式学习系统、企业级安全、MCP智能上下文。体验AI驱动的现代化开发体验。',
  keywords: ['VibeCLI功能', '模板商店', '智能部署', '国际化', '交互式学习', '企业安全', 'MCP上下文', 'AI开发'],
  openGraph: {
    title: '产品功能 - VibeCLI',
    description: '六大核心特性重新定义开发体验，32x效率提升的现代化开发工具',
    type: 'website',
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container">
          <FeaturesShowcase />
        </div>
      </main>
    </div>
  );
}