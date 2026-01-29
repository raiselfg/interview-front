import { Suspense } from 'react';

import { Container } from '@/components/ui/container';
import { Skeleton } from '@/components/ui/skeleton';

export default function QuestionLayout({
  techSidebar,
  techQuestions,
}: {
  techSidebar: React.ReactNode;
  techQuestions: React.ReactNode;
}) {
  return (
    <Container className="py-4 px-2 lg:p-8 w-full">
      <section className="flex flex-col md:flex-row gap-4 md:gap-8">
        <aside className="md:sticky md:top-25 md:self-start md:w-48 shrink-0">
          <Suspense
            fallback={
              <div className="flex flex-col gap-2.5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton key={`${index}-sidebar`} className="h-9 w-48" />
                ))}
              </div>
            }
          >
            {techSidebar}
          </Suspense>
        </aside>
        <main className="flex-1 w-full min-w-0">
          <Suspense
            fallback={
              <div className="flex flex-col gap-8">
                <h2 className="text-center text-3xl font-bold">
                  Выберите технологию здесь или в списке слева
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton key={`${index}-questions`} className="h-32.25 w-80" />
                  ))}
                </div>
              </div>
            }
          >
            {techQuestions}
          </Suspense>
        </main>
      </section>
    </Container>
  );
}
