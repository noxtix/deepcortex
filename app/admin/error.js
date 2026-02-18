'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function AdminError({ error, reset }) {
    useEffect(() => {
        console.error('Admin Dashboard Error:', error);
    }, [error]);

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Something went wrong!</h2>
            <p className="text-slate-400 mb-8 max-w-md">
                An unexpected error occurred in the dashboard. Check the console for details.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl flex items-center gap-2 transition-colors"
                >
                    <RefreshCcw className="w-4 h-4" />
                    Try again
                </button>
            </div>
        </div>
    );
}
