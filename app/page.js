import { Suspense } from 'react';
import PillNav from '@/components/PillNav';
import Hero from '@/components/Hero';
import FeaturedTools from '@/components/FeaturedTools';
import StacksPreview from '@/components/StacksPreview';
import LatestPosts from '@/components/LatestPosts';
import { getAllPosts } from '@/lib/mdx';

function HomeContent() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'image']);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 relative">
      <div className="relative z-10">
        <PillNav />
        <Hero />
        <FeaturedTools />
        <StacksPreview />
        <LatestPosts posts={posts} />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading DeepCortex...</div>}>
      <HomeContent />
    </Suspense>
  );
}
