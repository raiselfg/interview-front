'use server';

import { auth } from '../better-auth';
import { APP_ROUTES } from '@/constants';

export const oauthLogin = async (provider: string) => {
  try {
    const data = await auth.api.signInSocial({
      body: {
        provider,
        callbackURL: APP_ROUTES.PROFILE,
      },
    });
    return data.url ?? null;
  } catch (error) {
    console.error('OAuth login error:', error);
    throw error;
  }
};
