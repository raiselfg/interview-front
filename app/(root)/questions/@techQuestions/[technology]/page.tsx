import { API_BASE_URL, API_ROUTES, CODE_BLOCK_LANGUAGES, GRADE_COLORS } from '@/constants';
import { Answer, Grade, Question } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CodeBlock } from '@/components/ui/code-block';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default async function TechQuestionsPage({
  params,
}: {
  params: Promise<{ technology: string }>;
}) {
  const { technology } = await params;
  const paramsTech = decodeURIComponent(String(technology));

  if (!technology) {
    return <p>No technology provided</p>;
  }

  const fetchQuestions = await fetch(
    `${API_BASE_URL}${API_ROUTES.QUESTIONS}?technology=${technology}`,
    {
      method: 'GET',
      next: { revalidate: 60 * 5 },
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const fetchAnswers = await fetch(
    `${API_BASE_URL}${API_ROUTES.ANSWERS}?technology=${technology}`,
    {
      method: 'GET',
      next: { revalidate: 60 * 5 },
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const fetchGrades = await fetch(`${API_BASE_URL}${API_ROUTES.GRADES}`, {
    method: 'GET',
    next: { revalidate: 60 * 5 },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const [resQuestions, resAnswers, resGrades] = await Promise.all([
    fetchQuestions,
    fetchAnswers,
    fetchGrades,
  ]);

  const questions: Question[] = await resQuestions.json();
  const answers: Answer[] = await resAnswers.json();
  const grades: Grade[] = await resGrades.json();

  return (
    <Suspense
      fallback={
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl font-bold text-center md:text-left">{paramsTech}</h2>
          <div className="flex flex-col gap-2.5">
            {Array.from({ length: 12 }).map((_, index) => (
              <Skeleton key={index} className="h-15" />
            ))}
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-3xl font-bold text-center md:text-left">{paramsTech}</h2>

        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, index) => {
            const answer = answers.find((ans) => ans.questionId === question.id);
            const grade = grades.find((g) => g.id === question?.gradeId);

            return (
              <AccordionItem key={question.id} value={question.id}>
                <AccordionTrigger
                  className="hover:bg-accent/50 rounded-lg px-4"
                  aria-label={`Вопрос ${index + 1}: ${question.text}`}
                >
                  <div className="flex items-start gap-3 w-full text-left text-md md:text-lg">
                    <span className="text-muted-foreground min-w-8 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium  flex-1">{question.text}</span>
                    {grade && (
                      <Badge
                        variant="outline"
                        className={cn('shrink-0', GRADE_COLORS.get(grade.name))}
                      >
                        {grade.name}
                      </Badge>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  {!answer ? (
                    <div>Ответ не найден</div>
                  ) : (
                    <div className="space-y-6">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-base leading-7">{answer?.text || 'Ответ не найден'}</p>
                      </div>

                      {answer?.code && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            Пример кода
                          </h4>
                          <div className="rounded-lg border border-border bg-muted/30 p-4">
                            <CodeBlock
                              code={answer.code}
                              language={CODE_BLOCK_LANGUAGES.get(paramsTech) || ''}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-border">
                        {answer?.resourceLink && (
                          <Link
                            className="text-primary hover:underline text-sm flex items-center gap-1.5 w-fit"
                            href={answer.resourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="size-4" />
                            Узнать больше
                          </Link>
                        )}
                      </div>

                      {answer?.updatedAt && (
                        <div className="text-sm text-muted-foreground">
                          Обновлено:{' '}
                          {new Date(answer.updatedAt).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </Suspense>
  );
}
