import { z } from 'zod';

export const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: z.string(),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL: z.string(),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_PORT: z.coerce.number(),
  DATABASE_URL: z.string().url(),
});

export type Environment = z.infer<typeof environmentSchema>;
