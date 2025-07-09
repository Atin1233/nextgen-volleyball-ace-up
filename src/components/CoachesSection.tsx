

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const CoachesSection = () => {
  const coaches = [
    {
      name: "Dhruv Santhosh",
      image: "/lovable-uploads/2cef1ccd-157d-4bb5-92cb-86120f38d04e.png",
      description: "Dedicated coach with extensive volleyball experience, bringing technical expertise and passion to help players reach their full potential."
    },
    {
      name: "Harsha Dhavala",
      image: "/lovable-uploads/6572e06e-97a8-4070-aedb-34dda4d001ae.png",
      description: "Experienced volleyball coach focused on skill development and building confidence in players of all levels."
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-4">
            🏐 Meet Your Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High performing varsity players who founded NextGen Volleyball and are dedicated to coaching the next generation of players
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
            <h3 className="font-poppins font-bold text-2xl text-volleyball-navy mb-2">Founder & Coach Manav</h3>
            <div className="text-volleyball-orange font-semibold mb-4">Co-Founder • High performing varsity player • 5+ years playing experience</div>
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
                src="/lovable-uploads/fb2b037f-97b5-4a7b-8100-4cafc2cdadc8.png" 
                alt="Coach Akul"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-volleyball-navy mb-2">Founder & Coach Akul</h3>
            <div className="text-volleyball-blue font-semibold mb-4">Co-Founder • High performing varsity player • 4+ years playing experience</div>
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

        {/* New Coaches Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-volleyball-navy mb-4">
              Meet Our Coaches
            </h2>
            <p className="text-lg text-gray-600">
              Experienced coaches joining our team to provide exceptional training
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {coaches.map((coach, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                      <div className="w-40 h-40 bg-volleyball-green rounded-full mx-auto mb-6 overflow-hidden">
                        <img 
                          src={coach.image}
                          alt={`Coach ${coach.name}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <h3 className="font-poppins font-bold text-2xl text-volleyball-navy mb-2">
                        Coach {coach.name}
                      </h3>
                      <div className="text-volleyball-green font-semibold mb-4">
                        Professional Coach
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {coach.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

