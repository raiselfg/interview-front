'use client';

import { getSession } from '@/lib/auth/actions/get-session';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { APP_ROUTES } from '@/constants';
import { User } from 'better-auth';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';

export const ProfileBadge = () => {
  const [user, setUser] = useState<Pick<User, 'name' | 'image'> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setUser(session?.user ?? null);
      setIsLoading(false);
    };
    fetchSession();
  }, []);

  if (isLoading) {
    return <Skeleton className="w-19.5 h-9" />;
  }

  return (
    <>
      {user ? (
        <Link href={APP_ROUTES.PROFILE}>
          <div className="flex items-center gap-2 w-19.5 h-9 mx-auto">
            <p>{user.name}</p>
            {user.image && (
              <Image
                src={user.image}
                alt={user.name}
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
