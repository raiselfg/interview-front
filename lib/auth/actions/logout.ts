'use server';

import { FormState } from '@/types';
import { auth } from '../better-auth';
import { headers } from 'next/headers';

export const logout = async (): Promise<FormState> => {
  try {
    const response = await auth.api.signOut({
      headers: await headers(),
      asResponse: true, // Important for cookie clearing
    });

    if (response.ok) {
      return { message: 'Выход выполнен успешно', success: true };
    } else {
      return { message: 'Не удалось выйти', success: false };
    }
  } catch (error) {
    console.error('Logout error:', error);
    return {
      message: 'Не удалось выйти',
      success: false,
    };
  }
};
