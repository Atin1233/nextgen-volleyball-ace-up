
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { AboutSection } from '@/components/AboutSection';
import { CoachesSection } from '@/components/CoachesSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BookingSection } from '@/components/BookingSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoachesSection />
      <ProgramsSection />
      <PricingSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
