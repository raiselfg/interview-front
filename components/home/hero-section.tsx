import { Users, Zap } from 'lucide-react';
import { memo } from 'react';

import { Button } from '@/components/ui/button';

import { Card } from '../ui/card';
import { CodeBlock } from '../ui/code-block';
import { Spinner } from '../ui/spinner';

const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

const CodeExampleCard = memo(function CodeExampleCard() {
  return (
    <Card className="p-2 w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <Spinner /> <p>Анализирую код...</p>
      </div>
      <CodeBlock language="tsx" code={code} />
    </Card>
  );
});

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-5xl lg:text-7xl font-bold text-center lg:text-left">
          Улучши свою фронтенд карьеру
        </h2>

        <p className="text-lg text-muted-foreground text-center lg:text-left">
          Тренируйся в паре с AI или реальным напарником
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
          <Button
            size="lg"
            className="rounded-2xl h-14 px-8 text-base flex gap-3 items-center cursor-pointer"
          >
            <Zap className="fill-current" /> <p>Начать с AI</p>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl h-14 px-8 text-base flex gap-3 items-center cursor-pointer"
          >
            <Users /> <p>Найти напарника</p>
          </Button>
        </div>
      </div>

      <CodeExampleCard />
    </div>
  );
}
