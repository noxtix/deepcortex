'use client';
import { useState } from 'react';
import Image from 'next/image';

const ToolLogo = ({ tool, className, iconClassName }) => {
    const [imageError, setImageError] = useState(false);
    const logoSrc = tool.logoUrl || `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(tool.affiliateLink)}&size=128`;

    if (!imageError) {
        return (
            <div className={`relative ${className} overflow-hidden`}>
                <img
                    src={logoSrc}
                    alt={`${tool.name} logo`}
                    className={`object-contain w-full h-full bg-slate-800/50 p-1 ring-1 ring-slate-700/50 rounded-xl`}
                    onError={() => setImageError(true)}
                />
            </div>
        );
    }

    return (
        <div className={`bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center font-bold text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.1)] ${className} ${iconClassName}`}>
            {tool.name.charAt(0)}
        </div>
    );
};

export default ToolLogo;
