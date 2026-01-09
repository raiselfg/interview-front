'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { APP_ROUTES } from '@/constants';
import { Technology } from '@/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useState } from 'react';

// Вынести общий компонент для кнопок
function TechnologyButton({
  tech,
  isActive,
  onClick,
}: {
  tech: Technology;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link href={`${APP_ROUTES.QUESTIONS}/${tech.name}`} onClick={onClick}>
      <Button variant={isActive ? 'default' : 'ghost'} className="w-full justify-start">
        {tech.name}
      </Button>
    </Link>
  );
}

export function TechnologiesSidebar({ technologies }: { technologies: Technology[] }) {
  const params = useParams();
  const paramsTech = decodeURIComponent(String(params.technology || ''));
  const [isOpen, setIsOpen] = useState(false);

  if (!technologies?.length) {
    return <div className="text-sm text-muted-foreground">Технологии не найдены</div>;
  }

  const buttonList = (
    <div className="flex flex-col gap-2.5">
      {technologies.map((tech) => (
        <TechnologyButton
          key={`${tech.order}-${tech.name}`}
          tech={tech}
          isActive={paramsTech === tech.name}
          onClick={() => setIsOpen(false)}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <ScrollArea className="hidden md:block">{buttonList}</ScrollArea>

      {/* Mobile */}
      <div className="block md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="w-full justify-center">{paramsTech || 'Выберите технологию'}</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Технологии</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2.5 px-4">{buttonList}</div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
