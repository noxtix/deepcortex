import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import ToolCard from './ToolCard';
import toolsData from '@/data/tools.json';

const FeaturedTools = () => {
    // Get top 6 featured tools (or highly rated ones if not enough featured)
    const featuredTools = toolsData
        .filter(t => t.isFeatured)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-sm mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span>Hand-Picked Gems</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight">
                        Trending <span className="text-emerald-500">AI Tools</span>
                    </h2>
                </div>

                <Link
                    href="/tools"
                    className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-medium"
                >
                    View all {toolsData.length} tools
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedTools;
