import { Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '../ui/code-block';
import { Spinner } from '../ui/spinner';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { EncryptedText } from '../ui/encrypted-text';

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
          <EncryptedText revealDelayMs={30} text="Тренируйся в паре с AI или реальным напарником" />
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
          <Button size="lg" className="rounded-2xl h-14 px-8 text-base flex gap-3 items-center">
            <Zap className="fill-current" /> <p>Начать с AI</p>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl h-14 px-8 text-base flex gap-3 items-center"
          >
            <Users /> <p>Найти напарника</p>
          </Button>
        </div>
      </div>

      <div className="relative bg-card border border-border rounded-3xl p-3 shadow-2xl w-xs lg:w-md xl:w-full mx-auto">
        <div className="space-y-3 font-mono text-sm text-muted-foreground">
          <p className="text-primary font-bold flex items-center gap-1">
            <Spinner /> Анализирую код...
          </p>
          <CodeBlock language="jsx" filename="example.jsx" code={code} />
        </div>
      </div>
    </div>
  );
}
