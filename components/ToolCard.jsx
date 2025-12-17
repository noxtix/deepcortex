'use client';
import Link from 'next/link';
import { Star, ArrowUpRight } from 'lucide-react';

const ToolCard = ({ tool }) => {
    return (
        <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col h-full backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform">
                        {tool.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                            {tool.name}
                        </h3>
                        <p className="text-xs text-slate-500">{tool.category}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded text-xs text-amber-400 font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{tool.rating}</span>
                </div>
            </div>

            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {tool.shortDescription}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                <span className="text-xs font-mono text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    {tool.pricing}
                </span>
                <Link
                    href={`/tool/${tool.id}`}
                    className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1 group/link bg-slate-800 hover:bg-emerald-600 hover:border-emerald-500 px-3 py-1.5 rounded-lg transition-all border border-transparent"
                >
                    View
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ToolCard;
