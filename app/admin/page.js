import toolsData from '@/data/tools.json';
import { getAllPosts } from '@/lib/mdx';
import { Resend } from 'resend';
import { PenTool, FileText, Users, ArrowUpRight } from 'lucide-react';

export default async function AdminDashboard() {
    // Fetch stats
    const toolCount = toolsData.length;
    const postCount = getAllPosts(['slug']).length;

    // Fetch subscribers count securely
    let subscriberCount = '---';
    try {
        if (process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const response = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_ID });
            if (response.data?.data) {
                subscriberCount = response.data.data.length;
            }
        }
    } catch (e) {
        console.error('Failed to fetch stats:', e);
    }

    const StatCard = ({ title, value, icon: Icon, color, href }) => (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${color}`}>
                <Icon className="w-24 h-24" />
            </div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-slate-400">
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">{title}</span>
                </div>
                <div className="text-4xl font-black text-white mb-2">{value}</div>
                {href && (
                    <a href={href} className="text-sm text-emerald-400 hover:underline inline-flex items-center gap-1">
                        Manage <ArrowUpRight className="w-3 h-3" />
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                <p className="text-slate-400">Welcome back, Administrator.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Active Tools"
                    value={toolCount}
                    icon={PenTool}
                    color="text-emerald-500"
                    href="/admin/tools"
                />
                <StatCard
                    title="Published Posts"
                    value={postCount}
                    icon={FileText}
                    color="text-blue-500"
                    href="/admin/posts"
                />
                <StatCard
                    title="Subscribers"
                    value={subscriberCount}
                    icon={Users}
                    color="text-amber-500"
                    href="/admin/subscribers"
                />
            </div>
        </div>
    );
}
