import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LightPillar from '@/components/LightPillar';

function ToolDirectory() {
  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightPillar
          pillarRotation={-15}
          topColor="#020617" // Fade to slate-950 (background)
          bottomColor="#00FF94" // Neon Green
          pillarWidth={5}
          glowAmount={0.01}
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
