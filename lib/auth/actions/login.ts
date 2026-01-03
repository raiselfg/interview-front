'use server';

import { LoginFormSchema } from '../definitions';
import { auth } from '../better-auth';
import { FormState } from '@/types';
import { headers } from 'next/headers';
import { APP_ROUTES } from '@/constants';

export const login = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  try {
    const validatedFields = LoginFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }

    const { email, password } = validatedFields.data;

    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
      },
      // headers: await headers(),
      asResponse: true, // Essential for setting cookies in Next.js 16
    });

    if (response.ok) {
      return { message: 'Вход выполнен успешно', success: true };
    } else {
      return { message: 'Неверные учетные данные', success: false };
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      message: 'Не удалось войти',
      success: false,
    };
  }
};
