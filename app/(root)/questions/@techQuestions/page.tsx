import { API_BASE_URL, API_ROUTES } from '@/constants';
import { Technology } from '@/types';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default async function TechQuestionsPage() {
  const res = await fetch(`${API_BASE_URL}${API_ROUTES.TECHNOLOGIES}`, {
    next: { revalidate: 60 * 5 },
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Error fetching technologies');
  }

  const technologies: Technology[] = await res.json();

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-center text-3xl font-bold">
        Выберите технологию здесь или в списке слева
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((technology) => (
          <Link key={technology.id} href={`/questions/${technology.name}`} className="group">
            <div
              className={cn(
                'relative p-6 rounded-lg border border-border',
                'bg-card hover:bg-accent/50',
                'transition-all duration-200',
                'hover:border-primary/50 hover:shadow-lg',
                'cursor-pointer',
              )}
            >
              <div className="flex items-center justify-center min-h-[80px]">
                <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {technology.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
