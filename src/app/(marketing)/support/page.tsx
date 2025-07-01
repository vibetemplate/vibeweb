import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { SupportCenter } from '@/components/marketing/support-center';

export const metadata: Metadata = {
  title: '技术支持 - VibeCLI 2.0',
  description: 'VibeCLI 2.0技术支持中心，获取使用帮助、故障排除、常见问题解答和专业技术支持服务',
  keywords: ['VibeCLI技术支持', '使用帮助', '故障排除', '常见问题', 'FAQ', '技术咨询'],
  openGraph: {
    title: '技术支持 - VibeCLI 2.0',
    description: '专业的VibeCLI技术支持，帮您解决使用过程中的各种问题',
    type: 'website',
  },
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-6xl">
          <SupportCenter />
        </div>
      </main>
    </div>
  );
}