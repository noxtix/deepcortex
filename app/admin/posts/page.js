import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';
import { deletePost } from '@/app/actions/postActions';

export default function PostsAdmin() {
    const posts = getAllPosts(['title', 'date', 'slug']);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Blog Posts</h1>
                    <p className="text-slate-400">Manage your content marketing.</p>
                </div>
                <Link
                    href="/admin/posts/editor/new"
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2 px-4 rounded-xl flex items-center gap-2 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    New Post
                </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-bold">
                            <tr>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">Slug</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {posts.map((post) => (
                                <tr key={post.slug} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-200">{post.title}</td>
                                    <td className="px-6 py-4 text-slate-500 font-mono text-sm">{post.slug}</td>
                                    <td className="px-6 py-4 text-slate-400 text-sm">{post.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                target="_blank"
                                                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                href={`/admin/posts/editor/${post.slug}`}
                                                className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Link>
                                            <form action={deletePost.bind(null, post.slug)}>
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
