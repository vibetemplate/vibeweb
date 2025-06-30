import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { FeaturesShowcase } from '@/components/marketing/features-showcase';

export const metadata: Metadata = {
  title: '产品功能 - VibeCLI 2.0',
  description: '探索VibeCLI 2.0基于MCP协议的四大核心工具：项目分析器、模板生成器、功能合成器、部署管理器。体验AI驱动的智能开发流程。',
  keywords: ['VibeCLI功能', 'MCP工具', 'AI开发', '项目分析', '模板生成', '功能合成', '部署管理'],
  openGraph: {
    title: '产品功能 - VibeCLI 2.0',
    description: '四大智能工具重新定义开发体验，基于MCP协议的全流程AI驱动自动化',
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