import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

import { Card } from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';
import { CODE_BLOCK_LANGUAGES } from '@/constants';
import { Answer, Technology } from '@/types';

type AnswerDetailsProps = {
  answer?: Answer;
  technology: Technology;
};

export const AnswerDetails = memo(function AnswerDetails({
  answer,
  technology,
}: AnswerDetailsProps) {
  if (!answer) return null;

  const { text, code, resourceLink, updatedAt } = answer;

  return (
    <>
      {text && (
        <Card className="p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground text-center md:text-left">
            Краткий ответ
          </h3>

          <p className="text-base leading-7">{text}</p>
        </Card>
      )}

      {code && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-center md:text-left">Пример кода</h2>

          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <CodeBlock code={code} language={CODE_BLOCK_LANGUAGES.get(technology.name) || ''} />
          </div>
        </section>
      )}

      {resourceLink && (
        <section className="pt-4 border-t border-border flex items-center justify-between gap-4 flex-wrap">
          <Link
            className="text-primary hover:underline text-sm flex items-center gap-1.5 w-fit"
            href={resourceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="size-4" />
            Узнать больше
          </Link>

          {updatedAt && (
            <span className="text-sm text-muted-foreground">
              Обновлено:{' '}
              {new Date(updatedAt).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </section>
      )}
    </>
  );
});
