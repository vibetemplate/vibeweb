import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Code, 
  Shield, 
  Download, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  FileText,
  Settings,
  Target,
  GitBranch,
  Users,
  Search,
  Star,
  Package,
  Globe,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '模板商店生态系统 - VibeCLI 核心功能',
  description: '远程模板市场，安全安装验证，数字签名保护。支持本地模板管理、离线开发和版本化管理。',
  keywords: ['模板商店', '远程模板', '数字签名', '安全验证', '模板管理', '离线开发'],
};

export default function TemplateStorePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Code className="mr-2 h-4 w-4" />
              核心功能
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              模板商店生态系统
              <span className="gradient-text"> Template Store Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              远程模板市场，安全安装验证，数字签名保护。支持本地模板管理、离线开发和版本化管理，通过智能模板匹配算法为项目推荐最佳模板。
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-blue-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">搜索和安装模板：</p>
                  <code className="text-sm">
                    vibecli install nextjs-ecommerce --verified
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo#template-store">
                      <Package className="mr-2 h-4 w-4" />
                      浏览模板商店
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/templates">
                      <FileText className="mr-2 h-4 w-4" />
                      模板开发指南
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>核心特性</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">远程模板市场</h4>
                      <p className="text-sm text-muted-foreground">
                        丰富的模板库，覆盖各种应用类型和技术栈
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ed25519数字签名</h4>
                      <p className="text-sm text-muted-foreground">
                        确保模板完整性和安全性，防止恶意代码注入
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Package className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">本地模板管理</h4>
                      <p className="text-sm text-muted-foreground">
                        支持离线开发和自定义模板创建
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <GitBranch className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">版本化管理</h4>
                      <p className="text-sm text-muted-foreground">
                        模板版本控制和升级管理，确保向后兼容
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Search className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">智能模板匹配</h4>
                      <p className="text-sm text-muted-foreground">
                        多层次匹配策略，精准推荐最适合的模板
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Users className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">社区驱动生态</h4>
                      <p className="text-sm text-muted-foreground">
                        开源贡献，持续演进，社区评价和反馈系统
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <Lock className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">安全安装验证</h4>
                      <p className="text-sm text-muted-foreground">
                        多重安全检查，确保模板安全可靠
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Star className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">评价和认证</h4>
                      <p className="text-sm text-muted-foreground">
                        官方认证模板，社区评分和使用统计
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Template Categories */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>模板分类</CardTitle>
              <CardDescription>
                按技术栈和应用类型组织的丰富模板库
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Web应用</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• React + Next.js</div>
                    <div>• Vue + Nuxt.js</div>
                    <div>• Angular</div>
                    <div>• Svelte + SvelteKit</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">后端服务</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Node.js + Express</div>
                    <div>• Python + FastAPI</div>
                    <div>• Go + Gin</div>
                    <div>• Java + Spring Boot</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">全栈应用</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• T3 Stack</div>
                    <div>• MEAN/MERN</div>
                    <div>• Django + React</div>
                    <div>• Rails + Vue</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">移动应用</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• React Native</div>
                    <div>• Flutter</div>
                    <div>• Expo</div>
                    <div>• Ionic</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">桌面应用</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Electron</div>
                    <div>• Tauri</div>
                    <div>• Qt</div>
                    <div>• WPF</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">云原生</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Docker + K8s</div>
                    <div>• Serverless</div>
                    <div>• Microservices</div>
                    <div>• CI/CD Pipeline</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>使用示例</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Search className="h-4 w-4 text-blue-500" />
                    搜索和浏览模板
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 搜索电商相关模板
vibecli search ecommerce

# 按技术栈筛选
vibecli search --tech react --tech typescript

# 查看模板详情
vibecli info nextjs-stripe-ecommerce

# 列出所有可用模板
vibecli list --category web-app`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Download className="h-4 w-4 text-green-500" />
                    安装和使用模板
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 安装官方认证模板
vibecli install nextjs-ecommerce --verified

# 从特定版本安装
vibecli install react-dashboard@2.1.0

# 本地安装模板
vibecli install ./my-custom-template

# 创建项目时使用模板
vibecli create my-shop --template nextjs-ecommerce`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4 text-purple-500" />
                    模板管理
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 更新模板到最新版本
vibecli update nextjs-ecommerce

# 列出已安装的模板
vibecli templates

# 卸载模板
vibecli uninstall old-template

# 清理未使用的模板
vibecli cleanup`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                安全特性
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Ed25519数字签名验证</h5>
                    <p className="text-sm text-muted-foreground">每个模板都经过数字签名，确保来源可信和内容完整</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">SHA-256哈希校验</h5>
                    <p className="text-sm text-muted-foreground">文件传输完整性检查，防止下载过程中的数据损坏</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">恶意代码扫描</h5>
                    <p className="text-sm text-muted-foreground">自动扫描模板中的潜在安全风险和恶意代码</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">沙盒化测试</h5>
                    <p className="text-sm text-muted-foreground">在隔离环境中测试模板，确保安全性后再发布</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-600" />
                最佳实践
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">优先使用官方认证模板</h5>
                    <p className="text-sm text-muted-foreground">官方认证模板经过严格测试，质量和安全性有保障</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">定期更新模板</h5>
                    <p className="text-sm text-muted-foreground">保持模板最新版本，获得最新功能和安全修复</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">查看社区评价</h5>
                    <p className="text-sm text-muted-foreground">参考其他开发者的评价和使用经验，选择高质量模板</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">本地备份重要模板</h5>
                    <p className="text-sm text-muted-foreground">为关键项目模板创建本地备份，确保离线可用</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Issues */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                常见问题
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">模板安装失败</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：网络连接问题或模板已不存在</p>
                  <p className="text-sm"><strong>解决方案：</strong> 检查网络连接，尝试使用本地缓存或选择其他模板</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">签名验证失败</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：模板被篡改或下载不完整</p>
                  <p className="text-sm"><strong>解决方案：</strong> 重新下载模板，或联系模板作者确认签名</p>
                </div>
                <div>
                  <h5 className="font-medium text-orange-600 mb-2">模板版本冲突</h5>
                  <p className="text-sm text-muted-foreground mb-2">可能原因：依赖的模板版本不兼容</p>
                  <p className="text-sm"><strong>解决方案：</strong> 更新相关模板到兼容版本，或使用版本锁定</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Features */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关功能</CardTitle>
              <CardDescription>
                与其他核心功能协同工作，提供完整的开发体验
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/features/deploy-generator">
                    <Settings className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">智能部署生成器</div>
                      <div className="text-xs text-muted-foreground">为模板项目自动生成部署配置</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/features/enterprise-security">
                    <Shield className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">企业级安全</div>
                      <div className="text-xs text-muted-foreground">提供模板安全验证和管理</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Navigation */}
          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/features">
                ← 返回功能列表
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/features/deploy-generator">
                智能部署生成器 →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}