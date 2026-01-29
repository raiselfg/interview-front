'use server';

import { redirect } from 'next/navigation';

import { APP_ROUTES } from '@/constants';
import { FormState } from '@/types';

import { auth } from '../better-auth';
import { LoginFormSchema } from '../definitions';

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

    if (!response.ok) {
      return { message: 'Неверные учетные данные', success: false };
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      message: 'Не удалось войти',
      success: false,
    };
  }

  redirect(APP_ROUTES.PROFILE);
};
