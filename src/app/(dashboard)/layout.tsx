import { DashboardNav } from '@/components/dashboard/dashboard-nav';
import { AuthGuard } from '@/components/auth/auth-guard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <DashboardNav />
        <main className="container py-6">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}