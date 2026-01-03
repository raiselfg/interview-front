'use client';

import { toast } from 'sonner';
import { Button } from '../ui/button';
import { authClient } from '@/lib/auth/better-auth-client'; // Use authClient instead
import { APP_ROUTES } from '@/constants';

interface Props {
  provider: string;
}

export const OAuthButton = ({ provider }: Props) => {
  const handleLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider,
        callbackURL: APP_ROUTES.PROFILE,
      });

      if (error) {
        toast.error('Не удалось войти');
        return;
      }

      toast.success('Перенаправление на вход...');
      // The redirect happens automatically
    } catch (error) {
      console.error('OAuth login error:', error);
      toast.error('Не удалось войти');
    }
  };

  const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);

  return (
    <Button className="w-full" onClick={handleLogin}>
      Вход с помощью {providerName}
    </Button>
  );
};
