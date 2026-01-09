import { TechnologiesSidebar } from '@/components/questions/technologies-sidebar';
import { API_BASE_URL, API_ROUTES } from '@/constants';
import { Technology } from '@/types';

export default async function Default() {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ROUTES.TECHNOLOGIES}`, {
      next: { revalidate: 3600 },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Error fetching technologies');
    }

    const technologies: Technology[] = await res.json();

    return <TechnologiesSidebar technologies={technologies} />;
  } catch (error) {
    console.error('Error fetching technologies:', error);
    return <div>Error fetching technologies</div>;
  }
}
