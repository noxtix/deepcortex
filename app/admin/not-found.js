import Link from 'next/link';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export default function AdminNotFound() {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <FileQuestion className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
            <p className="text-slate-400 mb-8 max-w-md">
                The admin page you are looking for does not exist.
            </p>
            <Link
                href="/admin"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center gap-2 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
            </Link>
        </div>
    );
}
