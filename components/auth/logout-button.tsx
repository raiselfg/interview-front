'use client';

import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

import { APP_ROUTES } from '@/constants';
import { logout } from '@/lib/auth/actions/logout';

import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

export const LogoutButton = () => {
  const router = useRouter();
  const [state, action, pending] = useActionState(logout, undefined);

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success(state.message);
        router.push(APP_ROUTES.LOGIN);
      } else {
        toast.error(state.message);
      }
    }
  }, [state, router]);

  return (
    <form action={action}>
      <Button type="submit" disabled={pending}>
        {pending ? (
          <div className="flex items-center gap-2">
            <Spinner /> <p>Выход...</p>
          </div>
        ) : (
          <p>Выйти</p>
        )}
      </Button>
    </form>
  );
};
