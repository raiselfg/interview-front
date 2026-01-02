import { z } from 'zod';

export const SignupFormSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов' }).trim(),
  email: z.email({ message: 'Пожалуйста, введите корректный email' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать не менее 8 символов' })
    .regex(/[a-zA-Z]/, { message: 'Пароль должен содержать хотя бы одну букву' })
    .regex(/[0-9]/, { message: 'Пароль должен содержать хотя бы одну цифру' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Пароль должен содержать хотя бы один специальный символ',
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.email({ message: 'Пожалуйста, введите корректный email' }),
  password: z.string().min(1, { message: 'Поле пароля не может быть пустым' }),
});
