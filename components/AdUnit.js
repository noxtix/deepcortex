import React from 'react';

const AdUnit = ({ className = "" }) => {
    return (
        <div className={`w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-700 text-sm font-mono border-dashed min-h-[120px] ${className}`}>
            <span className="uppercase tracking-widest text-xs font-semibold mb-2">Advertisement</span>
            <div className="w-full h-full bg-slate-950/50 rounded flex items-center justify-center">
                {/* Placeholder for Ad Code */}
                <span className="opacity-50">Ad Space</span>
            </div>
        </div>
    );
};

export default AdUnit;
