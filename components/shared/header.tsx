import Link from 'next/link';
import { ThemeToggle } from '../theme/theme-toggle';
import { Container } from '../ui/container';
import { ProfileBadge } from './profile-badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { APP_ROUTES } from '@/constants';

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
      <Container className="w-max p-4 border rounded-2xl backdrop-blur-md bg-background/80">
        <div className="flex items-center justify-center gap-8">
          <Link href={APP_ROUTES.ROOT} className="text-xl">
            Better Frontend
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link, index) => (
                <Tooltip key={`${index}-${link.href}`}>
                  <TooltipTrigger>
                    <Link href={link.href}>{link.label}</Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.tooltipMessage}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <ProfileBadge />
              </TooltipTrigger>
              <TooltipContent>
                <p>Перейти в профиль</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild suppressHydrationWarning>
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
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 items-start px-4">
                  {links.map((link, index) => (
                    <Link href={link.href} key={`${index}-${link.href}`}>
                      {link.label}
                    </Link>
                  ))}
                  <ProfileBadge />
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
