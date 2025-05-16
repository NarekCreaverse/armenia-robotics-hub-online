
import { useLanguage } from "@/hooks/useLanguage";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2 rounded-md bg-arc-darkblue text-white hover:bg-arc-blue transition-colors text-sm font-medium"
    >
      <span>{language === 'en' ? 'AM' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle;
