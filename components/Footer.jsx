import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900/50 border-t border-slate-800 py-8 mt-20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand & Copyright */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6">
                            <Image
                                src="/logo.png"
                                alt="DeepCortex Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-slate-200 font-bold text-sm">DeepCortex</span>
                    </div>
                    <span className="text-slate-600 text-xs border-l border-slate-700 pl-4">
                        &copy; {new Date().getFullYear()}
                    </span>
                </div>

                {/* Links */}
                <div className="flex gap-6 text-xs font-medium text-slate-400">
                    <Link href="/stacks" className="hover:text-emerald-400 transition-colors">Stacks</Link>
                    <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
                    <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
                </div>

                {/* Social & Contact */}
                <div className="flex items-center gap-4">
                    <a href="mailto:hello@deepcortex.tech" className="text-slate-500 hover:text-emerald-400 text-xs transition-colors">
                        hello@deepcortex.tech
                    </a>
                    <a href="https://www.instagram.com/deepcortex.tech?igsh=ZW82bTNjeG9obmFm" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-all bg-slate-800/50 p-2 rounded-full hover:bg-slate-800">
                        <Instagram className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
