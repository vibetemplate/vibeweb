'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard,
  Download,
  Calendar,
  DollarSign,
  TrendingUp,
  Zap,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Star,
  Crown,
  Users,
  Infinity
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';

const plans = [
  {
    id: 'free',
    name: '免费版',
    price: 0,
    period: '永久',
    description: '个人学习和小型项目',
    icon: Star,
    features: [
      '每月3个项目生成',
      '基础模板库',
      '标准部署支持',
      '社区技术支持',
      '基本MCP工具'
    ],
    limits: {
      projects: 3,
      templates: 'basic',
      storage: '500MB',
      support: '社区'
    },
    popular: false
  },
  {
    id: 'pro',
    name: '专业版',
    price: 29,
    period: '月',
    description: '专业开发者和小团队',
    icon: Zap,
    features: [
      '每月20个项目生成',
      '完整模板库',
      '高级部署选项',
      '优先技术支持',
      '高级MCP工具',
      '自定义模板',
      '项目协作功能'
    ],
    limits: {
      projects: 20,
      templates: 'full',
      storage: '10GB',
      support: '邮件支持'
    },
    popular: true
  },
  {
    id: 'team',
    name: '团队版',
    price: 99,
    period: '月',
    description: '大型团队和企业',
    icon: Users,
    features: [
      '无限项目生成',
      '企业级模板',
      '私有部署支持',
      '专属客户经理',
      '企业级MCP工具',
      '团队管理面板',
      'API访问权限',
      'SSO集成'
    ],
    limits: {
      projects: '无限',
      templates: 'enterprise',
      storage: '100GB',
      support: '7x24小时'
    },
    popular: false
  },
  {
    id: 'enterprise',
    name: '企业版',
    price: 0,
    period: '联系我们',
    description: '大型企业和定制需求',
    icon: Crown,
    features: [
      '无限制使用',
      '定制化开发',
      '私有云部署',
      '专属技术团队',
      '定制MCP协议',
      '企业级安全',
      '合规认证支持',
      '培训和咨询'
    ],
    limits: {
      projects: '无限',
      templates: '定制',
      storage: '无限',
      support: '专属团队'
    },
    popular: false
  }
];

const currentUsage = {
  plan: 'pro',
  projects: 12,
  projectsLimit: 20,
  storage: 6.5,
  storageLimit: 10,
  apiCalls: 8450,
  apiCallsLimit: 10000,
  billingCycle: '2024-07-01 至 2024-07-31'
};

const invoiceHistory = [
  {
    id: 'INV-2024-06',
    date: '2024-06-01',
    amount: 29,
    status: 'paid',
    plan: '专业版',
    description: '2024年6月账单'
  },
  {
    id: 'INV-2024-05',
    date: '2024-05-01',
    amount: 29,
    status: 'paid',
    plan: '专业版',
    description: '2024年5月账单'
  },
  {
    id: 'INV-2024-04',
    date: '2024-04-01',
    amount: 0,
    status: 'paid',
    plan: '免费版',
    description: '2024年4月账单'
  },
  {
    id: 'INV-2024-03',
    date: '2024-03-01',
    amount: 0,
    status: 'paid',
    plan: '免费版',
    description: '2024年3月账单'
  }
];

const paymentMethods = [
  {
    id: '1',
    type: 'card',
    brand: 'visa',
    last4: '4242',
    expiryMonth: 12,
    expiryYear: 2025,
    isDefault: true
  },
  {
    id: '2',
    type: 'card',
    brand: 'mastercard',
    last4: '8888',
    expiryMonth: 8,
    expiryYear: 2026,
    isDefault: false
  }
];

