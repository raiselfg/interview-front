'use client';

import { useActionState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { login } from '@/lib/auth/actions/login';
import { Label } from '../ui/label';
import { Spinner } from '../ui/spinner';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@/constants';

export const LoginForm = () => {
  const router = useRouter();
  const [state, action, pending] = useActionState(login, undefined);

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success(state.message);
        router.push(APP_ROUTES.PROFILE);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <form action={action} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" placeholder="Email" required />
        {state?.errors?.email && <p className="text-red-500">{state?.errors.email}</p>}
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" placeholder="Password" required />
        {state?.errors?.password && <p className="text-red-500">{state?.errors.password}</p>}
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? (
          <div className="flex items-center gap-2">
            <Spinner /> <p>Logging in</p>
          </div>
        ) : (
          <p>Login</p>
        )}
      </Button>
    </form>
  );
};
