import { User } from 'better-auth/types';
import Image from 'next/image';
import Link from 'next/link';

import { APP_ROUTES } from '@/constants';
import { getSession } from '@/lib/auth/actions/get-session';

import { Button } from '../ui/button';

export const ProfileBadge = async () => {
  const session = await getSession();
  const user: User = session?.user;

  return (
    <>
      {user ? (
        <Link href={APP_ROUTES.PROFILE}>
          <div className="flex items-center gap-2 w-max h-9 mx-auto">
            <p>{user.name}</p>
            {user.image && (
              <Image
                src={user.image}
                alt={user.name ?? 'User avatar'}
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
