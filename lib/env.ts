import { z } from 'zod';

const envSchema = z.object({
  GEMINI_API_KEY: z.string().min(1, 'GEMINI_API_KEY is required'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
});

type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | null = null;

/**
 * Validates and caches environment variables at startup
 * Fails fast if required vars are missing
 */
export function getEnv(): Env {
  if (cachedEnv) {
    return cachedEnv;
  }

  const result = envSchema.safeParse({
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  });

  if (!result.success) {
    const missingVars = result.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join('\n');
    throw new Error(`Invalid environment variables:\n${missingVars}`);
  }

  cachedEnv = result.data;
  return cachedEnv;
}

// Validate on module load
getEnv();
