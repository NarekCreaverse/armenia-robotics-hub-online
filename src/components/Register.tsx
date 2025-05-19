
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Register = () => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: language === 'en' ? "Create an Account" : "Ստեղծել հաշիվ",
      description: language === 'en' ? 
        "Click \"Sign Up\" in the top-right corner and confirm your email address to get started" : 
        "Սեղմեք \"Գրանցվել\" վերևի աջ անկյունում և հաստատեք ձեր էլ. հասցեն սկսելու համար",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: 2,
      title: language === 'en' ? "Form Your Team" : "Կազմեք Ձեր թիմը",
      description: language === 'en' ? 
        "Build a team of 2 to 5 participants. Choose a unique team name and appoint a team captain." : 
        "Կազմեք 2-ից 5 մասնակիցներից բաղկացած թիմ։ Ընտրեք թիմի յուրահատուկ անունը և նշանակեք թիմի ավագին։",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      number: 3,
      title: language === 'en' ? "Submit Your Entry" : "Ներկայացրեք Ձեր հայտը",
      description: language === 'en' ? 
        "Complete the online registration form. Upload your team roster and robot specifications (maximum weight: 3 kg)." : 
        "Լրացրեք առցանց գրանցման ձևը։ Վերբեռնեք Ձեր թիմի ցուցակը և ռոբոտի բնութագրերը (առավելագույն քաշը՝ 3 կգ)։",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: 4,
      title: language === 'en' ? "Pay the Registration Fee" : "Վճարեք գրանցման վճարը",
      description: language === 'en' ? 
        "Standard fee: 15,000 AMD per team. Students receive a 20% discount (valid student ID required)." : 
        "Ստանդարտ վճար՝ 15,000 դրամ մեկ թիմի համար։ Ուսանողները ստանում են 20% զեղչ (պահանջվում է ուսանողական վավեր վկայական)։",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 5,
      title: language === 'en' ? "Get Confirmation" : "Ստացեք հաստատում",
      description: language === 'en' ? 
        "You'll receive a confirmation email with all the necessary next steps and instructions." : 
        "Դուք կստանաք հաստատման էլ․ նամակ բոլոր անհրաժեշտ հաջորդ քայլերի և հրահանգների հետ միասին։",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-arc-blue/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            {language === 'en' ? 'How To Register' : 'Ինչպես գրանցվել'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Follow these steps to join the Armenian Robotics Challenge'
              : 'Հետևեք այս քայլերին՝ միանալու Հայկական Ռոբոտաշինության Մարտահրավերին'}
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex space-x-4 md:space-x-8">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className={`flex flex-col items-center min-w-[80px] transition-all duration-300 ${
                  activeStep === step.number ? "scale-110" : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors duration-300 ${
                  activeStep === step.number 
                    ? "bg-arc-blue text-white" 
                    : step.number < activeStep 
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                }`}>
                  {step.number < activeStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                <span className={`text-xs md:text-sm font-medium ${
                  activeStep === step.number ? "text-arc-blue" : "text-gray-600"
                }`}>
                  {language === 'en' ? `Step ${step.number}` : `Քայլ ${step.number}`}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-bounce-in" style={{animationDuration: "0.5s"}}>
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <div className="mb-4 md:mb-0 md:mr-6 p-3 rounded-full bg-arc-blue/10 text-arc-blue">
                {steps[activeStep - 1].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-arc-darkblue mb-2">{steps[activeStep - 1].title}</h3>
                <p className="text-gray-700">{steps[activeStep - 1].description}</p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-6"></div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
                disabled={activeStep === 1}
                className={`px-4 py-2 rounded-md text-sm flex items-center ${
                  activeStep === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-arc-blue hover:bg-arc-blue/10"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Previous' : 'Նախորդը'}
              </button>
              {activeStep < steps.length ? (
                <button
                  onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length))}
                  className="btn-primary text-sm"
                >
                  {language === 'en' ? 'Next Step' : 'Հաջորդ քայլը'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              ) : (
                <a href="#" className="btn-primary text-sm">
                  {language === 'en' ? 'Begin Registration' : 'Սկսել գրանցումը'}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card max-w-2xl mx-auto p-6">
            <h3 className="text-xl font-bold text-arc-darkblue mb-4">
              {language === 'en' ? 'Need Help With Registration?' : 'Օգնության կարիք ունե՞ք գրանցման հետ'}
            </h3>
            <p className="text-gray-700 mb-6">
              {language === 'en' 
                ? 'Our team is ready to assist you with any questions regarding the registration process or competition requirements.'
                : 'Մեր թիմը պատրաստ է օգնել ձեզ գրանցման գործընթացի կամ մրցույթի պահանջների վերաբերյալ ցանկացած հարցով։'}
            </p>
            <a href="#" className="btn-secondary">
              {language === 'en' ? 'Contact Support' : 'Կապ սպասարկման բաժնի հետ'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
