import Link from 'next/link';
import { ThemeToggle } from '../theme/theme-toggle';
import { Container } from '../ui/container';
import { ProfileBadge } from './profile-badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const links = [
  { href: '/trainer', label: 'Тренировка', tooltipMessage: 'Перейти в тренировку' },
  { href: '/interview', label: 'Интервью', tooltipMessage: 'Перейти в интервью' },
  { href: '/questions', label: 'Вопросы', tooltipMessage: 'Перейти в вопросы' },
  { href: '/pricing', label: 'Цены', tooltipMessage: 'Перейти в цены' },
  { href: '/about', label: 'О нас', tooltipMessage: 'Перейти в о нас' },
];

export const Header = () => {
  return (
    <header className="sticky top-2 z-1">
      <Container className="w-max p-4 border rounded-2xl backdrop-blur-md bg-background/80">
        <div className="flex items-center justify-center gap-12">
          <Link href="/" className="hover:underline underline-offset-4 text-xl">
            Better Frontend
          </Link>
          {links.map((link, index) => (
            <Tooltip key={`${index}-${link.href}`}>
              <TooltipTrigger>
                <Link href={link.href} className="hover:underline underline-offset-4">
                  {link.label}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.tooltipMessage}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <ProfileBadge />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
