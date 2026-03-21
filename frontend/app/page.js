// ============================================
//  SCINO — Homepage
//  Assembles all landing page sections
// ============================================

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ScientistProgram from '@/components/home/ScientistProgram';
import CodingProgram from '@/components/home/CodingProgram';
import LabsPreview from '@/components/home/LabsPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FounderSection from '@/components/home/FounderSection';
import CTASection from '@/components/home/CTASection';

// ── Page-level SEO ──────────────────────────────
export const metadata = {
  title: 'SCINO — AI-Powered Science & Innovation Learning Platform',
  description:
    'Master science and coding through 100 levels of AI-guided, interactive learning. ' +
    'Free experiments, virtual labs, and gamified progression. Founded by Venkata Sai Yadav.',
  openGraph: {
    title: 'SCINO — Master Science & Innovation with AI',
    description:
      'Explore 100 levels of scientific discovery and coding mastery with AI-powered learning.',
    url: 'https://scino.dev',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="overflow-hidden">
        {/* ── Hero: Cinematic landing ──────────── */}
        <HeroSection />

        {/* ── Features: Platform capabilities ──── */}
        <FeaturesSection />

        {/* ── Scientist: 100-level science path ── */}
        <ScientistProgram />

        {/* ── Coding: 100-level code path ─────── */}
        <CodingProgram />

        {/* ── Labs: Virtual laboratories ─────── */}
        <LabsPreview />

        {/* ── Testimonials: Community love ─────── */}
        <TestimonialsSection />

        {/* ── Founder: Venkata Sai Yadav ────────── */}
        <FounderSection />

        {/* ── CTA: Final call-to-action ────────── */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
