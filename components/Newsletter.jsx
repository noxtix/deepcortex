'use client';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
    return (
        <div className="relative my-12 p-8 rounded-3xl overflow-hidden group">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-3xl z-0"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-1000"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl">
                    <Mail className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                        Join the DeepCortex Intelligence
                    </h3>
                    <p className="text-slate-400 text-sm max-w-sm">
                        Get the latest AI tool drops, reviews, and comparisons delivered to your inbox weekly. No noise.
                    </p>
                </div>

                <form className="w-full md:w-auto flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="developer@example.com"
                        className="bg-slate-950 border border-slate-700 text-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 w-full sm:w-64 placeholder:text-slate-600"
                    />
                    <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                        Subscribe <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
