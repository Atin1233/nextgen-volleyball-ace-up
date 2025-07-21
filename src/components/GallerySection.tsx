import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    },
    {
      src: "/lovable-uploads/ac857ec5-63f1-45ad-86fc-a90d7495f110.png",
      alt: "Beach volleyball training session with advanced techniques"
    },
    {
      src: "/lovable-uploads/1aba6872-9f02-4e02-b96b-eaaa4243a218.png",
      alt: "Volleyball coaching with focus on court positioning"
    },
    {
      src: "/lovable-uploads/a5cd64da-cc06-4b92-83dc-c126f7093d95.png",
      alt: "Training session with emphasis on volleyball fundamentals"
    },
    {
      src: "/lovable-uploads/86e84788-691b-448a-8e2d-92b4859c38b0.png",
      alt: "Beach volleyball practice with multiple court activities"
    },
    {
      src: "/lovable-uploads/e6f42815-d4f6-4a9f-a5ed-017603f43853.png",
      alt: "Volleyball team training with net practice"
    },
    {
      src: "/lovable-uploads/124478de-643d-4a42-969f-02a8cba78875.png",
      alt: "Action shot of volleyball gameplay during training"
    }
  ];

  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-poppins font-bold text-3xl text-volleyball-navy mb-3">
            📸 Past Sessions Gallery
          </h2>
          <p className="text-lg text-gray-600">
            See our coaches and students in action during training sessions
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div className="text-center mt-8">
          <div className="bg-white rounded-lg p-4 max-w-xl mx-auto shadow-sm">
            <p className="text-gray-600 text-sm">
              🏐 Experience the same high-quality coaching shown in these photos. Book your session today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};