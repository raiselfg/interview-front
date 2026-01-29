'use client';

import { AlertCircle, RefreshCcw } from 'lucide-react';
import { startTransition } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-center text-3xl font-bold">
        Выберите технологию здесь или в списке слева
      </h2>
      <Card className="relative mx-auto w-full px-4 md:w-full h-60 md:h-89.5 flex flex-col items-center justify-center gap-4 bg-destructive/20">
        <AlertCircle size={64} className="text-destructive" />

        <div className="text-center space-y-1">
          <p className="text-lg font-medium">Ошибка загрузки технологий</p>
          <p className="text-sm text-muted-foreground">Не удалось получить данные</p>
        </div>
        <Button
          className="flex items-center gap-2 text-sm cursor-pointer"
          onClick={() => {
            startTransition(() => {
              reset();
            });
          }}
        >
          <RefreshCcw size={16} />
          Обновить
        </Button>
      </Card>
    </div>
  );
}
