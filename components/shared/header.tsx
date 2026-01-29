import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { APP_ROUTES } from '@/constants';

import { ThemeToggle } from '../theme/theme-toggle';
import { Container } from '../ui/container';
import { ProfileBadge } from './profile-badge';

const links = [
  { href: APP_ROUTES.TRAINER, label: 'Тренировка', tooltipMessage: 'Перейти в тренировку' },
  { href: APP_ROUTES.INTERVIEW, label: 'Интервью', tooltipMessage: 'Перейти в интервью' },
  { href: APP_ROUTES.QUESTIONS, label: 'Вопросы', tooltipMessage: 'Перейти в вопросы' },
  { href: APP_ROUTES.PRICING, label: 'Цены', tooltipMessage: 'Перейти в цены' },
  { href: APP_ROUTES.ABOUT, label: 'О нас', tooltipMessage: 'Перейти в о нас' },
];

export const Header = () => {
  return (
    <header className="sticky top-2 z-1">
      <Container className="w-max p-4 border rounded-2xl backdrop-blur-md bg-background/50">
        <div className="flex items-center justify-center gap-8">
          <Link href={APP_ROUTES.ROOT}>
            <h1 className="text-xl">Фронт Собес</h1>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <Tooltip key={link.href}>
                  <TooltipTrigger asChild>
                    <Link href={link.href}>
                      <span className="cursor-pointer">{link.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.tooltipMessage}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Suspense fallback={<Skeleton className="w-25 h-9" />}>
                    <ProfileBadge />
                  </Suspense>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Перейти в профиль</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Переключить тему</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* mobile */}
          <div className="flex lg:hidden items-center gap-8">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetDescription className="sr-only" />
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 items-start px-4">
                  {links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                  <Suspense fallback={<Skeleton className="w-25 h-9" />}>
                    <ProfileBadge />
                  </Suspense>
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};
