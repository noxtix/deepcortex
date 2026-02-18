import Link from 'next/link';
import { Layers, ArrowRight, Wand2 } from 'lucide-react';
import StackCard from './StackCard';
import { stacks } from '@/data/stacks';

const StacksPreview = () => {
    // Pick 3 diverse stacks
    const previewStacks = stacks.slice(0, 3);

    return (
        <section className="py-20 px-4 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                        <Layers className="w-3 h-3" />
                        <span>Curated Workflows</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4">
                        Don&apos;t build from <span className="text-blue-500">scratch.</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We&apos;ve tested thousands of combinations to find the perfect tool stacks for every role.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Builder CTA Card */}
                    <Link
                        href="/stacks/build"
                        className="group relative bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Wand2 className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Build Custom Stack</h3>
                            <p className="text-emerald-100/70 text-sm leading-relaxed">
                                Answer 3 questions and our AI will generate the perfect toolkit for your specific needs and budget.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-emerald-400 font-bold text-sm">
                            Start Builder <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Stacks */}
                    {previewStacks.map(stack => (
                        <StackCard key={stack.id} stack={stack} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/stacks"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium"
                    >
                        View all recommended stacks
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StacksPreview;
