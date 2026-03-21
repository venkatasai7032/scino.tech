/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── React Strict Mode ─────────────────────────
  reactStrictMode: true,

  // ── Image Optimization ────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ── Headers for Security & Performance ────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // ── Redirects ─────────────────────────────────
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/signup',
        permanent: true,
      },
      {
        source: '/signin',
        destination: '/login',
        permanent: true,
      },
    ];
  },

  // ── Experimental Features ─────────────────────
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
    ],
  },

  // ── Webpack Configuration ─────────────────────
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // ── Environment Variables (Public) ────────────
  env: {
    NEXT_PUBLIC_APP_NAME: 'SCINO',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // ── Powered by header ─────────────────────────
  poweredByHeader: false,

  // ── Compress ──────────────────────────────────
  compress: true,

  // ── Trailing slash ────────────────────────────
  trailingSlash: false,
};

module.exports = nextConfig;
