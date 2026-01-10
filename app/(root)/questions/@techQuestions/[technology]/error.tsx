'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, RefreshCcw } from 'lucide-react';
import { startTransition } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Card className="relative mx-auto w-full px-4 md:w-full h-60 md:h-89.5 flex flex-col items-center justify-center gap-4 bg-destructive/20 text-center">
      <AlertCircle size={64} className="text-destructive font-bold" />

      <div className="space-y-1">
        <p className="text-lg font-medium">Ошибка загрузки ответов</p>
        <p className="text-sm text-muted-foreground">
          Не удалось получить данные. Попробуйте обновить сегмент.
        </p>
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
        Попробовать снова
      </Button>
    </Card>
  );
}
