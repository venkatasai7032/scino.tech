// ============================================
//  SCINO — Terms of Service Page
// ============================================

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service',
  description: 'SCINO Terms of Service — Rules and guidelines for using the SCINO platform.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using SCINO, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. We reserve the right to modify these terms at any time, and your continued use of the platform constitutes acceptance of any changes.`,
    },
    {
      title: '2. Age Requirements',
      content: `SCINO is designed for learners of all ages. Users under 13 must have parental consent to create an account. Users under 18 should have parental supervision when using the platform. Parents and guardians are responsible for monitoring their children's use of SCINO.`,
    },
    {
      title: '3. Account Responsibilities',
      content: `You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. You are responsible for all activities that occur under your account. You must provide accurate and complete information when creating your account.`,
    },
    {
      title: '4. Acceptable Use',
      content: `You agree to use SCINO for educational purposes only. You may not use the platform for any illegal activities, harassment, or to distribute harmful content. You may not attempt to gain unauthorized access to our systems or interfere with platform operations. You may not use automated tools to scrape or harvest data from the platform.`,
    },
    {
      title: '5. Intellectual Property',
      content: `All content on SCINO, including text, graphics, logos, and software, is owned by SCINO or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission. Your learning progress and achievements are your personal data, but the platform's educational content remains our property.`,
    },
    {
      title: '6. AI Usage',
      content: `SCINO uses artificial intelligence to enhance your learning experience. By using the platform, you agree that your learning interactions may be processed by our AI systems to provide personalized recommendations. AI-generated content is provided for educational purposes and should not be considered professional advice.`,
    },
    {
      title: '7. User-Generated Content',
      content: `If you create content on SCINO (such as forum posts, comments, or shared projects), you grant us a non-exclusive, royalty-free license to use, display, and distribute that content for the purpose of operating the platform. You represent that you have the right to share such content and that it does not violate any third-party rights.`,
    },
    {
      title: '8. Privacy',
      content: `Your use of SCINO is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. Please review our Privacy Policy to understand our data practices.`,
    },
    {
      title: '9. Disclaimers',
      content: `SCINO is provided on an "as is" and "as available" basis. We make no warranties about the accuracy, reliability, or completeness of our educational content. We are not responsible for any errors or omissions, or for any results obtained from the use of our platform. Educational outcomes depend on individual effort and ability.`,
    },
    {
      title: '10. Limitation of Liability',
      content: `To the maximum extent permitted by law, SCINO and its founders shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount you paid (if any) for using the platform. Since SCINO is free, this limitation effectively means we have no monetary liability to users.`,
    },
    {
      title: '11. Termination',
      content: `We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion. Upon termination, your right to use the platform will immediately cease. You may delete your account at any time through your account settings.`,
    },
    {
      title: '12. Governing Law',
      content: `These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be resolved in the courts of Andhra Pradesh, India.`,
    },
    {
      title: '13. Contact Information',
      content: `For questions about these Terms of Service, please contact us at legal@scino.dev. You can also reach our founder, Venkata Sai Yadav, for any concerns. Our mailing address is: SCINO Platform, Kadapa, Andhra Pradesh, India.`,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark-950">
        <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />

        {/* ── Hero Header ────────────────────────── */}
        <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 bg-gradient-to-b from-dark-50 to-white dark:from-dark-900 dark:to-dark-950 border-b border-dark-200/50 dark:border-dark-800/50">
          <div className="relative z-10 section-container text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
                            bg-gradient-to-br from-scino-500 to-neon-purple
                            shadow-glow-sm">
              <FileText size={30} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold
                           text-dark-900 dark:text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Please read these terms carefully before using the SCINO platform.
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
                <FileText size={18} className="text-scino-500" />
                Quick Summary
              </h2>
              <ul className="space-y-2 text-sm text-dark-600 dark:text-dark-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  SCINO is free to use for educational purposes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  You must be at least 13 or have parental consent
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  Use the platform responsibly and legally
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  Your privacy is protected (see Privacy Policy)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  You can delete your account at any time
                </li>
              </ul>
            </div>

            {/* Terms Sections */}
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
                These Terms of Service are effective as of {lastUpdated} and apply to all
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
                <a href="mailto:legal@scino.dev"
                   className="text-scino-500 hover:text-scino-600 dark:hover:text-scino-400
                              font-medium transition-colors">
                  legal@scino.dev
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
