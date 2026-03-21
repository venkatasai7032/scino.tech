// ============================================
//  SCINO — Privacy Policy Page
// ============================================

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy',
  description: 'SCINO Privacy Policy — Learn how we collect, use, and protect your data.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: '1. Information We Collect',
      content: `When you create an account on SCINO, we collect the following information: your name, email address, and password (securely hashed). As you use the platform, we also collect learning progress data such as completed levels, XP points, experiment results, and time spent on each activity. We may collect device information including browser type, operating system, and screen resolution for optimizing your experience. We do not collect any payment information as SCINO is completely free to use.`,
    },
    {
      title: '2. How We Use Your Information',
      content: `We use your information solely to provide and improve the SCINO learning experience. This includes personalizing your learning path using AI algorithms, tracking your progress across courses and experiments, calculating XP points and level progression, generating certificates upon course completion, sending important account notifications, and improving our platform through anonymized analytics. We never sell your personal data to third parties.`,
    },
    {
      title: '3. AI & Learning Data',
      content: `SCINO uses artificial intelligence to enhance your learning experience. Our AI processes your learning patterns, quiz responses, and experiment interactions to provide personalized recommendations, adaptive difficulty, and targeted explanations. All AI processing is designed to improve educational outcomes. Your learning data may be used in anonymized, aggregated form to improve our AI models. You can request deletion of your AI interaction history at any time.`,
    },
    {
      title: '4. Data Storage & Security',
      content: `Your data is stored securely using Supabase, which provides enterprise-grade PostgreSQL databases with built-in encryption. All data transmission is encrypted using TLS 1.3. Passwords are hashed using bcrypt with appropriate salt rounds. We implement Row Level Security (RLS) to ensure users can only access their own data. We conduct regular security audits and follow industry best practices for data protection. Our infrastructure is hosted on secure cloud providers with SOC 2 compliance.`,
    },
    {
      title: '5. Cookies & Local Storage',
      content: `SCINO uses essential cookies and local storage for authentication session management, storing your theme preference (dark/light mode), and maintaining your learning session state. We do not use tracking cookies or third-party advertising cookies. You can clear your local storage at any time through your browser settings, though this may require you to log in again.`,
    },
    {
      title: '6. Third-Party Services',
      content: `We use the following third-party services: Supabase for authentication and database services, and Vercel for hosting and content delivery. Each of these services has their own privacy policies, and we encourage you to review them. We do not share your personal information with any other third parties unless required by law.`,
    },
    {
      title: '7. Children\'s Privacy',
      content: `SCINO is designed to be safe for learners of all ages. We do not knowingly collect personal information from children under 13 without parental consent. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. For users under 18, we recommend parental supervision when creating accounts and using the platform.`,
    },
    {
      title: '8. Your Rights',
      content: `You have the right to access, update, or delete your personal information at any time. You can update your profile information directly through the platform settings. To request complete data deletion, contact us at privacy@scino.dev. You have the right to export your learning data in a standard format. You can opt out of non-essential communications at any time. If you are in the EU, you have additional rights under GDPR including the right to data portability and the right to restrict processing.`,
    },
    {
      title: '9. Data Retention',
      content: `We retain your account data for as long as your account is active. If you delete your account, we will remove your personal information within 30 days, except where we are required to retain certain information by law. Anonymized learning analytics may be retained indefinitely to improve our platform. Certificates and their verification data are retained permanently to allow ongoing verification.`,
    },
    {
      title: '10. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our platform and sending an email to your registered address. We encourage you to review this policy periodically. Continued use of SCINO after changes constitutes acceptance of the updated policy.`,
    },
    {
      title: '11. Contact Us',
      content: `If you have any questions about this Privacy Policy, your data, or our practices, please contact us at privacy@scino.dev. You can also reach our founder, Venkata Sai Yadav, directly for any privacy concerns. Our mailing address is: SCINO Platform, Kadapa, Andhra Pradesh, India.`,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark-950">
        <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />

        {/* ── Hero Header ────────────────────────── */}
        <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16
                           bg-gradient-to-b from-dark-50 to-white
                           dark:from-dark-900 dark:to-dark-950
                           border-b border-dark-200/50 dark:border-dark-800/50">
          <div className="relative z-10 section-container text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
                            bg-gradient-to-br from-scino-500 to-neon-purple
                            shadow-glow-sm">
              <Shield size={30} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold
                           text-dark-900 dark:text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Your privacy matters to us. This policy explains how SCINO collects,
              uses, and protects your personal information.
            </p>
            <p className="text-sm text-dark-400 dark:text-dark-500 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* ── Content ────────────────────────────── */}
        <section className="relative z-10 section-container py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Summary card */}
            <div className="mb-12 p-6 rounded-2xl
                            bg-scino-50 dark:bg-scino-950/20
                            border border-scino-200/50 dark:border-scino-800/30">
              <h2 className="text-lg font-bold text-dark-900 dark:text-white mb-3
                             flex items-center gap-2">
                <Shield size={18} className="text-scino-500" />
                Quick Summary
              </h2>
              <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  We only collect data necessary for your learning experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  We never sell your data to third parties
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  Your data is encrypted and stored securely
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  You can delete your account and data at any time
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  SCINO is free — no payment data is ever collected
                </li>
              </ul>
            </div>

            {/* Policy Sections */}
            <div className="space-y-10">
              {sections.map((section, index) => (
                <article key={index} className="group">
                  <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-4
                                 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-base text-dark-600 dark:text-dark-300 leading-relaxed">
                    {section.content}
                  </p>
                  {index < sections.length - 1 && (
                    <div className="mt-10 h-px bg-dark-100 dark:bg-dark-800" />
                  )}
                </article>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-16 pt-8 border-t border-dark-200/50 dark:border-dark-800/50
                            text-center">
              <p className="text-sm text-dark-500 dark:text-dark-400">
                This Privacy Policy is effective as of {lastUpdated} and applies to all
                users of the SCINO platform.
              </p>
              <p className="text-sm text-dark-500 dark:text-dark-400 mt-3">
                SCINO — Founded by{' '}
                <span className="font-semibold text-dark-700 dark:text-dark-200">
                  Venkata Sai Yadav
                </span>
                {' '}• Kadapa, India
              </p>
              <p className="text-sm mt-2">
                <a href="mailto:privacy@scino.dev"
                   className="text-scino-500 hover:text-scino-600 dark:hover:text-scino-400
                              font-medium transition-colors">
                  privacy@scino.dev
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
