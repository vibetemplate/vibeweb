'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle,
  AlertTriangle,
  XCircle,
  Lightbulb,
  Shield,
  Zap,
  Code,
  Database,
  Globe,
  Settings,
  FileText,
  Users,
  Clock,
  Target,
  Layers,
  GitBranch,
  Lock
} from 'lucide-react';
import Link from 'next/link';

const practiceCategories = [
  {
    id: 'project-structure',
    title: '项目结构设计',
    icon: Layers,
    description: '合理的项目结构提升代码可维护性',
    practices: [
      {
        title: '模块化组织',
        level: 'essential',
        description: '按功能模块组织代码，保持清晰的目录结构',
        examples: [
          '使用 /components、/pages、/utils 等标准目录',
          '将相关功能聚合在同一模块中',
          '避免深层嵌套，保持目录层级不超过3层'
        ],
        antiPatterns: [
          '所有组件放在单一目录下',
          '按文件类型而非功能组织',
          '混合业务逻辑和展示组件'
        ]
      },
      {
        title: '命名规范',
        level: 'essential',
        description: '统一的命名规范提升代码可读性',
        examples: [
          '组件使用 PascalCase (UserProfile.tsx)',
          '文件夹使用 kebab-case (user-profile/)',
          '函数和变量使用 camelCase (getUserData)'
        ],
        antiPatterns: [
          '混合使用不同命名风格',
          '使用缩写或模糊的名称',
          '名称过长或过短'
        ]
      }
    ]
  },
  {
    id: 'code-quality',
    title: '代码质量',
    icon: Code,
    description: '编写高质量、可维护的代码',
    practices: [
      {
        title: 'TypeScript使用',
        level: 'essential',
        description: '充分利用TypeScript的类型系统',
        examples: [
          '为所有函数参数和返回值定义类型',
          '使用interface定义对象结构',
          '启用strict模式增强类型检查'
        ],
        antiPatterns: [
          '过度使用any类型',
          '忽略TypeScript错误',
          '不为复杂对象定义类型'
        ]
      },
      {
        title: '函数设计',
        level: 'recommended',
        description: '编写简洁、单一职责的函数',
        examples: [
          '函数保持在30行以内',
          '每个函数只做一件事',
          '使用纯函数避免副作用'
        ],
        antiPatterns: [
          '函数过长，逻辑复杂',
          '函数承担多个职责',
          '直接修改传入的参数'
        ]
      }
    ]
  },
  {
    id: 'performance',
    title: '性能优化',
    icon: Zap,
    description: '优化应用性能和用户体验',
    practices: [
      {
        title: '组件优化',
        level: 'recommended',
        description: '合理使用React性能优化技术',
        examples: [
          '使用React.memo包装纯组件',
          '用useCallback和useMemo缓存重量级计算',
          '实现虚拟滚动处理大列表'
        ],
        antiPatterns: [
          '过度使用memo导致内存浪费',
          '在render函数中进行复杂计算',
          '不合理的state更新导致重复渲染'
        ]
      },
      {
        title: '资源加载',
        level: 'essential',
        description: '优化静态资源加载策略',
        examples: [
          '使用Next.js Image组件优化图片',
          '实现代码分割和懒加载',
          '配置合适的缓存策略'
        ],
        antiPatterns: [
          '加载未优化的大尺寸图片',
          '同步加载所有JavaScript代码',
          '缺少压缩和缓存设置'
        ]
      }
    ]
  },
  {
    id: 'security',
    title: '安全配置',
    icon: Shield,
    description: '确保应用安全性和数据保护',
    practices: [
      {
        title: 'API安全',
        level: 'essential',
        description: '保护API接口和数据传输',
        examples: [
          '使用HTTPS加密所有数据传输',
          '实现JWT token认证机制',
          '添加API频率限制防止滥用'
        ],
        antiPatterns: [
          '在客户端存储敏感信息',
          '使用HTTP传输敏感数据',
          '缺少输入验证和过滤'
        ]
      },
      {
        title: '数据保护',
        level: 'essential',
        description: '保护用户数据和隐私',
        examples: [
          '加密存储敏感数据',
          '实现数据备份和恢复',
          '遵循GDPR等数据保护法规'
        ],
        antiPatterns: [
          '明文存储密码',
          '收集不必要的用户数据',
          '缺少数据删除机制'
        ]
      }
    ]
  },
  {
    id: 'testing',
    title: '测试策略',
    icon: Target,
    description: '建立完善的测试体系',
    practices: [
      {
        title: '单元测试',
        level: 'essential',
        description: '为核心逻辑编写单元测试',
        examples: [
          '测试覆盖率保持在80%以上',
          '使用Jest和React Testing Library',
          '模拟外部依赖和API调用'
        ],
        antiPatterns: [
          '只测试简单函数忽略复杂逻辑',
          '测试实现细节而非行为',
          '缺少边界条件测试'
        ]
      },
      {
        title: '集成测试',
        level: 'recommended',
        description: '测试组件间的交互',
        examples: [
          '测试用户完整操作流程',
          '验证API集成正确性',
          '检查页面路由和状态管理'
        ],
        antiPatterns: [
          '只依赖单元测试',
          '测试用例过于复杂',
          '忽略异步操作测试'
        ]
      }
    ]
  },
  {
    id: 'deployment',
    title: '部署优化',
    icon: Globe,
    description: '高效的部署和运维策略',
    practices: [
      {
        title: 'CI/CD配置',
        level: 'recommended',
        description: '自动化构建、测试和部署流程',
        examples: [
          '使用GitHub Actions或类似工具',
          '在部署前运行自动化测试',
          '实现多环境部署策略'
        ],
        antiPatterns: [
          '手动部署容易出错',
          '跳过测试直接部署',
          '生产和开发环境配置相同'
        ]
      },
      {
        title: '监控运维',
        level: 'essential',
        description: '监控应用性能和错误',
        examples: [
          '集成错误监控工具',
          '设置性能指标告警',
          '建立日志分析系统'
        ],
        antiPatterns: [
          '缺少错误监控',
          '忽略性能指标',
          '没有日志记录策略'
        ]
      }
    ]
  }
];

