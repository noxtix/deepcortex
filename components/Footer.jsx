import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Github, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 justify-center md:justify-start">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="DeepCortex Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            DeepCortex
                        </h2>
                        <p className="text-slate-500 mt-2 text-sm">
                            The curated directory of AI tools for 2025.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm text-slate-400">
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/deepcortex.tech/?igsh=N3Y1aTRtcTZtMGU%3D#" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-600 text-xs">
                    <p>&copy; {new Date().getFullYear()} DeepCortex. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
