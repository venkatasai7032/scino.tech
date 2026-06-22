// ============================================
//  SCINO APP — Express Application Setup
// ============================================

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import hpp from 'hpp';
import dotenv from 'dotenv';

import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.middleware.js';
import { globalRateLimiter } from './middleware/rateLimiter.middleware.js';
import { logger } from './utils/logger.js';

dotenv.config();

const app = express();

// ── Security Middleware ─────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", process.env.SUPABASE_URL],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// ── CORS Configuration ─────────────────────────
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// ── Body Parsing ────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ── HTTP Parameter Pollution Protection ─────────
app.use(hpp());

// ── Compression ─────────────────────────────────
app.use(compression());

// ── Logging ─────────────────────────────────────
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// ── Rate Limiting ───────────────────────────────
app.use(globalRateLimiter);

// ── Health Check ────────────────────────────────
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: '🧬 SCINO Backend is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: '1.0.0',
    founder: 'Venkata Sai Yadav',
  });
});

// ── API Routes ──────────────────────────────────
app.use(`/api/${process.env.API_VERSION || 'v1'}`, routes);

// ── 404 Handler ─────────────────────────────────
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found on SCINO server`,
  });
});

// ── Global Error Handler ────────────────────────
app.use(errorHandler);

export default app;
