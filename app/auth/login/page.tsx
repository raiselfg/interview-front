import { LoginForm } from '@/components/auth/login-form';
import { OAuthButton } from '@/components/auth/oauth-button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="w-full max-w-sm flex flex-col gap-1">
        <LoginForm />
        <OAuthButton provider="github" />
      </div>
      <span className="flex gap-1 items-center text-sm text-muted-foreground">
        <p>Don&apos;t have an account?</p>
        <p className="underline underline-offset-4">
          <Link href="/auth/signup">Sign up</Link>
        </p>
      </span>
    </div>
  );
}
