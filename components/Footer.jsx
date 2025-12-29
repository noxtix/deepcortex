import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-slate-900 pt-10 pb-6 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand Section */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="relative w-6 h-6">
                                <Image
                                    src="/logo.png"
                                    alt="DeepCortex Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-slate-100 font-bold text-base">DeepCortex</span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                            High Signal AI Directory. Curating the tools that actually matter.
                        </p>
                        <div className="flex items-center gap-4 mt-1">
                            <a href="https://www.instagram.com/deepcortex.tech?igsh=ZW82bTNjeG9obmFm" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-all bg-slate-800 p-1.5 rounded-lg">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-100 font-bold text-xs uppercase tracking-wider">Explore</h3>
                        {/* Links */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
                            <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
                            <Link href="/stacks" className="hover:text-emerald-400 transition-colors">Stacks</Link>
                            <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
                            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-100 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-emerald-500" />
                            Weekly Wisdom
                        </h3>
                        {/* Compact Form Container */}
                        <div className="max-w-xs">
                            <NewsletterForm variant="footer" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 mt-8 pt-6 flex justify-center text-slate-600 text-[10px]">
                    <span>&copy; {new Date().getFullYear()} DeepCortex. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};
