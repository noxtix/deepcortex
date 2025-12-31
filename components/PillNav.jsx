'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const PillNav = () => {
    const pathname = usePathname();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Stacks', href: '/stacks' },
    ];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth Apple-like ease
                className="bg-slate-950/40 backdrop-blur-2xl border border-white/5 rounded-full px-3 py-2 flex items-center gap-4 sm:gap-6 shadow-2xl ring-1 ring-white/10"
            >
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Brain className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors" />
                    <span className="hidden sm:block text-sm font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">DeepCortex</span>
                </Link>

                {/* Divider */}
                <div className="w-px h-6 bg-white/10"></div>

                {/* Links */}
                <ul className="flex items-center gap-1">
                    {links.map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${isActive
                                        ? 'text-white'
                                        : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="pill-nav-active"
                                            className="absolute inset-0 bg-white/10 rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
        </nav>
    );
};

export default PillNav;
