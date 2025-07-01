'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Heart,
  Github,
  GitBranch,
  MessageSquare,
  Bug,
  Lightbulb,
  FileText,
  Users,
  Code,
  CheckCircle,
  AlertTriangle,
  Info,
  Star,
  Coffee,
  BookOpen,
  Zap,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const contributionTypes = [
  {
    type: '代码贡献',
    icon: Code,
    description: '提交代码、修复Bug、新增功能',
    color: 'from-blue-500 to-cyan-500',
    activities: [
      '修复已知Bug和问题',
      '实现新功能和改进',
      '优化性能和代码质量',
      '添加单元测试和集成测试',
      '改进TypeScript类型定义',
      '重构和代码清理'
    ],
    requirements: [
      '熟悉TypeScript/JavaScript',
      '了解React和Next.js',
      '遵循项目代码规范',
      '编写清晰的提交信息'
    ]
  },
  {
    type: '文档改进',
    icon: FileText,
    description: '改进文档、教程、API说明',
    color: 'from-green-500 to-emerald-500',
    activities: [
      '修正文档中的错误',
      '改进API文档说明',
      '编写使用教程和示例',
      '翻译文档到其他语言',
      '优化文档结构和导航',
      '添加代码示例和截图'
    ],
    requirements: [
      '良好的中英文写作能力',
      '熟悉Markdown语法',
      '了解VibeCLI使用方法',
      '注重用户体验'
    ]
  },
  {
    type: '问题反馈',
    icon: Bug,
    description: '报告Bug、提出改进建议',
    color: 'from-orange-500 to-red-500',
    activities: [
      '报告Bug和异常行为',
      '提出功能改进建议',
      '反馈用户体验问题',
      '测试新版本功能',
      '参与问题讨论',
      '验证修复效果'
    ],
    requirements: [
      '详细描述问题现象',
      '提供复现步骤',
      '包含环境信息',
      '使用合适的标签'
    ]
  },
  {
    type: '社区建设',
    icon: Users,
    description: '参与讨论、帮助他人、推广项目',
    color: 'from-purple-500 to-pink-500',
    activities: [
      '回答用户问题',
      '参与社区讨论',
      '组织线上/线下活动',
      '制作教学视频',
      '撰写技术博客',
      '推广项目到社交媒体'
    ],
    requirements: [
      '热心帮助他人',
      '良好的沟通能力',
      '熟悉VibeCLI功能',
      '积极参与社区'
    ]
  }
];

const developmentWorkflow = [
  {
    step: '1. Fork 仓库',
    description: '在GitHub上Fork VibeCLI仓库到你的账户',
    commands: [
      '访问 https://github.com/vibetemplate/vibecli',
      '点击右上角的 "Fork" 按钮',
      '选择你的GitHub账户'
    ]
  },
  {
    step: '2. 克隆代码',
    description: '将Fork的仓库克隆到本地开发环境',
    commands: [
      'git clone https://github.com/your-username/vibecli.git',
      'cd vibecli',
      'npm install'
    ]
  },
  {
    step: '3. 创建分支',
    description: '为你的贡献创建一个新的功能分支',
    commands: [
      'git checkout -b feature/your-feature-name',
      '# 或者',
      'git checkout -b fix/issue-number'
    ]
  },
  {
    step: '4. 开发和测试',
    description: '进行代码开发并确保测试通过',
    commands: [
      'npm run dev  # 启动开发服务器',
      'npm run test # 运行测试',
      'npm run lint # 检查代码规范'
    ]
  },
  {
    step: '5. 提交代码',
    description: '使用规范的提交信息提交你的更改',
    commands: [
      'git add .',
      'git commit -m "feat: add new feature description"',
      'git push origin feature/your-feature-name'
    ]
  },
  {
    step: '6. 创建PR',
    description: '在GitHub上创建Pull Request',
    commands: [
      '访问你Fork的仓库页面',
      '点击 "Compare & pull request"',
      '填写PR标题和描述'
    ]
  }
];

const commitConventions = [
  { type: 'feat', description: '新功能', example: 'feat: 添加项目模板生成功能' },
  { type: 'fix', description: '修复Bug', example: 'fix: 修复部署配置错误问题' },
  { type: 'docs', description: '文档更新', example: 'docs: 更新API文档示例' },
  { type: 'style', description: '代码格式', example: 'style: 修复代码缩进问题' },
  { type: 'refactor', description: '代码重构', example: 'refactor: 重构工具调用逻辑' },
  { type: 'test', description: '测试相关', example: 'test: 添加单元测试用例' },
  { type: 'chore', description: '构建过程', example: 'chore: 更新依赖包版本' }
];

