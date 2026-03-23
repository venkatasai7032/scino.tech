'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Beaker, Code2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl font-bold gradient-text mb-4">404</div>
          <h1 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-dark-500 dark:text-dark-400 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist yet.
            Maybe it&apos;s still being built! 🔬
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-scino-500 text-white font-semibold
                         hover:bg-scino-600 transition-colors duration-200"
            >
              <Home size={18} />
              Go Home
            </Link>
            <Link
              href="/programs/scientist"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-200
                         font-semibold hover:bg-dark-200 dark:hover:bg-dark-700
                         transition-colors duration-200"
            >
              <Beaker size={18} />
              Scientist Program
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
