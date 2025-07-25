
export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-volleyball-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl mb-4">
            📞 Get In Touch
          </h2>
          <p className="text-xl text-blue-100">
            Questions? We're here to help you get started on your volleyball journey!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coach Contacts */}
          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-semibold text-lg mb-3">Manav's Phone</h3>
            <a 
              href="tel:(732) 620-6531" 
              className="text-volleyball-orange hover:text-volleyball-orange-light transition-colors text-lg font-semibold"
            >
              (732) 620-6531
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-semibold text-lg mb-3">Akul's Phone</h3>
            <a 
              href="tel:(732) 770-0185" 
              className="text-volleyball-orange hover:text-volleyball-orange-light transition-colors text-lg font-semibold"
            >
              (732) 770-0185
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="font-semibold text-lg mb-3">Manav's Email</h3>
            <a 
              href="mailto:manavpatel0416@gmail.com" 
              className="text-volleyball-orange hover:text-volleyball-orange-light transition-colors font-semibold break-all"
            >
              manavpatel0416@gmail.com
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="font-semibold text-lg mb-3">Akul's Email</h3>
            <a 
              href="mailto:akul.gunda@gmail.com" 
              className="text-volleyball-orange hover:text-volleyball-orange-light transition-colors font-semibold break-all"
            >
              akul.gunda@gmail.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Location 1 - Veterans Park */}
          <div className="bg-white/10 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">📍</div>
              <h3 className="font-poppins font-bold text-2xl">Location 1</h3>
            </div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/d9869db1-42ab-4f55-a538-78c45d233b97.png" 
                alt="Beach Volleyball Courts at Veterans Park"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <p className="text-blue-100 mb-2">Veterans Park - Beach Volleyball Courts</p>
            <p className="text-blue-100">61 Avenue K, Monroe Township, NJ 08831</p>
          </div>

          {/* Location 2 - Half-Acre Park */}
          <div className="bg-white/10 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">📍</div>
              <h3 className="font-poppins font-bold text-2xl">Location 2</h3>
            </div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c490f0a4-f373-4ae6-8549-8fb6062ee7f3.png" 
                alt="Beach Volleyball Courts at Half-Acre Park"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <p className="text-blue-100 mb-2">Half-Acre Park - Beach Volleyball Courts</p>
            <p className="text-blue-100">6 Potomac Ave, Monroe Township, NJ 08831</p>
          </div>

          {/* Hours */}
          <div className="bg-white/10 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">🕒</div>
              <h3 className="font-poppins font-bold text-2xl">Hours</h3>
            </div>
            <div className="space-y-6 text-blue-100">
              <div>
                <div className="font-semibold text-volleyball-orange mb-2">Veterans Park:</div>
                <div className="text-sm space-y-1">
                  <div>Tuesdays: 8:00 AM - 9:30 AM</div>
                  <div>Fridays: 8:00 AM - 9:30 AM</div>
                  <div>Saturdays: 8:00 AM - 9:30 AM</div>
                  <div>Sundays: 8:00 AM - 9:30 AM</div>
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-volleyball-orange mb-2">Half Acre Park:</div>
                <div className="text-sm space-y-1">
                  <div>Monday - Sunday: 8:00 AM - 9:30 AM</div>
                  <div className="text-xs text-blue-300">(All 7 days available)</div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <div className="font-semibold text-volleyball-orange mb-2">Private Sessions:</div>
                <div className="text-sm text-blue-200">
                  Flexible scheduling available to accommodate your preferred times. Contact us to arrange sessions that work best for your schedule.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
