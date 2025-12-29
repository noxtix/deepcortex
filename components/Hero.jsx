import { Search } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Hero = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="py-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-6 tracking-tight">
                Augment Your <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">Intelligence.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                The curated directory of AI tools for all.
            </p>

            {/* Newsletter Integration Removed */}

            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for AI tools..."
                        className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-xl placeholder:text-slate-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
