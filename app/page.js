'use client';
import { useState, useMemo, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import Hero from '@/components/Hero';
import AdUnit from '@/components/AdUnit';
import toolsData from '@/data/tools.json';
import { useSearchParams, useRouter } from 'next/navigation';

function ToolDirectory() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // When searching, redirect to /tools page with query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      router.push(`/tools?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
      <Navbar />

      <Hero searchQuery={searchQuery} setSearchQuery={handleSearch} />

      {/* Simple CTA Section since tool list is moved */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="mt-10">
          <p className="text-slate-400 mb-6">Looking for something specific?</p>
          <button
            onClick={() => router.push('/tools')}
            className="bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800/80 px-8 py-4 rounded-full font-bold transition-all"
          >
            Browse All Tools &rarr;
          </button>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading tools...</div>}>
      <ToolDirectory />
    </Suspense>
  );
}
