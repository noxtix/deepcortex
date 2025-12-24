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
  title: "DeepCortex | The Brain of AI Tools",
  description: "Curated directory of the best AI tools for coding, writing, and productivity.",
  icons: {
    icon: '/icon.png',
  },
};

import AnimatedBackground from '@/components/AnimatedBackground';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-emerald-500/30`}
      >
        <AnimatedBackground />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-GYW5Y6HMJJ" />
      </body>
    </html>
  );
}
