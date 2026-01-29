import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AnswerDetails } from '@/components/question/answer-details';
import { QuestionHeader } from '@/components/question/question-header';
import { Container } from '@/components/ui/container';
import { API_BASE_URL, API_ROUTES } from '@/constants';
import { QuestionWithData } from '@/types';

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

  return (
    <Container className="flex flex-col gap-6 md:gap-10 my-4 md:my-8 p-4 2xl:p-0">
      <QuestionHeader
        text={question.question.text}
        technology={question.technology}
        grade={question.grade}
      />

      <AnswerDetails answer={question.answer} technology={question.technology} />
    </Container>
  );
}
