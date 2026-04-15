import * as Sentry from '@sentry/nextjs';

/**
 * Configure Sentry for error tracking and performance monitoring
 * 
 * Initialize in:
 * - app/layout.tsx (via instrumentation.ts)
 * - API routes for backend monitoring
 * - Client components for frontend errors
 * 
 * Environment variables needed:
 * - NEXT_PUBLIC_SENTRY_DSN: Your Sentry DSN
 * - SENTRY_ENVIRONMENT: 'production' | 'staging' | 'development'
 */

type ContextRecord = Record<string, string | number | boolean | null | undefined>;

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;
const SENTRY_ENVIRONMENT = process.env.SENTRY_ENVIRONMENT || 'development';
const IS_PRODUCTION = SENTRY_ENVIRONMENT === 'production';

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: SENTRY_ENVIRONMENT,
    // Set sample rate to 100% for errors (all errors captured)
    // and 10% for transactions (1 in 10 requests profiled)
    integrations: [
      new Sentry.Replay({
        maskAllText: false,
        blockAllMedia: false,
      }),
      // Capture unhandled promise rejections
      new Sentry.OnUncaughtExceptionIntegration(),
    ],
    tracesSampleRate: IS_PRODUCTION ? 0.1 : 1.0,
    replaysSessionSampleRate: IS_PRODUCTION ? 0.1 : 1.0,
    replaysOnErrorSampleRate: 1.0, // Always capture replays on errors
    // Ignore specific errors
    ignoreErrors: [
      // Browser extensions
      'top.GLOBALS',
      // Random plugins/extensions
      'originalCreateNotification',
      'canvas.contentDocument',
      'MyApp_RemoveAllHighlights',
      // Ignore frame.contentWindow errors (common in iframes)
      'TypeError: frame.contentWindow',
    ],
    enabled: IS_PRODUCTION || process.env.NEXT_PUBLIC_SENTRY_DSN !== undefined,
  });
}

/**
 * Capture an error to Sentry
 */
export function captureError(error: Error | string, context?: ContextRecord) {
  if (!SENTRY_DSN) {
    console.error(error);
    return;
  }

  if (typeof error === 'string') {
    Sentry.captureException(new Error(error));
  } else {
    Sentry.captureException(error);
  }

  if (context) {
    Sentry.setContext('additional', context);
  }
}

/**
 * Add breadcrumb for user actions
 */
export function addBreadcrumb(
  message: string,
  category: 'navigation' | 'api' | 'form' | 'error' | string = 'user',
  level: 'info' | 'warning' | 'error' = 'info'
) {
  if (!SENTRY_DSN) return;

  Sentry.addBreadcrumb({
    message,
    category,
    level,
    timestamp: Date.now() / 1000,
  });
}

/**
 * Set user context for error tracking
 */
export function setUserContext(userId: string, email?: string, username?: string) {
  if (!SENTRY_DSN) return;

  Sentry.setUser({
    id: userId,
    email,
    username,
  });
}

/**
 * Clear user context
 */
export function clearUserContext() {
  if (!SENTRY_DSN) return;
  Sentry.setUser(null);
}

/**
 * Start a performance monitoring transaction
 */
export function startTransaction(name: string, op: string) {
  if (!SENTRY_DSN) return null;

  return Sentry.startTransaction({
    name,
    op,
    sampled: IS_PRODUCTION ? Math.random() < 0.1 : true,
  });
}

export default Sentry;
