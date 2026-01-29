import { Metadata } from 'next';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { API_BASE_URL, API_ROUTES } from '@/constants';
import { Technology } from '@/types';

export const metadata: Metadata = {
  title: 'Выберите технологию',
  description: 'Список доступных технологий для подготовки к собеседованию.',
};

export default async function TechQuestionsPage() {
  const res = await fetch(`${API_BASE_URL}${API_ROUTES.TECHNOLOGIES}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const technologies: Technology[] = await res.json();

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-center text-3xl font-bold">
        Выберите технологию здесь или в списке слева
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((technology) => (
          <Link key={technology.id} href={`/questions/${technology.name}`} className="group">
            <Card className="flex items-center justify-center h-30">{technology.name}</Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
