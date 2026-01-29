'use server';

import { headers } from 'next/headers';

import { auth } from '../better-auth';

export const getSession = async () => {
  try {
    const response = await auth.api.getSession({
      headers: await headers(),
      asResponse: true,
    });

    if (!response.ok) {
      return null;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return null;
  }
};
