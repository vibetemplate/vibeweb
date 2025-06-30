// Cloudflare KV 存储工具库

interface KVNamespace {
  get(key: string, type?: 'text' | 'json' | 'arrayBuffer' | 'stream'): Promise<any>;
  put(key: string, value: string | ArrayBuffer | ArrayBufferView | ReadableStream, options?: any): Promise<void>;
  delete(key: string): Promise<void>;
  list(options?: any): Promise<any>;
}

declare global {
  const CACHE: KVNamespace;
  const SESSIONS: KVNamespace;
}

// 缓存管理
export class CacheManager {
  private kv: KVNamespace;

  constructor(namespace: KVNamespace = CACHE) {
    this.kv = namespace;
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await this.kv.get(key, 'json');
      return value as T;
    } catch (error) {
      console.error('KV cache get error:', error);
      return null;
    }
  }

  async set<T>(key: string, value: T, ttl: number = 3600): Promise<void> {
    try {
      await this.kv.put(key, JSON.stringify(value), {
        expirationTtl: ttl,
      });
    } catch (error) {
      console.error('KV cache set error:', error);
    }
  }

  async delete(key: string): Promise<void> {
    try {
      await this.kv.delete(key);
    } catch (error) {
      console.error('KV cache delete error:', error);
    }
  }

  async list(prefix?: string): Promise<string[]> {
    try {
      const result = await this.kv.list({ prefix });
      return result.keys.map((key: any) => key.name);
    } catch (error) {
      console.error('KV cache list error:', error);
      return [];
    }
  }

  // 页面缓存
  async cachePage(path: string, html: string, ttl: number = 300): Promise<void> {
    const key = `page:${path}`;
    await this.set(key, {
      html,
      timestamp: Date.now(),
      path,
    }, ttl);
  }

  async getCachedPage(path: string): Promise<string | null> {
    const key = `page:${path}`;
    const cached = await this.get<{ html: string; timestamp: number }>(key);
    return cached?.html || null;
  }

  // API响应缓存
  async cacheApiResponse(endpoint: string, data: any, ttl: number = 600): Promise<void> {
    const key = `api:${endpoint}`;
    await this.set(key, {
      data,
      timestamp: Date.now(),
      endpoint,
    }, ttl);
  }

  async getCachedApiResponse<T>(endpoint: string): Promise<T | null> {
    const key = `api:${endpoint}`;
    const cached = await this.get<{ data: T; timestamp: number }>(key);
    return cached?.data || null;
  }
}

// 会话管理
export class SessionManager {
  private kv: KVNamespace;

  constructor(namespace: KVNamespace = SESSIONS) {
    this.kv = namespace;
  }

  async createSession(userId: string, sessionData: any): Promise<string> {
    const sessionId = crypto.randomUUID();
    const key = `session:${sessionId}`;
    
    await this.kv.put(key, JSON.stringify({
      userId,
      ...sessionData,
      createdAt: Date.now(),
      lastAccessed: Date.now(),
    }), {
      expirationTtl: 86400 * 7, // 7 days
    });

    return sessionId;
  }

  async getSession(sessionId: string): Promise<any | null> {
    try {
      const key = `session:${sessionId}`;
      const session = await this.kv.get(key, 'json');
      
      if (session) {
        // Update last accessed time
        await this.kv.put(key, JSON.stringify({
          ...session,
          lastAccessed: Date.now(),
        }), {
          expirationTtl: 86400 * 7,
        });
      }
      
      return session;
    } catch (error) {
      console.error('Session get error:', error);
      return null;
    }
  }

  async updateSession(sessionId: string, updates: any): Promise<void> {
    const session = await this.getSession(sessionId);
    if (session) {
      const key = `session:${sessionId}`;
      await this.kv.put(key, JSON.stringify({
        ...session,
        ...updates,
        lastAccessed: Date.now(),
      }), {
        expirationTtl: 86400 * 7,
      });
    }
  }

  async deleteSession(sessionId: string): Promise<void> {
    const key = `session:${sessionId}`;
    await this.kv.delete(key);
  }

  async cleanupExpiredSessions(): Promise<void> {
    try {
      const sessions = await this.kv.list({ prefix: 'session:' });
      const now = Date.now();
      const expiredThreshold = 86400 * 7 * 1000; // 7 days in ms

      for (const sessionKey of sessions.keys) {
        const session = await this.kv.get(sessionKey.name, 'json');
        if (session && (now - session.lastAccessed) > expiredThreshold) {
          await this.kv.delete(sessionKey.name);
        }
      }
    } catch (error) {
      console.error('Session cleanup error:', error);
    }
  }
}

// 分析数据存储
export class AnalyticsManager {
  private kv: KVNamespace;

  constructor(namespace: KVNamespace = CACHE) {
    this.kv = namespace;
  }

  async trackEvent(event: {
    type: string;
    page: string;
    userId?: string;
    metadata?: any;
  }): Promise<void> {
    const timestamp = Date.now();
    const key = `analytics:${event.type}:${timestamp}:${crypto.randomUUID()}`;
    
    await this.kv.put(key, JSON.stringify({
      ...event,
      timestamp,
    }), {
      expirationTtl: 86400 * 30, // 30 days
    });
  }

  async getEvents(type: string, startTime?: number, endTime?: number): Promise<any[]> {
    try {
      const prefix = `analytics:${type}:`;
      const result = await this.kv.list({ prefix });
      const events = [];

      for (const key of result.keys) {
        const event = await this.kv.get(key.name, 'json');
        if (event) {
          if (startTime && event.timestamp < startTime) continue;
          if (endTime && event.timestamp > endTime) continue;
          events.push(event);
        }
      }

      return events.sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error('Analytics get events error:', error);
      return [];
    }
  }

  async getPageViews(page: string, timeRange: number = 86400000): Promise<number> {
    const now = Date.now();
    const events = await this.getEvents('pageview', now - timeRange, now);
    return events.filter(event => event.page === page).length;
  }

  async getPopularPages(limit: number = 10): Promise<Array<{ page: string; views: number }>> {
    const events = await this.getEvents('pageview');
    const pageCounts = events.reduce((acc, event) => {
      acc[event.page] = (acc[event.page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  }
}

// 实例导出
export const cache = new CacheManager();
export const sessions = new SessionManager();
export const analytics = new AnalyticsManager();

// 工具函数
export function generateCacheKey(...parts: string[]): string {
  return parts.join(':');
}

export function isKVAvailable(): boolean {
  return typeof CACHE !== 'undefined' && typeof SESSIONS !== 'undefined';
}