export default function BillingPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState(currentUsage.plan);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanChange = async (planId: string) => {
    if (planId === currentUsage.plan) return;
    
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: '套餐变更成功',
        description: `已切换到${plans.find(p => p.id === planId)?.name}，将在下个计费周期生效`
      });
      
      setSelectedPlan(planId);
    } catch (error) {
      toast({
        title: '套餐变更失败',
        description: '请稍后重试或联系客服',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadInvoice = (invoiceId: string) => {
    toast({
      title: '开始下载',
      description: `正在下载发票 ${invoiceId}`
    });
  };

  const currentPlan = plans.find(p => p.id === currentUsage.plan);
  const usagePercentage = (currentUsage.projects / currentUsage.projectsLimit) * 100;
  const storagePercentage = (currentUsage.storage / currentUsage.storageLimit) * 100;
  const apiPercentage = (currentUsage.apiCalls / currentUsage.apiCallsLimit) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">计费管理</h1>
        <p className="text-muted-foreground">
          管理您的订阅套餐、使用情况和账单历史
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan & Usage */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {currentPlan && <currentPlan.icon className="h-5 w-5" />}
                当前套餐
              </CardTitle>
              <CardDescription>
                您正在使用{currentPlan?.name}，计费周期：{currentUsage.billingCycle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div>
                  <h3 className="font-semibold text-lg">{currentPlan?.name}</h3>
                  <p className="text-sm text-muted-foreground">{currentPlan?.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">
                    {currentPlan?.price === 0 ? '免费' : `¥${currentPlan?.price}`}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentPlan?.price === 0 ? '' : `/${currentPlan?.period}`}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                使用统计
              </CardTitle>
              <CardDescription>
                本月使用情况和限额
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Projects Usage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>项目生成</span>
                  <span>{currentUsage.projects} / {currentUsage.projectsLimit}</span>
                </div>
                <Progress value={usagePercentage} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {usagePercentage >= 80 ? (
                    <span className="text-orange-600">
                      <AlertTriangle className="inline h-3 w-3 mr-1" />
                      使用量接近限额
                    </span>
                  ) : (
                    `还可生成 ${currentUsage.projectsLimit - currentUsage.projects} 个项目`
                  )}
                </p>
              </div>

              {/* Storage Usage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>存储空间</span>
                  <span>{currentUsage.storage}GB / {currentUsage.storageLimit}GB</span>
                </div>
                <Progress value={storagePercentage} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  剩余 {(currentUsage.storageLimit - currentUsage.storage).toFixed(1)}GB 可用
                </p>
              </div>

              {/* API Usage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>API调用</span>
                  <span>{currentUsage.apiCalls.toLocaleString()} / {currentUsage.apiCallsLimit.toLocaleString()}</span>
                </div>
                <Progress value={apiPercentage} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  剩余 {(currentUsage.apiCallsLimit - currentUsage.apiCalls).toLocaleString()} 次调用
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Plan Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>套餐对比</CardTitle>
              <CardDescription>
                选择最适合您需求的套餐
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      plan.id === currentUsage.plan 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'hover:border-gray-300'
                    } ${plan.popular ? 'ring-2 ring-purple-200 dark:ring-purple-800' : ''}`}
                    onClick={() => handlePlanChange(plan.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <plan.icon className="h-6 w-6 text-blue-600" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{plan.name}</h3>
                            {plan.popular && (
                              <Badge variant="gradient" className="text-xs">推荐</Badge>
                            )}
                            {plan.id === currentUsage.plan && (
                              <Badge variant="success" className="text-xs">当前</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{plan.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">
                          {plan.price === 0 && plan.period !== '联系我们' ? '免费' : 
                           plan.period === '联系我们' ? '定制' : `¥${plan.price}/${plan.period}`}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {plan.limits.projects === '无限' ? '无限制' : `${plan.limits.projects}个项目/月`}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                支付方式
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">
                        **** {method.last4}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {method.expiryMonth}/{method.expiryYear}
                      </div>
                    </div>
                  </div>
                  {method.isDefault && (
                    <Badge variant="outline" className="text-xs">默认</Badge>
                  )}
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                添加支付方式
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>快速操作</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                下载使用报告
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                查看详细用量
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                账单提醒设置
              </Button>
            </CardContent>
          </Card>

          {/* Billing Support */}
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">需要帮助？</h3>
              <p className="text-sm text-muted-foreground mb-3">
                如有计费问题，请联系我们的客服团队
              </p>
              <Button variant="outline" size="sm" className="w-full">
                联系客服
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Invoice History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            账单历史
          </CardTitle>
          <CardDescription>
            查看和下载您的历史账单
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoiceHistory.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{invoice.description}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{invoice.date}</span>
                      <span>{invoice.plan}</span>
                      <Badge variant="success" className="text-xs">已支付</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium">
                      {invoice.amount === 0 ? '免费' : `¥${invoice.amount}`}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {invoice.id}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDownloadInvoice(invoice.id)}
                  >
                    <Download className="h-3 w-3 mr-1" />
                    下载
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}