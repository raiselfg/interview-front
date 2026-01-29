import Link from 'next/link';

import { OAuthButton } from '@/components/auth/oauth-button';
import { SignupForm } from '@/components/auth/signup-form';
import { APP_ROUTES } from '@/constants';

export default function SignupPage() {
  return (
    <div className="p-2 flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-2xl font-bold">Регистрация</h1>
      <div className="w-full max-w-xs flex flex-col gap-2">
        <SignupForm />
        <OAuthButton provider="github" />
      </div>
      <span className="flex gap-1 items-center text-sm text-muted-foreground mt-2">
        <p>Уже есть аккаунт?</p>
        <p className="underline underline-offset-4">
          <Link href={APP_ROUTES.LOGIN}>Войти</Link>
        </p>
      </span>
    </div>
  );
}
