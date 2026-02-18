import { Resend } from 'resend';
import { Shield, Users, Mail, Calendar } from 'lucide-react';

export const metadata = {
    title: 'Subscriber Admin - DeepCortex',
};

export default async function SubscriberAdmin() {
    // Fetch data if authenticated
    const resend = new Resend(process.env.RESEND_API_KEY);
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    let contacts = [];
    let error = null;

    try {
        if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY missing");

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
        <div className="space-y-6">
             <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Subscriber List</h1>
                    <p className="text-slate-400 text-sm">Audience ID: <span className="font-mono text-slate-500">{audienceId}</span></p>
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
                            <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-bold">
                                <tr>
                                    <th className="px-6 py-4">Email Address</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Created At</th>
                                    <th className="px-6 py-4">ID</th>
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
    );
}
