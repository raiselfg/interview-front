import Link from 'next/link';
import { ThemeToggle } from '../theme/theme-toggle';
import { Container } from '../ui/container';

export const Header = () => {
  return (
    <header className="sticky top-2 z-1 mt-2">
      <Container className="w-max p-4 border rounded-2xl backdrop-blur-md bg-background/80">
        <div className="flex items-center justify-center gap-12">
          <Link href="/" className="hover:underline underline-offset-4">
            Better Frontend
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
