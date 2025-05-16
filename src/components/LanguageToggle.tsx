
import { useLanguage } from "@/hooks/useLanguage";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center p-2 rounded-md bg-arc-darkblue text-white hover:bg-arc-blue transition-colors text-sm font-medium">
        <span className="mr-1">{language === 'en' ? 'EN' : 'AM'}</span>
        <Languages className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={language === 'en' ? "bg-arc-blue/10" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('am')}
          className={language === 'am' ? "bg-arc-blue/10" : ""}
        >
          Armenian
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
