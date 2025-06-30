import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/common/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata = {
  title: {
    default: 'VibeCLI 2.0 - AI驱动的智能全栈开发工具',
    template: '%s | VibeCLI 2.0',
  },
  description: '从命令驱动到智能对话驱动的革命性升级。VibeCLI 2.0基于MCP协议，提供32x效率提升的AI智能开发助手。',
  keywords: ['VibeCLI', 'MCP', 'AI开发工具', 'Next.js', 'TypeScript', '全栈开发', 'CLI工具'],
  authors: [{ name: 'VibeCLI Team' }],
  creator: 'VibeCLI Team',
  publisher: 'VibeCLI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vibecli.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VibeCLI 2.0 - AI驱动的智能全栈开发工具',
    description: '从命令驱动到智能对话驱动的革命性升级。32x效率提升，零学习成本，智能适应性开发。',
    url: 'https://vibecli.com',
    siteName: 'VibeCLI',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VibeCLI 2.0 - AI驱动的智能全栈开发工具',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeCLI 2.0 - AI驱动的智能全栈开发工具',
    description: '从命令驱动到智能对话驱动的革命性升级。32x效率提升，零学习成本。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}