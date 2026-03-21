'use client';

// ============================================
//  SCINO — Footer Component
//  Premium startup footer with newsletter
// ============================================

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Beaker, Mail, MapPin, ArrowUpRight, Heart,
  Github, Twitter, Linkedin, Youtube,
  Send, ExternalLink, Sparkles
} from 'lucide-react';
import Button from './ui/Button';

const footerLinks = {
  platform: {
    title: 'Platform',
    links: [
      { label: 'Scientist Path', href: '/programs/scientist' },
      { label: 'Coding Path', href: '/programs/coding' },
      { label: 'AI & ML', href: '/programs/ai-ml' },
      { label: 'Labs', href: '/labs' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Blog', href: '/blog' },
      { label: 'Community', href: '/community' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/#founder' },
      { label: 'Careers', href: '/careers', badge: 'Hiring' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/scino_dev', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: Github, href: 'https://github.com/scino', label: 'GitHub', color: 'hover:text-white' },
  { icon: Linkedin, href: 'https://linkedin.com/company/scino', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Youtube, href: 'https://youtube.com/@scino', label: 'YouTube', color: 'hover:text-red-400' },
];

const stats = [
  { value: '100+', label: 'Learning Levels' },
  { value: '50+', label: 'Experiments' },
  { value: 'Free', label: 'Forever' },
  { value: 'AI', label: 'Powered' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-dark-50 dark:bg-dark-950 border-t border-dark-200/50 dark:border-dark-800/50">
      {/* ── Top Gradient Line ────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-scino-500/50 to-transparent" />

      {/* ── Newsletter Section ───────────────────── */}
      <div className="section-container">
        <div className="py-12 lg:py-16 border-b border-dark-200/50 dark:border-dark-800/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative overflow-hidden rounded-3xl
                         bg-gradient-to-br from-scino-500 via-scino-600 to-neon-purple
                         p-8 sm:p-10 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 
                              bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48
                              bg-neon-purple/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                                  bg-white/10 text-white/90 text-xs font-medium mb-4">
                    <Sparkles size={12} />
                    Join the future of learning
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Stay ahead with SCINO
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base">
                    Get weekly updates on new experiments, courses, and AI features.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-shrink-0">
                  <div className="flex gap-2">
                    <div className="relative flex-1 lg:w-64">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl
                                   bg-white/10 backdrop-blur-sm
                                   border border-white/20
                                   text-white placeholder:text-white/40
                                   focus:outline-none focus:ring-2 focus:ring-white/30
                                   focus:border-white/30
                                   transition-all duration-200"
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl
                                 bg-white text-scino-600 font-semibold text-sm
                                 hover:bg-white/90 transition-colors duration-200
                                 flex items-center gap-2 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {subscribed ? (
                        <>✓ Subscribed</>
                      ) : (
                        <>
                          <Send size={15} />
                          <span className="hidden sm:inline">Subscribe</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Stats Bar ──────────────────────────── */}
        <div className="py-8 border-b border-dark-200/50 dark:border-dark-800/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-dark-500 dark:text-dark-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Links Grid ─────────────────────────── */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-5 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg
                                bg-gradient-to-br from-scino-500 to-neon-purple">
                  <Beaker className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-dark-900 dark:text-white">
                  SCINO
                </span>
              </Link>

              <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-5">
                AI-powered learning platform revolutionizing science and coding education.
                Built with passion by Venkata Sai Yadav.
              </p>

              <div className="flex items-center gap-1 text-xs text-dark-400 dark:text-dark-500 mb-4">
                <MapPin size={12} />
                <span>Kadapa, India</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-1.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-9 h-9 rounded-lg
                               bg-dark-100 dark:bg-dark-800
                               text-dark-400 dark:text-dark-500
                               border border-dark-200/50 dark:border-dark-700/50
                               ${social.color}
                               transition-all duration-200`}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-4 tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group/link flex items-center gap-1.5
                                   text-sm text-dark-500 dark:text-dark-400
                                   hover:text-scino-600 dark:hover:text-scino-400
                                   transition-colors duration-200"
                      >
                        <span>{link.label}</span>

                        {link.badge && (
                          <span className="text-2xs font-bold px-1.5 py-0.5 rounded
                                           bg-neon-green/10 text-neon-green">
                            {link.badge}
                          </span>
                        )}

                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-y-0.5
                                     group-hover/link:opacity-100 group-hover/link:translate-y-0
                                     transition-all duration-200"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────── */}
        <div className="py-6 border-t border-dark-200/50 dark:border-dark-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-sm text-dark-400 dark:text-dark-500">
              <span>© {currentYear} SCINO.</span>
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={13} className="text-red-500 fill-red-500 inline" />
              </motion.span>
              <span>by</span>
              <span className="font-semibold text-dark-600 dark:text-dark-300">
                Venkata Sai Yadav
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-dark-400 dark:text-dark-500">
              <Link href="/privacy" className="hover:text-dark-600 dark:hover:text-dark-300 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-dark-600 dark:hover:text-dark-300 transition-colors">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="hover:text-dark-600 dark:hover:text-dark-300 transition-colors flex items-center gap-1">
                Sitemap
                <ExternalLink size={10} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Gradient Line ─────────────────── */}
      <div className="h-1 bg-gradient-to-r from-scino-500 via-neon-purple to-neon-pink" />
    </footer>
  );
}
