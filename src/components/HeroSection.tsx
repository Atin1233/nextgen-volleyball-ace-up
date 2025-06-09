
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-volleyball-blue to-volleyball-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-volleyball-orange"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-volleyball-orange animate-bounce-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Elite Volleyball
            <span className="block text-volleyball-orange">Fundamentals</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elite coaching for kids ages 7-14. Small groups, personalized attention, 
            and rapid skill development in a fun, supportive environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('booking')}
              size="lg"
              className="bg-volleyball-orange hover:bg-volleyball-orange-dark text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Start Training Today
            </Button>
            <Button 
              onClick={() => scrollToSection('programs')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-volleyball-blue hover:bg-white hover:text-volleyball-navy px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200"
            >
              View Programs
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-volleyball-orange mb-2">50+</div>
              <div className="text-blue-100 font-medium">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-volleyball-orange mb-2">9+</div>
              <div className="text-blue-100 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-volleyball-orange mb-2">⭐⭐⭐⭐⭐</div>
              <div className="text-blue-100 font-medium">5-Star Rated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>
  );
};
