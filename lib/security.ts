/**
 * Security utilities for API routes
 */

/**
 * Validates the request origin to prevent CSRF attacks
 * For static export, this is a defensive layer
 */
export function validateOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  
  // Allow requests from same origin
  if (origin === `https://${host}` || origin === `http://${host}`) {
    return true;
  }
  
  // Allow requests without origin header (simple requests)
  if (!origin) {
    return true;
  }
  
  console.warn(`CSRF Warning: Request from unexpected origin: ${origin}`);
  return false;
}

/**
 * Validates that POST/PUT/DELETE requests have proper headers
 */
export function validateContentType(request: Request): boolean {
  const contentType = request.headers.get('content-type');
  
  // Must be JSON for API endpoints
  if (request.method === 'POST' && !contentType?.includes('application/json')) {
    return false;
  }
  
  return true;
}

/**
 * Rate limit info type
 */
export interface RateLimitResult {
  allowed: boolean;
  retryAfter: number;
}

/**
 * Create a client IP extractor
 */
export function extractClientIp(request: Request): string {
  const xf = request.headers.get('x-forwarded-for');
  if (xf) return xf.split(',')[0].trim();
  
  const xr = request.headers.get('x-real-ip');
  if (xr) return xr;
  
  return 'local';
}

/**
 * Inject security headers into response
 */
export function addSecurityHeaders(headers: Headers): void {
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
}
