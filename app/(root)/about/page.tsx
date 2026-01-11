import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { APP_ROUTES } from '@/constants';
import { Metadata } from 'next';
import { BookOpen, CheckCircle2, Code2, Rocket, Trophy, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'О нас',
  description:
    'Помогаем разработчикам готовиться к собеседованиям. Бесплатная база вопросов и ответов.',
  openGraph: {
    title: 'О нас',
    description:
      'Помогаем разработчикам готовиться к собеседованиям. Бесплатная база вопросов и ответов.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-24 px-4 2xl:px-0">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
          Готовься к собеседованиям <br className="hidden md:block" />
          <span className="text-primary">профессионально</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Мы собрали структурированную базу знаний для Frontend-разработчиков. Никакой воды — только
          реальные вопросы, проверенные ответы и примеры кода.
        </p>
        <Link href={APP_ROUTES.QUESTIONS}>
          <Button size="lg" className="rounded-full px-8 text-lg h-12 w-full sm:w-auto">
            Начать подготовку
            <Rocket className="ml-2 size-4" />
          </Button>
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="p-6 flex flex-col gap-4 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-1 group"
          >
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats Section or Bottom CTA */}
      <div className="rounded-3xl bg-muted/50 p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Вклад в сообщество</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Этот проект полностью открыт. Вы можете предложить свои вопросы, исправлять ошибки или
          добавлять новые примеры кода через Pull Requests.
        </p>
        <Link href="https://github.com/raiselfg/interview-front" target="_blank">
          <Button variant="secondary" className="gap-2">
            <Code2 className="size-4" />
            Стать контрибьютором
          </Button>
        </Link>
      </div>
    </Container>
  );
}

const features = [
  {
    title: 'Структурировано',
    description:
      'Вопросы разбиты по технологиям и грейдам (Junior, Middle, Senior), чтобы вы учили только то, что нужно.',
    icon: <BookOpen className="size-6" />,
  },
  {
    title: 'Примеры кода',
    description:
      'Теория важна, но код важнее. Мы добавляем примеры реализации к каждому вопросу где это уместно.',
    icon: <Code2 className="size-6" />,
  },
  {
    title: 'Проверенные ответы',
    description:
      'Наши ответы проходят ревью опытных разработчиков, чтобы вы не заучивали устаревшую информацию.',
    icon: <CheckCircle2 className="size-6" />,
  },
  {
    title: 'Быстро и удобно',
    description:
      'Максимальная производительность благодаря современному стеку на Next.js. Никаких ожиданий загрузки.',
    icon: <Zap className="size-6" />,
  },
  {
    title: 'Сообщество',
    description:
      'Проект развивается силами сообщества. Каждый может внести свой вклад в развитие базы знаний.',
    icon: <Users className="size-6" />,
  },
  {
    title: 'Бесплатно',
    description:
      'Знания должны быть доступны всем. Весь контент и функционал платформы полностью бесплатны.',
    icon: <Trophy className="size-6" />,
  },
];
