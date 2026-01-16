import { API_BASE_URL, API_ROUTES, CODE_BLOCK_LANGUAGES, GRADE_COLORS } from '@/constants';
import { QuestionWithData } from '@/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { CodeBlock } from '@/components/ui/code-block';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const response = await fetch(`${API_BASE_URL}${API_ROUTES.QUESTIONS}/${id}`, {
    next: { revalidate: 1800 },
  });

  if (!response.ok) return { title: 'Вопрос не найден' };

  const question: QuestionWithData = await response.json();

  return {
    title: `${question.question.text} | ${question.technology.name}`,
    description:
      question.answer?.text ||
      `Подробный ответ на вопрос "${question.question.text}" по технологии ${question.technology.name}`,
  };
}

export default async function QuestionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`${API_BASE_URL}${API_ROUTES.QUESTIONS}/${id}`, {
    next: { revalidate: 1800 },
  });

  if (!response.ok) notFound();

  const question: QuestionWithData = await response.json();

  const grade = question.grade;
  const tech = question.technology;
  const answer = question.answer;

  return (
    <Container className="flex flex-col gap-6 md:gap-10 my-4 md:my-8 p-4 2xl:p-0">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">{tech.name}</Badge>

          {grade && (
            <Badge variant="outline" className={cn(GRADE_COLORS.get(grade.name))}>
              {grade.name}
            </Badge>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{question.question.text}</h1>
      </div>

      {answer?.text && (
        <Card className="p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground text-center md:text-left">
            Краткий ответ
          </h3>

          <p className="text-base leading-7">{answer.text}</p>
        </Card>
      )}

      {answer?.code && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-center md:text-left">Пример кода</h2>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <CodeBlock code={answer.code} language={CODE_BLOCK_LANGUAGES.get(tech.name) || ''} />
          </div>
        </section>
      )}

      {answer?.resourceLink && (
        <section className="pt-4 border-t border-border flex items-center justify-between gap-4 flex-wrap">
          <Link
            className="text-primary hover:underline text-sm flex items-center gap-1.5 w-fit"
            href={answer.resourceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="size-4" />
            Узнать больше
          </Link>

          {answer?.updatedAt && (
            <span className="text-sm text-muted-foreground">
              Обновлено:{' '}
              {new Date(answer.updatedAt).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </section>
      )}
    </Container>
  );
}
