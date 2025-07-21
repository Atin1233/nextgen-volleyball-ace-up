import { Button } from '@/components/ui/button';

export const PricingSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-4">
            💰 Affordable Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Professional coaching that fits your budget
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Group Clinics Pricing */}
          <div className="bg-gradient-to-br from-volleyball-orange to-volleyball-orange-dark rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">
              Most Popular
            </div>
            
            <h3 className="font-poppins font-bold text-2xl mb-2">Group Clinics</h3>
            <p className="text-orange-100 mb-6">Weekly 90-minute group sessions</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-orange-100">Per session per child</span>
                <div className="text-right">
                  <div className="text-3xl font-bold">$10</div>
                </div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Bundle of 4 sessions</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$35</div>
                    <div className="text-sm text-orange-200">Save $5!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-lg">✓</span>
                <span>4+ kids per session</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">✓</span>
                <span>Structured curriculum</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">✓</span>
                <span>"Bring a friend" deal — $2 off for both kids</span>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('booking')}
              className="w-full bg-white text-volleyball-orange hover:bg-gray-100 font-semibold"
            >
              Book Group Session
            </Button>
          </div>

          {/* Private Sessions Pricing */}
          <div className="bg-gradient-to-br from-volleyball-blue to-volleyball-blue-dark rounded-2xl p-8 text-white relative overflow-hidden">
            <h3 className="font-poppins font-bold text-2xl mb-2">Private Sessions</h3>
            <p className="text-blue-100 mb-6">One-on-one or small group sessions</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-blue-100">60-minute session</span>
                <div className="text-3xl font-bold">$20</div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-blue-100">90-minute session</span>
                <div className="text-3xl font-bold">$25</div>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-lg">✓</span>
                <span>Personalized instruction</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">✓</span>
                <span>Customized skill development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">✓</span>
                <span>Flexible scheduling</span>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('booking')}
              className="w-full bg-white text-volleyball-blue hover:bg-gray-100 font-semibold"
            >
              Book Private Session
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-volleyball-navy mb-3">💳 Payment Options</h4>
            <p className="text-gray-600">
              We accept cash, Apple Pay, Venmo, Cash App, and Zelle for your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
