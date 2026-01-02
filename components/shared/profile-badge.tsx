import { getSession } from '@/lib/auth/actions/get-session';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export const ProfileBadge = async () => {
  const session = await getSession();

  if (!session?.user) {
    return (
      <Link href="/auth/login">
        <Button>Войти</Button>
      </Link>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <Link href="/profile">
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
      </TooltipTrigger>
      <TooltipContent>
        <p>Перейти в профиль</p>
      </TooltipContent>
    </Tooltip>
  );
};
