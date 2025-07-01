'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code,
  Copy,
  Shield,
  Zap,
  Database,
  Globe,
  Key,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  Terminal,
  FileText,
  Link as LinkIcon
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const apiEndpoints = [
  {
    method: 'POST',
    path: '/mcp/tools/project_analyzer',
    title: '项目分析器',
    description: '分析用户需求，推荐技术栈和架构',
    category: 'core-tools',
    requestSchema: {
      requirement: 'string',
      preferences: {
        framework: 'string?',
        database: 'string?',
        deployment: 'string?'
      },
      constraints: {
        timeline: 'string?',
        budget: 'number?',
        team_size: 'number?'
      }
    },
    responseSchema: {
      project_type: 'string',
      tech_stack: 'object',
      complexity: 'string',
      estimated_time: 'string',
      risks: 'array',
      recommendations: 'array'
    },
    example: {
      request: {
        requirement: '我想创建一个电商网站，需要用户认证、商品管理、购物车和支付功能',
        preferences: {
          framework: 'Next.js',
          database: 'PostgreSQL'
        },
        constraints: {
          timeline: '1个月',
          team_size: 2
        }
      },
      response: {
        project_type: 'E-commerce Platform',
        tech_stack: {
          frontend: 'Next.js + TypeScript',
          backend: 'Next.js API Routes',
          database: 'Prisma + PostgreSQL',
          auth: 'NextAuth.js',
          payment: 'Stripe'
        },
        complexity: 'Medium',
        estimated_time: '45分钟',
        risks: ['支付安全', '数据一致性'],
        recommendations: ['使用Stripe处理支付', '实现购物车状态持久化']
      }
    }
  },
  {
    method: 'POST',
    path: '/mcp/tools/template_generator',
    title: '模板生成器',
    description: '基于分析结果生成完整项目模板',
    category: 'core-tools',
    requestSchema: {
      analysis_result: 'object',
      project_name: 'string',
      custom_requirements: 'string?'
    },
    responseSchema: {
      project_structure: 'object',
      files_created: 'number',
      dependencies: 'array',
      configuration: 'object',
      next_steps: 'array'
    },
    example: {
      request: {
        analysis_result: '/* 项目分析结果 */',
        project_name: 'my-ecommerce-store',
        custom_requirements: '需要支持多语言'
      },
      response: {
        project_structure: {
          'src/': ['components/', 'pages/', 'utils/', 'types/'],
          'public/': ['images/', 'icons/'],
          'docs/': ['README.md', 'API.md']
        },
        files_created: 150,
        dependencies: ['next', 'react', 'prisma', 'stripe'],
        configuration: {
          typescript: true,
          eslint: true,
          tailwind: true
        },
        next_steps: ['安装依赖', '配置数据库', '设置环境变量']
      }
    }
  },
  {
    method: 'POST',
    path: '/mcp/tools/feature_composer',
    title: '功能合成器',
    description: '动态添加和组合复杂功能模块',
    category: 'core-tools',
    requestSchema: {
      project_path: 'string',
      feature_description: 'string',
      integration_mode: 'string'
    },
    responseSchema: {
      files_modified: 'array',
      files_created: 'array',
      dependencies_added: 'array',
      configuration_updates: 'object',
      tests_generated: 'array'
    },
    example: {
      request: {
        project_path: './my-ecommerce-store',
        feature_description: '添加实时聊天功能',
        integration_mode: 'seamless'
      },
      response: {
        files_modified: ['src/pages/_app.tsx', 'src/components/Layout.tsx'],
        files_created: ['src/components/Chat/', 'src/lib/socket.ts'],
        dependencies_added: ['socket.io-client', '@types/socket.io-client'],
        configuration_updates: {
          'next.config.js': 'WebSocket配置',
          'tailwind.config.js': '聊天组件样式'
        },
        tests_generated: ['Chat.test.tsx', 'socket.test.ts']
      }
    }
  },
  {
    method: 'POST',
    path: '/mcp/tools/deployment_manager',
    title: '部署管理器',
    description: '智能部署配置和多平台发布',
    category: 'core-tools',
    requestSchema: {
      project_path: 'string',
      target_platform: 'string',
      environment: 'string',
      deployment_config: 'object'
    },
    responseSchema: {
      deployment_url: 'string',
      configuration_files: 'array',
      environment_variables: 'object',
      monitoring_setup: 'object',
      ssl_config: 'object'
    },
    example: {
      request: {
        project_path: './my-ecommerce-store',
        target_platform: 'vercel',
        environment: 'production',
        deployment_config: {
          domain: 'my-store.com',
          region: 'asia'
        }
      },
      response: {
        deployment_url: 'https://my-store.vercel.app',
        configuration_files: ['vercel.json', '.env.production'],
        environment_variables: {
          'DATABASE_URL': '***',
          'STRIPE_SECRET_KEY': '***'
        },
        monitoring_setup: {
          analytics: 'Vercel Analytics',
          logs: 'Vercel Logs'
        },
        ssl_config: {
          enabled: true,
          certificate: 'Let\'s Encrypt'
        }
      }
    }
  }
];

