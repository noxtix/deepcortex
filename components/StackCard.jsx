'use client';
import Link from 'next/link';
import ToolIcon from './ToolIcon';
import toolsData from '@/data/tools.json';

const StackCard = ({ stack }) => {
    // Resolve tool objects from IDs to get their logos
    const tools = stack.toolIds.map(id => toolsData.find(t => t.id === id)).filter(Boolean);

    return (
        <Link
            href={`/stacks/${stack.id}`}
            className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all flex flex-col backdrop-blur-md overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="text-4xl mb-4 bg-slate-800/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-700/50 shadow-inner">
                {stack.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                {stack.title}
            </h3>

            <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                {stack.description}
            </p>

            <div className="mt-auto">
                <div className="flex -space-x-3 items-center">
                    {tools.map((tool, index) => (
                        <div key={tool.id} className="relative z-10 hover:z-20 transition-all hover:scale-110">
                            <ToolIcon
                                tool={tool}
                                className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800"
                                fontSize="text-xs"
                            />
                        </div>
                    ))}
                    {stack.toolIds.length > tools.length && (
                        <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold z-0">
                            +{stack.toolIds.length - tools.length}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default StackCard;
