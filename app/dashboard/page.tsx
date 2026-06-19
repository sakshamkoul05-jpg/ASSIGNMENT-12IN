import HeroCard from '../components/HeroCard';
import BentoGrid from '../components/BentoGrid';
import CommandPalette from '../components/CommandPalette';
import BackgroundCanvas from '../components/BackgroundCanvas';

export const metadata = {
  title: 'Dashboard - Nexus Learning OS',
  description: 'Your AI-powered learning command center',
};

export default function DashboardPage() {
  return (
    <div className='relative min-h-screen bg-gray-900 text-gray-100'>
      {/* Aurora background */}
      <BackgroundCanvas className='absolute inset-0 -z-10' />
      {/* Command palette */}
      <CommandPalette />
      {/* Main content */}
      <section className='relative z-10 max-w-7xl mx-auto py-8 px-4'>
        <HeroCard />
        <BentoGrid />
      </section>
    </div>
  );
}
