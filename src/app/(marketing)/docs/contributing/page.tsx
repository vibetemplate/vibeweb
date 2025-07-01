import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { ContributingGuide } from '@/components/docs/contributing-guide';

export const metadata: Metadata = {
  title: '贡献指南 - VibeCLI 2.0',
  description: '了解如何为VibeCLI 2.0开源项目做出贡献，包括代码提交、问题反馈、文档改进和社区参与指南',
  keywords: ['VibeCLI贡献', '开源贡献', 'GitHub贡献', '代码提交', '问题反馈', '开源社区'],
  openGraph: {
    title: '贡献指南 - VibeCLI 2.0',
    description: '加入VibeCLI开源社区，一起构建更好的AI开发工具',
    type: 'website',
  },
};

export default function ContributingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          <ContributingGuide />
        </div>
      </main>
    </div>
  );
}