import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { BestPracticesGuide } from '@/components/docs/best-practices-guide';

export const metadata: Metadata = {
  title: '最佳实践 - VibeCLI 2.0 文档',
  description: '学习VibeCLI 2.0的最佳实践，包括项目结构设计、代码规范、性能优化、安全配置等开发指南',
  keywords: ['VibeCLI最佳实践', '项目规范', '代码规范', '性能优化', '安全配置', '开发指南'],
  openGraph: {
    title: '最佳实践 - VibeCLI 2.0 文档',
    description: '掌握VibeCLI 2.0开发最佳实践，提升项目质量和开发效率',
    type: 'website',
  },
};

export default function BestPracticesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          <BestPracticesGuide />
        </div>
      </main>
    </div>
  );
}