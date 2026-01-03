import { getSession } from '@/lib/auth/actions/get-session';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { APP_ROUTES } from '@/constants';

export const ProfileBadge = async () => {
  const session = await getSession();

  return (
    <>
      {session?.user ? (
        <Link href={APP_ROUTES.PROFILE}>
          <div className="flex items-center gap-2">
            <p>{session.user.name}</p>
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </div>
        </Link>
      ) : (
        <Link href={APP_ROUTES.LOGIN}>
          <Button>Войти</Button>
        </Link>
      )}
    </>
  );
};
