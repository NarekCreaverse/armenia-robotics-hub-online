
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const galleryImages = [
  {
    id: 1,
    src: "https://placehold.co/600x400/1E88E5/FFFFFF?text=Robot+Competition+1",
    title: {
      en: "Robot Competition 2024",
      am: "Ռոբոտների մրցույթ 2024"
    },
    description: {
      en: "Teams showcasing their innovative robot designs",
      am: "Թիմերը ցուցադրում են իրենց նորարարական ռոբոտների դիզայնը"
    },
  },
  {
    id: 2,
    src: "https://placehold.co/600x400/0D47A1/FFFFFF?text=Workshop",
    title: {
      en: "Technical Workshop",
      am: "Տեխնիկական սեմինար"
    },
    description: {
      en: "Students learning advanced robotics techniques",
      am: "Ուսանողները սովորում են ռոբոտաշինության առաջադեմ տեխնիկա"
    },
  },
  {
    id: 3,
    src: "https://placehold.co/600x400/FFC107/000000?text=Awards+Ceremony",
    title: {
      en: "Awards Ceremony",
      am: "Մրցանակաբաշխություն"
    },
    description: {
      en: "Celebrating the achievements of all participants",
      am: "Նշելով բոլոր մասնակիցների ձեռքբերումները"
    },
  },
  {
    id: 4,
    src: "https://placehold.co/600x400/1E88E5/FFFFFF?text=Team+Building",
    title: {
      en: "Team Building",
      am: "Թիմային աշխատանք"
    },
    description: {
      en: "Collaborative activities to strengthen teamwork",
      am: "Համագործակցության միջոցառումներ՝ թիմային աշխատանքն ամրապնդելու համար"
    },
  },
  {
    id: 5,
    src: "https://placehold.co/600x400/0D47A1/FFFFFF?text=Robot+Testing",
    title: {
      en: "Robot Testing",
      am: "Ռոբոտների փորձարկում"
    },
    description: {
      en: "Final preparations before the competition",
      am: "Վերջնական նախապատրաստություններ մրցույթից առաջ"
    },
  },
  {
    id: 6,
    src: "https://placehold.co/600x400/FFC107/000000?text=Mentorship",
    title: {
      en: "Mentorship Program",
      am: "Մենթորության ծրագիր"
    },
    description: {
      en: "Professional engineers guiding young talents",
      am: "Պրոֆեսիոնալ ճարտարագետները ուղղորդում են երիտասարդ տաղանդներին"
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
