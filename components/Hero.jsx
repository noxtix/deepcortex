'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/tools?search=${encodeURIComponent(query)}`);
        }
    };

    const quickFilters = [
        { name: 'Writing', emoji: '✍️' },
        { name: 'Coding', emoji: '💻' },
        { name: 'Image Gen', emoji: '🎨' },
        { name: 'Video', emoji: '🎬' },
        { name: 'Productivity', emoji: '🚀' },
    ];

    return (
        <div className="relative pt-32 pb-20 px-4 flex flex-col items-center text-center z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <Sparkles className="w-3 h-3" />
                    <span>The Curated AI Directory</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-slate-100 mb-6 tracking-tight leading-tight">
                    Augment Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">Intelligence.</span>
                </h1>

                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Stop searching, start building. Find the perfect AI tools, stacks, and workflows to 10x your output.
                </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-2xl relative group"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="What do you want to create today? (e.g. 'logo', 'code', 'blog')"
                        className="w-full bg-slate-900/90 backdrop-blur-xl text-slate-100 border border-white/10 rounded-full py-4 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-2xl transition-all placeholder:text-slate-600"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-2 rounded-full transition-colors"
                    >
                        Search
                    </button>
                </form>
            </motion.div>

            {/* Quick Filters */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex flex-wrap justify-center gap-3"
            >
                {quickFilters.map((filter) => (
                    <Link
                        key={filter.name}
                        href={`/tools?category=${encodeURIComponent(filter.name)}`}
                        className="px-4 py-2 rounded-full bg-slate-800/50 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-all text-sm font-medium flex items-center gap-2"
                    >
                        <span>{filter.emoji}</span>
                        {filter.name}
                    </Link>
                ))}
            </motion.div>
        </div>
    );
};

export default Hero;
