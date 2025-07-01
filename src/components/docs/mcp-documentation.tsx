'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Database,
  MessageSquare,
  Shield,
  Zap,
  Settings,
  Globe,
  Code,
  Layers,
  ArrowRight,
  CheckCircle,
  Info,
  AlertTriangle,
  FileText,
  GitBranch,
  Terminal
} from 'lucide-react';
import Link from 'next/link';

const mcpOverview = {
  version: '2025-06-18',
  title: 'Model Context Protocol',
  description: 'AI模型与外部工具系统交互的标准化协议',
  features: [
    'Streamable HTTP Transport - 流式HTTP传输',
    'OAuth 2.1 Security - 企业级安全认证',
    'Elicitation System - 智能信息获取',
    'Structured Output - 结构化数据输出',
    'Resource Management - 资源管理机制',
    'Tool Invocation - 工具调用框架'
  ]
};

const protocolLayers = [
  {
    layer: 'Transport Layer',
    title: '传输层',
    description: '基于HTTP的可靠通信协议',
    icon: Globe,
    features: [
      'HTTP/2 多路复用支持',
      'Server-Sent Events (SSE)',
      'Connection Keep-Alive',
      'Last-Event-ID 断点续传',
      'Error Recovery 机制',
      'Compression 数据压缩'
    ],
    implementation: {
      endpoint: 'https://api.vibecli.com/mcp',
      headers: {
        'Accept': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    }
  },
  {
    layer: 'Security Layer',
    title: '安全层',
    description: 'OAuth 2.1 + RFC 8707 增强安全',
    icon: Shield,
    features: [
      'RFC 8707 Resource Indicators',
      'Protected Resource Metadata',
      'Audience Restriction',
      'Token Misuse Prevention',
      'Enhanced Security Compliance',
      'Scope-based Access Control'
    ],
    implementation: {
      authUrl: 'https://auth.vibecli.com/oauth',
      scopes: ['mcp:tools', 'mcp:resources', 'mcp:admin'],
      tokenFormat: 'JWT'
    }
  },
  {
    layer: 'Protocol Layer',
    title: '协议层',
    description: 'MCP消息格式和交互模式',
    icon: MessageSquare,
    features: [
      'Request/Response Pattern',
      'Notification Messages',
      'Bidirectional Communication',
      'Message Versioning',
      'Schema Validation',
      'Content Negotiation'
    ],
    implementation: {
      messageFormat: 'JSON-RPC 2.0',
      contentType: 'application/json',
      encoding: 'UTF-8'
    }
  },
  {
    layer: 'Application Layer',
    title: '应用层',
    description: 'VibeCLI工具和资源实现',
    icon: Settings,
    features: [
      'Tool Registration',
      'Resource Discovery',
      'Capability Negotiation',
      'Context Management',
      'Result Caching',
      'Error Handling'
    ],
    implementation: {
      tools: ['project_analyzer', 'template_generator', 'feature_composer', 'deployment_manager'],
      resources: ['templates', 'configurations', 'deployments'],
      prompts: ['analyze', 'generate', 'compose', 'deploy']
    }
  }
];

const mcpMessages = [
  {
    type: 'initialize',
    direction: 'Client → Server',
    purpose: '初始化连接和能力协商',
    schema: {
      jsonrpc: '2.0',
      method: 'initialize',
      params: {
        protocolVersion: 'string',
        capabilities: 'object',
        clientInfo: 'object'
      }
    },
    example: `{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-06-18",
    "capabilities": {
      "tools": true,
      "resources": true,
      "prompts": true
    },
    "clientInfo": {
      "name": "VibeCLI",
      "version": "2.0.0"
    }
  }
}`
  },
  {
    type: 'tools/call',
    direction: 'Client → Server',
    purpose: '调用服务器端工具',
    schema: {
      jsonrpc: '2.0',
      method: 'tools/call',
      params: {
        name: 'string',
        arguments: 'object'
      }
    },
    example: `{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "project_analyzer",
    "arguments": {
      "requirement": "创建电商网站",
      "preferences": {
        "framework": "Next.js"
      }
    }
  }
}`
  },
  {
    type: 'resources/read',
    direction: 'Client → Server',
    purpose: '读取服务器资源',
    schema: {
      jsonrpc: '2.0',
      method: 'resources/read',
      params: {
        uri: 'string'
      }
    },
    example: `{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "resources/read",
  "params": {
    "uri": "template://ecommerce/nextjs"
  }
}`
  },
  {
    type: 'prompts/get',
    direction: 'Client → Server',
    purpose: '获取预定义提示模板',
    schema: {
      jsonrpc: '2.0',
      method: 'prompts/get',
      params: {
        name: 'string',
        arguments: 'object'
      }
    },
    example: `{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "prompts/get",
  "params": {
    "name": "analyze_requirements",
    "arguments": {
      "domain": "ecommerce"
    }
  }
}`
  }
];

const implementationGuide = [
  {
    step: '1. 协议初始化',
    description: '建立MCP连接并协商能力',
    code: `// 1. 建立SSE连接
const eventSource = new EventSource('https://api.vibecli.com/mcp/sse', {
  headers: {
    'Authorization': 'Bearer your_token'
  }
});

// 2. 发送初始化消息
const initMessage = {
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2025-06-18',
    capabilities: {
      tools: true,
      resources: true,
      prompts: true
    },
    clientInfo: {
      name: 'MyApp',
      version: '1.0.0'
    }
  }
};

fetch('https://api.vibecli.com/mcp/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_token'
  },
  body: JSON.stringify(initMessage)
});`
  },
  {
    step: '2. 工具调用',
    description: '调用VibeCLI核心工具',
    code: `// 调用项目分析器
const analyzeProject = async (requirement) => {
  const message = {
    jsonrpc: '2.0',
    id: 2,
    method: 'tools/call',
    params: {
      name: 'project_analyzer',
      arguments: {
        requirement,
        preferences: {
          framework: 'Next.js',
          database: 'PostgreSQL'
        }
      }
    }
  };

  const response = await fetch('https://api.vibecli.com/mcp/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_token'
    },
    body: JSON.stringify(message)
  });

  return await response.json();
};`
  },
  {
    step: '3. 资源访问',
    description: '读取模板和配置资源',
    code: `// 读取项目模板
const getTemplate = async (templateUri) => {
  const message = {
    jsonrpc: '2.0',
    id: 3,
    method: 'resources/read',
    params: {
      uri: templateUri
    }
  };

  const response = await fetch('https://api.vibecli.com/mcp/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_token'
    },
    body: JSON.stringify(message)
  });

  const result = await response.json();
  return result.result.contents;
};`
  },
  {
    step: '4. 错误处理',
    description: '处理协议错误和重连',
    code: `// 错误处理和重连机制
class MCPClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
  }

  connect() {
    this.eventSource = new EventSource('https://api.vibecli.com/mcp/sse');
    
    this.eventSource.onerror = (error) => {
      console.error('MCP Connection error:', error);
      this.handleReconnect();
    };

    this.eventSource.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        this.handleMessage(message);
      } catch (error) {
        console.error('Message parsing error:', error);
      }
    };
  }

  handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect();
      }, Math.pow(2, this.reconnectAttempts) * 1000);
    }
  }
}`
  }
];

export function McpDocumentation() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">
          MCP 协议 {mcpOverview.version}
        </Badge>
        <h1 className="text-4xl font-bold">
          Model Context Protocol
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {mcpOverview.description} - VibeCLI 2.0 基于MCP协议实现AI工具与外部系统的标准化交互
        </p>
      </div>

      {/* Protocol Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">协议特性</h3>
              <div className="space-y-2">
                {mcpOverview.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">应用场景</h3>
              <div className="space-y-2 text-sm">
                <p>• AI助手与开发工具集成</p>
                <p>• 自动化项目生成系统</p>
                <p>• 智能代码分析和重构</p>
                <p>• 多平台部署管理</p>
                <p>• 企业级AI工作流</p>
                <p>• 开发者工具生态系统</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Protocol Architecture */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900">
            <Layers className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">协议架构</h2>
            <p className="text-muted-foreground">MCP四层架构设计，确保可靠性和扩展性</p>
          </div>
        </div>

        <div className="space-y-6">
          {protocolLayers.map((layer, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                    <layer.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs font-mono">
                        {layer.layer}
                      </Badge>
                      <CardTitle className="text-lg">{layer.title}</CardTitle>
                    </div>
                    <CardDescription>{layer.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="features">核心特性</TabsTrigger>
                    <TabsTrigger value="implementation">实现细节</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="features" className="mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {layer.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="implementation" className="mt-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{JSON.stringify(layer.implementation, null, 2)}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Message Types */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900">
            <MessageSquare className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">消息类型</h2>
            <p className="text-muted-foreground">MCP协议支持的核心消息类型和交互模式</p>
          </div>
        </div>

        <div className="grid gap-6">
          {mcpMessages.map((message, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono text-xs">
                        {message.type}
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{message.direction}</span>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {message.purpose}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="schema" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="schema">消息结构</TabsTrigger>
                    <TabsTrigger value="example">示例</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="schema" className="mt-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                      <pre className="text-sm">
                        <code>{JSON.stringify(message.schema, null, 2)}</code>
                      </pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="example" className="mt-4">
                    <div className="bg-slate-900 p-4 rounded-lg">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{message.example}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Implementation Guide */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900">
            <Code className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">实现指南</h2>
            <p className="text-muted-foreground">如何基于MCP协议集成VibeCLI功能</p>
          </div>
        </div>

        <div className="space-y-8">
          {implementationGuide.map((guide, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{guide.step}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{guide.code}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <Info className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            深入了解MCP协议
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            查看完整的协议规范、实现示例和最佳实践，快速集成VibeCLI强大功能
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" asChild>
              <Link href="/docs/api">
                <Terminal className="mr-2 h-4 w-4" />
                API文档
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/best-practices">
                <FileText className="mr-2 h-4 w-4" />
                最佳实践
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                <GitBranch className="mr-2 h-4 w-4" />
                GitHub仓库
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}