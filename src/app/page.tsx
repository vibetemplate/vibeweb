import { Navigation } from '@/components/marketing/navigation';
import { HeroSection } from '@/components/marketing/hero-section';
import { ValueProposition } from '@/components/marketing/value-proposition';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ValueProposition />
      </main>
    </div>
  );
}