'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative flex h-8 w-14 items-center rounded-full bg-muted/40 p-1 border border-border cursor-pointer"
      aria-label="Toggle theme"
    >
      <div className="flex w-full items-center justify-between px-1 text-muted-foreground/50">
        <Sun className="h-3.5 w-3.5" />
        <Moon className="h-3.5 w-3.5" />
      </div>

      <div className="absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-md dark:translate-x-6">
        <Sun className="h-4 w-4 text-amber-400 dark:rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 text-cyan-400 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>

      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
