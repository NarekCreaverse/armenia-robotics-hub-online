
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: "home", label: { en: "Home", am: "Գլխավոր" }},
    { id: "about", label: { en: "About", am: "Մեր մասին" }},
    { id: "events", label: { en: "Events", am: "Միջոցառումներ" }},
    { id: "gallery", label: { en: "Gallery", am: "Պատկերասրահ" }},
    { id: "register", label: { en: "Register", am: "Գրանցվել" }},
    { id: "downloads", label: { en: "Downloads", am: "Ներբեռնումներ" }}
  ];

  return (
    <footer className="bg-arc-darkblue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-arc-blue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">
                {language === 'en' ? 'Armenian Robotics Challenge' : 'Հայկական Ռոբոտաշինության Մարտահրավեր'}
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              {language === 'en' 
                ? 'Building Armenia\'s tech future through innovation, education, and friendly competition.'
                : 'Կառուցելով Հայաստանի տեխնոլոգիական ապագան նորարարության, կրթության և ընկերական մրցակցության միջոցով։'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Quick Links' : 'Արագ հղումներ'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.id}`} 
                    className="hover:text-arc-yellow transition-colors inline-block"
                  >
                    {item.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Contact Info' : 'Կապի տվյալներ'}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-arc-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>K.Ulnetsi 31/3, Yerevan, Armenia</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-arc-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>arm.creativesystems@gmail.com</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-arc-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+37494005825</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} {language === 'en' ? 'Armenian Robotics Challenge. All rights reserved.' : 'Հայկական Ռոբոտաշինության Մարտահրավեր: Բոլոր իրավունքները պաշտպանված են։'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
