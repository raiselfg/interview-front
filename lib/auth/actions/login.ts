'use server';

import { LoginFormSchema } from '../definitions';
import { auth } from '../better-auth';
import { FormState } from '@/types';

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

    const data = await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
      },
    });

    return data.user
      ? { message: 'Вход выполнен успешно', success: true }
      : { message: 'Не удалось войти', success: false };
  } catch (error) {
    return {
      message: 'Не удалось войти',
      success: false,
    };
  }
};
