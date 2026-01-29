import { memo } from 'react';

import { Badge } from '@/components/ui/badge';
import { GRADE_COLORS } from '@/constants';
import { cn } from '@/lib/utils';
import { Grade, Technology } from '@/types';

type QuestionHeaderProps = {
  text: string;
  technology: Technology;
  grade?: Grade;
};

export const QuestionHeader = memo(function QuestionHeader({
  text,
  technology,
  grade,
}: QuestionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary">{technology.name}</Badge>

        {grade && (
          <Badge variant="outline" className={cn(GRADE_COLORS.get(grade.name))}>
            {grade.name}
          </Badge>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold leading-tight">{text}</h1>
    </div>
  );
});
