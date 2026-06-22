// ============================================
//  SCINO — Root Layout (App Router)
// ============================================

import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

// ── SEO Metadata ────────────────────────────────
export const metadata = {
  metadataBase: new URL('https://scino.dev'),

  title: {
    default: 'SCINO — AI-Powered Science & Innovation Learning Platform',
    template: '%s | SCINO',
  },

  description:
    'SCINO is an AI-powered learning platform that revolutionizes science and coding education. ' +
    'Master 100 levels of scientific discovery and programming through interactive experiments, ' +
    'AI-guided learning, and hands-on labs. Founded by Venkata Sai Yadav.',

  keywords: [
    'SCINO', 'AI learning', 'science education', 'coding platform',
    'interactive learning', 'experiments', 'innovation', 'STEM',
    'Venkata Sai Yadav', 'online education', 'AI tutor',
    'science experiments', 'learn to code', 'gamified learning',
  ],

  authors: [
    { name: 'Venkata Sai Yadav', url: 'https://scino.dev' },
  ],

  creator: 'Venkata Sai Yadav',
  publisher: 'SCINO Platform',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scino.dev',
    siteName: 'SCINO',
    title: 'SCINO — AI-Powered Science & Innovation Learning',
    description:
      'Master science and coding through 100 levels of AI-guided, interactive learning. ' +
      'Experiments, labs, and real-world projects.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SCINO — Science + Innovation Learning Platform',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SCINO — AI-Powered Science & Innovation Learning',
    description: 'Master science and coding through AI-guided interactive learning.',
    images: ['/og-image.png'],
    creator: '@scino_dev',
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

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

// ── Viewport Configuration ──────────────────────
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ── Root Layout Component ───────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Preconnect to external domains ──── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Prevent FOUC (Flash of Unstyled Content) ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('scino-theme') || 'system';
                  var resolved = theme;
                  if (theme === 'system') {
                    resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
                      ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(resolved);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />

        {/* ── Structured Data (JSON-LD) ────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'SCINO',
              alternateName: 'Science + Innovation',
              url: 'https://scino.dev',
              logo: 'https://scino.dev/logo.png',
              description:
                'AI-powered learning platform for science and coding education',
              founder: {
                '@type': 'Person',
                name: 'Venkata Sai Yadav',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Kadapa',
                  addressCountry: 'India',
                },
              },
              sameAs: [
                'https://twitter.com/scino_dev',
                'https://github.com/scino',
              ],
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free AI-powered learning platform',
              },
            }),
          }}
        />
      </head>

      <body className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-300">
        <ThemeProvider>
          {/* ── Skip to main content (Accessibility) ── */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                       focus:z-50 focus:px-4 focus:py-2 focus:bg-scino-500 focus:text-white
                       focus:rounded-lg focus:outline-none"
          >
            Skip to main content
          </a>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
