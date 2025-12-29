'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { subscribeUser } from '@/app/actions/subscribe';
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const initialState = {
    success: false,
    message: '',
};

function SubmitButton({ variant = 'default' }) {
    const { pending } = useFormStatus();

    const isFooter = variant === 'footer';

    return (
        <button
            type="submit"
            disabled={pending}
            className={`
                flex items-center justify-center gap-2 rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed
                ${isFooter
                    ? 'p-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-lg'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-900 py-3 px-6 shadow-lg shadow-emerald-500/20'}
            `}
        >
            {pending ? (
                <Loader2 className={`${isFooter ? 'w-4 h-4' : 'w-5 h-5'} animate-spin`} />
            ) : (
                <>
                    {!isFooter && <span>Join Free</span>}
                    <ArrowRight className={isFooter ? 'w-4 h-4' : 'w-5 h-5'} />
                </>
            )}
        </button>
    );
}

export default function NewsletterForm({ variant = 'default' }) {
    const [state, formAction] = useFormState(subscribeUser, initialState);
    const isFooter = variant === 'footer';

    if (state.success) {
        return (
            <div className={`flex items-center gap-2 ${isFooter ? 'justify-start' : 'justify-center'} animate-in zoom-in-95 duration-300`}>
                <div className={`flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ${isFooter ? 'w-8 h-8' : 'w-10 h-10'}`}>
                    <CheckCircle className={isFooter ? 'w-4 h-4' : 'w-6 h-6'} />
                </div>
                <div className="text-left">
                    <p className={`font-bold text-slate-100 ${isFooter ? 'text-xs' : 'text-sm'}`}>You&apos;re in! 🚀</p>
                    {!isFooter && <p className="text-xs text-slate-400">Check your inbox.</p>}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full relative">
            <form action={formAction} className={`flex ${isFooter ? 'gap-2' : 'flex-col sm:flex-row gap-3'} w-full`}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    required
                    className={`
                        bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all
                        ${isFooter
                            ? 'w-full text-xs px-3 py-2 rounded-lg'
                            : 'flex-1 text-base px-5 py-3 rounded-xl'}
                    `}
                />
                <SubmitButton variant={variant} />
            </form>

            {state.message && !state.success && (
                <div className={`absolute left-0 w-full flex items-center gap-2 text-red-400 font-medium animate-in fade-in slide-in-from-top-1 ${isFooter ? '-bottom-6 text-[10px]' : '-bottom-8 justify-center text-sm'}`}>
                    <AlertCircle className="w-3 h-3" />
                    <span className="truncate">{state.message}</span>
                </div>
            )}
        </div>
    );
}
