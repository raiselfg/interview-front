import { Container } from '@/components/ui/container';
import { Suspense } from 'react';

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
          <Suspense fallback={<div className="h-64 animate-pulse bg-muted rounded" />}>
            {techSidebar}
          </Suspense>
        </aside>
        <main className="flex-1 w-full min-w-0">
          <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded" />}>
            {techQuestions}
          </Suspense>
        </main>
      </section>
    </Container>
  );
}
