import { DashboardNav } from '@/components/dashboard/dashboard-nav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="container py-6">
        {children}
      </main>
    </div>
  );
}