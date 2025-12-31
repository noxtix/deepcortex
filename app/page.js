'use client';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

function ToolDirectory() {
  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
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
