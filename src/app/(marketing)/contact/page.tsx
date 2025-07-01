import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { ContactPage } from '@/components/marketing/contact-page';

export const metadata: Metadata = {
  title: '联系我们 - VibeCLI 2.0',
  description: '联系VibeCLI团队，获取技术支持、商务合作或产品咨询。我们致力于为您提供最佳的AI驱动开发体验。',
  keywords: ['联系我们', 'VibeCLI支持', '技术支持', '商务合作', '产品咨询'],
  openGraph: {
    title: '联系我们 - VibeCLI 2.0',
    description: '联系VibeCLI团队，获取专业支持和服务',
    type: 'website',
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-6xl">
          <ContactPage />
        </div>
      </main>
    </div>
  );
}