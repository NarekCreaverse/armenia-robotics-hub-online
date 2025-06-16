import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Downloads = () => {
  const { language } = useLanguage();

  const categories = [
    {
      id: 0,
      title: { en: "Hebocon Robot", am: "Հեբոկոն ռոբոտ" },
      description: { en: "Complete Hebocon robot guide and specifications", am: "Հեբոկոն ռոբոտի ամբողջական ուղեցույց և բնութագրեր" },
      fileName: "hebocon_robot_image.jpg",
      fileUrl: "/lovable-uploads/a0a64335-2998-4a0e-87d2-9e9a786e7d9e.png",
      isMultiFile: false
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
    }
  };

  const handleDownload = (category: any) => {
    if (category.id === 0 && category.fileUrl) {
      // For Hebocon Robot, download the actual image file
      const link = document.createElement('a');
      link.href = category.fileUrl;
      link.download = category.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // For other items, show alert with PDF file name
      alert(`Download requested for: ${category.fileName}`);
    }
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
