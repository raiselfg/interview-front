'use client';

import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

import { APP_ROUTES } from '@/constants';
import { signUp } from '@/lib/auth/actions/signup';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Spinner } from '../ui/spinner';

export const SignupForm = () => {
  const router = useRouter();
  const [state, action, pending] = useActionState(signUp, undefined);

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success(state.message);
        router.push(APP_ROUTES.PROFILE);
      } else {
        toast.error(state.message);
      }
    }
  }, [state, router]);

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Имя</Label>
        <Input type="text" id="name" name="name" placeholder="Дмитрий" required />
        {state?.errors?.name && (
          <p className="text-red-500">Имя должно: {state?.errors.name.join(', ')}</p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Почта</Label>
        <Input type="email" id="email" name="email" placeholder="example@gmail.com" required />
        {state?.errors?.email && (
          <p className="text-red-500">Почта должна: {state?.errors.email.join(', ')}</p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Пароль</Label>
        <Input type="password" id="password" name="password" placeholder="***" required />
        {state?.errors?.password && (
          <p className="text-red-500">Пароль должен: {state?.errors.password.join(', ')}</p>
        )}
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? (
          <div className="flex items-center gap-2">
            <Spinner /> <p>Регистрация...</p>
          </div>
        ) : (
          <p>Зарегистрироваться</p>
        )}
      </Button>
    </form>
  );
};