const authMethods = [
  {
    name: 'OAuth 2.1',
    description: '标准OAuth 2.1认证流程',
    code: `// 获取访问令牌
const response = await fetch('/api/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    grant_type: 'client_credentials',
    client_id: 'your_client_id',
    client_secret: 'your_client_secret',
    scope: 'mcp:tools mcp:resources'
  })
});

const { access_token } = await response.json();`
  },
  {
    name: 'API Key',
    description: '简单的API密钥认证',
    code: `// 使用API密钥
const response = await fetch('/mcp/tools/project_analyzer', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestData)
});`
  }
];

const sdkExamples = [
  {
    language: 'JavaScript',
    code: `import { VibeCLI } from '@vibecli/sdk';

const client = new VibeCLI({
  apiKey: 'your_api_key',
  baseURL: 'https://api.vibecli.com'
});

// 分析项目需求
const analysis = await client.tools.projectAnalyzer({
  requirement: '创建一个博客系统',
  preferences: {
    framework: 'Next.js'
  }
});

// 生成项目模板
const template = await client.tools.templateGenerator({
  analysisResult: analysis,
  projectName: 'my-blog'
});

console.log('项目创建完成:', template.projectStructure);`
  },
  {
    language: 'Python',
    code: `from vibecli import VibeCLI

client = VibeCLI(
    api_key="your_api_key",
    base_url="https://api.vibecli.com"
)

# 分析项目需求
analysis = client.tools.project_analyzer({
    "requirement": "创建一个博客系统",
    "preferences": {
        "framework": "Next.js"
    }
})

# 生成项目模板
template = client.tools.template_generator({
    "analysis_result": analysis,
    "project_name": "my-blog"
})

print("项目创建完成:", template["project_structure"])`
  },
  {
    language: 'cURL',
    code: `# 分析项目需求
curl -X POST https://api.vibecli.com/mcp/tools/project_analyzer \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "requirement": "创建一个博客系统",
    "preferences": {
      "framework": "Next.js"
    }
  }'

# 生成项目模板
curl -X POST https://api.vibecli.com/mcp/tools/template_generator \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "analysis_result": {...},
    "project_name": "my-blog"
  }'`
  }
];

const errorCodes = [
  { code: 400, message: 'Bad Request', description: '请求参数错误或缺失必要字段' },
  { code: 401, message: 'Unauthorized', description: 'API密钥无效或已过期' },
  { code: 403, message: 'Forbidden', description: '没有权限访问该资源' },
  { code: 404, message: 'Not Found', description: '请求的资源不存在' },
  { code: 429, message: 'Too Many Requests', description: '请求频率超过限制' },
  { code: 500, message: 'Internal Server Error', description: '服务器内部错误' },
];

