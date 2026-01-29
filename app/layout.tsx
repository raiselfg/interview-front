import '@/app/globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://interview-front.vercel.app'),
  title: {
    default: 'Фронт Собес',
    template: '%s | Фронт Собес',
  },
  description: 'База знаний для подготовки к собеседованиям по Frontend разработке.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Фронт Собес',
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${montserrat.variable} min-h-screen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Toaster position="top-center" duration={3000} />
      </body>
    </html>
  );
}
