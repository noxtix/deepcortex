import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import ToolCard from '@/components/ToolCard';
import ToolIcon from '@/components/ToolIcon';
import AdUnit from '@/components/AdUnit';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import toolsData from '@/data/tools.json';

// Fetch tool data to pass to the embedded ToolCard
// We create a wrapper that fetches the full tool data by ID
const ToolCardWrapper = ({ id }) => {
    const tool = toolsData.find(t => t.id === id);
    if (!tool) return <div className="p-4 border border-red-500 rounded text-red-500">Tool not found: {id}</div>;
    return <div className="not-prose my-8"><ToolCard tool={tool} /></div>;
};

const components = {
    ToolCard: ToolCardWrapper,
    // Add other components here if needed
};

export async function generateMetadata({ params }) {
    const post = getPostBySlug(params.slug, ['title', 'excerpt']);
    return {
        title: `${post.title} - DeepCortex`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = getPostSlugs();
    return posts.map((post) => ({
        slug: post.replace(/\.mdx$/, ''),
    }));
}

export default function BlogPost({ params }) {
    const post = getPostBySlug(params.slug, ['title', 'date', 'content', 'image']);

    // Get random tools for sidebar
    const sidebarTools = toolsData.sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <article className="pt-32 pb-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-8 transition-colors group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>

                        <header className="mb-10">
                            {post.image && (
                                <div className="relative w-full h-[400px] mb-8 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                                </div>
                            )}
                            <div className="text-emerald-400 font-mono text-sm mb-4">{post.date}</div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight leading-tight">
                                {post.title}
                            </h1>
                        </header>

                        <div className="prose prose-invert prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-emerald-400 prose-img:rounded-2xl">
                            <MDXRemote source={post.content} components={components} />
                        </div>

                        <hr className="border-slate-800 my-12" />

                        <Newsletter />
                    </div>

                    {/* Sidebar Column */}
                    <div className="hidden lg:block lg:col-span-4 relative">
                        <div className="sticky top-32 space-y-8">

                            {/* Instagram Ad */}
                            <AdUnit />

                            {/* Related Tools Widget */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                                    Trending Tools
                                </h3>
                                <div className="space-y-6">
                                    {sidebarTools.map(tool => (
                                        <Link key={tool.id} href={`/tool/${tool.id}`} className="flex items-center gap-4 group">
                                            {/* We can reproduce a mini logo here if we want, or use the letters */}
                                            <ToolIcon tool={tool} className="w-10 h-10 rounded-lg" fontSize="text-lg" />
                                            <div>
                                                <div className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{tool.name}</div>
                                                <div className="text-xs text-slate-500">{tool.category}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/"
                                    className="block mt-6 text-center w-full py-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-sm font-medium transition-all"
                                >
                                    View All Tools
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </article>
        </main>
    );
}
