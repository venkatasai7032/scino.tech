// ============================================
//  SUPABASE CLIENT CONFIGURATION
// ============================================

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { logger } from '../utils/logger.js';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ── Validate environment variables ──────────────
if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  logger.error('❌ Missing Supabase environment variables!');
  process.exit(1);
}

// ── Public Client (for auth operations) ─────────
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false,
  },
  db: {
    schema: 'public',
  },
  global: {
    headers: {
      'x-application-name': 'scino-backend',
    },
  },
});

// ── Admin Client (for server-side operations) ───
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
  db: {
    schema: 'public',
  },
});

// ── Connection Test ─────────────────────────────
export const testConnection = async () => {
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('count')
      .limit(1);

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    logger.info('✅ Supabase connection established successfully');
    return true;
  } catch (error) {
    logger.error(`❌ Supabase connection failed: ${error.message}`);
    return false;
  }
};

export default supabase;
