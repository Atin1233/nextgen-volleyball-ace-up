
export const CoachesSection = () => {
  return (
    <section id="coaches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-4">
            🏐 Meet Your Coaches
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High performing varsity players dedicated to developing the next generation of volleyball players
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Coach Manav */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-32 h-32 bg-volleyball-orange rounded-full mx-auto mb-6 overflow-hidden">
              <img 
                src="/lovable-uploads/089690e0-5c3a-41f4-88ff-927846d7c7b5.png" 
                alt="Coach Manav"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-volleyball-navy mb-2">Coach Manav</h3>
            <div className="text-volleyball-orange font-semibold mb-4">High performing varsity player • 5+ years playing experience</div>
            <p className="text-gray-600 leading-relaxed">
              Specializes in fundamental skill development and making volleyball fun for beginners. 
              Manav's patient approach helps young players build confidence while mastering the basics.
            </p>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Contact</div>
              <div className="text-volleyball-navy font-semibold">manavpatel0416@gmail.com</div>
              <div className="text-volleyball-navy font-semibold">(732) 620-6531</div>
            </div>
          </div>

          {/* Coach Akul */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-32 h-32 bg-volleyball-blue rounded-full mx-auto mb-6 overflow-hidden">
              <img 
                src="/lovable-uploads/3d4c260d-0363400d-b6d7-c09e87af22a9.png" 
                alt="Coach Akul"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-volleyball-navy mb-2">Coach Akul</h3>
            <div className="text-volleyball-blue font-semibold mb-4">High performing varsity player • 4+ years playing experience</div>
            <p className="text-gray-600 leading-relaxed">
              Focuses on technique refinement and building confidence in young players. 
              Akul's technical expertise helps players develop proper form and advanced skills.
            </p>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Contact</div>
              <div className="text-volleyball-navy font-semibold">akul.gunda@gmail.com</div>
              <div className="text-volleyball-navy font-semibold">(732) 770-0185</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
