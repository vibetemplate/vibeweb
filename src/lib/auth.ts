'use client';

// 简单的认证状态管理
// 在实际项目中，这里应该集成 Supabase、Auth0 或其他认证服务

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// 模拟用户数据
const mockUser: User = {
  id: '1',
  name: '张伟',
  email: 'zhangwei@example.com',
  avatar: '',
  createdAt: '2024-01-01T00:00:00Z',
};

class AuthManager {
  private listeners: ((state: AuthState) => void)[] = [];
  private state: AuthState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
  };

  constructor() {
    // 初始化时检查本地存储的认证状态
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('vibecli_user');
      if (storedUser) {
        try {
          this.state.user = JSON.parse(storedUser);
          this.state.isAuthenticated = true;
        } catch (error) {
          localStorage.removeItem('vibecli_user');
        }
      }
    }
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener);
    // 立即调用以获取当前状态
    listener(this.state);
    
    // 返回取消订阅函数
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    this.state.isLoading = true;
    this.notify();

    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 简单的模拟认证逻辑
      if (email === 'demo@vibecli.com' && password === 'demo123') {
        this.state.user = { ...mockUser, email };
        this.state.isAuthenticated = true;
        
        // 保存到本地存储
        localStorage.setItem('vibecli_user', JSON.stringify(this.state.user));
        
        this.state.isLoading = false;
        this.notify();
        return { success: true };
      } else {
        this.state.isLoading = false;
        this.notify();
        return { success: false, error: '邮箱或密码错误' };
      }
    } catch (error) {
      this.state.isLoading = false;
      this.notify();
      return { success: false, error: '登录失败，请稍后重试' };
    }
  }

  async register(name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> {
    this.state.isLoading = true;
    this.notify();

    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 简单的模拟注册逻辑
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        createdAt: new Date().toISOString(),
      };

      this.state.user = newUser;
      this.state.isAuthenticated = true;
      
      // 保存到本地存储
      localStorage.setItem('vibecli_user', JSON.stringify(newUser));
      
      this.state.isLoading = false;
      this.notify();
      return { success: true };
    } catch (error) {
      this.state.isLoading = false;
      this.notify();
      return { success: false, error: '注册失败，请稍后重试' };
    }
  }

  async loginWithGitHub(): Promise<{ success: boolean; error?: string }> {
    this.state.isLoading = true;
    this.notify();

    try {
      // 模拟GitHub OAuth流程
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const githubUser: User = {
        id: 'github_' + Date.now(),
        name: 'GitHub用户',
        email: 'github@example.com',
        avatar: '',
        createdAt: new Date().toISOString(),
      };

      this.state.user = githubUser;
      this.state.isAuthenticated = true;
      
      localStorage.setItem('vibecli_user', JSON.stringify(githubUser));
      
      this.state.isLoading = false;
      this.notify();
      return { success: true };
    } catch (error) {
      this.state.isLoading = false;
      this.notify();
      return { success: false, error: 'GitHub登录失败' };
    }
  }

  logout() {
    this.state.user = null;
    this.state.isAuthenticated = false;
    localStorage.removeItem('vibecli_user');
    this.notify();
  }

  getState(): AuthState {
    return { ...this.state };
  }
}

export const authManager = new AuthManager();

// React Hook for using auth state
import { useState, useEffect } from 'react';

export function useAuth(): AuthState & {
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGitHub: () => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
} {
  const [authState, setAuthState] = useState<AuthState>(authManager.getState());

  useEffect(() => {
    const unsubscribe = authManager.subscribe(setAuthState);
    return unsubscribe;
  }, []);

  return {
    ...authState,
    login: authManager.login.bind(authManager),
    register: authManager.register.bind(authManager),
    loginWithGitHub: authManager.loginWithGitHub.bind(authManager),
    logout: authManager.logout.bind(authManager),
  };
}