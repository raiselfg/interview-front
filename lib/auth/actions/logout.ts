'use server';

import { auth } from '../better-auth';
import { FormState } from '../definitions';
import { headers } from 'next/headers';

export const logout = async (): Promise<FormState> => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    return { message: 'Logged out successfully', success: true };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Failed to logout',
      success: false,
    };
  }
};
