import { CTASection } from '@/components/home/cta-section';
import { HeroSection } from '@/components/home/hero-section';
import { TrainerSection } from '@/components/home/trainer-section';
import { Header } from '@/components/shared/header';
import { Container } from '@/components/ui/container';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container className="flex flex-col gap-12 lg:mt-24 p-4 lg:p-3 2xl:p-0">
          <HeroSection />
          <TrainerSection />
          <CTASection />
        </Container>
      </main>
    </>
  );
}
