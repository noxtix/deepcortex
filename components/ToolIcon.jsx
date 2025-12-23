'use client';
import { useState } from 'react';

const ToolIcon = ({ tool, className = "w-12 h-12 rounded-xl", fontSize = "text-xl" }) => {
    const [imageError, setImageError] = useState(false);

    // Priority: 1. Manual override (tool.logoUrl) 2. Google Favicon Service
    const logoSrc = tool.logoUrl || `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(tool.affiliateLink)}&size=128`;

    if (!imageError) {
        return (
            <img
                src={logoSrc}
                alt={`${tool.name} logo`}
                className={`object-contain bg-slate-800/50 p-1 ring-1 ring-slate-700/50 ${className}`}
                onError={() => setImageError(true)}
            />
        );
    }

    // Fallback
    return (
        <div className={`flex items-center justify-center font-bold text-emerald-400 bg-slate-800 ring-1 ring-slate-700/50 ${className} ${fontSize}`}>
            {tool.name.charAt(0)}
        </div>
    );
};

export default ToolIcon;
