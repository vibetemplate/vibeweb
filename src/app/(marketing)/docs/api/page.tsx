import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { ApiDocumentation } from '@/components/docs/api-documentation';

export const metadata: Metadata = {
  title: 'API文档 - VibeCLI 2.0',
  description: 'VibeCLI 2.0 完整API文档，包含MCP工具接口、认证方式、请求响应格式和代码示例',
  keywords: ['VibeCLI API', 'MCP API', 'API文档', '接口文档', 'RESTful API', '开发者文档'],
  openGraph: {
    title: 'API文档 - VibeCLI 2.0',
    description: '完整的VibeCLI 2.0 API参考文档',
    type: 'website',
  },
};

export default function ApiDocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-6xl">
          <ApiDocumentation />
        </div>
      </main>
    </div>
  );
}