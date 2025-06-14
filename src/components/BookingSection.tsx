
export const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-4">
            📅 Book Now
          </h2>
          <p className="text-xl text-gray-600">
            Ready to take your volleyball skills to the next level? Let's get started!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-volleyball-orange to-volleyball-orange-dark text-white p-6">
            <h3 className="text-2xl font-poppins text-center font-semibold">Start Your Journey</h3>
          </div>
          
          <div className="p-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeINweY3-UtOadcLXcs7zyNVknX0scjswNJySFwvljAegQNVg/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
