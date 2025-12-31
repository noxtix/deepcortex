import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LightPillar from '@/components/LightPillar';

function ToolDirectory() {
  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightPillar
          pillarRotation={20}
          topColor="#09ec60"
          bottomColor="#0e0101" // Updated per user request
          pillarWidth={3.0}
          glowAmount={0.005}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading...</div>}>
      <ToolDirectory />
    </Suspense>
  );
}
