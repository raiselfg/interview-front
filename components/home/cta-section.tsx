import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { APP_ROUTES } from '@/constants';
import { Card } from '../ui/card';

const features = [
  { name: 'Увеличенные возможности AI' },
  { name: 'Лучшие тренировки' },
  { name: 'Персональная аналитика' },
];

export function CTASection() {
  return (
    <div className="flex flex-col gap-12 items-center">
      <Card className="w-full max-w-2xl lg:max-w-full grid grid-cols-1 md:grid-cols-2 p-8 lg:p-12 text-center md:text-left gap-8 items-center">
        <div className="mx-auto flex flex-col items-center md:items-start gap-6">
          <h2 className="text-4xl font-bold">Готов стать лучше?</h2>
          <p className="text-muted-foreground text-lg max-w-sm">
            Получи доступ к расширенным возможностям.
          </p>
          <Link href={APP_ROUTES.PRICING}>
            <Button size="lg" className="rounded-xl cursor-pointer">
              Узнать цены
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <div
              key={`${feature.name}-${index}`}
              className="flex items-center gap-3 p-4 bg-background border border-border rounded-2xl"
            >
              <Check className="h-4 w-4 text-primary" />
              <span className="font-medium">{feature.name}</span>
            </div>
          ))}
        </div>
      </Card>

      <span className="text-muted-foreground">made by @raiselfg</span>
    </div>
  );
}
