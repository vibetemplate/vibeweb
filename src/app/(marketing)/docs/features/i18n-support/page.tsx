import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  Globe, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  FileText,
  Target,
  Clock,
  MapPin,
  Languages,
  DollarSign,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '国际化支持 - VibeCLI 核心功能',
  description: '多语言CLI界面，本地化模板，区域化配置，社区翻译支持，适应全球开发者需求。',
  keywords: ['国际化', '多语言', 'i18n', '本地化', '区域配置', '社区翻译'],
};

export default function I18nSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              <Users className="mr-2 h-4 w-4" />
              核心功能
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              国际化支持
              <span className="gradient-text"> Internationalization Support</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              多语言CLI界面，本地化模板，区域化配置，社区翻译支持。让全球开发者都能用母语高效使用VibeCLI。
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-blue-600" />
                快速开始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">切换语言界面：</p>
                  <code className="text-sm">
                    vibecli config set language zh-CN
                  </code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/demo#i18n-support">
                      <Globe className="mr-2 h-4 w-4" />
                      体验多语言界面
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/i18n">
                      <FileText className="mr-2 h-4 w-4" />
                      国际化配置指南
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supported Languages */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>支持语言</CardTitle>
              <CardDescription>
                目前支持的语言和地区，持续增加中
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">🇨🇳</div>
                    <div>
                      <h4 className="font-semibold">简体中文</h4>
                      <p className="text-sm text-muted-foreground">zh-CN</p>
                    </div>
                  </div>
                  <Badge variant="success" className="text-xs">完整支持</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">🇺🇸</div>
                    <div>
                      <h4 className="font-semibold">English</h4>
                      <p className="text-sm text-muted-foreground">en-US</p>
                    </div>
                  </div>
                  <Badge variant="success" className="text-xs">完整支持</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">🇯🇵</div>
                    <div>
                      <h4 className="font-semibold">日本語</h4>
                      <p className="text-sm text-muted-foreground">ja-JP</p>
                    </div>
                  </div>
                  <Badge variant="warning" className="text-xs">开发中</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">🇰🇷</div>
                    <div>
                      <h4 className="font-semibold">한국어</h4>
                      <p className="text-sm text-muted-foreground">ko-KR</p>
                    </div>
                  </div>
                  <Badge variant="warning" className="text-xs">开发中</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">🇪🇸</div>
                    <div>
                      <h4 className="font-semibold">Español</h4>
                      <p className="text-sm text-muted-foreground">es-ES</p>
                    </div>
                  </div>
                  <Badge variant="info" className="text-xs">计划中</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">🇫🇷</div>
                    <div>
                      <h4 className="font-semibold">Français</h4>
                      <p className="text-sm text-muted-foreground">fr-FR</p>
                    </div>
                  </div>
                  <Badge variant="info" className="text-xs">计划中</Badge>
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
                      <Languages className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">多语言CLI界面</h4>
                      <p className="text-sm text-muted-foreground">
                        命令行界面支持多语言切换，错误信息和帮助文档本地化
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Globe className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">本地化模板</h4>
                      <p className="text-sm text-muted-foreground">
                        适应不同地区的开发习惯和编码规范的项目模板
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">区域化配置</h4>
                      <p className="text-sm text-muted-foreground">
                        自动适配时区、货币、日期格式等本地设置
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">社区翻译</h4>
                      <p className="text-sm text-muted-foreground">
                        开放式翻译贡献机制，社区驱动的本地化支持
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Clock className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">时区智能处理</h4>
                      <p className="text-sm text-muted-foreground">
                        自动检测和转换时区，日志时间本地化显示
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <DollarSign className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">货币本地化</h4>
                      <p className="text-sm text-muted-foreground">
                        成本估算和费用显示自动适配本地货币格式
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <Calendar className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">日期格式化</h4>
                      <p className="text-sm text-muted-foreground">
                        根据地区习惯自动调整日期和时间显示格式
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Settings className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">智能语言检测</h4>
                      <p className="text-sm text-muted-foreground">
                        根据系统环境自动选择合适的界面语言
                      </p>
                    </div>
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
                    <Languages className="h-4 w-4 text-blue-500" />
                    语言切换
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 切换到中文界面
vibecli config set language zh-CN

# 切换到英文界面
vibecli config set language en-US

# 查看当前语言设置
vibecli config get language

# 列出支持的语言
vibecli language list`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    区域配置
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 设置时区
vibecli config set timezone Asia/Shanghai

# 设置货币
vibecli config set currency CNY

# 设置日期格式
vibecli config set dateFormat "YYYY-MM-DD"

# 查看区域设置
vibecli config show region`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-purple-500" />
                    本地化模板使用
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`# 搜索中文本地化模板
vibecli search --locale zh-CN

# 创建项目使用本地化模板
vibecli create my-app --template nextjs-zh-cn

# 查看模板的本地化信息
vibecli info nextjs-template --locale zh-CN`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regional Differences */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>地区差异适配</CardTitle>
              <CardDescription>
                针对不同地区的开发习惯和法规要求进行适配
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">中国大陆</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• 使用国内镜像源加速下载</div>
                    <div>• ICP备案相关配置提醒</div>
                    <div>• 支持国产化技术栈推荐</div>
                    <div>• 符合网络安全法规要求</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">欧盟地区</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• GDPR合规性检查</div>
                    <div>• 数据保护配置建议</div>
                    <div>• Cookie政策模板</div>
                    <div>• 用户隐私权限管理</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">日本</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• 个人信息保护法合规</div>
                    <div>• 和历日期支持</div>
                    <div>• 日文编码处理优化</div>
                    <div>• 本地化支付集成</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">美国</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• CCPA合规配置</div>
                    <div>• 无障碍访问(ADA)支持</div>
                    <div>• 州级法规适配</div>
                    <div>• 税务处理模板</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Contribution */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                社区贡献
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">翻译贡献</h5>
                    <p className="text-sm text-muted-foreground">参与界面文本、文档和错误信息的翻译工作</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">本地化模板</h5>
                    <p className="text-sm text-muted-foreground">创建和维护适合本地区的项目模板</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">地区配置</h5>
                    <p className="text-sm text-muted-foreground">贡献特定地区的法规和技术要求配置</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">文档本地化</h5>
                    <p className="text-sm text-muted-foreground">翻译和完善各语言版本的使用文档</p>
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
                    <h5 className="font-medium">根据团队设置语言</h5>
                    <p className="text-sm text-muted-foreground">在团队项目中统一语言设置，避免沟通障碍</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">利用本地化模板</h5>
                    <p className="text-sm text-muted-foreground">选择符合本地法规和习惯的项目模板，减少后期调整</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">定期更新语言包</h5>
                    <p className="text-sm text-muted-foreground">保持翻译内容最新，获得更好的用户体验</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">配置区域设置</h5>
                    <p className="text-sm text-muted-foreground">正确设置时区和货币，确保时间和价格显示准确</p>
                  </div>
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
                  <Link href="/docs/features/template-store">
                    <Globe className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">模板商店生态系统</div>
                      <div className="text-xs text-muted-foreground">提供本地化项目模板</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col items-start">
                  <Link href="/docs/features/learning-system">
                    <Users className="h-5 w-5 mb-2" />
                    <div className="text-left">
                      <div className="font-medium">交互式学习系统</div>
                      <div className="text-xs text-muted-foreground">多语言学习资源和教程</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Navigation */}
          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/docs/features/deploy-generator">
                ← 智能部署生成器
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/features/learning-system">
                交互式学习系统 →
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}