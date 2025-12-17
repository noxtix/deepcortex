import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, X, ArrowLeft, ExternalLink, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AdUnit from '@/components/AdUnit';
import toolsData from '@/data/tools.json';

// Dynamic SEO
export async function generateMetadata({ params }) {
    const tool = toolsData.find(t => t.id === params.slug);

    if (!tool) {
        return {
            title: 'Tool Not Found - DeepCortex',
        };
    }

    return {
        title: `${tool.name} Review 2025: Features, Pricing & Pros - DeepCortex`,
        description: tool.shortDescription,
    }
}

// Simple function to get similar tools
const getSimilarTools = (currentTool) => {
    return toolsData
        .filter(t => t.category === currentTool.category && t.id !== currentTool.id)
        .slice(0, 3);
};

export default function ToolPage({ params }) {
    const tool = toolsData.find(t => t.id === params.slug);

    if (!tool) {
        notFound();
    }

    const similarTools = getSimilarTools(tool);

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-20 pb-12 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                    <Link href="/" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-8 transition-colors group absolute left-4 top-0 sm:static sm:mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back
                    </Link>

                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center text-5xl font-bold text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                            {tool.name.charAt(0)}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-slate-100 mb-4 tracking-tight">
                        {tool.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light">
                        {tool.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={tool.affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 flex items-center gap-2"
                        >
                            Visit Website <ExternalLink className="w-5 h-5" />
                        </a>
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-6 py-4 rounded-full text-slate-300 font-medium">
                            <Star className="w-5 h-5 text-amber-400 fill-current" />
                            {tool.rating} / 5.0 Rating
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <p className="text-center text-slate-500 text-sm italic mb-8">
                    DeepCortex is reader-supported. We may earn a commission if you buy through our links.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Pros & Cons */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                                    <Check className="w-5 h-5" /> Pros
                                </h3>
                                <ul className="space-y-3">
                                    {tool.pros?.map((pro, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                                            <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                                            {pro}
                                        </li>
                                    )) || <li className="text-slate-500">No pros listed.</li>}
                                </ul>
                            </div>
                            <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <X className="w-5 h-5" /> Cons
                                </h3>
                                <ul className="space-y-3">
                                    {tool.cons?.map((con, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                                            <span className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                                            {con}
                                        </li>
                                    )) || <li className="text-slate-500">No cons listed.</li>}
                                </ul>
                            </div>
                        </div>

                        {/* Blog Content */}
                        {tool.fullReview && (
                            <article className="prose prose-invert prose-emerald max-w-none bg-slate-900/20 border border-slate-800 p-8 rounded-3xl">
                                <div dangerouslySetInnerHTML={{ __html: tool.fullReview }} />
                            </article>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="sticky top-24">

                            <AdUnit className="mb-8" />

                            <h3 className="text-lg font-bold text-slate-100 mb-4">Similar Tools</h3>
                            <div className="space-y-4">
                                {similarTools.map((similar) => (
                                    <Link
                                        key={similar.id}
                                        href={`/tool/${similar.id}`}
                                        className="block bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-emerald-500/50 transition-all group"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-lg font-bold text-emerald-400">
                                                {similar.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{similar.name}</h4>
                                                <div className="flex items-center gap-1 text-xs text-amber-400">
                                                    <Star className="w-3 h-3 fill-current" /> {similar.rating}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-500 line-clamp-2">{similar.shortDescription}</p>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-8 bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/20 p-6 rounded-2xl text-center">
                                <h3 className="text-emerald-400 font-bold mb-2">Want your tool listed?</h3>
                                <p className="text-slate-400 text-sm mb-4">Get in front of thousands of developers.</p>
                                <a
                                    href="https://forms.gle/9MHi5zb8qQen7Ai17"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-xs bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                                >
                                    Submit a Tool
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
