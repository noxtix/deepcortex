'use client';
import Link from 'next/link';
import { Star, ArrowUpRight } from 'lucide-react';
import ToolIcon from './ToolIcon';

const ToolCard = ({ tool }) => {
    return (
        <div className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col h-full backdrop-blur-xl bg-slate-900/40 border border-white/5 shadow-2xl overflow-hidden hover:shadow-emerald-500/10 hover:border-emerald-500/30 hover:-translate-y-1 ${tool.isFeatured ? 'ring-1 ring-amber-500/50 bg-amber-900/10' : ''}`}>
            {/* Glass Glare Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <ToolIcon
                            tool={tool}
                            className={`w-12 h-12 rounded-xl transition-transform group-hover:scale-110 ${tool.isFeatured ? 'ring-amber-500/50' : ''}`}
                            fontSize="text-2xl"
                        />

                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                                    {tool.name}
                                </h3>
                                {tool.isFeatured && (
                                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.2)] animate-pulse">
                                        Featured
                                    </span>
                                )}
                            </div>
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
        </div>
    );
};

export default ToolCard;
