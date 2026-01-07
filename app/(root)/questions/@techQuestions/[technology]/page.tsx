import { API_BASE_URL, API_ROUTES } from '@/constants';
import { Answer, Question } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default async function TechQuestionsPage({
  params,
}: {
  params: Promise<{ technology: string }>;
}) {
  try {
    const { technology } = await params;

    if (!technology) {
      return <div>No technology provided</div>;
    }

    const fetchQuestions = await fetch(
      `${API_BASE_URL}${API_ROUTES.QUESTIONS}?technology=${technology}`,
      {
        method: 'GET',
        next: { revalidate: 3600 },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const fetchAnswers = await fetch(
      `${API_BASE_URL}${API_ROUTES.ANSWERS}?technology=${technology}`,
      {
        method: 'GET',
        next: { revalidate: 3600 },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const [resQuestions, resAnswers] = await Promise.all([fetchQuestions, fetchAnswers]);

    if (!resQuestions.ok || !resAnswers.ok) {
      return <div>Error fetching questions or answers</div>;
    }

    const questions: Question[] = await resQuestions.json();
    const answers: Answer[] = await resAnswers.json();

    return (
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-3xl font-bold">{decodeURIComponent(technology)}</h2>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, index) => {
            const answer = answers.find((ans) => ans.questionId === question.id);
            return (
              <div key={`${question.text}-${index}`}>
                <AccordionItem value={question.id}>
                  <AccordionTrigger>
                    <div className="space-x-2 text-lg text-left">
                      <span>{index + 1}. </span>
                      <span>{question.text}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    {answer?.text || 'Ответ не найден'}
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error fetching questions</div>;
  }
}

// todo полностью починить parallel роуты и добавить полное отображение ответов на вопросы с кодом
