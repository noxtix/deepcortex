import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { getAllPosts } from '@/lib/mdx';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export const metadata = {
    title: 'Blog - DeepCortex',
    description: 'Deep dives, comparisons, and reviews of the latest AI tools.',
};

export default function BlogIndex() {
    const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'image']);

    return (
        <main className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <section className="pt-32 pb-12 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
                    The <span className="text-emerald-400">Intelligence</span> Log
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Insights, comparisons, and deep dives into the AI tools shaping the future of development.
                </p>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all flex flex-col backdrop-blur-md"
                        >
                            <div className="h-48 bg-slate-800/50 relative overflow-hidden group">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                        <div className="text-slate-600 font-bold text-4xl">DC</div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 right-4 z-10">
                                    <div className="flex items-center gap-4 text-xs text-slate-300 font-mono mb-2">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-emerald-400" /> {post.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="text-emerald-500 text-sm font-bold flex items-center gap-1 group/link">
                                    Read Article <ArrowLeft className="w-4 h-4 rotate-180 group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
