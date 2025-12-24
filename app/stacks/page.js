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
                    {stacks.map((stack) => (
                        <StackCard key={stack.id} stack={stack} />
                    ))}
                </div>
            </div>
        </main>
    );
}
