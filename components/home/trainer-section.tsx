import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaJsSquare, FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import Link from 'next/link';
import { APP_ROUTES } from '@/constants';

const TECH_STACK = [
  { name: 'JavaScript', progress: 55, icon: <FaJsSquare size={32} /> },
  { name: 'React', progress: 70, icon: <FaReact size={32} /> },
  { name: 'TypeScript', progress: 35, icon: <BiLogoTypescript size={32} /> },
];

export function TrainerSection() {
  return (
    <section className="flex flex-col gap-6 lg:gap-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-center lg:text-left">
            Тренировка
          </h2>
          <p className="text-muted-foreground text-center lg:text-left">
            Выбери технологию для прокачки
          </p>
        </div>
        <Link href={APP_ROUTES.TRAINER}>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 cursor-pointer"
          >
            <p>Смотреть все</p> <ArrowRight />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto w-full max-w-2xl lg:max-w-full">
        {TECH_STACK.map((item, index) => (
          <div
            key={`tech-stack-${index}-${item.name}`}
            className="group p-8 border border-border rounded-3xl bg-accent/35 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <h3 className="text-xl font-bold">{item.name}</h3>
            </div>

            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
