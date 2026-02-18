'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CardNav = ({ items, baseColor, menuColor, buttonBgColor, buttonTextColor, ease, logo, logoAlt }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 md:px-0">
      <div className="max-w-xl mx-auto relative">
        <div
          className="rounded-full px-6 py-3 flex items-center justify-between shadow-2xl backdrop-blur-md border border-white/10"
          style={{ backgroundColor: baseColor }}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 z-20 group">
            {logo && (
              <div className="relative w-8 h-8 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src={logo}
                  alt={logoAlt || "Logo"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
              {logoAlt}
            </span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-white/10 transition-colors z-20 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: ease || "easeInOut" }}
              className="absolute top-16 left-0 right-0 bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden"
            >
              <div className="grid gap-2">
                {items.map((section, idx) => (
                  <div key={idx} className="bg-slate-950/50 rounded-2xl p-4">
                    <h3
                      className="text-xs font-bold uppercase tracking-wider mb-3 ml-2"
                      style={{ color: section.textColor }} // Use the passed text color, probably white
                    >
                      {section.label}
                    </h3>
                    <div className="grid grid-cols-1 gap-1">
                      {section.links.map((link, linkIdx) => (
                        <Link
                          key={linkIdx}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors group"
                        >
                          <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                            {link.label}
                          </span>
                          {/* Optional Arrow or Icon */}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button in Menu */}
              <div className="mt-2">
                <Link
                  href="/tools"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-4 text-center font-bold rounded-2xl transition-transform hover:scale-[0.98]"
                  style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                >
                  Explore Directory
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardNav;
