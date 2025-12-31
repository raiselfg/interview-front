'use client';

import { useActionState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { signUp } from '@/lib/auth/actions/signup';
import { Label } from '../ui/label';
import { Spinner } from '../ui/spinner';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@/constants';

export const SignupForm = () => {
  const router = useRouter();
  const [state, action, pending] = useActionState(signUp, undefined);

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success(state.message);
        router.push(APP_ROUTES.LOGIN);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" placeholder="Name" required />
        {state?.errors?.name && <p className="text-red-500">{state?.errors.name}</p>}
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
            <Spinner /> <p>Signing up</p>
          </div>
        ) : (
          <p>Sign up</p>
        )}
      </Button>
    </form>
  );
};
