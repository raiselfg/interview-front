'use server';

import { SignupFormSchema, FormState } from '../definitions';
import { auth } from '../better-auth';

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
      ? { message: 'Sign up successful', success: true }
      : { message: 'Failed to sign up', success: false };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Failed to sign up',
      success: false,
    };
  }
};
