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
  title: {
    default: "DeepCortex | The Brain of AI Tools",
    template: "%s | DeepCortex"
  },
  description: "Curated directory of the best AI tools for coding, writing, and productivity. Find the ultimate AI software to automate and accelerate your workflow.",
  keywords: ["AI tools", "Artificial Intelligence", "AI software directory", "best AI apps", "productivity AI", "coding AI tools"],
  openGraph: {
    title: "DeepCortex | The Brain of AI Tools",
    description: "Curated directory of the best AI tools for coding, writing, and productivity.",
    url: 'https://deepcortex.tech',
    siteName: 'DeepCortex',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'DeepCortex Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepCortex | The Brain of AI Tools',
    description: 'Curated directory of the best AI tools for coding, writing, and productivity.',
    images: ['/icon.png'],
  },
  icons: {
    icon: '/icon.png',
  },
  alternates: {
    canonical: 'https://deepcortex.tech',
  },
};

import SmoothScrolling from '@/components/SmoothScrolling';

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DeepCortex',
    url: 'https://deepcortex.tech',
    description: metadata.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://deepcortex.tech/tools?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-emerald-500/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
