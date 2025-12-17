import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Terms of Service - DeepCortex',
    description: 'Terms of Service for DeepCortex AI Tools Directory',
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-20 prose prose-invert prose-emerald">
                <h1>Terms of Service</h1>
                <p className="lead">Last updated: December 16, 2025</p>

                <p>Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the DeepCortex website operate by us.</p>

                <h2>1. Conditions of Use</h2>
                <p>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.</p>

                <h2>2. Intellectual Property</h2>
                <p>You agree that all materials, products, and services provided on this website are the property of DeepCortex, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the DeepCortex’s intellectual property in any way, including electronic, digital, or new trademark registrations.</p>

                <h2>3. User Accounts</h2>
                <p>As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information.</p>

                <h2>4. Indemnification</h2>
                <p>You agree to indemnify DeepCortex and its affiliates and hold DeepCortex harmless against legal claims and demands that may arise from your use or misuse of our services.</p>

                <h2>5. Limitation on Liability</h2>
                <p>DeepCortex is not liable for any damages that may occur to you as a result of your misuse of our website.</p>

                <h2>6. Changes to This Agreement</h2>
                <p>We reserve the right to edit, modify, and change this Agreement any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between DeepCortex and the user, and this supersedes and replaces all prior agreements regarding the use of this website.</p>
            </div>
        </main>
    );
}
