// ============================================
//  SCINO — Signup Page
// ============================================

import AuthLayout from '@/components/auth/AuthLayout';
import AuthForm from '@/components/auth/AuthForm';

export const metadata = {
  title: 'Create Account — Start Learning Free',
  description: 'Create your free SCINO account and start mastering science and coding with AI-powered learning, interactive experiments, and gamified progression.',
  openGraph: {
    title: 'Join SCINO — Free AI-Powered Learning',
    description: 'Create your free account. 100 levels of science and coding mastery await you.',
    url: 'https://scino.dev/signup',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SignupPage() {
  return (
    <AuthLayout mode="signup">
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