const codeGuidelines = [
  {
    category: 'TypeScript',
    rules: [
      '所有函数都要有明确的类型定义',
      '使用interface定义复杂对象类型',
      '避免使用any类型，优先使用unknown',
      '启用strict模式进行类型检查'
    ]
  },
  {
    category: 'React/Next.js',
    rules: [
      '优先使用函数组件和Hooks',
      '合理使用useCallback和useMemo',
      '组件名使用PascalCase命名',
      '文件名使用kebab-case命名'
    ]
  },
  {
    category: '代码风格',
    rules: [
      '使用Prettier格式化代码',
      '遵循ESLint规则配置',
      '函数长度不超过50行',
      '添加必要的注释说明'
    ]
  },
  {
    category: '测试',
    rules: [
      '新功能必须包含测试用例',
      '测试覆盖率保持在80%以上',
      '使用描述性的测试名称',
      '模拟外部依赖和API调用'
    ]
  }
];

const recognitionLevels = [
  {
    level: 'Contributor',
    icon: Star,
    description: '代码贡献者',
    criteria: ['提交至少1个PR被合并', '遵循项目规范'],
    rewards: ['GitHub贡献者列表', '项目README致谢']
  },
  {
    level: 'Active Contributor',
    icon: Zap,
    description: '活跃贡献者',
    criteria: ['提交5个以上PR被合并', '参与Issue讨论', '帮助其他开发者'],
    rewards: ['特殊徽章', '优先Review', '技术分享机会']
  },
  {
    level: 'Core Contributor',
    icon: Coffee,
    description: '核心贡献者',
    criteria: ['长期持续贡献', '代码质量优秀', '积极参与项目决策'],
    rewards: ['Commit权限', '技术咨询机会', '项目路线图参与']
  }
];

export function ContributingGuide() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">
          开源贡献
        </Badge>
        <h1 className="text-4xl font-bold">
          贡献指南
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          感谢您对VibeCLI项目的关注！无论是代码贡献、文档改进还是问题反馈，每一份贡献都让项目变得更好
        </p>
      </div>

      {/* Welcome Message */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            欢迎加入VibeCLI开源社区！
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            VibeCLI是一个由社区驱动的开源项目，我们相信每个人都可以为AI驱动的开发工具做出贡献。
            无论你是经验丰富的开发者还是刚开始学习编程，都有适合你的贡献方式。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" asChild>
              <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                访问GitHub仓库
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                联系维护者
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contribution Types */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">贡献方式</h2>
          <p className="text-lg text-muted-foreground">
            多种方式参与项目，找到最适合你的贡献方式
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributionTypes.map((type, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${type.color}`}>
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{type.type}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">主要活动：</h4>
                  <div className="space-y-1">
                    {type.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">技能要求：</h4>
                  <div className="space-y-1">
                    {type.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Development Workflow */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900">
            <GitBranch className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">开发流程</h2>
            <p className="text-muted-foreground">标准的GitHub贡献流程，确保代码质量和协作效率</p>
          </div>
        </div>

        <div className="grid gap-6">
          {developmentWorkflow.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {step.step}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <pre className="text-green-400 text-sm">
                    {step.commands.map((cmd, cmdIndex) => (
                      <div key={cmdIndex} className="mb-1">
                        <code>{cmd}</code>
                      </div>
                    ))}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Commit Conventions */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900">
            <FileText className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">提交规范</h2>
            <p className="text-muted-foreground">使用约定式提交格式，保持项目历史清晰</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Conventional Commits 格式</CardTitle>
            <CardDescription>
              遵循标准化的提交信息格式：<code className="bg-muted px-2 py-1 rounded text-sm">type(scope): description</code>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {commitConventions.map((conv, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono text-xs">
                      {conv.type}
                    </Badge>
                    <span className="font-medium">{conv.description}</span>
                  </div>
                  <code className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {conv.example}
                  </code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Code Guidelines */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900">
            <Code className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">代码规范</h2>
            <p className="text-muted-foreground">保持代码质量和一致性的编码标准</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codeGuidelines.map((guideline, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{guideline.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {guideline.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {rule}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Recognition */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">贡献者认可</h2>
          <p className="text-lg text-muted-foreground">
            感谢每一位贡献者，我们为优秀的贡献提供认可和奖励
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recognitionLevels.map((level, index) => (
            <Card key={index} className="text-center card-hover">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500">
                    <level.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg">{level.level}</CardTitle>
                <CardDescription>{level.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">认定标准：</h4>
                  <div className="space-y-1">
                    {level.criteria.map((criteria, critIndex) => (
                      <div key={critIndex} className="text-sm text-muted-foreground">
                        • {criteria}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">奖励权益：</h4>
                  <div className="space-y-1">
                    {level.rewards.map((reward, rewIndex) => (
                      <div key={rewIndex} className="text-sm text-green-600">
                        ✓ {reward}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <Github className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            准备开始贡献？
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            查看GitHub仓库中的Issues，找到感兴趣的任务开始你的贡献之旅。
            如果有任何问题，随时联系我们获取帮助。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" asChild>
              <Link href="https://github.com/vibetemplate/vibecli/issues" target="_blank">
                <Bug className="mr-2 h-4 w-4" />
                查看Issues
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/vibetemplate/vibecli/discussions" target="_blank">
                <MessageSquare className="mr-2 h-4 w-4" />
                加入讨论
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">
                <BookOpen className="mr-2 h-4 w-4" />
                阅读文档
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}