import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-12 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Brand */}
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

                    {/* Links */}
                    <div className="flex gap-6 text-xs text-slate-400">
                        <Link href="/blog" className="hover:text-emerald-400 transition-colors font-bold">
                            Blog
                        </Link>
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>

                    {/* Socials & Copyright */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/deepcortex.tech?igsh=ZW82bTNjeG9obmFm" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <span className="text-slate-600 text-xs">&copy; 2025</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
