import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      <div className="relative flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">VibeCLI</span>
              <span className="text-xs text-muted-foreground">2.0 MCP</span>
            </div>
          </Link>
        </div>
        
        {/* Auth Content */}
        <div className="w-full max-w-md">
          {children}
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2024 VibeCLI. 保留所有权利。
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-foreground">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}