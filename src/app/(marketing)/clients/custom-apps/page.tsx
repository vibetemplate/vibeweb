import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CopyButton } from '@/components/ui/copy-button';
import { 
  Users, 
  Download,
  ExternalLink,
  ArrowLeft,
  CheckCircle,
  Copy,
  AlertCircle,
  FileText,
  Settings,
  Zap,
  Code,
  Puzzle,
  Rocket,
  BookOpen,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Apps 集成指南 - VibeCLI 2.0',
  description: '自定义应用集成指南，完整MCP API文档，企业定制开发，第三方平台集成。',
};

export default function CustomAppsPage() {
  const installCommand = 'npm install -g vibe-cli-tool@latest';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/clients">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回客户端选择
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <Users className="h-12 w-12 text-emerald-600" />
              <div>
                <h1 className="text-3xl font-bold">Custom Apps 集成指南</h1>
                <p className="text-muted-foreground">定制平台，企业集成</p>
              </div>
              <Badge variant="success" className="ml-auto">
                完整API
              </Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Puzzle className="h-5 w-5 text-emerald-500" />
                集成概览
              </CardTitle>
              <CardDescription>
                为企业和开发者提供完整的MCP API，支持自定义应用开发和第三方平台集成
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">灵活</div>
                  <div className="text-sm text-muted-foreground">集成方式</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">完整</div>
                  <div className="text-sm text-muted-foreground">API支持</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">企业级</div>
                  <div className="text-sm text-muted-foreground">定制服务</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integration Options */}
          <Card className="mb-8 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <Code className="h-5 w-5" />
                集成方式
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">🔌 MCP API 集成</h4>
                  <p className="text-sm text-muted-foreground">通过标准MCP协议直接集成</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🌐 REST API 调用</h4>
                  <p className="text-sm text-muted-foreground">HTTP REST接口，支持多语言调用</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">📦 SDK 开发包</h4>
                  <p className="text-sm text-muted-foreground">多语言SDK，简化集成开发</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🔧 Webhook 回调</h4>
                  <p className="text-sm text-muted-foreground">事件驱动的实时通知机制</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 1: API Documentation */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <CardTitle className="text-xl">查阅 API 文档</CardTitle>
                  <CardDescription>完整的MCP协议和REST API文档</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  VibeCLI 提供完整的API文档，支持多种集成方式：
                </p>
                
                <div className="grid gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/docs" target="_blank">
                      <BookOpen className="mr-2 h-4 w-4" />
                      MCP 协议文档
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                      <Code className="mr-2 h-4 w-4" />
                      GitHub API 参考
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>API 功能覆盖：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 项目分析和技术栈推荐</li>
                        <li>• 代码生成和模板创建</li>
                        <li>• 功能模块动态组合</li>
                        <li>• 部署配置和环境管理</li>
                        <li>• 实时进度监控和状态查询</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Setup Development Environment */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  2
                </div>
                <div>
                  <CardTitle className="text-xl">搭建开发环境</CardTitle>
                  <CardDescription>安装VibeCLI并配置开发环境</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  安装 VibeCLI 作为你的自定义应用的后端服务：
                </p>
                <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg flex items-center justify-between">
                  <code className="text-green-400 font-mono text-sm flex-1">
                    {installCommand}
                  </code>
                  <CopyButton
                    text={installCommand}
                    variant="ghost"
                    size="sm"
                    className="ml-2 text-slate-400 hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                  </CopyButton>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">开发环境配置：</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
{`# 1. 启动 MCP 服务器
vibecli-mcp-server --port 3001 --api-mode

# 2. 设置环境变量
export VIBECLI_API_KEY="your-api-key"
export VIBECLI_ENDPOINT="http://localhost:3001"

# 3. 验证连接
curl -X GET http://localhost:3001/api/v1/health`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>环境验证：</strong>成功启动后，API服务器将在指定端口运行，
                      支持HTTP REST调用和WebSocket实时通信。
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Integration Examples */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  3
                </div>
                <div>
                  <CardTitle className="text-xl">集成示例代码</CardTitle>
                  <CardDescription>多语言集成示例和最佳实践</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">JavaScript/Node.js 示例：</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
{`const VibeCLI = require('vibe-cli-sdk');

const client = new VibeCLI({
  endpoint: 'http://localhost:3001',
  apiKey: process.env.VIBECLI_API_KEY
});

// 项目分析
const analysis = await client.analyzeProject({
  description: '创建一个在线商店',
  requirements: ['用户认证', '商品管理', '购物车', '支付']
});

// 生成项目
const project = await client.generateProject({
  analysisId: analysis.id,
  outputPath: './generated-project'
});

console.log('项目生成完成:', project.path);`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Python 示例：</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
{`import requests
import json

class VibeCLIClient:
    def __init__(self, endpoint, api_key):
        self.endpoint = endpoint
        self.headers = {'Authorization': f'Bearer {api_key}'}
    
    def analyze_project(self, description, requirements):
        response = requests.post(
            f'{self.endpoint}/api/v1/analyze',
            headers=self.headers,
            json={'description': description, 'requirements': requirements}
        )
        return response.json()
    
    def generate_project(self, analysis_id, output_path):
        response = requests.post(
            f'{self.endpoint}/api/v1/generate',
            headers=self.headers,
            json={'analysisId': analysis_id, 'outputPath': output_path}
        )
        return response.json()

# 使用示例
client = VibeCLIClient('http://localhost:3001', 'your-api-key')
result = client.analyze_project('电商网站', ['用户管理', '商品展示'])`}
                    </pre>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Code className="h-4 w-4 text-amber-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>SDK 支持：</strong>我们正在开发官方SDK支持更多编程语言，
                      包括 Java、Go、C#、PHP 等。
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Production Deployment */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 font-bold">
                  4
                </div>
                <div>
                  <CardTitle className="text-xl">生产环境部署</CardTitle>
                  <CardDescription>企业级部署和监控配置</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  将你的自定义应用部署到生产环境：
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Docker 部署示例：</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
{`# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g vibe-cli-tool@latest
COPY . .
EXPOSE 3001
CMD ["vibecli-mcp-server", "--port", "3001", "--api-mode"]

# docker-compose.yml
version: '3.8'
services:
  vibecli-api:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - VIBECLI_API_KEY=\${API_KEY}
    volumes:
      - ./projects:/app/projects
    restart: unless-stopped`}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-green-600" />
                    生产环境要点：
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• 配置负载均衡和服务发现</li>
                    <li>• 设置监控告警和日志收集</li>
                    <li>• 实施API限流和安全认证</li>
                    <li>• 建立备份恢复和灾难恢复机制</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Use Cases */}
          <Card className="mb-8 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <Globe className="h-5 w-5" />
                应用场景
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">🏢 企业内部工具</h4>
                  <p className="text-sm text-muted-foreground">
                    集成到企业内部开发平台，提供AI辅助开发能力
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🌐 SaaS 平台</h4>
                  <p className="text-sm text-muted-foreground">
                    作为SaaS产品的核心引擎，提供代码生成服务
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🔌 第三方集成</h4>
                  <p className="text-sm text-muted-foreground">
                    与现有开发工具和平台深度集成
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">📱 移动应用</h4>
                  <p className="text-sm text-muted-foreground">
                    为移动应用提供后端API支持
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support and Resources */}
          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                <Settings className="h-5 w-5" />
                支持和资源
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <h4 className="font-medium">📚 完整文档</h4>
                    <p className="text-sm text-muted-foreground">API文档、集成指南、最佳实践</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/docs">
                      查看文档
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <h4 className="font-medium">💬 技术支持</h4>
                    <p className="text-sm text-muted-foreground">GitHub Issues、社区讨论</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                      获取支持
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <h4 className="font-medium">🏢 企业服务</h4>
                    <p className="text-sm text-muted-foreground">定制开发、技术咨询、培训服务</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">
                      联系我们
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                准备开始自定义集成？
              </h3>
              <p className="text-muted-foreground mb-6">
                查看完整的API文档和集成示例，开始构建你的自定义应用
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="/docs">
                    <BookOpen className="mr-2 h-4 w-4" />
                    查看API文档
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                    <Code className="mr-2 h-4 w-4" />
                    GitHub 仓库
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}