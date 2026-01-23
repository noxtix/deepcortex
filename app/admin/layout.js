import { requireAuth, logout } from '@/app/actions/auth';
import Link from 'next/link';
import { LayoutDashboard, PenTool, FileText, Users, LogOut, Settings } from 'lucide-react';

export default async function AdminLayout({ children }) {
    await requireAuth();

    const navItems = [
        { label: 'Overview', href: '/admin', icon: LayoutDashboard },
        { label: 'Tools', href: '/admin/tools', icon: PenTool },
        { label: 'Blog Posts', href: '/admin/posts', icon: FileText },
        { label: 'Subscribers', href: '/admin/subscribers', icon: Users },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col fixed h-full z-20">
                <div className="p-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">DC</div>
                        <span className="font-bold text-white tracking-tight">Admin Console</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors font-medium"
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <form action={logout}>
                        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 transition-colors font-medium">
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen bg-slate-950">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
