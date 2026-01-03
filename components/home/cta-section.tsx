'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-32 text-foreground"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-border bg-card/50 rounded-[2.5rem] p-8 lg:p-12 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Готов к стать лучше?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-sm">
              Получи доступ к расширенным возможностям.
            </p>
            <Button size="lg" className="rounded-xl">
              Узнать цены
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {['Безлимит AI', 'Лучшие тренировки', 'Персональная аналитика'].map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 p-4 bg-background border border-border rounded-2xl"
              >
                <Check className="h-4 w-4 text-primary" />
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <p className="text-muted-foreground text-sm text-center mb-12">made by @raiselfg</p>
    </>
  );
}
