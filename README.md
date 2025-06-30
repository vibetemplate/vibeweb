# VibeCLI 2.0 MCP版本官方网站

这是VibeCLI 2.0的官方展示网站，基于Next.js 14 + TypeScript + Tailwind CSS + Supabase构建。

## 🚀 功能特性

- **现代化设计**: 响应式设计，支持深色/浅色主题
- **AI驱动展示**: 突出VibeCLI 2.0的MCP智能对话功能
- **实时Demo**: 在线体验VibeCLI的强大能力
- **技术文档**: 完整的开发者文档系统
- **案例展示**: 成功项目案例和用户故事
- **社区功能**: 用户互动、反馈收集

## 🛠 技术栈

- **前端**: Next.js 14 (App Router) + TypeScript
- **样式**: Tailwind CSS + Radix UI
- **数据库**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **部署**: Cloudflare Pages
- **认证**: Supabase Auth
- **主题**: next-themes

## 📦 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 环境配置

复制环境变量模板：

```bash
cp .env.example .env.local
```

配置必要的环境变量：

```env
# Database
DATABASE_URL="your-database-url"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

### 3. 数据库设置

```bash
# 生成Prisma客户端
npm run db:generate

# 推送数据库schema
npm run db:push

# 或运行迁移
npm run db:migrate
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # 营销页面路由组
│   ├── (dashboard)/       # 仪表板路由组
│   ├── api/              # API路由
│   └── layout.tsx        # 根布局
├── components/           # React组件
│   ├── ui/              # 基础UI组件
│   ├── marketing/       # 营销页面组件
│   ├── dashboard/       # 仪表板组件
│   └── common/          # 通用组件
├── lib/                 # 工具库
│   ├── db.ts           # 数据库连接
│   ├── supabase.ts     # Supabase客户端
│   └── utils.ts        # 工具函数
├── types/              # TypeScript类型定义
├── hooks/              # 自定义React Hooks
└── styles/             # 样式文件
```

## 🎨 设计系统

### 品牌色彩

- **主色调**: Blue (#0ea5e9) 到 Purple (#764ba2) 渐变
- **辅助色**: 基于Tailwind CSS调色板
- **深色模式**: 完全支持，自动切换

### 组件库

基于Radix UI构建，包含：

- 按钮 (Button)
- 卡片 (Card)
- 徽章 (Badge)
- 对话框 (Dialog)
- 下拉菜单 (DropdownMenu)
- 表单组件
- 导航组件

## 📊 数据模型

### 核心模型

- **User**: 用户信息
- **Project**: 项目案例
- **Document**: 技术文档
- **Comment**: 评论系统
- **Analytics**: 访问统计
- **Newsletter**: 邮件订阅

### 关联关系

- 用户可以创建多个项目
- 项目支持标签分类
- 评论和点赞系统
- 完整的权限管理

## 🚀 部署

### Cloudflare Pages

```bash
# 构建项目
npm run build

# 部署到Cloudflare Pages
# 通过Git连接自动部署
```

### 环境变量配置

在Cloudflare Pages中配置生产环境变量：

- `DATABASE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 🧪 开发指南

### 代码规范

- 使用TypeScript严格模式
- ESLint + Prettier代码格式化
- Conventional Commits提交规范

### 测试

```bash
# 类型检查
npm run type-check

# 代码检查
npm run lint

# 修复代码格式
npm run lint:fix
```

### 数据库操作

```bash
# 查看数据库
npm run db:studio

# 重置数据库
npm run db:reset

# 生成迁移
npm run db:migrate
```

## 📖 API文档

### 核心端点

- `GET /api/projects` - 获取项目列表
- `POST /api/projects` - 创建新项目
- `GET /api/docs` - 获取文档
- `POST /api/analytics` - 记录访问数据

### 认证

使用Supabase Auth进行用户认证：

- JWT Token认证
- OAuth支持（GitHub等）
- 行级安全策略 (RLS)

## 🤝 贡献指南

1. Fork本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启Pull Request

## 📝 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [VibeCLI GitHub](https://github.com/vibetemplate/vibecli)
- [官方文档](https://vibecli.com/docs)
- [技术博客](https://vibecli.com/blog)
- [社区讨论](https://github.com/vibetemplate/vibecli/discussions)

---

**注意**: 这是VibeCLI 2.0的展示网站项目，专门用于推广和展示VibeCLI的能力。如需了解VibeCLI CLI工具本身，请访问[主项目仓库](https://github.com/vibetemplate/vibecli)。