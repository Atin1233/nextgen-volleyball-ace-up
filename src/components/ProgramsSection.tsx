import { Button } from '@/components/ui/button';

export const ProgramsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-4">
            🎯 Training Programs
          </h2>
          <p className="text-xl text-gray-600">
            Flexible training options designed to meet every player's needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Group Clinics */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-volleyball-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">👥</span>
              </div>
              <h3 className="font-poppins font-bold text-2xl text-volleyball-navy mb-2">Group Clinics</h3>
              <p className="text-gray-600">Learn alongside peers in our structured group environment</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Duration</span>
                <span className="font-semibold text-volleyball-navy">90-minute focused sessions</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Group Size</span>
                <span className="font-semibold text-volleyball-navy">4+ kids per session</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-volleyball-navy mb-3">🎯 Daily Objectives:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-orange rounded-full"></span>
                  <span>Serving</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-orange rounded-full"></span>
                  <span>Passing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-orange rounded-full"></span>
                  <span>Setting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-orange rounded-full"></span>
                  <span>Hitting/Spiking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-orange rounded-full"></span>
                  <span>Blocking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-orange rounded-full"></span>
                  <span>Digging</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-orange rounded-full"></span>
                  <span>Conditioning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-orange rounded-full"></span>
                  <span>Team Play</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Each session includes warm-up, skill focus, game-like play, and cool-down with recap.
            </p>

            <Button 
              onClick={() => scrollToSection('pricing')}
              className="w-full bg-volleyball-orange hover:bg-volleyball-orange-dark text-white"
            >
              View Group Pricing
            </Button>
          </div>

          {/* Private Sessions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-volleyball-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">👤</span>
              </div>
              <h3 className="font-poppins font-bold text-2xl text-volleyball-navy mb-2">Private Sessions</h3>
              <p className="text-gray-600">One-on-one or small group sessions</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">60-minute session</span>
                <span className="font-semibold text-volleyball-navy">$20</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">90-minute session</span>
                <span className="font-semibold text-volleyball-navy">$25</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-volleyball-navy mb-3">Benefits:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-blue rounded-full"></span>
                  <span>Personalized instruction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-blue rounded-full"></span>
                  <span>Customized skill development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-blue rounded-full"></span>
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-volleyball-blue rounded-full"></span>
                  <span>Faster skill progression</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('booking')}
              variant="outline"
              className="w-full border-volleyball-blue text-volleyball-blue hover:bg-volleyball-blue hover:text-white"
            >
              Book Private Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
