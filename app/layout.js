import localFont from "next/font/local";
import "./globals.css";
import LaserFlow from '@/components/LaserFlow';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DeepCortex | The Brain of AI Tools",
  description: "Curated directory of the best AI tools for coding, writing, and productivity.",
  icons: {
    icon: '/icon.png',
  },
};

import SmoothScrolling from '@/components/SmoothScrolling';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-emerald-500/30`}
      >
        {/* AnimatedBackground removed for pitch black theme */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <LaserFlow
            color="#00FF94" // Neon Green
            wispDensity={1.2}
            flowSpeed={0.3}
            verticalSizing={20} // Extends beam much further down
            horizontalBeamOffset={0} // Centers the beam
            falloffStart={1.5} // Delays vertical fading
          />
        </div>
        <SmoothScrolling>
          <div className="relative z-10">
            {children}
            <Footer />
          </div>
        </SmoothScrolling>
        <GoogleAnalytics gaId="G-GYW5Y6HMJJ" />
      </body>
    </html>
  );
}
