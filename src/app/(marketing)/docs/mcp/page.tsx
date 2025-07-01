import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { McpDocumentation } from '@/components/docs/mcp-documentation';

export const metadata: Metadata = {
  title: 'MCP协议文档 - VibeCLI 2.0',
  description: '深入了解VibeCLI 2.0基于的Model Context Protocol (MCP)协议，包含协议规范、实现细节和技术架构',
  keywords: ['MCP协议', 'Model Context Protocol', 'VibeCLI架构', '协议文档', 'AI开发协议'],
  openGraph: {
    title: 'MCP协议文档 - VibeCLI 2.0',
    description: '完整的MCP协议技术文档和实现指南',
    type: 'website',
  },
};

export default function McpDocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-5xl">
          <McpDocumentation />
        </div>
      </main>
    </div>
  );
}