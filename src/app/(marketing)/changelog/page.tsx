import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { ChangelogShowcase } from '@/components/marketing/changelog-showcase';

export const metadata: Metadata = {
  title: '更新日志 - VibeCLI',
  description: '查看VibeCLI的最新功能更新、版本历史和产品演进。从MCP智能上下文到智能模板匹配系统的完整发展历程。',
  keywords: ['VibeCLI更新', 'MCP功能', '版本历史', '产品更新', '智能模板匹配', '降级处理', '跨平台目录'],
  openGraph: {
    title: '更新日志 - VibeCLI',
    description: '探索VibeCLI的产品演进历程，了解每个版本的核心功能和技术突破',
    type: 'website',
  },
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container">
          <ChangelogShowcase />
        </div>
      </main>
    </div>
  );
}