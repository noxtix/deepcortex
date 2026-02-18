'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/app/actions/auth';
import { Lock, Loader2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Force dynamic rendering to ensure cookies/auth headers are handled correctly on every request
export const dynamic = 'force-dynamic';

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
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Access Dashboard <ArrowRight className="w-4 h-4" /></>}
        </button>
    );
}

export default function LoginPage() {
    const [state, formAction] = useFormState(login, initialState);
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            router.push('/admin');
        }
    }, [state.success, router]);

    return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4 selection:bg-emerald-500/30">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-800 shadow-2xl">
                        <Lock className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">DeepCortex Admin</h1>
                    <p className="text-slate-400">Enter your secure key to continue.</p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                    <form action={formAction} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Admin Key"
                                required
                                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                            />
                        </div>

                        {state.message && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center font-medium">
                                {state.message}
                            </div>
                        )}

                        <SubmitButton />
                    </form>
                </div>

                <p className="text-center text-slate-600 text-xs mt-8">
                    Authorized personnel only.
                </p>
            </div>
        </main>
    );
}
