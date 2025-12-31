'use client';

import { useActionState, useEffect } from 'react';
import { logout } from '@/lib/auth/actions/logout';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@/constants';

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
  }, [state]);

  return (
    <form action={action}>
      <Button type="submit" disabled={pending}>
        {pending ? (
          <div className="flex items-center gap-2">
            <Spinner /> <p>Logging out</p>
          </div>
        ) : (
          <p>Logout</p>
        )}
      </Button>
    </form>
  );
};
