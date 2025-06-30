// Cloudflare Pages 边缘中间件

interface Env {
  CACHE: KVNamespace;
  SESSIONS: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next, env } = context;
  const url = new URL(request.url);

  // 添加安全头
  const response = await next();
  const newResponse = new Response(response.body, response);

  // 设置安全头
  newResponse.headers.set('X-Frame-Options', 'DENY');
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');

  // HSTS (仅在 HTTPS 上)
  if (url.protocol === 'https:') {
    newResponse.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }

  // CSP
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://*.supabase.co https://api.github.com",
    "frame-src 'self' https://www.youtube.com",
  ].join('; ');
  newResponse.headers.set('Content-Security-Policy', csp);

  // 速率限制
  if (url.pathname.startsWith('/api/')) {
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
    const rateLimitKey = `rate_limit:${clientIP}:${url.pathname}`;
    
    try {
      const current = await env.CACHE.get(rateLimitKey);
      const count = current ? parseInt(current) : 0;
      
      if (count > 100) { // 每分钟100次请求
        return new Response('Rate limit exceeded', { status: 429 });
      }
      
      await env.CACHE.put(rateLimitKey, (count + 1).toString(), {
        expirationTtl: 60, // 1分钟
      });
    } catch (error) {
      console.error('Rate limiting error:', error);
    }
  }

  // 地理位置阻止（如需要）
  const country = request.cf?.country as string;
  const blockedCountries = ['CN', 'RU']; // 示例：阻止特定国家
  if (blockedCountries.includes(country) && url.pathname.startsWith('/admin')) {
    return new Response('Access denied', { status: 403 });
  }

  // 机器人检测
  const userAgent = request.headers.get('User-Agent') || '';
  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
  ];
  
  const isBot = botPatterns.some(pattern => pattern.test(userAgent));
  if (isBot && url.pathname.startsWith('/api/')) {
    newResponse.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  // 缓存控制
  if (url.pathname.startsWith('/_next/static/')) {
    newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (url.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
    newResponse.headers.set('Cache-Control', 'public, max-age=86400');
  } else if (url.pathname.startsWith('/api/')) {
    newResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  }

  // A/B 测试 (示例)
  if (url.pathname === '/' && !request.headers.get('Cookie')?.includes('ab_test')) {
    const variant = Math.random() < 0.5 ? 'A' : 'B';
    newResponse.headers.append('Set-Cookie', `ab_test=${variant}; Path=/; Max-Age=86400; SameSite=Lax`);
  }

  // 性能监控
  const startTime = Date.now();
  const endTime = Date.now();
  newResponse.headers.set('X-Response-Time', `${endTime - startTime}ms`);

  return newResponse;
};