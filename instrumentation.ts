/**
 * instrumentation.ts - Next.js instrumentation for Sentry
 * This file is automatically loaded by Next.js at startup
 * 
 * To enable:
 * 1. Create this file at project root
 * 2. Add to next.config.js: experimental: { instrumentationHook: true }
 * 3. Set NEXT_PUBLIC_SENTRY_DSN environment variable
 */

import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    // Initialize Sentry
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.SENTRY_ENVIRONMENT || 'development',
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    });

    console.log('[Sentry] Initialized');
  }
}
