import { Suspense } from 'react';
import PillNav from '@/components/PillNav';
import Hero from '@/components/Hero';
import FeaturedTools from '@/components/FeaturedTools';
import StacksPreview from '@/components/StacksPreview';
import LatestPosts from '@/components/LatestPosts';
import LightPillar from '@/components/LightPillar';
import { getAllPosts } from '@/lib/mdx';

function HomeContent() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'image']);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightPillar
          pillarRotation={20}
          topColor="#09ec60"
          bottomColor="#0e0101"
          pillarWidth={3.0}
          glowAmount={0.005}
        />
      </div>

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
