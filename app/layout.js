import localFont from "next/font/local";
import "./globals.css";
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
  metadataBase: new URL('https://deepcortex.tech'),
  title: "DeepCortex | The Brain of AI Tools - Discover Top AI Software",
  description: "The ultimate curated directory of the best AI tools for developers, creators, marketers, and businesses. Compare features, pricing, and reviews.",
  keywords: ['AI tools', 'best artificial intelligence tools', 'AI software directory', 'ChatGPT alternatives', 'AI coding tools', 'AI for productivity', 'DeepCortex'],
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'DeepCortex | The Brain of AI Tools',
    description: 'The ultimate curated directory of the best AI tools for developers, creators, marketers, and businesses.',
    url: 'https://deepcortex.tech',
    siteName: 'DeepCortex',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepCortex | The Brain of AI Tools',
    description: 'Discover the best AI tools, read detailed reviews, and supercharge your productivity.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
