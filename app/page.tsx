import { CTASection } from '@/components/home/cta-section';
import { HeroSection } from '@/components/home/hero-section';
import { TrainerSection } from '@/components/home/trainer-section';
import { Header } from '@/components/shared/header';
import { Container } from '@/components/ui/container';

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative">
        <Container className="mt-16 lg:mt-24">
          <HeroSection />
          <TrainerSection />
          <CTASection />
        </Container>
      </main>
    </>
  );
}
