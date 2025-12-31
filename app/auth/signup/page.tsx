import { OAuthButton } from '@/components/auth/oauth-button';
import { SignupForm } from '@/components/auth/signup-form';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Signup</h1>
      <div className="w-full max-w-sm flex flex-col gap-1">
        <SignupForm />
        <OAuthButton provider="github" />
      </div>
      <span className="flex gap-1 items-center text-sm text-muted-foreground">
        <p>Already have an account?</p>
        <p className="underline underline-offset-4">
          <Link href="/auth/login">Login</Link>
        </p>
      </span>
    </div>
  );
}
