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
      toast.success('Redirecting to login...');
      router.push(url);
    } else {
      toast.error('Failed to login');
    }
  };
  return (
    <Button className="w-full" onClick={handleLogin}>
      <p>Login with {provider}</p>
    </Button>
  );
};
