'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [];

  return (
    <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 text-emerald-400 font-bold text-xl hover:text-emerald-300 transition-colors">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="DeepCortex Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span>DeepCortex</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {/* Categories removed as per request */}
              <div className="h-4 w-px bg-slate-800 mx-2"></div>
              <Link
                href="/about"
                className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                About
              </Link>
              <Link
                href="/stacks"
                className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Stacks
              </Link>
              <Link
                href="/blog"
                className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 px-3 py-2 rounded-md text-sm font-bold transition-all"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/?category=${category}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium transition-all"
              >
                {category}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 block px-3 py-2 rounded-md text-base font-bold transition-all"
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium transition-all"
            >
              About
            </Link>
            <Link
              href="/stacks"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium transition-all"
            >
              Stacks
            </Link>
            <div className="pt-4 pb-2">
              <a
                href="https://forms.gle/9MHi5zb8qQen7Ai17"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-slate-800 text-slate-200 border border-slate-700 px-4 py-2 rounded-lg text-sm font-medium"
              >
                Submit a Tool
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
