import { getSession } from '@/lib/auth/actions/get-session';
import { LogoutButton } from '@/components/auth/logout-button';
import { redirect } from 'next/navigation';
import { APP_ROUTES } from '@/constants';

export default async function ProfilePage() {
  const session = await getSession();

  if (!session) {
    redirect(APP_ROUTES.LOGIN);
  }
  const user = session.user;
  return (
    <div>
      <p>Имя: {user.name}</p>
      <p>Почта: {user.email}</p>
      <LogoutButton />
    </div>
  );
}
