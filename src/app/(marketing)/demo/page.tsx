import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { InteractiveDemo } from '@/components/marketing/interactive-demo';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '在线演示 - VibeCLI 2.0',
  description: '体验VibeCLI 2.0的强大功能，从需求分析到项目部署的完整AI驱动开发流程。实时观看32x效率提升的智能开发过程。',
  keywords: ['VibeCLI演示', 'AI开发演示', 'MCP演示', '实时代码生成', '智能开发流程'],
  openGraph: {
    title: '在线演示 - VibeCLI 2.0',
    description: '实时体验AI驱动的智能开发流程，从需求到部署仅需10分钟',
    type: 'website',
  },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="gradient" className="mb-4">
              实时演示
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              体验
              <span className="gradient-text"> 32x效率提升</span>
              <br />
              的AI智能开发
            </h1>
            <p className="text-xl text-muted-foreground">
              观看VibeCLI 2.0如何将传统的320分钟开发时间压缩至10分钟，
              体验从自然语言需求到完整项目部署的智能化流程。
            </p>
          </div>

          {/* Interactive Demo */}
          <InteractiveDemo />

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-semibold mb-2">AI智能理解</h3>
              <p className="text-sm text-muted-foreground">
                基于MCP协议的智能需求分析，准确理解开发意图
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-lg font-semibold mb-2">极速生成</h3>
              <p className="text-sm text-muted-foreground">
                完整项目结构和代码在分钟级别内智能生成
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold mb-2">一键部署</h3>
              <p className="text-sm text-muted-foreground">
                自动配置部署环境，项目即刻上线运行
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}