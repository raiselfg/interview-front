import { getSession } from '@/lib/auth/actions/get-session';
import { LogoutButton } from '@/components/auth/logout-button';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getSession();

  if (!session) {
    redirect('/auth/login');
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
