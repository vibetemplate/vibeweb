import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Target,
  Key,
  Eye,
  UserCheck,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '企业级安全 - VibeCLI 核心功能',
  description: 'Ed25519数字签名，SHA-256哈希验证，权限管理，安全审计。确保代码和模板的完整性与安全性。',
  keywords: ['企业安全', 'Ed25519', 'SHA-256', '数字签名', '权限管理', '安全审计'],
};

export default function EnterpriseSecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Shield className="mr-2 h-4 w-4" />
              核心功能
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              企业级安全
              <span className="gradient-text"> Enterprise Security</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ed25519数字签名，SHA-256哈希验证，权限管理，安全审计。确保代码生成和模板使用的完整性与安全性。
            </p>
          </div>

          <Card className="mb-8 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-red-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">验证模板安全性：</p>
                  <code className="text-sm">
                    vibecli template verify nextjs-template
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo#enterprise-security">
                      <Shield className="mr-2 h-4 w-4" />
                      安全验证演示
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/security">
                      <FileText className="mr-2 h-4 w-4" />
                      安全指南
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>安全特性</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Key className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ed25519数字签名</h4>
                      <p className="text-sm text-muted-foreground">
                        模板和代码包完整性验证，确保来源可信
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <FileCheck className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">SHA-256哈希验证</h4>
                      <p className="text-sm text-muted-foreground">
                        文件传输安全保障，防止数据篡改
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <UserCheck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">权限管理</h4>
                      <p className="text-sm text-muted-foreground">
                        细粒度的文件系统访问控制
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Eye className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">安全审计</h4>
                      <p className="text-sm text-muted-foreground">
                        代码生成安全性检查和日志记录
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>安全验证流程</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">来源验证</h4>
                    <p className="text-sm text-muted-foreground">验证模板发布者身份和Ed25519数字签名</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">完整性检查</h4>
                    <p className="text-sm text-muted-foreground">SHA-256哈希校验，确保文件未被篡改</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-orange-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">恶意代码扫描</h4>
                    <p className="text-sm text-muted-foreground">自动检测潜在的安全威胁和恶意代码</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-purple-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">权限检查</h4>
                    <p className="text-sm text-muted-foreground">验证执行权限，应用最小权限原则</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-red-600">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">审计日志</h4>
                    <p className="text-sm text-muted-foreground">记录所有安全相关操作，便于追踪和审计</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                最佳实践
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">只使用验证过的模板</h5>
                    <p className="text-sm text-muted-foreground">优先选择通过数字签名验证的官方或认证模板</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">定期更新安全配置</h5>
                    <p className="text-sm text-muted-foreground">保持安全策略和规则的最新状态</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">启用审计日志</h5>
                    <p className="text-sm text-muted-foreground">记录和监控所有安全相关活动</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">应用最小权限原则</h5>
                    <p className="text-sm text-muted-foreground">只授予必要的最小权限，降低安全风险</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
            <CardHeader>
              <CardTitle>相关功能</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/features/template-store">
                    <Shield className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">模板商店生态系统</div>
                      <div className="text-xs text-muted-foreground">提供模板安全验证</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/features/deploy-generator">
                    <Lock className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">智能部署生成器</div>
                      <div className="text-xs text-muted-foreground">确保部署配置安全</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/features/learning-system">
                ← 交互式学习系统
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/features/mcp-context">
                MCP智能上下文 →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}