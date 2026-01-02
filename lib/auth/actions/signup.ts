'use server';

import { SignupFormSchema } from '../definitions';
import { auth } from '../better-auth';
import { FormState } from '@/types';

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

    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return data.user
      ? { message: 'Регистрация выполнена успешно', success: true }
      : { message: 'Не удалось зарегистрироваться', success: false };
  } catch (error) {
    return {
      message: 'Не удалось зарегистрироваться',
      success: false,
    };
  }
};
