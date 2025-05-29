
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="pt-20 pb-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <img 
              src="/lovable-uploads/6e006fc7-b935-4c65-be9a-394f89aaddf5.png" 
              alt={language === 'en' ? 'Armenian Robotics Challenge 2025' : 'Հայկական Ռոբոտաշինության Մարտահրավեր 2025'} 
              className="w-full h-auto rounded-lg shadow-lg hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
