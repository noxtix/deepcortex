'use client';
import Link from 'next/link';
import { Star, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const getHostname = (url) => {
    try {
        const hostname = new URL(url).hostname;
        return hostname.replace('www.', '');
    } catch (e) {
        return '';
    }
};

const ToolCard = ({ tool }) => {
    const [imageError, setImageError] = useState(false);
    const hostname = getHostname(tool.affiliateLink);
    const logoUrl = `https://logo.clearbit.com/${hostname}`;

    return (
        <div className={`group rounded-2xl p-6 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col h-full backdrop-blur-sm ${tool.isFeatured ? 'bg-slate-900/80 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:border-amber-400' : 'bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50'}`}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    {/* Logo / Avatar Logic */}
                    {!imageError ? (
                        <img
                            src={logoUrl}
                            alt={`${tool.name} logo`}
                            className="w-12 h-12 rounded-xl object-contain bg-slate-800/50 p-1 ring-1 ring-slate-700/50"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold transition-transform group-hover:scale-110 ${tool.isFeatured ? 'bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/50' : 'bg-slate-800 text-emerald-400'}`}>
                            {tool.name.charAt(0)}
                        </div>
                    )}

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
    );
};

export default ToolCard;
