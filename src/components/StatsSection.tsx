
export const StatsSection = () => {
  return (
    <section className="py-16 bg-volleyball-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-volleyball-orange px-4 py-2 rounded-full mb-4">
            <span className="text-2xl">🏐</span>
            <span className="text-white font-semibold">NextGen Volleyball</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-volleyball-navy mb-3">Expert Coaching</h3>
            <p className="text-gray-600">Professional training from experienced players who know how to develop young talent.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-volleyball-navy mb-3">Proven Results</h3>
            <p className="text-gray-600">Track record of helping kids improve their skills and build confidence on the court.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-volleyball-navy mb-3">Skill-Focused Training</h3>
            <p className="text-gray-600">Structured curriculum targeting specific volleyball fundamentals for rapid improvement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
