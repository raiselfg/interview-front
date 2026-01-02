'use server';

import { FormState } from '@/types';
import { auth } from '../better-auth';
import { headers } from 'next/headers';

export const logout = async (): Promise<FormState> => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    return { message: 'Выход выполнен успешно', success: true };
  } catch (error) {
    return {
      message: 'Не удалось выйти',
      success: false,
    };
  }
};
