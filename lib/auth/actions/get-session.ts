'use server';

import { headers } from 'next/headers';
import { auth } from '../better-auth';

export const getSession = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch (error) {
    return null;
  }
};
