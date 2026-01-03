'use server';

import { SignupFormSchema } from '../definitions';
import { auth } from '../better-auth';
import { FormState } from '@/types';
import { headers } from 'next/headers';

export const signUp = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }

    const { name, email, password } = validatedFields.data;

    const response = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
      // headers: await headers(),
      asResponse: true, // Essential for setting session cookies
    });

    if (response.ok) {
      return { message: 'Регистрация выполнена успешно', success: true };
    } else {
      // Handle specific error cases
      const errorData = await response.json();
      if (errorData.message?.includes('already exists')) {
        return { message: 'Пользователь с таким email уже существует', success: false };
      }
      return { message: 'Не удалось зарегистрироваться', success: false };
    }
  } catch (error) {
    console.error('SignUp error:', error);
    return {
      message: 'Не удалось зарегистрироваться',
      success: false,
    };
  }
};
