'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  GitBranch, 
  Star, 
  Zap, 
  Brain, 
  Folder, 
  Target, 
  Settings,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Download
} from 'lucide-react';
import Link from 'next/link';

interface VersionUpdate {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  title: string;
  description: string;
  highlights: string[];
  features: Feature[];
  improvements: string[];
  fixes: string[];
  breaking?: string[];
}

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
  category: 'new' | 'enhanced' | 'improved';
}

const updates: VersionUpdate[] = [
  {
    version: '1.9.0',
    date: '2025-07-02',
    type: 'major',
    title: '完整模板商店生态系统',
    description: '革命性的模板商店生态系统，集成智能部署生成器、多语言支持、交互式学习系统和企业级安全验证。实现真正的开发者生态闭环。',
    highlights: [
      '模板商店生态 - 远程/本地模板管理系统',
      '智能部署生成器 - 多平台自动配置支持',
      '国际化支持 - CLI多语言界面切换',
      '交互式学习系统 - 内置分步教程指导',
      '企业级安全 - Ed25519数字签名和SHA-256验证'
    ],
    features: [
      {
        name: '模板商店系统',
        description: 'vibecli template - 远程模板市场，安全安装验证',
        icon: Download,
        category: 'new'
      },
      {
        name: '智能部署生成器',
        description: 'vibecli deploy --generate - 多平台配置自动生成',
        icon: Settings,
        category: 'new'
      },
      {
        name: '交互式学习系统',
        description: 'vibecli learn - 分步教程，实例化学习体验',
        icon: Brain,
        category: 'new'
      },
      {
        name: '多语言支持',
        description: 'vibecli --lang en|zh - CLI界面语言切换',
        icon: Users,
        category: 'new'
      },
      {
        name: '企业级安全',
        description: 'Ed25519签名验证，SHA-256完整性检查',
        icon: Shield,
        category: 'enhanced'
      },
      {
        name: '模板发布系统',
        description: 'vibecli publish-template - 社区模板贡献',
        icon: Star,
        category: 'new'
      }
    ],
    improvements: [
      '添加50+个新的单元测试，实现90%+测试覆盖率',
      '修复ESM兼容性问题，完善__dirname替代方案',
      '增强TypeScript类型安全，提升代码质量',
      '优化构建流程，自动化模板索引生成',
      '完善错误处理和用户指导信息'
    ],
    fixes: [
      '修复template:index脚本的ESM兼容性问题',
      '解决TypeScript编译错误和类型不匹配',
      '优化模板路径解析和加载逻辑',
      '修复版本管理不一致问题'
    ],
    breaking: [
      '模板解析优先级变更：已安装模板优先于内置模板',
      '配置结构增强：新增验证和模式检查',
      '命令选项优化：部分命令参数重新设计'
    ]
  },
  {
    version: '1.8.0',
    date: '2025-07-02',
    type: 'major',
    title: '零配置体验与智能助手系统',
    description: '全新的零配置开发体验，集成智能聊天助手、环境诊断修复和三层配置管理系统。SQLite默认数据库实现真正的一键启动。',
    highlights: [
      '零配置体验 - SQLite默认数据库，一键启动',
      '智能聊天助手 - vibecli chat 实时意图分析',
      '环境诊断修复 - vibecli doctor 自动依赖管理',
      '三层配置系统 - defaults → overrides → runtime'
    ],
    features: [
      {
        name: '智能聊天助手',
        description: 'vibecli chat - 自然语言项目分析和建议',
        icon: Brain,
        category: 'new'
      },
      {
        name: '环境诊断工具',
        description: 'vibecli doctor - 自动检测和修复依赖问题',
        icon: Shield,
        category: 'new'
      },
      {
        name: '三层配置系统',
        description: 'validate、diff、migrate、reset 配置管理',
        icon: Settings,
        category: 'new'
      },
      {
        name: '零配置体验',
        description: 'SQLite默认数据库，自动依赖安装',
        icon: Zap,
        category: 'enhanced'
      }
    ],
    improvements: [
      '修复ES模块兼容性问题，支持__dirname替代方案',
      '优化构建流程，自动复制配置文件到dist目录',
      '默认数据库改为SQLite，降低新手门槛',
      '增强CLI命令体验，98个测试全部通过'
    ],
    fixes: [
      '修复config-provider.ts中的ES模块兼容性',
      '解决配置文件未复制到编译目录的问题',
      '优化依赖检查和自动安装逻辑'
    ]
  },
  {
    version: '1.7.2',
    date: '2025-06-30',
    type: 'patch',
    title: '企业级测试覆盖与统一版本管理',
    description: '实现完整的测试覆盖体系，98个测试全部通过，统一版本管理系统确保发布质量。',
    highlights: [
      '98个测试全部通过，100%测试覆盖率',
      '统一版本管理，从package.json动态读取',
      '完整的Mock系统，ESM兼容性支持',
      '自动化发布流程，语义化版本控制'
    ],
    features: [
      {
        name: '完整测试体系',
        description: '单元、集成、E2E测试，Mock系统',
        icon: CheckCircle,
        category: 'new'
      },
      {
        name: '统一版本管理',
        description: '动态版本读取，自动化发布流程',
        icon: GitBranch,
        category: 'new'
      }
    ],
    improvements: [
      '建立企业级代码质量标准',
      '优化性能指标和兼容性矩阵',
      '完善CI/CD流程和安全性检查',
      '增强文档和开发者体验'
    ],
    fixes: [
      '修复版本不一致问题',
      '解决测试环境Mock兼容性',
      '优化构建和发布流程'
    ]
  },
  {
    version: '1.5.0',
    date: '2025-07-01',
    type: 'major',
    title: '智能模板匹配与降级处理系统',
    description: '革命性的智能模板匹配系统，能够处理任何类型的项目需求。即使没有完美匹配的模板，也能提供智能的降级方案和详细的实施指导。',
    highlights: [
      '5层智能匹配策略，覆盖所有项目需求',
      '智能降级处理，复杂需求分解实施',
      '交互式需求澄清，自动生成智能问题',
      '渐进式实施计划，降低开发风险'
    ],
    features: [
      {
        name: '智能模板匹配器',
        description: '精确匹配、特征匹配、相似度匹配、动态生成、智能降级',
        icon: Target,
        category: 'new'
      },
      {
        name: '智能降级处理器',
        description: '混合方案、渐进式构建、定制指导、社区方案',
        icon: Settings,
        category: 'new'
      },
      {
        name: '交互式澄清系统',
        description: '智能问题生成、上下文感知选项、决策辅助工具',
        icon: Users,
        category: 'new'
      }
    ],
    improvements: [
      '增强MCP上下文管理器，支持异步模板匹配',
      '优化模板相似度评分算法',
      '完善需求特征提取和分析能力',
      '改进用户体验，提供更友好的错误处理'
    ],
    fixes: [
      '修复模板未命中时的处理逻辑',
      '解决复杂需求场景下的响应问题',
      '优化内存使用和性能表现'
    ]
  },
  {
    version: '1.4.0',
    date: '2025-06-30',
    type: 'minor',
    title: '智能跨平台目录管理',
    description: '解决用户反馈的"代码不知道生成到哪个目录"问题，实现智能的跨平台目录管理和清晰的位置提示。',
    highlights: [
      'Mac、Windows、Linux跨平台默认目录',
      '智能权限检查和目录创建',
      '清晰的文件位置提示和启动指导',
      '改善用户体验，消除困惑'
    ],
    features: [
      {
        name: '跨平台目录策略',
        description: 'Mac: ~/Development/VibeCLI, Windows: ~/Documents/VibeCLI',
        icon: Folder,
        category: 'new'
      },
      {
        name: '智能权限验证',
        description: '自动检测目录权限，智能创建必要路径',
        icon: Shield,
        category: 'new'
      },
      {
        name: '位置提示系统',
        description: '生成时和完成后都明确告知文件位置',
        icon: CheckCircle,
        category: 'enhanced'
      }
    ],
    improvements: [
      '统一项目生成位置，提升用户体验',
      '增强错误处理和权限提示',
      '优化跨平台兼容性',
      '完善日志记录和调试信息'
    ],
    fixes: [
      '修复用户找不到生成文件的问题',
      '解决权限不足时的错误处理',
      '优化路径解析和目录创建逻辑'
    ]
  },
  {
    version: '1.3.0',
    date: '2025-06-29',
    type: 'major',
    title: 'MCP智能提示词生成系统',
    description: '实现革命性的MCP智能提示词生成系统，通过多轮对话上下文进行智能匹配，自动生成专业级开发指导提示词。',
    highlights: [
      '多轮对话渐进式理解用户意图',
      '上下文感知的模板选择机制',
      '智能置信度评估和澄清问题',
      '会话状态管理和信息累积'
    ],
    features: [
      {
        name: 'MCP上下文管理器',
        description: '多轮对话状态管理，渐进式项目理解',
        icon: Brain,
        category: 'new'
      },
      {
        name: '智能意图分析器',
        description: '项目类型识别、技术栈推荐、复杂度评估',
        icon: Zap,
        category: 'new'
      },
      {
        name: '上下文感知模板选择器',
        description: '基于用户经验和开发阶段的动态选择',
        icon: Settings,
        category: 'new'
      }
    ],
    improvements: [
      '不再依赖外部AI服务，使用MCP原生能力',
      '提升隐私安全性和响应速度',
      '增强对话理解的准确性',
      '优化模板匹配算法'
    ],
    fixes: [
      '修复外部API依赖导致的不稳定问题',
      '解决模板选择的准确性问题',
      '优化内存使用和会话管理'
    ]
  },
  {
    version: '1.2.8',
    date: '2025-06-29',
    type: 'patch',
    title: 'MCP协议优化与稳定性提升',
    description: '完善MCP协议集成，修复Zod模式验证问题，提升服务器稳定性和可执行文件配置。',
    highlights: [
      'MCP服务器可执行文件配置优化',
      'Zod模式验证问题修复',
      'stdio服务器支持增强',
      '协议集成文档完善'
    ],
    features: [
      {
        name: 'MCP协议集成',
        description: 'stdio服务器支持，完整协议实现',
        icon: Settings,
        category: 'enhanced'
      }
    ],
    improvements: [
      '优化MCP服务器可执行文件配置',
      '增强协议稳定性和错误处理',
      '完善安装和配置文档',
      '提升npm发布流程'
    ],
    fixes: [
      '修复MCP协议集成问题',
      '解决Zod schema验证错误',
      '优化可执行文件路径配置',
      '修复stdio服务器连接问题'
    ]
  },
  {
    version: '1.2.0',
    date: '2025-06-29',
    type: 'minor',
    title: 'AI智能决策引擎集成',
    description: '集成AI智能决策引擎和完整MCP协议支持，实现智能项目分析和模板推荐功能。',
    highlights: [
      'AI驱动的项目分析能力',
      'MCP协议完整支持',
      '智能模板推荐系统',
      '决策引擎架构升级'
    ],
    features: [
      {
        name: 'AI决策引擎',
        description: '智能项目分析，技术栈推荐',
        icon: Brain,
        category: 'new'
      },
      {
        name: 'MCP协议支持',
        description: '完整的Model Context Protocol实现',
        icon: Settings,
        category: 'new'
      }
    ],
    improvements: [
      '升级核心架构支持AI决策',
      '集成MCP协议完整功能',
      '优化模板选择算法',
      '增强项目生成效率'
    ],
    fixes: [
      '修复模板生成稳定性问题',
      '优化内存使用效率',
      '解决包依赖冲突'
    ]
  },
  {
    version: '1.1.0',
    date: '2025-06-28',
    type: 'minor',
    title: '完整示例系统与包名升级',
    description: '添加完整的项目示例系统，包名从@vibecli/core升级为vibe-cli-tool，提供更丰富的模板生态。',
    highlights: [
      '包名统一为vibe-cli-tool',
      '完整的示例项目集合',
      '增强的文档和部署指南',
      'GitHub仓库迁移优化'
    ],
    features: [
      {
        name: '完整示例系统',
        description: '认证、CRUD、文件上传等企业级示例',
        icon: Folder,
        category: 'new'
      },
      {
        name: '包名标准化',
        description: '统一为vibe-cli-tool，便于全球使用',
        icon: Settings,
        category: 'enhanced'
      }
    ],
    improvements: [
      '完善GitHub仓库组织结构',
      '添加完整的部署文档',
      '优化包发布流程',
      '增强示例项目质量'
    ],
    fixes: [
      '修复包名不一致问题',
      '解决仓库链接错误',
      '优化文档链接和路径'
    ]
  },
  {
    version: '1.0.2',
    date: '2025-06-28',
    type: 'patch',
    title: 'VibeCLI项目正式发布',
    description: '现代化Web全栈应用CLI工具正式发布，支持Next.js + TypeScript + Prisma技术栈，包含完整的项目脚手架和企业级示例。',
    highlights: [
      '现代化Web全栈应用CLI工具',
      'Next.js + TypeScript + Prisma技术栈',
      '完整的项目脚手架生成',
      '企业级示例和最佳实践'
    ],
    features: [
      {
        name: '项目脚手架生成',
        description: '完整的项目结构和配置文件生成',
        icon: Folder,
        category: 'new'
      },
      {
        name: '认证系统模板',
        description: '完整的用户认证、注册、密码重置功能',
        icon: Shield,
        category: 'new'
      },
      {
        name: 'CRUD操作模板',
        description: '企业级数据管理和API接口生成',
        icon: Settings,
        category: 'new'
      },
      {
        name: '文件上传系统',
        description: '文件上传、存储和管理功能模板',
        icon: Download,
        category: 'new'
      }
    ],
    improvements: [
      'TypeScript + Commander.js CLI框架',
      '模板引擎支持动态代码生成',
      '生产级示例代码和架构',
      '完整的开发文档和API指南'
    ],
    fixes: []
  }
];

