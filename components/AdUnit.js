import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

const AdUnit = ({ className = "" }) => {
    return (
        <a
            href="https://instagram.com/deepcortex.tech"
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full group relative overflow-hidden rounded-2xl border border-slate-800/60 transition-all hover:border-slate-700/80 ${className}`}
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-black to-slate-950/80 transition-opacity" />

            {/* Glass / Content Layer */}
            <div className="relative px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

                {/* Glowing Icon */}
                <div className="relative flex-shrink-0">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 blur-2xl rounded-full opacity-60 animate-pulse"></div>
                    <Instagram className="w-10 h-10 text-slate-200 relative z-10 transition-transform group-hover:scale-110 duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col text-center md:text-left">
                    <span className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
                        Don't miss the daily drops.
                    </span>
                    <span className="text-slate-400 text-sm md:text-base mt-1 font-medium">
                        Follow <span className="text-white hover:underline decoration-emerald-500/50 underline-offset-4">@deepcortex.tech</span> for hidden tools & tips.
                    </span>
                </div>

                {/* Button */}
                <div className="flex-shrink-0">
                    <div className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all transform group-hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)]">
                        Follow <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

            </div>
        </a>
    );
};

export default AdUnit;
