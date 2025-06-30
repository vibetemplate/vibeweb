import { Project, User, Comment, Like, Tag, Document, Analytics, Newsletter, Feedback } from '@prisma/client';

// 扩展的项目类型，包含关联数据
export type ProjectWithDetails = Project & {
  author: User;
  comments: (Comment & { author: User })[];
  likes: Like[];
  tags: (ProjectTag & { tag: Tag })[];
  _count: {
    comments: number;
    likes: number;
  };
};

// 项目标签关联类型
export type ProjectTag = {
  projectId: string;
  tagId: string;
  project: Project;
  tag: Tag;
};

// 用户与项目关联类型
export type UserWithProjects = User & {
  projects: Project[];
  _count: {
    projects: number;
    comments: number;
    likes: number;
  };
};

// 评论与作者信息
export type CommentWithAuthor = Comment & {
  author: User;
};

// 文档类型
export type DocumentWithMeta = Document & {
  readTime?: number; // 估算阅读时间（分钟）
};

// 分析事件类型
export interface AnalyticsEvent {
  event: string;
  page?: string;
  userId?: string;
  metadata?: Record<string, any>;
}

// API响应类型
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 分页参数
export interface PaginationParams {
  page: number;
  limit: number;
}

// 分页响应
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// 搜索参数
export interface SearchParams {
  query?: string;
  category?: string;
  tags?: string[];
  sort?: 'newest' | 'oldest' | 'popular' | 'views';
  featured?: boolean;
}

// VibeCLI相关类型
export interface VibeCLIProject {
  name: string;
  description: string;
  template: 'default' | 'blog' | 'ecommerce' | 'saas';
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    deployment: string;
  };
  features: string[];
  estimatedTime: number; // 分钟
}

// MCP相关类型
export interface MCPAnalysisResult {
  projectType: string;
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    deployment: string;
  };
  complexity: 'simple' | 'medium' | 'complex' | 'enterprise';
  estimatedTime: number;
  recommendations: string[];
  risks: string[];
  alternatives: string[];
}

// 部署配置类型
export interface DeploymentConfig {
  platform: 'vercel' | 'netlify' | 'aws' | 'gcp' | 'azure' | 'docker';
  environment: 'development' | 'staging' | 'production';
  customDomain?: string;
  envVars?: Record<string, string>;
  buildSettings?: {
    buildCommand?: string;
    outputDirectory?: string;
    nodeVersion?: string;
  };
}

// 表单验证类型
export interface FormErrors {
  [key: string]: string | undefined;
}

// 主题类型
export type Theme = 'light' | 'dark' | 'system';

// 导航菜单类型
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

// 功能特性类型
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  techDetails?: string[];
}

// 定价计划类型
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  description: string;
  features: string[];
  limitations?: string[];
  recommended?: boolean;
  buttonText: string;
  buttonVariant: 'default' | 'outline' | 'gradient';
}

// 团队成员类型
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

// FAQ类型
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// 统计数据类型
export interface Stats {
  totalProjects: number;
  totalUsers: number;
  totalDownloads: number;
  githubStars: number;
  npmDownloads: number;
  communityMembers: number;
}

export type {
  Project,
  User,
  Comment,
  Like,
  Tag,
  Document,
  Analytics,
  Newsletter,
  Feedback,
};