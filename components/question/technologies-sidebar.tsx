'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { memo, useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { APP_ROUTES } from '@/constants';
import { Technology } from '@/types';

const TechnologyButton = memo(function TechnologyButton({
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
});

export function TechnologiesSidebar({ technologies }: { technologies: Technology[] }) {
  const params = useParams();
  const paramsTech = decodeURIComponent(String(params.technology || ''));
  const [isOpen, setIsOpen] = useState(false);

  if (!technologies?.length) {
    return <div className="text-sm text-muted-foreground">Технологии не найдены</div>;
  }

  const handleSheetClose = useCallback(() => setIsOpen(false), []);

  const buttonList = (
    <div className="flex flex-col gap-2.5">
      {technologies.map((tech) => (
        <TechnologyButton
          key={tech.id}
          tech={tech}
          isActive={paramsTech === tech.name}
          onClick={handleSheetClose}
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