const typeColors = {
  major: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  minor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  patch: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
};

const categoryIcons = {
  new: Star,
  enhanced: Zap,
  improved: ArrowRight
};

const categoryColors = {
  new: 'text-green-600',
  enhanced: 'text-blue-600',
  improved: 'text-orange-600'
};

export function ChangelogShowcase() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          <GitBranch className="mr-2 h-4 w-4" />
          产品更新历程
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          VibeCLI 
          <span className="gradient-text"> 更新日志</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          追踪VibeCLI的发展历程，了解每个版本的核心功能和技术突破。
          从基础MCP协议到智能模板匹配系统的完整演进。
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" asChild>
            <Link href="/demo">
              <Sparkles className="mr-2 h-4 w-4" />
              体验最新功能
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs">
              <Download className="mr-2 h-4 w-4" />
              查看文档
            </Link>
          </Button>
        </div>
      </div>

      {/* Version Timeline */}
      <div className="space-y-8">
        {updates.map((update, index) => (
          <Card key={update.version} className="card-hover">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge className={typeColors[update.type]}>
                      v{update.version}
                    </Badge>
                    <Badge variant="outline">
                      <Calendar className="mr-1 h-3 w-3" />
                      {update.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{update.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {update.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Highlights */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  核心亮点
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {update.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-4">新增功能</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {update.features.map((feature, idx) => (
                    <Card key={idx} className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 flex-shrink-0">
                          <feature.icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-medium text-sm">{feature.name}</h5>
                            <Badge variant="outline" className={`text-xs ${categoryColors[feature.category]}`}>
                              {React.createElement(categoryIcons[feature.category], { className: "h-2 w-2 mr-1" })}
                              {feature.category === 'new' ? '新增' : feature.category === 'enhanced' ? '增强' : '改进'}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Improvements and Fixes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {update.improvements.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">功能改进</h4>
                    <ul className="space-y-1">
                      {update.improvements.map((improvement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {update.fixes.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">问题修复</h4>
                    <ul className="space-y-1">
                      {update.fixes.map((fix, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {fix}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Breaking Changes */}
              {update.breaking && update.breaking.length > 0 && (
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-300 text-sm">
                    ⚠️ 重要变更
                  </h4>
                  <ul className="space-y-1">
                    {update.breaking.map((change, idx) => (
                      <li key={idx} className="text-sm text-yellow-700 dark:text-yellow-400">
                        • {change}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer CTA */}
      <Card className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            想要了解更多？
          </h3>
          <p className="text-muted-foreground mb-6">
            查看完整的技术文档，或者立即体验VibeCLI的最新功能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" asChild>
              <Link href="/demo">
                <Sparkles className="mr-2 h-4 w-4" />
                在线体验
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">
                <GitBranch className="mr-2 h-4 w-4" />
                技术文档
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}