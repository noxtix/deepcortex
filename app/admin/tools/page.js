import Link from 'next/link';
import { getTools } from '@/lib/adminUtils';
import { Plus, Edit, Trash2, ExternalLink, Search } from 'lucide-react';
import { deleteTool } from '@/app/actions/toolActions';

export default async function ToolsAdmin() {
    const toolsData = await getTools();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Tools Management</h1>
                    <p className="text-slate-400">Manage your directory listings.</p>
                </div>
                <Link
                    href="/admin/tools/new"
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2 px-4 rounded-xl flex items-center gap-2 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add New Tool
                </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="p-4 border-b border-slate-800">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search tools..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-bold">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Pricing</th>
                                <th className="px-6 py-4">Rating</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {toolsData.map((tool) => (
                                <tr key={tool.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-200">{tool.name}</div>
                                        <div className="text-xs text-slate-500 font-mono">{tool.id}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs font-medium border border-slate-700">
                                            {tool.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-300 text-sm">{tool.pricing}</td>
                                    <td className="px-6 py-4 text-amber-400 font-bold">{tool.rating}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/tool/${tool.id}`}
                                                target="_blank"
                                                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                href={`/admin/tools/edit/${tool.id}`}
                                                className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Link>
                                            <form action={deleteTool.bind(null, tool.id)}>
                                                <button
                                                    type="submit"
                                                    className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
