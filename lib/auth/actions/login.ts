'use server';

import { LoginFormSchema, FormState } from '../definitions';
import { auth } from '../better-auth';

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
      ? { message: 'Sign in successful', success: true }
      : { message: 'Failed to sign in', success: false };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Failed to sign in',
      success: false,
    };
  }
};
