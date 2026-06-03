import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const LatestPosts = ({ posts }) => {
    // Take top 3
    const recentPosts = posts.slice(0, 3);

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-sm mb-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Intelligence Log</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight">
                        Latest <span className="text-amber-500">Insights</span>
                    </h2>
                </div>

                <Link
                    href="/blog"
                    className="group flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors font-medium"
                >
                    Read all articles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all"
                    >
                        {/* Image Placeholder or Actual Image */}
                        <div className="h-48 bg-slate-800 relative overflow-hidden">
                            {post.image ? (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-700 font-bold text-4xl">
                                    LOG
                                </div>
                            )}
                            <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-slate-300 border border-white/10">
                                {post.date}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="text-amber-500 text-sm font-bold flex items-center gap-1 group/link">
                                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default LatestPosts;
