import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CopyButton } from '@/components/ui/copy-button';
import { 
  Settings, 
  Download,
  ExternalLink,
  ArrowLeft,
  CheckCircle,
  Copy,
  AlertCircle,
  FileText,
  Zap,
  Shield,
  Building,
  Lock,
  GitBranch
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trae 配置指南 - VibeCLI 2.0',
  description: 'Trae CI/CD集成工具详细配置指南，企业级部署，安全令牌管理。',
};

export default function TraePage() {
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
              <Settings className="h-12 w-12 text-purple-600" />
              <div>
                <h1 className="text-3xl font-bold">Trae 配置指南</h1>
                <p className="text-muted-foreground">CI/CD集成，企业级部署</p>
              </div>
              <Badge variant="success" className="ml-auto">
                多版本支持
              </Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-purple-500" />
                配置概览
              </CardTitle>
              <CardDescription>
                Trae 是企业级CI/CD集成平台，支持安全令牌管理和协议协商，适合大型团队和企业环境
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">10分钟</div>
                  <div className="text-sm text-muted-foreground">配置时间</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">高级</div>
                  <div className="text-sm text-muted-foreground">难度等级</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">企业级</div>
                  <div className="text-sm text-muted-foreground">安全等级</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Features */}
          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                <Shield className="h-5 w-5" />
                企业级特性
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">🔐 安全令牌管理</h4>
                  <p className="text-sm text-muted-foreground">企业级令牌加密和权限控制</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🚀 CI/CD 集成</h4>
                  <p className="text-sm text-muted-foreground">与主流CI/CD平台无缝集成</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">📋 协议协商</h4>
                  <p className="text-sm text-muted-foreground">智能协议版本协商和兼容性检测</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🏢 多租户支持</h4>
                  <p className="text-sm text-muted-foreground">支持多团队独立环境部署</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 1: Download and Setup */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <CardTitle className="text-xl">下载并设置 Trae</CardTitle>
                  <CardDescription>从 GitHub 获取最新企业版本</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Trae 提供多种部署方式，支持本地开发和企业级生产环境：
                </p>
                <Button asChild>
                  <Link href="https://github.com/trae-ai/trae" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    下载 Trae
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>部署选项：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• <strong>本地开发</strong>：Docker Compose 快速启动</li>
                        <li>• <strong>云部署</strong>：Kubernetes Helm Charts</li>
                        <li>• <strong>企业版</strong>：私有云和混合云支持</li>
                        <li>• <strong>SaaS版</strong>：托管服务（即将推出）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Install VibeCLI */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  2
                </div>
                <div>
                  <CardTitle className="text-xl">安装 VibeCLI MCP 服务器</CardTitle>
                  <CardDescription>在 Trae 环境中部署 VibeCLI</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  在 Trae 管理的环境中安装 VibeCLI MCP 服务器：
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
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>企业安装注意事项：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 确保网络策略允许 NPM 注册表访问</li>
                        <li>• 配置企业代理和证书验证</li>
                        <li>• 设置适当的用户权限和访问控制</li>
                        <li>• 考虑离线安装包部署方案</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Enterprise Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 font-bold">
                  3
                </div>
                <div>
                  <CardTitle className="text-xl">企业级配置</CardTitle>
                  <CardDescription>配置安全令牌和协议协商</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">1. 创建 Trae 配置文件：</h4>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <code className="text-sm font-mono">trae-config.yaml</code>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">2. 企业级 MCP 配置：</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
{`apiVersion: v1
kind: ConfigMap
metadata:
  name: vibecli-mcp-config
data:
  mcp-servers.json: |
    {
      "mcpServers": {
        "vibecli": {
          "command": "npx",
          "args": ["-y", "--package=vibe-cli-tool@latest", "vibecli-mcp-server"],
          "env": {
            "NODE_ENV": "production",
            "TRAE_TENANT_ID": "\${TRAE_TENANT_ID}",
            "TRAE_API_TOKEN": "\${TRAE_API_TOKEN}"
          },
          "securityPolicy": {
            "allowedDomains": ["npmjs.com", "registry.npmjs.org"],
            "sandboxMode": true
          }
        }
      }
    }`}
                    </pre>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-amber-600 mt-0.5" />
                    <div className="text-sm">
                      <strong>安全配置要点：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 使用环境变量管理敏感信息</li>
                        <li>• 启用沙箱模式限制访问范围</li>
                        <li>• 配置网络策略和域名白名单</li>
                        <li>• 定期轮换API令牌和证书</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: CI/CD Integration */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 font-bold">
                  4
                </div>
                <div>
                  <CardTitle className="text-xl">CI/CD 流水线集成</CardTitle>
                  <CardDescription>配置自动化部署和项目生成</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  将 VibeCLI 集成到 Trae 管理的 CI/CD 流水线中：
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Pipeline 配置示例：</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
{`# .trae/pipeline.yml
stages:
  - name: project-generation
    steps:
      - name: vibecli-analyze
        image: node:18-alpine
        script:
          - npm install -g vibe-cli-tool@latest
          - vibecli-mcp-server --analyze "\${PROJECT_REQUIREMENTS}"
        artifacts:
          - project-analysis.json
          
  - name: code-generation  
    steps:
      - name: vibecli-generate
        image: node:18-alpine
        dependencies: [project-generation]
        script:
          - vibecli-mcp-server --generate --config project-analysis.json
        artifacts:
          - generated-project/
          
  - name: deployment
    steps:
      - name: deploy-generated
        image: trae/deployer:latest
        dependencies: [code-generation]
        script:
          - trae deploy --project generated-project/`}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    集成优势：
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• 自动化项目生成和部署流程</li>
                    <li>• 版本控制和回滚支持</li>
                    <li>• 多环境部署管理</li>
                    <li>• 审计日志和合规性报告</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Enterprise Benefits */}
          <Card className="mb-8 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <Building className="h-5 w-5" />
                企业级优势
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">🔒 安全合规</h4>
                  <p className="text-sm text-muted-foreground">
                    符合企业安全标准，支持SOC2、ISO27001等合规要求
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">⚡ 高可用性</h4>
                  <p className="text-sm text-muted-foreground">
                    分布式部署，支持负载均衡和故障转移
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">📊 监控告警</h4>
                  <p className="text-sm text-muted-foreground">
                    完整的监控体系和实时告警机制
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🔧 可定制化</h4>
                  <p className="text-sm text-muted-foreground">
                    支持企业定制化需求和私有化部署
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                准备部署企业级解决方案？
              </h3>
              <p className="text-muted-foreground mb-6">
                Trae 为企业提供了完整的 AI 驱动开发和部署解决方案
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link href="https://github.com/trae-ai/trae" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    下载 Trae
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/demo">
                    <Zap className="mr-2 h-4 w-4" />
                    体验在线Demo
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