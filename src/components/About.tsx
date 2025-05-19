
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("mission");
  
  const tabContent = {
    mission: {
      title: { 
        en: "Our Mission",
        am: "Մեր առաքելությունը" 
      },
      content: { 
        en: "The Armenia Robotics Challenge (ARC) brings together students, hobbyists and professionals from across the country to spark creativity, teamwork and hands-on learning through friendly robotics competition.",
        am: "Հայաստանի Ռոբոտաշինության Մարտահրավերը (ARC) միավորում է ուսանողներին, սիրողներին և մասնագետներին ողջ երկրից՝ խթանելու ստեղծարարությունը, թիմային աշխատանքը և գործնական ուսուցումը ընկերական ռոբոտաշինության մրցույթների միջոցով։"
      },
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      altText: { 
        en: "Robotics team collaboration",
        am: "Ռոբոտաշինության թիմի համագործակցություն"
      }
    },
    why: {
      title: { 
        en: "Why ARC?",
        am: "Ինչո՞ւ ARC" 
      },
      content: [
        {
          en: "Hands-On STEM: Apply science, technology, engineering and math in real-world robotics tasks.",
          am: "Գործնական STEM. Կիրառեք գիտությունը, տեխնոլոգիան, ճարտարագիտությունը և մաթեմատիկան իրական ռոբոտաշինության առաջադրանքներում։"
        },
        {
          en: "Collaboration & Innovation: Encourage cross-school and cross-regional teams to work together.",
          am: "Համագործակցություն և նորարարություն. Խրախուսեք միջդպրոցական և միջտարածաշրջանային թիմերի համատեղ աշխատանքը։"
        },
        {
          en: "Professional Mentorship: Benefit from guidance by leading Armenian engineers and educators.",
          am: "Պրոֆեսիոնալ ուղղորդում. Օգտվեք առաջատար հայ ճարտարագետների և դասավանդողների ուղղորդումից։"
        }
      ],
      imageUrl: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      altText: { 
        en: "Robot in laboratory",
        am: "Ռոբոտը լաբորատորիայում" 
      }
    },
    impact: {
      title: { 
        en: "Our Impact",
        am: "Մեր ազդեցությունը" 
      },
      content: { 
        en: "Since our founding, we've engaged over 1,000 participants across Armenia, launched 20+ collaborative projects, and seen 85% of participants pursue further education or careers in STEM fields.",
        am: "Մեր հիմնադրման պահից ի վեր մենք ներգրավել ենք ավելի քան 1,000 մասնակիցների ողջ Հայաստանից, մեկնարկել ենք 20+ համագործակցային նախագծեր և տեսել ենք, որ մասնակիցների 85%-ը շարունակել է կրթությունը կամ կարիերան STEM ոլորտներում։"
      },
      imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      altText: { 
        en: "Students with robotic project",
        am: "Ուսանողները ռոբոտային նախագծով" 
      }
    }
  };

  const tabItems = [
    { id: "mission", label: { en: "Our Mission", am: "Մեր առաքելությունը" } },
    { id: "why", label: { en: "Why ARC?", am: "Ինչո՞ւ ARC" } },
    { id: "impact", label: { en: "Our Impact", am: "Մեր ազդեցությունը" } }
  ];

  const aboutTexts = {
    title: { en: "About Us", am: "Մեր մասին" },
    subtitle: { 
      en: "Building Armenia's tech future through robotics innovation and collaboration.",
      am: "Կառուցելով Հայաստանի տեխնոլոգիական ապագան ռոբոտաշինության նորարարության և համագործակցության միջոցով։"
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">{aboutTexts.title[language]}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutTexts.subtitle[language]}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            {tabItems.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-arc-blue text-white shadow-md"
                    : "text-gray-700 hover:text-arc-blue"
                }`}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-float">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-arc-blue to-arc-yellow rounded-lg blur opacity-30"></div>
              <img 
                src={tabContent[activeTab as keyof typeof tabContent].imageUrl} 
                alt={tabContent[activeTab as keyof typeof tabContent].altText[language]}
                className="rounded-lg shadow-lg relative w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-arc-darkblue mb-4">
              {tabContent[activeTab as keyof typeof tabContent].title[language]}
            </h3>
            {activeTab === "why" ? (
              <ul className="space-y-4">
                {(tabContent.why.content as {en: string, am: string}[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-arc-yellow flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-arc-darkblue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{item[language]}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {(tabContent[activeTab as keyof typeof tabContent].content as {en: string, am: string})[language]}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
