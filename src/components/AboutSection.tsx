
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-6">
              Why Choose NextGen Volleyball?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-volleyball-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-volleyball-navy mb-2">Skill-Focused Training</h3>
                  <p className="text-gray-600">Structured curriculum targeting specific volleyball fundamentals with clear progression paths.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-volleyball-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-volleyball-navy mb-2">Small Group Focus</h3>
                  <p className="text-gray-600">Maximum attention with optimal group sizes ensuring every child gets personalized coaching.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-volleyball-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-volleyball-navy mb-2">Fun Environment</h3>
                  <p className="text-gray-600">Building confidence and skills while having a blast on the court in a supportive atmosphere.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-volleyball-orange rounded-2xl p-8 text-white">
              <h3 className="font-poppins font-bold text-2xl mb-6">What We Focus On</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏐</div>
                  <div className="font-semibold">Serving</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="font-semibold">Passing</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">👐</div>
                  <div className="font-semibold">Setting</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💥</div>
                  <div className="font-semibold">Spiking</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="font-semibold">Blocking</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏃</div>
                  <div className="font-semibold">Conditioning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
