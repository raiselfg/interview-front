import { LoginForm } from '@/components/auth/login-form';
import { OAuthButton } from '@/components/auth/oauth-button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-2xl font-bold">Вход</h1>
      <div className="w-full max-w-xs flex flex-col gap-2">
        <LoginForm />
        <OAuthButton provider="github" />
      </div>
      <span className="flex gap-1 items-center text-sm text-muted-foreground mt-2">
        <p>Еще нет аккаунта?</p>
        <p className="underline underline-offset-4">
          <Link href="/auth/signup">Зарегистрироваться</Link>
        </p>
      </span>
    </div>
  );
}
