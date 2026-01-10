import { Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '../ui/code-block';
import { Spinner } from '../ui/spinner';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { EncryptedText } from '../ui/encrypted-text';
import { Card, CardContent, CardHeader } from '../ui/card';

const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <TextGenerateEffect
          filter
          className="text-5xl lg:text-7xl font-bold text-center lg:text-left"
          words="Улучши свою фронтенд карьеру"
        />

        <p className="text-lg text-muted-foreground text-center lg:text-left">
          <EncryptedText revealDelayMs={22} text="Тренируйся в паре с AI или реальным напарником" />
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

      <Card className="p-2 w-full max-w-2xl mx-auto">
        <div className="flex items-center gap-2">
          <Spinner /> <p>Анализирую код...</p>
        </div>
        <CodeBlock language="tsx" code={code} />
      </Card>
    </div>
  );
}
