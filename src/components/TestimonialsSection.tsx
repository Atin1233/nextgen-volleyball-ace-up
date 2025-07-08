export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Both of your boys were amazing! So much patience and very kind! The kids enjoyed it most likely we will come tomorrow too!",
      author: "Sonia K. Saini", 
      role: "Parent of 10-year-old",
      rating: 5
    },
    {
      text: "The small group size means my son gets plenty of attention. He looks forward to volleyball every week!",
      author: "David K.",
      role: "Parent of 12-year-old", 
      rating: 5
    },
    {
      text: "The private sessions helped my shy daughter build confidence with personalized attention. Now she's ready to join the group clinics!",
      author: "Jennifer P.",
      role: "Parent of 8-year-old",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-4">
            ⭐ Parent Reviews
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from families who've experienced our coaching excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-semibold text-volleyball-navy">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