const levelConfig = {
  essential: { 
    label: '必须', 
    color: 'destructive', 
    icon: AlertTriangle,
    description: '项目成功的基础要求' 
  },
  recommended: { 
    label: '推荐', 
    color: 'warning', 
    icon: Lightbulb,
    description: '提升项目质量的建议' 
  },
  optional: { 
    label: '可选', 
    color: 'info', 
    icon: CheckCircle,
    description: '进一步优化的选项' 
  }
};

const quickTips = [
  {
    title: '开始新项目时',
    tips: [
      '选择合适的项目模板',
      '配置TypeScript和ESLint',
      '设置Git工作流',
      '建立基础目录结构'
    ],
    icon: Code
  },
  {
    title: '开发过程中',
    tips: [
      '经常提交代码，写清晰的commit信息',
      '定期重构和优化代码',
      '保持代码风格一致性',
      '及时编写和更新文档'
    ],
    icon: GitBranch
  },
  {
    title: '发布前检查',
    tips: [
      '运行完整的测试套件',
      '检查安全配置',
      '优化性能指标',
      '验证所有功能正常'
    ],
    icon: CheckCircle
  }
];

export function BestPracticesGuide() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">
          开发指南
        </Badge>
        <h1 className="text-4xl font-bold">
          VibeCLI 最佳实践
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          遵循这些最佳实践，构建高质量、可维护、高性能的项目。从项目结构到部署优化，全面提升开发效率。
        </p>
      </div>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickTips.map((tipGroup, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <tipGroup.icon className="h-5 w-5 text-blue-600" />
                {tipGroup.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tipGroup.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Practice Categories */}
      <div className="space-y-12">
        {practiceCategories.map((category, categoryIndex) => (
          <div key={category.id} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900">
                <category.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>

            {/* Practices */}
            <div className="grid gap-6">
              {category.practices.map((practice, practiceIndex) => (
                <Card key={practiceIndex}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {practice.title}
                          <Badge 
                            variant={levelConfig[practice.level as keyof typeof levelConfig].color as any}
                            className="text-xs"
                          >
                            {React.createElement(levelConfig[practice.level as keyof typeof levelConfig].icon, { className: "mr-1 h-3 w-3" })}
                            {levelConfig[practice.level as keyof typeof levelConfig].label}
                          </Badge>
                        </CardTitle>
                        <CardDescription>{practice.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* 正确做法 */}
                    <div>
                      <h4 className="font-medium text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        推荐做法
                      </h4>
                      <div className="space-y-2">
                        {practice.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 错误做法 */}
                    <div>
                      <h4 className="font-medium text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        避免做法
                      </h4>
                      <div className="space-y-2">
                        {practice.antiPatterns.map((antiPattern, antiIndex) => (
                          <div key={antiIndex} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                            {antiPattern}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            需要更多帮助？
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            查看我们的详细文档、API参考和社区讨论，获取更多开发指导和最佳实践案例。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" asChild>
              <Link href="/docs">
                <FileText className="mr-2 h-4 w-4" />
                查看完整文档
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/api">
                <Code className="mr-2 h-4 w-4" />
                API参考
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/showcase">
                <Users className="mr-2 h-4 w-4" />
                社区案例
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}