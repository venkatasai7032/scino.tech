// ============================================
//  SCINO SERVER — Entry Point
//  Author: Venkata Sai Yadav
//  Platform: AI-Powered Learning Platform
// ============================================

import app from './app.js';
import { logger } from './utils/logger.js';

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ── Uncaught Exception Handler ──────────────────
process.on('uncaughtException', (err) => {
  logger.error('UNCAUGHT EXCEPTION 💥 Shutting down...');
  logger.error(`${err.name}: ${err.message}`);
  logger.error(err.stack);
  process.exit(1);
});

// ── Start Server ────────────────────────────────
const server = app.listen(PORT, () => {
  logger.info(`
  ╔══════════════════════════════════════════════╗
  ║                                              ║
  ║      🧬  SCINO Backend Server Running        ║
  ║                                              ║
  ║      Port:    ${PORT}                          ║
  ║      Mode:    ${NODE_ENV.padEnd(26)}║
  ║      Status:  ✅ Online                       ║
  ║                                              ║
  ║      Founded by: Venkata Sai Yadav           ║
  ║                                              ║
  ╚══════════════════════════════════════════════╝
  `);
});

// ── Unhandled Rejection Handler ─────────────────
process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION 💥 Shutting down...');
  logger.error(`${err.name}: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

// ── Graceful Shutdown ───────────────────────────
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Process terminated.');
  });
});
