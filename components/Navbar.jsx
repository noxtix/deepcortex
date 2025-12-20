import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {['Coding', 'Writing', 'Image Gen', 'Video', 'Productivity', 'Fun'].map((category) => (
                <Link
                  key={category}
                  href={`/?category=${category}`}
                  className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
