import { Resend } from 'resend';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Shield, Lock, Users, Calendar, Mail } from 'lucide-react';

export const metadata = {
    title: 'Subscriber Admin - DeepCortex',
    robots: {
        index: false,
        follow: false,
    },
};

export default async function SubscriberAdmin({ searchParams }) {
    const adminKey = process.env.ADMIN_SECRET;
    const providedKey = searchParams.key;

    // Simple security check
    if (!adminKey) {
        return (
            <div className="min-h-screen bg-slate-950 text-red-500 flex items-center justify-center p-4">
                Configuration Error: ADMIN_SECRET not set in environment variables.
            </div>
        );
    }

    if (providedKey !== adminKey) {
        return (
            <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md w-full text-center">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Lock className="w-8 h-8 text-slate-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Admin Access Required</h1>
                        <p className="text-slate-400 mb-6">
                            This page is protected. Please provide the correct access key in the URL.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="password"
                                name="key"
                                placeholder="Enter Admin Key"
                                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-4 py-2 rounded-xl transition-colors"
                            >
                                Go
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    // Fetch data if authenticated
    const resend = new Resend(process.env.RESEND_API_KEY);
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    let contacts = [];
    let error = null;

    try {
        const response = await resend.contacts.list({
            audienceId: audienceId,
        });

        if (response.error) {
            error = response.error;
        } else {
            contacts = response.data.data;
        }
    } catch (e) {
        error = e;
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                            <Shield className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white">Subscriber List</h1>
                            <p className="text-slate-400 text-sm">Audience ID: <span className="font-mono text-slate-500">{audienceId}</span></p>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium">
                        <Users className="w-4 h-4 text-emerald-400" />
                        <span className="text-white">{contacts?.length || 0}</span>
                        <span className="text-slate-500">Total Leads</span>
                    </div>
                </div>

                {error ? (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">Error Fetching Contacts</h3>
                        <p className="font-mono text-sm">{JSON.stringify(error, null, 2)}</p>
                    </div>
                ) : (
                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-900 border-b border-slate-800">
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Created At</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">ID</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/50">
                                    {contacts && contacts.length > 0 ? (
                                        contacts.map((contact) => (
                                            <tr key={contact.id} className="hover:bg-slate-800/30 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                                                            <Mail className="w-4 h-4" />
                                                        </div>
                                                        <span className="font-medium text-slate-200">{contact.email}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {contact.unsubscribed ? (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                                                            Unsubscribed
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                            Active
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                                        <Calendar className="w-4 h-4 text-slate-600" />
                                                        {new Date(contact.created_at).toLocaleDateString(undefined, {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="font-mono text-xs text-slate-600 select-all">{contact.id}</span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-12 text-center text-slate-500">
                                                No subscribers found yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <a
                        href={`https://resend.com/audiences/${audienceId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-500 hover:text-emerald-400 transition-colors underline underline-offset-4"
                    >
                        View Full Dashboard on Resend.com
                    </a>
                </div>
            </div>
        </main>
    );
}
