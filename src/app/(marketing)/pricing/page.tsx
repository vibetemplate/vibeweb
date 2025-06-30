import { Metadata } from 'next';
import { Navigation } from '@/components/marketing/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, X } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '定价方案 - VibeCLI 2.0',
  description: 'VibeCLI 2.0灵活的定价方案，从个人开发者到企业团队，选择最适合您的计划。',
};

const pricingPlans = [
  {
    name: '开源版',
    price: 0,
    description: '适合个人开发者和开源项目',
    features: [
      '基础MCP工具',
      '项目模板生成',
      '社区支持',
      'GitHub集成',
      '基础部署配置'
    ],
    limitations: [
      '每月限制10个项目',
      '基础模板库',
      '社区支持'
    ],
    buttonText: '免费使用',
    buttonVariant: 'outline' as const,
    popular: false
  },
  {
    name: '专业版',
    price: 29,
    description: '适合专业开发者和小团队',
    features: [
      '所有MCP工具',
      '高级模板库',
      '自定义功能合成',
      '多平台部署',
      '邮件支持',
      '团队协作功能',
      '高级分析'
    ],
    limitations: [
      '每月限制100个项目',
      '5个团队成员'
    ],
    buttonText: '开始免费试用',
    buttonVariant: 'gradient' as const,
    popular: true
  },
  {
    name: '企业版',
    price: 99,
    description: '适合大型团队和企业',
    features: [
      '所有专业版功能',
      '无限项目生成',
      '企业级安全',
      '私有部署选项',
      '24/7优先支持',
      '自定义集成',
      'SLA保障',
      '高级分析报告'
    ],
    limitations: [],
    buttonText: '联系销售',
    buttonVariant: 'outline' as const,
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              定价方案
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              选择适合您的<span className="gradient-text">计划</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              从个人项目到企业级应用，我们为每个阶段提供合适的解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge 
                    variant="gradient" 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  >
                    最受欢迎
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/月</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation) => (
                      <div key={limitation} className="flex items-center gap-2">
                        <X className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full"
                    asChild
                  >
                    <Link href={plan.price === 0 ? "/demo" : "/contact"}>
                      {plan.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">常见问题</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">可以随时升级或降级吗？</h4>
                  <p className="text-sm text-muted-foreground">
                    是的，您可以随时在账户设置中升级或降级您的计划。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">是否提供免费试用？</h4>
                  <p className="text-sm text-muted-foreground">
                    专业版提供14天免费试用，无需信用卡。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">支持什么付款方式？</h4>
                  <p className="text-sm text-muted-foreground">
                    我们接受主要信用卡、PayPal和银行转账。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">企业版有什么特殊服务？</h4>
                  <p className="text-sm text-muted-foreground">
                    包含专属客户经理、定制开发和私有部署选项。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}