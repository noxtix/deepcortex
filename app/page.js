import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedTools from '@/components/FeaturedTools';
import StacksPreview from '@/components/StacksPreview';
import LatestPosts from '@/components/LatestPosts';
import LightPillar from '@/components/LightPillar';
import { getAllPosts } from '@/lib/mdx';

function HomeContent() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'image']);

  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightPillar
          pillarRotation={-20}
          topColor="#000000"
          bottomColor="#00FF94"
          pillarWidth={3.0}
          glowAmount={0.005}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
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
