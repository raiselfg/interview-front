import { redirect } from 'next/navigation';

import { LogoutButton } from '@/components/auth/logout-button';
import { APP_ROUTES } from '@/constants';
import { getSession } from '@/lib/auth/actions/get-session';

export default async function ProfilePage() {
  const data = await getSession();

  if (!data) {
    redirect(APP_ROUTES.LOGIN);
  }
  const user = data.user;
  return (
    <div>
      <p>Имя: {user.name}</p>
      <p>Почта: {user.email}</p>
      <LogoutButton />
    </div>
  );
}
