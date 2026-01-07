import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { API_BASE_URL, API_ROUTES, APP_ROUTES } from '@/constants';
import { Technology } from '@/types';
import Link from 'next/link';

export async function TechnologiesSidebar() {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ROUTES.TECHNOLOGIES}`, {
      next: { revalidate: 3600 },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const technologies: Technology[] = await res.json();

    return (
      <ScrollArea className="w-full">
        <div className="flex flex-col gap-2 w-full">
          {technologies.map((technology, index) => (
            <Link
              key={`${index}-${technology.name}`}
              href={`${APP_ROUTES.QUESTIONS}/${technology.name}`}
            >
              <Button variant={'ghost'}>{technology.name}</Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading technologies</div>;
  }
}
