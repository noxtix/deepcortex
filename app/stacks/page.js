import { stacks } from '@/data/stacks';
import StackCard from '@/components/StackCard';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Curated Stacks - DeepCortex',
    description: 'Expertly bundled AI toolkits for every workflow.',
};

export default function StacksIndex() {
    return (
        <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <section className="pt-32 pb-12 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
                    Curated <span className="text-emerald-400">Stacks</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Don&apos;t waste time searching. We&apos;ve bundled the best tools for your specific goals.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Custom Stack Builder CTA */}
                    <a href="/stacks/build" className="group relative bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-6 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-colors rounded-3xl" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">✨</div>
                                <h3 className="text-xl font-bold text-white mb-2">Build Your Custom Stack</h3>
                                <p className="text-slate-400 text-sm">
                                    Tell us your role and budget, and we&apos;ll engineer the perfect toolkit for you.
                                </p>
                            </div>
                            <div className="mt-6 flex items-center text-emerald-400 font-bold text-sm">
                                Start Widget <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </a>

                    {stacks.map((stack) => (
                        <StackCard key={stack.id} stack={stack} />
                    ))}
                </div>
            </div>
        </main>
    );
}
