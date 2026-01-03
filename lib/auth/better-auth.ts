import { betterAuth } from 'better-auth/minimal';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/drizzle/index';
import * as schema from '@/drizzle/schema';
import { nextCookies } from 'better-auth/next-js';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),

  trustedOrigins: [process.env.BETTER_AUTH_URL!],

  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },

  rateLimit: {
    enabled: process.env.NODE_ENV === 'production',
    window: 10,
    max: 100,
    storage: 'memory',
  },

  // advanced: {
  //   useSecureCookies: process.env.NODE_ENV === 'production',
  //   defaultCookieAttributes: {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === 'production',
  //     sameSite: 'lax',
  //   },
  //   cookiePrefix: 'frontsobes',
  // },

  plugins: [nextCookies()],
});
