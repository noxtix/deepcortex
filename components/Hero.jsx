import Link from 'next/link';

const Hero = () => {
    return (
        <div className="py-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-6 tracking-tight">
                Augment Your <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">Intelligence.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                The curated directory of AI tools for all.
            </p>

            <div className="flex justify-center">
                <Link
                    href="/tools"
                    className="inline-flex items-center px-8 py-4 text-lg font-bold text-slate-950 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] transform hover:-translate-y-1"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Hero;
