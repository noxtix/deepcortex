'use client';
import { notFound } from 'next/navigation';
import { stacks } from '@/data/stacks';
import toolsData from '@/data/tools.json';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function StackDetail({ params }) {
    const stack = stacks.find(s => s.id === params.slug);
    const [copied, setCopied] = useState(false);

    if (!stack) {
        notFound();
    }

    // Resolve tools
    const tools = stack.toolIds.map(id => toolsData.find(t => t.id === id)).filter(Boolean);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <section className="pt-32 pb-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <Link href="/stacks" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Stacks
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div className="flex items-start gap-6">
                            <div className="text-6xl bg-slate-800/50 w-24 h-24 rounded-3xl flex items-center justify-center border border-slate-700/50 shadow-2xl backdrop-blur-xl">
                                {stack.icon}
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight leading-tight mb-2">
                                    {stack.title}
                                </h1>
                                <p className="text-xl text-slate-400 font-light">
                                    {stack.description}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={copyLink}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all font-medium self-start md:self-auto"
                        >
                            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied!' : 'Share Stack'}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map(tool => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
