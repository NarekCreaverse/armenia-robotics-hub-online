
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const Rules = () => {
  const { language } = useLanguage();

  const rulesContent = {
    title: {
      en: "Competition Rules",
      am: "Մրցույթի կանոններ"
    },
    subtitle: {
      en: "Official Guidelines for Armenian Robotics Challenge",
      am: "Հայկական Ռոբոտաշինության Մարտահրավերի պաշտոնական ուղեցույցներ"
    },
    sections: [
      {
        title: { en: "Eligibility", am: "Իրավասություն" },
        rules: [
          { 
            en: "Open to all students from primary school to university level", 
            am: "Բաց է բոլոր ուսանողների համար՝ տարրական դպրոցից մինչև համալսարանական մակարդակ" 
          },
          { 
            en: "Teams must consist of 2-5 members", 
            am: "Թիմերը պետք է բաղկացած լինեն 2-5 անդամներից" 
          },
          { 
            en: "At least one adult supervisor is required for teams with members under 16", 
            am: "16 տարեկանից ցածր անդամներ ունեցող թիմերի համար պահանջվում է առնվազն մեկ չափահաս ղեկավար" 
          }
        ]
      },
      {
        title: { en: "Robot Specifications", am: "Ռոբոտի բնութագրեր" },
        rules: [
          { 
            en: "Maximum robot size: 30cm x 30cm x 30cm", 
            am: "Ռոբոտի առավելագույն չափսը՝ 30սմ x 30սմ x 30սմ" 
          },
          { 
            en: "Maximum weight: 3kg", 
            am: "Առավելագույն քաշը՝ 3կգ" 
          },
          { 
            en: "Power source must be self-contained (no external power supplies)", 
            am: "Էներգիայի աղբյուրը պետք է լինի ինքնուրույն (առանց արտաքին սնուցման աղբյուրների)" 
          },
          { 
            en: "Robots must be controlled autonomously or via remote control", 
            am: "Ռոբոտները պետք է կառավարվեն ինքնավար կամ հեռակառավարման միջոցով" 
          }
        ]
      },
      {
        title: { en: "Competition Format", am: "Մրցույթի ձևաչափ" },
        rules: [
          { 
            en: "Preliminary rounds followed by knockout stages", 
            am: "Նախնական փուլեր, որոնց հաջորդում են նոկաուտ փուլերը" 
          },
          { 
            en: "Each match lasts 3 minutes", 
            am: "Յուրաքանչյուր խաղը տևում է 3 րոպե" 
          },
          { 
            en: "Point system based on task completion and efficiency", 
            am: "Միավորների համակարգ՝ հիմնված առաջադրանքի կատարման և արդյունավետության վրա" 
          }
        ]
      },
      {
        title: { en: "Code of Conduct", am: "Վարքագծի կանոնագիրք" },
        rules: [
          { 
            en: "Fair play and sportsmanship are mandatory", 
            am: "Ազնիվ խաղը և մարզական ոգին պարտադիր են" 
          },
          { 
            en: "No damaging other robots or the competition arena", 
            am: "Արգելվում է վնասել այլ ռոբոտներ կամ մրցույթի տարածքը" 
          },
          { 
            en: "Judges' decisions are final", 
            am: "Դատավորների որոշումները վերջնական են" 
          }
        ]
      }
    ],
    note: {
      en: "For complete details, please download the official rulebook from the Downloads section.",
      am: "Ամբողջական մանրամասների համար, խնդրում ենք ներբեռնել պաշտոնական կանոնագիրքը Ներբեռնումներ բաժնից։"
    }
  };

  return (
    <section id="rules" className="py-20 bg-gradient-to-br from-arc-yellow/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">{rulesContent.title[language]}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {rulesContent.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rulesContent.sections.map((section, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-arc-blue hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-arc-darkblue mb-4">
                  {section.title[language]}
                </h3>
                <ul className="space-y-3">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex">
                      <span className="text-arc-yellow font-bold mr-2">§</span>
                      <span>{rule[language]}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">{rulesContent.note[language]}</p>
          <a href="#downloads" className="inline-flex items-center text-arc-blue hover:text-arc-darkblue mt-2 font-medium transition-colors">
            <Download className="h-4 w-4 mr-1" />
            {language === 'en' ? 'Download Complete Rulebook' : 'Ներբեռնել ամբողջական կանոնագիրքը'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rules;
