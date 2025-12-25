'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { subscribeUser } from '@/app/actions/subscribe';
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useEffect } from 'react';

const initialState = {
    success: false,
    message: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
        >
            {pending ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Joining...</span>
                </>
            ) : (
                <>
                    <span>Join Free</span>
                    <ArrowRight className="w-5 h-5" />
                </>
            )}
        </button>
    );
}

export default function Newsletter() {
    const [state, formAction] = useFormState(subscribeUser, initialState);

    return (
        <div className="w-full max-w-4xl mx-auto my-20 px-4">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 text-center">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <Mail className="w-4 h-4" />
                        Weekly Wisdom
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
                        Stop drowning in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">AI noise.</span>
                    </h2>

                    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                        Join 12,000+ smart creators getting one distilled playbook, one hidden tool, and zero fluff. Every Tuesday.
                    </p>

                    {!state.success ? (
                        <form action={formAction} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email..."
                                required
                                className="flex-1 bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-base"
                            />
                            <SubmitButton />

                            {state.message && !state.success && (
                                <div className="absolute -bottom-8 left-0 w-full flex items-center justify-center gap-2 text-red-400 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {state.message}
                                </div>
                            )}
                        </form>
                    ) : (
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 flex flex-col items-center gap-3 animate-in zoom-in-95 duration-300">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-1">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-100">You&apos;re in! 🚀</h3>
                            <p className="text-slate-400">Welcome to the inner circle.</p>
                        </div>
                    )}

                    <p className="mt-6 text-sm text-slate-600">
                        No spam. Unsubscribe anytime. High signal only.
                    </p>
                </div>
            </div>
        </div>
    );
}
