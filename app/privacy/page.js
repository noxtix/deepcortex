import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Privacy Policy - DeepCortex',
    description: 'Privacy Policy for DeepCortex AI Tools Directory',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-20 prose prose-invert prose-emerald">
                <h1>Privacy Policy</h1>
                <p className="lead">Last updated: December 16, 2025</p>

                <p>This Privacy Policy describes how DeepCortex ("we", "us", or "our") collects, uses, and discloses your personal information when you visit our website.</p>

                <h2>1. Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul>
                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you subscribe to our newsletter or submit a tool.</li>
                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                </ul>

                <h2>2. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul>
                    <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                    <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                    <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
                </ul>

                <h2>3. Third-Party Advertising</h2>
                <p>We use third-party advertising companies to serve ads when you visit the Site. These companies may use information about your visits to the Site and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.</p>

                <h2>4. Affiliate Disclosure</h2>
                <p>DeepCortex participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.</p>

                <h2>5. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at hello@deepcortex.ai.</p>
            </div>
        </main>
    );
}
