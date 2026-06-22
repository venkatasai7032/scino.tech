'use client';

// ============================================
//  SCINO — Contact Page
// ============================================

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/ui/GlassCard';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual form submission to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-50 dark:bg-dark-950">
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
              <MessageCircle size={30} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold
                           text-dark-900 dark:text-white tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* ── Content ────────────────────────────── */}
        <section className="relative z-10 section-container py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <GlassCard className="p-8 mb-6">
                  <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-dark-600 dark:text-dark-300 mb-8">
                    Whether you have questions about our courses, need technical support, or just want to say hello, we're here to help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-scino-100 dark:bg-scino-950/30 flex-shrink-0">
                        <Mail size={24} className="text-scino-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-900 dark:text-white mb-1">Email</h3>
                        <p className="text-dark-600 dark:text-dark-300">
                          <a href="mailto:hello@scino.dev" className="hover:text-scino-500 transition-colors">
                            hello@scino.dev
                          </a>
                        </p>
                        <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                          We'll respond within 24-48 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-scino-100 dark:bg-scino-950/30 flex-shrink-0">
                        <MapPin size={24} className="text-scino-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-900 dark:text-white mb-1">Location</h3>
                        <p className="text-dark-600 dark:text-dark-300">
                          Kadapa, Andhra Pradesh
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Founder Note */}
                <GlassCard className="p-6">
                  <h3 className="font-semibold text-dark-900 dark:text-white mb-2">
                    From the Founder
                  </h3>
                  <p className="text-sm text-dark-600 dark:text-dark-300">
                    Hi, I'm Venkata Sai Yadav, founder of SCINO. I built this platform to make quality education accessible to everyone. Your feedback helps me improve SCINO for learners worldwide. Thank you for being part of this journey!
                  </p>
                </GlassCard>
              </div>

              {/* Contact Form */}
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Send a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/30 mb-4">
                      <Send size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-scino-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-scino-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-scino-500 focus:border-transparent transition-all"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-scino-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-scino-500 to-neon-purple text-white font-semibold hover:shadow-lg transition-all"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
