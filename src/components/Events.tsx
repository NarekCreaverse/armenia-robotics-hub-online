
import { useState } from "react";
import { cn } from "@/lib/utils";

type EventType = "past" | "current" | "upcoming";

const Events = () => {
  const [activeTab, setActiveTab] = useState<EventType>("current");

  const events = {
    past: [
      {
        id: 1,
        title: "ARC 2023: Automation Challenge",
        date: "June 12-14, 2023",
        location: "Yerevan State University",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Our 2023 challenge focused on automated systems for environmental monitoring, with 45 teams competing from across Armenia.",
        winners: ["Team Quantum", "Circuit Breakers", "Tech Titans"]
      },
      {
        id: 2,
        title: "ARC 2022: Smart Cities",
        date: "May 20-22, 2022",
        location: "American University of Armenia",
        image: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Teams designed innovative robotic solutions for urban challenges, creating prototypes for smart waste management and traffic control.",
        winners: ["Urban Innovators", "City Solvers", "Smart Squad"]
      }
    ],
    current: [
      {
        id: 3,
        title: "ARC 2024: Sustainable Agriculture",
        date: "May 15-17, 2024",
        location: "Gyumri Technology Center",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "This year's challenge focuses on robotic solutions for sustainable farming practices in Armenia's agricultural sector.",
        registrationOpen: true
      }
    ],
    upcoming: [
      {
        id: 4,
        title: "ARC 2025: Healthcare Innovation",
        date: "June 14-16, 2025",
        location: "Dilijan TUMO Center",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Our next major challenge will focus on healthcare solutions, with teams developing assistive robotic technologies.",
        registrationOpening: "January 15, 2025"
      },
      {
        id: 5,
        title: "Regional Qualifiers 2024",
        date: "October 10-12, 2024",
        location: "Multiple Locations",
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Regional qualification rounds in Yerevan, Gyumri, and Vanadzor to select teams for the 2025 ARC finals.",
        registrationOpening: "July 1, 2024"
      }
    ]
  };

  const renderEventCards = (eventType: EventType) => {
    return events[eventType].map((event) => (
      <div 
        key={event.id} 
        className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale"
      >
        <div className="h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-arc-darkblue">{event.title}</h3>
            {eventType === "current" && event.registrationOpen && (
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Registration Open
              </span>
            )}
          </div>
          <div className="flex items-center mb-2 text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center mb-4 text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
          <p className="text-gray-700 mb-4">{event.description}</p>
          
          {eventType === "past" && event.winners && (
            <div className="mb-4">
              <p className="font-semibold text-arc-darkblue mb-1">Winners:</p>
              <div className="flex flex-wrap gap-2">
                {event.winners.map((winner, index) => (
                  <span 
                    key={index}
                    className="bg-arc-blue/10 text-arc-blue text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {winner}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {eventType === "upcoming" && event.registrationOpening && (
            <div className="text-sm text-gray-600">
              <span className="font-medium">Registration opens:</span> {event.registrationOpening}
            </div>
          )}
          
          {eventType === "current" && event.registrationOpen && (
            <div className="mt-4">
              <a 
                href="#register" 
                className="btn-primary text-sm inline-flex"
              >
                Register Now
              </a>
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our past, current, and upcoming robotics challenges and competitions.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-lg shadow-inner p-1">
            {["past", "current", "upcoming"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as EventType)}
                className={cn(
                  "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  activeTab === tab
                    ? "bg-arc-blue text-white shadow-md"
                    : "text-gray-700 hover:text-arc-blue"
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderEventCards(activeTab)}
        </div>

        {activeTab === "past" && (
          <div className="text-center mt-12">
            <button className="btn-secondary">
              View All Past Events
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
