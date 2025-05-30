
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Downloads = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [uploadedPdfs, setUploadedPdfs] = useState<Array<{
    id: number;
    name: string;
    url: string;
    file: File;
  }>>([]);

  const categories = [
    {
      id: 0,
      title: { en: "Hebocon Robot", am: "Հեբոկոն ռոբոտ" },
      description: { en: "Complete Hebocon robot guide and specifications", am: "Հեբոկոն ռոբոտի ամբողջական ուղեցույց և բնութագրեր" },
      fileName: "hebocon_robot",
      isMultiFile: true,
      files: [
        "/lovable-uploads/13bf4fbf-8716-4b6f-b8bb-7aa9b6e3e19f.png",
        "/lovable-uploads/86fa3b26-699a-4127-8b78-436ed8bc9863.png", 
        "/lovable-uploads/bc6f2df5-8a90-4d44-9071-b9358ac30892.png",
        "/lovable-uploads/91c3e158-11f1-4fbb-9c16-f164b8ae0997.png"
      ]
    },
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
    uploadTitle: {
      en: "Upload PDF",
      am: "Բեռնել PDF"
    },
    uploadButton: {
      en: "Upload",
      am: "Բեռնել"
    },
    uploadedFiles: {
      en: "Uploaded Files",
      am: "Բեռնված ֆայլեր"
    }
  };

  const handleDownload = (category: any) => {
    if (category.isMultiFile && category.files) {
      // Download multiple files for Hebocon Robot
      category.files.forEach((fileUrl: string, index: number) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = `hebocon_robot_page_${index + 1}.webp`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } else {
      // Single file download for other items
      alert(`Download requested for: ${category.fileName}`);
    }
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      const newPdf = {
        id: Date.now(),
        name: file.name,
        url: url,
        file: file
      };
      setUploadedPdfs(prev => [...prev, newPdf]);
      toast({
        title: language === 'en' ? "PDF Uploaded" : "PDF բեռնված է",
        description: language === 'en' ? `${file.name} has been uploaded successfully` : `${file.name} բեռնվել է հաջողությամբ`,
      });
      // Reset the input
      event.target.value = '';
    } else {
      toast({
        title: language === 'en' ? "Invalid File" : "Անվավեր ֆայլ",
        description: language === 'en' ? "Please select a PDF file" : "Խնդրում ենք ընտրել PDF ֆայլ",
        variant: "destructive"
      });
    }
  };

  const handlePdfDownload = (pdf: { name: string; url: string; file: File }) => {
    const link = document.createElement('a');
    link.href = pdf.url;
    link.download = pdf.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

        {/* PDF Upload Section */}
        <div className="mb-12">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">{downloadTexts.uploadTitle[language]}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={handlePdfUpload}
                  className="cursor-pointer"
                />
                <p className="text-sm text-gray-500 text-center">
                  {language === 'en' ? 'Select a PDF file to upload' : 'Ընտրեք PDF ֆայլ բեռնելու համար'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Uploaded PDFs Section */}
        {uploadedPdfs.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-arc-darkblue mb-6 text-center">
              {downloadTexts.uploadedFiles[language]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploadedPdfs.map((pdf) => (
                <Card key={pdf.id} className="hover-scale transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{pdf.name}</CardTitle>
                    <CardDescription>
                      {language === 'en' ? 'Uploaded PDF Document' : 'Բեռնված PDF փաստաթուղթ'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => handlePdfDownload(pdf)}
                      className="w-full"
                    >
                      <Download className="mr-2" />
                      {downloadTexts.downloadButton[language]}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Static Downloads Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle>{category.title[language]}</CardTitle>
                <CardDescription>{category.description[language]}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleDownload(category)}
                  className="w-full"
                >
                  <Download className="mr-2" />
                  {downloadTexts.downloadButton[language]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
