
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "gallery", label: { en: "Gallery", am: "Պատկերասրահ" } },
    { id: "downloads", label: { en: "Downloads", am: "Ներբեռնումներ" } },
    { id: "register", label: { en: "Register", am: "Գրանցվել" } }
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/b296f916-ef64-4dca-b144-2eddd29b5946.png" 
              alt="ARC Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-arc-darkblue via-arc-blue to-arc-yellow bg-clip-text text-transparent">
            {language === 'en' ? 'Armenian Robotics Challenge' : 'Հայկական Ռոբոտաշինության Մարտահրավեր'}
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className={`text-arc-darkblue font-medium hover:text-arc-blue transition-colors duration-300 
                relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full 
                after:h-0.5 after:bg-arc-yellow after:transition-all after:duration-300`}
            >
              {item.label[language]}
            </a>
          ))}
          <div className="ml-4">
            <LanguageToggle />
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageToggle />
          <button 
            className="text-arc-darkblue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-accordion-down">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="text-arc-darkblue font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label[language]}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
