
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/c58ece9b-c3bb-4816-bfe4-4a075c297856.png" 
                alt="NextGen Volleyball Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-poppins font-bold text-xl text-volleyball-navy">
              NextGen Volleyball
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-volleyball-orange transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('coaches')}
              className="text-gray-700 hover:text-volleyball-orange transition-colors font-medium"
            >
              Coaches
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-volleyball-orange transition-colors font-medium"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-volleyball-orange transition-colors font-medium"
            >
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-volleyball-orange hover:bg-volleyball-orange-dark text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-volleyball-orange"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-volleyball-orange transition-colors font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('coaches')}
                className="text-left text-gray-700 hover:text-volleyball-orange transition-colors font-medium py-2"
              >
                Coaches
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-left text-gray-700 hover:text-volleyball-orange transition-colors font-medium py-2"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-volleyball-orange transition-colors font-medium py-2"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection('booking')}
                className="bg-volleyball-orange hover:bg-volleyball-orange-dark text-white w-full mt-2"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
