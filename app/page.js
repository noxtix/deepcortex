'use client';
import { useState, useMemo, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import Hero from '@/components/Hero';
import AdUnit from '@/components/AdUnit';
import toolsData from '@/data/tools.json';
import { useSearchParams, useRouter } from 'next/navigation';

return (
  <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
    <Navbar />
    <Hero />
  </main>
    </main >
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading tools...</div>}>
      <ToolDirectory />
    </Suspense>
  );
}
