
export const Footer = () => {
  return (
    <footer className="bg-volleyball-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-volleyball-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🏐</span>
            </div>
            <span className="font-poppins font-bold text-2xl">NextGen Volleyball</span>
          </div>
          
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Elite volleyball coaching for kids ages 7-14. Building skills, confidence, 
            and a love for the game in Monroe Township, NJ.
          </p>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-blue-200 text-sm">
              © 2024 NextGen Volleyball. All rights reserved. | Monroe Township, NJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
