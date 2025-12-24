'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import { generateStack } from '@/lib/stackGenerator';
import { ArrowRight, Check, Sparkles, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StackBuilder() {
    const [step, setStep] = useState('form'); // 'form' | 'loading' | 'results'
    const [formData, setFormData] = useState({
        role: 'student',
        budget: 'free',
        task: 'write',
        skill: 'beginner'
    });
    const [results, setResults] = useState([]);

    const handleGenerate = () => {
        setStep('loading');
        // Simulate thinking time for effect
        setTimeout(() => {
            const stack = generateStack(formData);
            setResults(stack);
            setStep('results');
        }, 1500);
    };

    const reset = () => {
        setStep('form');
        setResults([]);
    };

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 tracking-tight">
                        Build Your Custom Stack
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Tell us about your needs, and we&apos;ll engineer the perfect AI toolkit for you.
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    {step === 'form' && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Role */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">I am a...</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['student', 'founder', 'dev', 'marketer'].map((r) => (
                                            <button
                                                key={r}
                                                onClick={() => setFormData({ ...formData, role: r })}
                                                className={`p-4 rounded-xl border text-left transition-all ${formData.role === r
                                                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                                                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 text-slate-400'
                                                    }`}
                                            >
                                                <div className="font-bold capitalize">{r}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Budget */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">My Budget is...</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['free', 'paid'].map((b) => (
                                            <button
                                                key={b}
                                                onClick={() => setFormData({ ...formData, budget: b })}
                                                className={`p-4 rounded-xl border text-left transition-all ${formData.budget === b
                                                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                                                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 text-slate-400'
                                                    }`}
                                            >
                                                <div className="font-bold capitalize">{b === 'free' ? 'Free / Low' : 'Flexible'}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Task */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">I need to...</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['automate', 'write', 'design', 'analyze'].map((t) => (
                                            <button
                                                key={t}
                                                onClick={() => setFormData({ ...formData, task: t })}
                                                className={`p-4 rounded-xl border text-left transition-all ${formData.task === t
                                                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                                                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 text-slate-400'
                                                    }`}
                                            >
                                                <div className="font-bold capitalize">{t}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Skill */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">My Skill Level...</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['beginner', 'advanced'].map((s) => (
                                            <button
                                                key={s}
                                                onClick={() => setFormData({ ...formData, skill: s })}
                                                className={`p-4 rounded-xl border text-left transition-all ${formData.skill === s
                                                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                                                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 text-slate-400'
                                                    }`}
                                            >
                                                <div className="font-bold capitalize">{s}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex justify-end">
                                <button
                                    onClick={handleGenerate}
                                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full text-lg shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 group"
                                >
                                    Generate My Stack
                                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 'loading' && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-20"
                        >
                            <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mb-8"></div>
                            <h3 className="text-2xl font-bold text-slate-200">Analyzing thousands of tools...</h3>
                            <p className="text-slate-400 mt-2">Curating the perfect setup for a {formData.skill} {formData.role}.</p>
                        </motion.div>
                    )}

                    {step === 'results' && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-8"
                        >
                            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
                                <h2 className="text-2xl font-bold text-emerald-300 mb-2">Your Personalized Stack is Ready</h2>
                                <p className="text-slate-300">
                                    Optimized for a <strong>{formData.skill} {formData.role}</strong> looking to <strong>{formData.task}</strong> on a <strong>{formData.budget}</strong> budget.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {results.map((tool, index) => (
                                    <motion.div
                                        key={tool.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 items-start">
                                            <div className="flex-grow">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-xl font-bold text-slate-100">{tool.name}</h3>
                                                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-xs font-mono">{tool.category}</span>
                                                    {tool.score > 2 && <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">Best Match</span>}
                                                </div>
                                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{tool.shortDescription}</p>

                                                <div className="bg-slate-950/50 rounded-lg p-4 mb-4 border border-slate-800/50">
                                                    <div className="flex items-start gap-3">
                                                        <div className="min-w-6 pt-1"><Check className="w-4 h-4 text-emerald-500" /></div>
                                                        <div>
                                                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">Why we picked this</span>
                                                            <p className="text-slate-300 text-sm">{tool.reasoning}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 pl-4 border-l-2 border-slate-800">
                                                    <div>
                                                        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Upgrade Path</span>
                                                        <p className="text-slate-500 text-xs italic">{tool.upgradePath}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-shrink-0 w-full md:w-auto">
                                                <a
                                                    href={tool.affiliateLink}
                                                    target="_blank"
                                                    className="block w-full text-center px-6 py-3 bg-slate-100 text-slate-950 font-bold rounded-lg hover:bg-white transition-colors"
                                                >
                                                    Try {tool.name}
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-center pt-8">
                                <button
                                    onClick={reset}
                                    className="px-6 py-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all flex items-center gap-2"
                                >
                                    <RefreshCcw className="w-4 h-4" />
                                    Build Another Stack
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </main>
    );
}
