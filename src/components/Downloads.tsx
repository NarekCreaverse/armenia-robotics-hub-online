
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Downloads = () => {
  const { language } = useLanguage();
  const [files, setFiles] = useState<Record<string, File | null>>({});

  const categories = [
    {
      id: 1,
      title: { en: "Competition Rules", am: "Մրցույթի կանոններ" },
      description: { en: "Official rules and guidelines for participation", am: "Մասնակցության պաշտոնական կանոններ և ուղեցույցներ" },
      fileName: "competition_rules.pdf"
    },
    {
      id: 2,
      title: { en: "Technical Specifications", am: "Տեխնիկական բնութագրեր" },
      description: { en: "Required robot specifications and limitations", am: "Պահանջվող ռոբոտի բնութագրեր և սահմանափակումներ" },
      fileName: "technical_specs.pdf"
    },
    {
      id: 3,
      title: { en: "Judging Criteria", am: "Գնահատման չափանիշներ" },
      description: { en: "How robots and performances will be evaluated", am: "Ինչպես են գնահատվելու ռոբոտները և կատարումները" },
      fileName: "judging_criteria.pdf"
    },
    {
      id: 4,
      title: { en: "Registration Forms", am: "Գրանցման ձևեր" },
      description: { en: "Required documents for team registration", am: "Թիմի գրանցման համար պահանջվող փաստաթղթեր" },
      fileName: "registration_forms.pdf"
    },
    {
      id: 5,
      title: { en: "Schedule", am: "Ժամանակացույց" },
      description: { en: "Event timetable and important dates", am: "Միջոցառման ժամանակացույց և կարևոր ամսաթվեր" },
      fileName: "schedule.pdf"
    },
    {
      id: 6,
      title: { en: "Venue Information", am: "Վայրի մասին տեղեկություն" },
      description: { en: "Location details and facilities information", am: "Վայրի մանրամասներ և հարմարությունների մասին տեղեկություն" },
      fileName: "venue_info.pdf"
    },
    {
      id: 7,
      title: { en: "Sponsors Guide", am: "Հովանավորների ուղեցույց" },
      description: { en: "Information for potential sponsors", am: "Տեղեկություն հնարավոր հովանավորների համար" },
      fileName: "sponsors_guide.pdf"
    },
    {
      id: 8,
      title: { en: "Learning Resources", am: "Ուսումնական ռեսուրսներ" },
      description: { en: "Educational materials for beginners", am: "Կրթական նյութեր սկսնակների համար" },
      fileName: "learning_resources.pdf"
    },
    {
      id: 9,
      title: { en: "Previous Winners", am: "Նախկին հաղթողներ" },
      description: { en: "Showcase of past competition winners", am: "Անցյալ մրցույթների հաղթողների ցուցադրում" },
      fileName: "previous_winners.pdf"
    },
    {
      id: 10,
      title: { en: "Volunteer Information", am: "Կամավորների տեղեկություն" },
      description: { en: "How to get involved as a volunteer", am: "Ինչպես ներգրավվել որպես կամավոր" },
      fileName: "volunteer_info.pdf"
    },
    {
      id: 11,
      title: { en: "Media Kit", am: "Մեդիա փաթեթ" },
      description: { en: "Press releases and media resources", am: "Մամլո հաղորդագրություններ և մեդիա ռեսուրսներ" },
      fileName: "media_kit.pdf"
    },
    {
      id: 12,
      title: { en: "FAQs", am: "Հաճախ տրվող հարցեր" },
      description: { en: "Answers to common questions", am: "Պատասխաններ հաճախակի հարցերին" },
      fileName: "faqs.pdf"
    }
  ];

  const downloadTexts = {
    title: {
      en: "Downloads",
      am: "Ներբեռնումներ"
    },
    description: {
      en: "Access all the necessary documents and resources for the Armenian Robotics Challenge",
      am: "Մուտք գործեք Հայկական ռոբոտաշինության մարտահրավերի համար անհրաժեշտ բոլոր փաստաթղթերին և ռեսուրսներին"
    },
    downloadButton: {
      en: "Download",
      am: "Ներբեռնել"
    },
    uploadButton: {
      en: "Upload PDF",
      am: "Վերբեռնել PDF"
    },
    adminMode: {
      en: "Admin Mode",
      am: "Ադմինիստրատորի ռեժիմ"
    },
    fileUploaded: {
      en: "File uploaded successfully",
      am: "Ֆայլը հաջողությամբ վերբեռնվել է"
    },
    fileRequired: {
      en: "Please select a PDF file",
      am: "Խնդրում ենք ընտրել PDF ֆայլ"
    },
    invalidFileType: {
      en: "Only PDF files are allowed",
      am: "Թույլատրվում են միայն PDF ֆայլերը"
    }
  };

  const [isAdminMode, setIsAdminMode] = useState(false);

  const handleDownload = (fileName: string) => {
    // In a real application, this would download the actual file
    alert(`Download requested for: ${fileName}`);
    // You would typically use window.open() or similar to trigger the actual download
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fileName: string) => {
    const file = event.target.files?.[0];
    
    if (!file) {
      toast({
        title: downloadTexts.fileRequired[language],
        variant: "destructive"
      });
      return;
    }
    
    if (file.type !== 'application/pdf') {
      toast({
        title: downloadTexts.invalidFileType[language],
        variant: "destructive"
      });
      return;
    }

    setFiles(prev => ({
      ...prev,
      [fileName]: file
    }));
    
    toast({
      title: downloadTexts.fileUploaded[language],
      description: file.name
    });

    // In a real application with backend:
    // 1. Create FormData
    // 2. Append the file to it
    // 3. Send it to your server using fetch or axios
    // 4. Update UI based on the response
  };

  return (
    <section id="downloads" className="py-20 bg-gradient-to-b from-arc-blue/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">{downloadTexts.title[language]}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {downloadTexts.description[language]}
          </p>
        </div>

        <div className="text-right mb-4">
          <Button 
            variant="outline" 
            onClick={() => setIsAdminMode(!isAdminMode)}
            className="text-sm"
          >
            {isAdminMode ? "✓ " : ""}{downloadTexts.adminMode[language]}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle>{category.title[language]}</CardTitle>
                <CardDescription>{category.description[language]}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleDownload(category.fileName)}
                  className="w-full mb-2"
                >
                  <Download className="mr-2" />
                  {downloadTexts.downloadButton[language]}
                </Button>

                {isAdminMode && (
                  <div className="mt-3">
                    <input
                      type="file"
                      id={`file-${category.id}`}
                      accept=".pdf"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, category.fileName)}
                    />
                    <label htmlFor={`file-${category.id}`}>
                      <Button variant="outline" className="w-full cursor-pointer">
                        <Upload className="mr-2" />
                        {downloadTexts.uploadButton[language]}
                      </Button>
                    </label>
                    {files[category.fileName] && (
                      <p className="text-xs text-green-600 mt-1 truncate">
                        {files[category.fileName]?.name}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
