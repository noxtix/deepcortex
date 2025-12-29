import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
    return (
        <footer className="bg-slate-900/50 border-t border-slate-800 py-12 mt-20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="DeepCortex Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-slate-100 font-bold text-lg">DeepCortex</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            High Signal AI Directory. Curating the tools that actually matter for developers and creators.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <a href="https://www.instagram.com/deepcortex.tech?igsh=ZW82bTNjeG9obmFm" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-all bg-slate-800 p-2 rounded-lg">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-slate-100 font-bold text-sm uppercase tracking-wider">Explore</h3>
                        {/* Links */}
                        <div className="flex gap-6 text-xs font-medium text-slate-400">
                            <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
                            <Link href="/stacks" className="hover:text-emerald-400 transition-colors">Stacks</Link>
                            <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
                            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-slate-100 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                            <Mail className="w-4 h-4 text-emerald-500" />
                            Weekly Wisdom
                        </h3>
                        <p className="text-slate-500 text-xs mb-2">
                            One playbook, one hidden tool. Every Friday.
                        </p>
                        <NewsletterForm variant="footer" />
                        <div className="text-slate-600 text-xs mt-4">
                            Contact: <a href="mailto:hello@deepcortex.tech" className="hover:text-emerald-400 transition-colors">hello@deepcortex.tech</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
                    <span>&copy; {new Date().getFullYear()} DeepCortex. All rights reserved.</span>
                    <span>Built with Next.js 14 & Resend</span>
                </div>
            </div>
        </footer>
    );
};
