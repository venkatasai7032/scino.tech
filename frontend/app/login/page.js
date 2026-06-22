// ============================================
//  SCINO — Login Page
// ============================================

import AuthLayout from '@/components/auth/AuthLayout';
import AuthForm from '@/components/auth/AuthForm';

export const metadata = {
  title: 'Log In',
  description: 'Log in to your SCINO account. Continue your AI-powered science and coding learning journey.',
  openGraph: {
    title: 'Log In | SCINO',
    description: 'Access your SCINO dashboard, track progress, and continue learning.',
    url: 'https://scino.dev/login',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginPage() {
  return (
    <AuthLayout mode="login">
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
