'use client';
import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import toolsData from '@/data/tools.json';
import { useSearchParams, useRouter } from 'next/navigation';

function ToolsDirectory() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    // Get active filters directly from URL
    const selectedCategory = searchParams.get('category') || 'All';
    const selectedPrice = searchParams.get('price') || 'All';

    const priceOptions = ['All', 'Free', 'Freemium', 'Paid'];

    // Extract unique categories
    const categories = ['All', ...new Set(toolsData.map(tool => tool.category))];

    // Helper to update filters while preserving other params
    const updateFilter = (key, value) => {
        const params = new URLSearchParams(searchParams);
        if (value && value !== 'All') {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`/tools?${params.toString()}`, { scroll: false });
    };

    const filteredTools = toolsData.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = selectedCategory && selectedCategory !== 'All'
            ? tool.category === selectedCategory
            : true;

        const matchesPrice = selectedPrice && selectedPrice !== 'All'
            ? tool.pricing.toLowerCase() === selectedPrice.toLowerCase()
            : true;

        return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
        // Sort Featured items first
        if (a.isFeatured === b.isFeatured) return 0;
        return a.isFeatured ? -1 : 1;
    });

    return (
        <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        All AI Tools
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        Browse the complete directory of manually curated AI tools.
                    </p>

                    {/* Search input for this page specifically since Hero is gone */}
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search tools..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-full px-6 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-600"
                        />
                    </div>
                </div>

                {/* Price Filter Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {priceOptions.map((price) => (
                        <button
                            key={price}
                            onClick={() => updateFilter('price', price)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${(selectedPrice === price)
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                                : 'bg-slate-900 text-slate-500 border border-slate-800 hover:border-slate-700 hover:text-slate-300'
                                }`}
                        >
                            {price}
                        </button>
                    ))}
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => updateFilter('category', cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${(selectedCategory === cat || (cat === 'All' && !selectedCategory))
                                ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400'
                                }`}
                        >
                            {cat === 'Fun' ? 'Fun 🎡' : cat}
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
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredTools.map((tool) => (
                            <motion.div
                                key={tool.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 }
                                }}
                            >
                                <ToolCard tool={tool} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed">
                        <h3 className="text-xl font-bold text-slate-300 mb-2">No tools found</h3>
                        <p className="text-slate-500 mb-6">We couldn&apos;t find any tools matching your criteria.</p>
                        <button className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4">
                            Submit a tool?
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

export default function ToolsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading tools...</div>}>
            <ToolsDirectory />
        </Suspense>
    );
}
