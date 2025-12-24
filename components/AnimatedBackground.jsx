'use client';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-slate-950"></div>

            {/* Animated Blobs - Brand Aligned (Emerald/Teal) */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>

            {/* Grid Overlay for texture */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
        </div>
    );
};

export default AnimatedBackground;
