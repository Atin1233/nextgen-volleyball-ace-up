import { Card, CardContent } from '@/components/ui/card';

export const GallerySection = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/a71c6059-346f-4bb3-8008-6f65d9fe7d19.png",
      alt: "Volleyball coaching session with kids learning fundamentals"
    },
    {
      src: "/lovable-uploads/1d351fc2-366f-4577-ae16-98b9b3e36aad.png",
      alt: "Beach volleyball training with students practicing serves"
    },
    {
      src: "/lovable-uploads/5dfd9cf0-d86b-4168-a0e4-accbc995ad2a.png",
      alt: "Coaches demonstrating volleyball techniques to young players"
    },
    {
      src: "/lovable-uploads/2e9fe1f6-d15c-4fee-b19e-11a4daee40b5.png",
      alt: "Volleyball coaching session showing proper spiking form"
    },
    {
      src: "/lovable-uploads/4b1619b2-5962-4191-9a6b-9d7984cfcc2c.png",
      alt: "Group photo of coaches and students after training session"
    },
    {
      src: "/lovable-uploads/89151c18-a354-4aea-8e5b-8a647ea96b6b.png",
      alt: "Volleyball training session with focus on team building"
    },
    {
      src: "/lovable-uploads/21e080b1-87c0-4f24-9563-5dc87800a6c0.png",
      alt: "Athletes practicing volleyball movement drills on sand court"
    },
    {
      src: "/lovable-uploads/c5bf5e17-1322-4cdd-9615-90a89ee71b0b.png",
      alt: "Group volleyball training session with multiple students"
    },
    {
      src: "/lovable-uploads/c17e6284-c376-4823-af4f-6dd1e1d678f5.png",
      alt: "Dynamic volleyball spike training with coach and student"
    },
    {
      src: "/lovable-uploads/fafd53c3-3364-46c8-8cef-21a80c807175.png",
      alt: "Large group of volleyball students and coaches on beach court"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-volleyball-navy mb-4">
            📸 Past Sessions Gallery
          </h2>
          <p className="text-xl text-gray-600">
            See our coaches and students in action during training sessions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-sm">
            <h4 className="font-semibold text-volleyball-navy mb-3">🏐 Join Our Training Sessions</h4>
            <p className="text-gray-600">
              Experience the same high-quality coaching and fun atmosphere shown in these photos. 
              Book your session today and become part of our volleyball community!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};