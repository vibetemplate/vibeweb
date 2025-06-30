// Cloudflare Function for Analytics API

interface Env {
  ANALYTICS: AnalyticsEngineDataset;
  CACHE: KVNamespace;
}

interface AnalyticsEvent {
  type: string;
  page: string;
  userId?: string;
  sessionId?: string;
  timestamp: number;
  userAgent?: string;
  referrer?: string;
  country?: string;
  metadata?: Record<string, any>;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    // 检查请求方法
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // 解析请求体
    const body = await request.json() as AnalyticsEvent;
    
    // 验证必需字段
    if (!body.type || !body.page) {
      return new Response('Missing required fields: type, page', { status: 400 });
    }

    // 获取请求信息
    const userAgent = request.headers.get('User-Agent') || '';
    const referrer = request.headers.get('Referer') || '';
    const country = request.cf?.country as string || 'Unknown';
    const timestamp = Date.now();

    // 构建分析事件
    const event: AnalyticsEvent = {
      ...body,
      timestamp,
      userAgent,
      referrer,
      country,
    };

    // 写入 Analytics Engine
    env.ANALYTICS.writeDataPoint({
      blobs: [
        event.type,
        event.page,
        event.userId || 'anonymous',
        event.sessionId || '',
        userAgent,
        referrer,
        country,
        JSON.stringify(event.metadata || {}),
      ],
      doubles: [timestamp],
      indexes: [event.type, event.page],
    });

    // 缓存热门页面统计
    await updatePageStats(env.CACHE, event.page);

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error) {
    console.error('Analytics error:', error);
    return new Response('Internal server error', { status: 500 });
  }
};

// 处理 OPTIONS 请求 (CORS)
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};

// 更新页面统计
async function updatePageStats(kv: KVNamespace, page: string): Promise<void> {
  try {
    const key = `page_stats:${page}`;
    const current = await kv.get(key, 'json') as { views: number; lastUpdated: number } || { views: 0, lastUpdated: 0 };
    
    await kv.put(key, JSON.stringify({
      views: current.views + 1,
      lastUpdated: Date.now(),
    }), {
      expirationTtl: 86400 * 30, // 30 days
    });
  } catch (error) {
    console.error('Error updating page stats:', error);
  }
}