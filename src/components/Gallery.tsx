
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/d51f2a0c-1d0d-446d-bda5-97a0e08cafa0.png",
    title: {
      en: "Award Ceremony",
      am: "Մրցանակաբաշխություն"
    },
    description: {
      en: "Participants receiving awards at the robotics competition",
      am: "Մասնակիցները ստանում են մրցանակներ ռոբոտաշինության մրցույթում"
    },
  },
  {
    id: 2,
    src: "/lovable-uploads/cf750430-bbd7-4dd7-b8f2-c36bede21622.png",
    title: {
      en: "URC Presentation",
      am: "URC ներկայացում"
    },
    description: {
      en: "Universal Robotics Challenge official presentation",
      am: "Universal Robotics Challenge պաշտոնական ներկայացում"
    },
  },
  {
    id: 3,
    src: "/lovable-uploads/774b00b7-f4e9-4ec1-937a-a0bcedda4d7b.png",
    title: {
      en: "Team Photo",
      am: "Թիմային լուսանկար"
    },
    description: {
      en: "Armenian team with their robot creations",
      am: "Հայկական թիմը իրենց ռոբոտների հետ"
    },
  },
  {
    id: 4,
    src: "https://placehold.co/600x400/1E88E5/FFFFFF?text=Robot+Competition",
    title: {
      en: "Robot Competition",
      am: "Ռոբոտների մրցույթ"
    },
    description: {
      en: "Competitive event showcasing innovative robots",
      am: "Մրցութային միջոցառում, որտեղ ցուցադրվում են նորարարական ռոբոտներ"
    },
  },
  {
    id: 5,
    src: "https://placehold.co/600x400/0D47A1/FFFFFF?text=Robotics+Workshop",
    title: {
      en: "Robotics Workshop",
      am: "Ռոբոտաշինության աշխատարան"
    },
    description: {
      en: "Educational workshop for robotics enthusiasts",
      am: "Կրթական աշխատարան ռոբոտաշինության սիրահարների համար"
    },
  },
  {
    id: 6,
    src: "https://placehold.co/600x400/FFC107/000000?text=Innovation",
    title: {
      en: "Innovation Corner",
      am: "Նորարարության անկյուն"
    },
    description: {
      en: "Showcasing the latest in robotics technology",
      am: "Ռոբոտաշինության վերջին տեխնոլոգիաների ցուցադրում"
    },
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { language } = useLanguage();
  
  // Close modal when pressing escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const galleryText = {
    title: {
      en: "Gallery",
      am: "Պատկերասրահ"
    },
    description: {
      en: "Explore moments from our previous robotics events and competitions",
      am: "Բացահայտեք պահեր մեր նախորդ ռոբոտաշինության միջոցառումներից և մրցույթներից"
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-arc-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">{galleryText.title[language]}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {galleryText.description[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-xl shadow-lg hover-scale cursor-pointer bg-white"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title[language]} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-arc-darkblue mb-1">{image.title[language]}</h3>
                <p className="text-gray-600 text-sm">{image.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-2">
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-full bg-arc-darkblue text-white hover:bg-arc-blue transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 pb-6">
              {galleryImages
                .filter(img => img.id === selectedImage)
                .map(image => (
                  <div key={image.id}>
                    <img 
                      src={image.src} 
                      alt={image.title[language]} 
                      className="w-full h-auto max-h-[60vh] object-contain mb-4"
                    />
                    <h3 className="text-2xl font-bold text-arc-darkblue mb-2">{image.title[language]}</h3>
                    <p className="text-gray-700">{image.description[language]}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
