'use client';
import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import AdUnit from '@/components/AdUnit';
import toolsData from '@/data/tools.json';
import { Search } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extract unique categories
  const categories = ['All', ...new Set(toolsData.map(tool => tool.category))];

  // Filter tools logic
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory && selectedCategory !== 'All'
        ? tool.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      <Navbar />

      {/* Hero Section incorporated here to bind search state */}
      <div className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-6 tracking-tight">
          Augment Your <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">Intelligence.</span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          The curated directory of AI tools for developers and creators.
        </p>
        <div className="max-w-lg mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for AI tools..."
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-xl placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* Ad Unit Above Grid */}
        <div className="mb-12">
          <AdUnit />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${(selectedCategory === cat || (cat === 'All' && !selectedCategory))
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2 h-8 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            {selectedCategory && selectedCategory !== 'All' ? `${selectedCategory} Tools` : 'All Tools'}
          </h2>
          <span className="text-slate-500 text-sm font-medium bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">{filteredTools.length} tools found</span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed">
            <h3 className="text-xl font-bold text-slate-300 mb-2">No tools found</h3>
            <p className="text-slate-500 mb-6">We couldn't find any tools matching your criteria.</p>
            <button className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4">
              Submit a tool?
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