export function ApiDocumentation() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">
          API 参考
        </Badge>
        <h1 className="text-4xl font-bold">
          VibeCLI API 文档
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          完整的VibeCLI 2.0 API参考文档，包含四大核心工具接口、认证方式、请求响应格式和代码示例
        </p>
      </div>

      {/* Quick Start */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-600" />
            快速开始
          </CardTitle>
          <CardDescription>
            几步完成VibeCLI API集成
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <p className="font-medium">获取API密钥</p>
                <p className="text-muted-foreground">在控制台创建应用并获取密钥</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <p className="font-medium">选择SDK或直接调用</p>
                <p className="text-muted-foreground">使用官方SDK或REST API</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <p className="font-medium">开始构建项目</p>
                <p className="text-muted-foreground">调用四大核心工具API</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="gradient" asChild>
              <Link href="/dashboard">
                <Key className="mr-2 h-4 w-4" />
                获取API密钥
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#sdk-examples">
                查看代码示例
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Authentication */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">认证方式</h2>
            <p className="text-muted-foreground">VibeCLI支持OAuth 2.1和API密钥两种认证方式</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {authMethods.map((method, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{method.name}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{method.code}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-slate-400 hover:text-white"
                    onClick={() => copyCode(method.code, `auth-${index}`)}
                  >
                    {copiedCode === `auth-${index}` ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* API Endpoints */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900">
            <Settings className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">核心工具API</h2>
            <p className="text-muted-foreground">四大核心工具的详细API接口文档</p>
          </div>
        </div>

        <div className="space-y-8">
          {apiEndpoints.map((endpoint, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm">{endpoint.path}</code>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {endpoint.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {endpoint.title}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="request" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="request">请求格式</TabsTrigger>
                    <TabsTrigger value="response">响应格式</TabsTrigger>
                    <TabsTrigger value="example">示例代码</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="request" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">请求参数</h4>
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                        <pre className="text-sm">
                          <code>{JSON.stringify(endpoint.requestSchema, null, 2)}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="response" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">响应格式</h4>
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                        <pre className="text-sm">
                          <code>{JSON.stringify(endpoint.responseSchema, null, 2)}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="example" className="space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">请求示例</h4>
                        <div className="relative">
                          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
                            <code>{JSON.stringify(endpoint.example.request, null, 2)}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 text-slate-400 hover:text-white"
                            onClick={() => copyCode(JSON.stringify(endpoint.example.request, null, 2), `req-${index}`)}
                          >
                            {copiedCode === `req-${index}` ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">响应示例</h4>
                        <div className="relative">
                          <pre className="bg-slate-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto">
                            <code>{JSON.stringify(endpoint.example.response, null, 2)}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 text-slate-400 hover:text-white"
                            onClick={() => copyCode(JSON.stringify(endpoint.example.response, null, 2), `res-${index}`)}
                          >
                            {copiedCode === `res-${index}` ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* SDK Examples */}
      <div id="sdk-examples" className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900">
            <Code className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">SDK示例</h2>
            <p className="text-muted-foreground">多种编程语言的SDK使用示例</p>
          </div>
        </div>

        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {sdkExamples.map((example, index) => (
              <TabsTrigger key={index} value={index.toString()}>
                {example.language}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {sdkExamples.map((example, index) => (
            <TabsContent key={index} value={index.toString()}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{example.language} SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-slate-400 hover:text-white"
                      onClick={() => copyCode(example.code, `sdk-${index}`)}
                    >
                      {copiedCode === `sdk-${index}` ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Separator />

      {/* Error Codes */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">错误代码</h2>
            <p className="text-muted-foreground">API可能返回的错误代码和处理建议</p>
          </div>
        </div>

        <div className="grid gap-4">
          {errorCodes.map((error, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive" className="font-mono">
                      {error.code}
                    </Badge>
                    <div>
                      <p className="font-medium">{error.message}</p>
                      <p className="text-sm text-muted-foreground">{error.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Support */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            需要更多帮助？
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            查看更多文档、加入社区讨论或联系技术支持团队获取帮助
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" asChild>
              <Link href="/docs/mcp">
                <Database className="mr-2 h-4 w-4" />
                MCP协议文档
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/best-practices">
                <FileText className="mr-2 h-4 w-4" />
                最佳实践
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/support">
                <LinkIcon className="mr-2 h-4 w-4" />
                技术支持
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}