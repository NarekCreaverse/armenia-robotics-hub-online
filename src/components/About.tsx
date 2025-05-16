
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");
  
  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "The Armenia Robotics Challenge (ARC) brings together students, hobbyists and professionals from across the country to spark creativity, teamwork and hands-on learning through friendly robotics competition.",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      altText: "Robotics team collaboration"
    },
    why: {
      title: "Why ARC?",
      content: [
        "Hands-On STEM: Apply science, technology, engineering and math in real-world robotics tasks.",
        "Collaboration & Innovation: Encourage cross-school and cross-regional teams to work together.",
        "Professional Mentorship: Benefit from guidance by leading Armenian engineers and educators."
      ],
      imageUrl: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      altText: "Robot in laboratory"
    },
    impact: {
      title: "Our Impact",
      content: "Since our founding, we've engaged over 1,000 participants across Armenia, launched 20+ collaborative projects, and seen 85% of participants pursue further education or careers in STEM fields.",
      imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      altText: "Students with robotic project"
    }
  };

  const tabItems = [
    { id: "mission", label: "Our Mission" },
    { id: "why", label: "Why ARC?" },
    { id: "impact", label: "Our Impact" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building Armenia's tech future through robotics innovation and collaboration.
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
                {tab.label}
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
                alt={tabContent[activeTab as keyof typeof tabContent].altText}
                className="rounded-lg shadow-lg relative w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-arc-darkblue mb-4">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h3>
            {activeTab === "why" ? (
              <ul className="space-y-4">
                {(tabContent.why.content as string[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-arc-yellow flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-arc-darkblue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {tabContent[activeTab as keyof typeof tabContent].content as string}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
