'use client';

import { toast } from 'sonner';
import { Button } from '../ui/button';
import { oauthLogin } from '@/lib/auth/actions/oauth-login';
import { useRouter } from 'next/navigation';

interface Props {
  provider: string;
}

export const OAuthButton = ({ provider }: Props) => {
  const router = useRouter();
  const handleLogin = async () => {
    const url = await oauthLogin(provider);
    if (url) {
      toast.success('Перенаправление на вход...');
      router.push(url);
    } else {
      toast.error('Не удалось войти');
    }
  };
  const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);
  return (
    <Button className="w-full" onClick={handleLogin}>
      <p>Вход с помощью {providerName}</p>
    </Button>
  );
};
