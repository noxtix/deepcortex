'use client';

import { motion } from 'framer-motion';
import { FlaskConical, ShieldAlert, Zap, User } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Animation Variations
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Section = ({ children, className = "" }) => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className={`min-h-screen flex flex-col justify-center items-center px-6 md:px-12 max-w-5xl mx-auto py-20 ${className}`}
    >
        {children}
    </motion.section>
);

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-slate-200 font-sans selection:bg-[#00FF94]/30 overflow-x-hidden">
            <Navbar />

            {/* --- SECTION 1: HERO --- */}
            <motion.section
                className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Abstract Background Animation */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, 45, -45, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF94]/5 rounded-full blur-[120px]"
                    />
                </div>

                <div className="z-10 px-4">
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6">
                        The Signal <br />
                        <span className="text-[#00FF94] drop-shadow-[0_0_20px_rgba(0,255,148,0.4)]">Amidst The Noise.</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Why the world doesn&apos;t need another AI tool. <br />
                        <span className="text-slate-200">It needs a filter.</span>
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 text-slate-500 text-sm"
                >
                    Scroll to Explore
                </motion.div>
            </motion.section>


            {/* --- SECTION 2: THE PROBLEM --- */}
            <Section>
                <div className="max-w-3xl text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                        The Gold Rush is <span className="glitch-text text-[#00FF94]" style={{ textShadow: "2px 0 #fff, -2px 0 #00FF94" }}>Messy.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 leading-loose">
                        Every day, 100 new &apos;game-changing&apos; AI tools launch.
                        <strong className="text-slate-200"> 99% of them are thin wrappers</strong> around ChatGPT, filled with ads and expensive subscriptions.
                        Finding the tools that actually build software, write papers, or accelerate workflows has become impossible.
                    </p>
                </div>
            </Section>


            {/* --- SECTION 3: THE PHILOSOPHY --- */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The DeepCortex Standard.</h2>
                    <div className="w-24 h-1 bg-[#00FF94] mx-auto rounded-full shadow-[0_0_10px_#00FF94]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                    {/* Pillar 1 */}
                    <motion.div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-[#00FF94]/50 transition-colors group">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00FF94]/20 transition-colors">
                            <FlaskConical className="w-6 h-6 text-[#00FF94]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Manually Tested.</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            No automated scraping. If I haven&apos;t personally used it to build something, it doesn&apos;t get listed.
                        </p>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-[#00FF94]/50 transition-colors group">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00FF94]/20 transition-colors">
                            <ShieldAlert className="w-6 h-6 text-[#00FF94]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Zero Fluff.</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            No sponsored placements. No tools that require a 30-minute tutorial just to sign up.
                        </p>
                    </motion.div>

                    {/* Pillar 3 */}
                    <motion.div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-[#00FF94]/50 transition-colors group">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00FF94]/20 transition-colors">
                            <Zap className="w-6 h-6 text-[#00FF94]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">High Signal.</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Focus on utility over hype. Tools that give you an unfair advantage as a student or builder.
                        </p>
                    </motion.div>
                </div>
            </Section>


            {/* --- SECTION 4: THE BUILDER --- */}
            <Section className="!justify-center">
                <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm max-w-4xl">
                    <div className="shrink-0 relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-slate-800 to-black border border-slate-700 flex items-center justify-center shadow-2xl">
                            <span className="font-black text-4xl text-[#00FF94]">DC</span>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-[#00FF94] text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                            Dev
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">A Note from the Dev.</h2>
                        <p className="text-slate-400 leading-relaxed mb-6 italic">
                            &quot;I&apos;m a solo developer and university student. I didn&apos;t build DeepCortex as a startup trying to raise VC funding.
                            I built it because I was tired of my own bookmarks folder being a graveyard of useless tools.
                            This is the directory I wish existed when I started coding.&quot;
                        </p>
                        <p className="text-[#00FF94] font-bold">— Founder, DeepCortex</p>
                    </div>
                </div>
            </Section>


            {/* --- SECTION 5: CTA --- */}
            <Section className="!min-h-[70vh]">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Join the <span className="text-[#00FF94]">inner circle.</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Get the weekly briefing on the 1% of tools that matter.
                    </p>

                    <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-2xl">
                        <NewsletterForm variant="default" />
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
