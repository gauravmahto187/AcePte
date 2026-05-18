import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  const handleBookMessage = () => {
    const phoneNumber = "9779708533439";
    const message = ``;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_self');
  };

  const cardData = [
    {
      title: "Full Course In-Depth",
      price: "NPR 4000",
      duration: "30 Days",
      focus: "A structured program guiding you from basics to advanced skills, fully preparing you for the PTE exam.",
      idealFor: "Anyone new to the PTE exam or planning to start their preparation from the ground up.",
      features: [
        "Lessons start from the very basics, no prior knowledge needed.",
        "Smart tips and scoring techniques to help you perform better.",
        "Helpful materials to improve grammar and other vital skills.",
        "High-quality templates and practical resources for each section.",
        "Classes run Monday to Friday for 30 days."
      ],
      nextSession: "6:00 – 7:00 PM (1st June)",
      sessionType: "Full Course In-Depth"
    },
    
    // {
    //   title: "1-Week Crash Course",
    //   price: "NPR 1200",
    //   duration: "1 Week",
    //   focus: "Special emphasis on the most high-scoring question types, ideal for quick revision and improvement.",
    //   idealFor: "Students who already have some understanding of PTE and want a fast, focused review.",
    //   features: [
    //     "Focused and complete preparation to get you test-ready in just one week",
    //     "Score-boosting tips, tricks, and strategies designed for short-term impact",
    //     "Access to effective templates and practical study materials",
    //     "Classes run from Sunday to Friday"
    //   ],
    //   nextSession: "Not available ",
    //   sessionType: "1-Week Crash Course"
    // },
    {
      title: "1-on-1 Personal Class",
      price: "Custom Prices",
      duration: "1 Week / 10 Days / 2 Weeks",
      focus: "One-on-one, customized training based on the learner's specific needs and level. Suitable for anyone, regardless of their current preparation stage.",
      idealFor: "Students who are short on time or need focused, personal support to boost their performance.",
      features: [
        "Fully tailored classes designed around your strengths and weaknesses.",
        "Direct feedback and guidance from the instructor assigned to you.",
        "Personalized study plan made just for you.",
        "Mock test analysis with targeted feedback.",
        "Score-boosting strategies and expert tips.",
        "Access to effective templates and well-structured resources for each section."
      ],
      pricing: [
        "1 Week – NPR 4000",
        "10 Days – NPR 5000",
        "2 Weeks – NPR 7000"
      ],
      nextSession: "Not available right now",
      sessionType: "1-on-1 Personal Class"
    },
    {
      title: "Crash Course - 10 Days(Small Batch)",
      price: "NPR 3500",
      duration: "10 Days",
      focus: "A fast-track PTE preparation course focused on key exam strategies, guided practice, and score-boosting techniques to help you improve quickly in a short time.",
      idealFor: "Students with basic English proficiency who want fast, focused preparation for the PTE exam and practical strategies to improve their score in a short time.",
      features: [
        "Small batch training (Maximum 5 students)",
        "Focused practice on key PTE question types",
        "Personal feedback to improve accuracy and score",
        "Grammar and sentence structure improvement",
        "Proven strategies and high-scoring answer templates",
        "Time-management techniques for the actual exam"
      ],
      nextSession: "9:00 – 10:00 AM (Available) \n 4:00 – 5:00 PM (Not Available)",
      startDate: "Based on student availability",
      sessionType: "Group Class of 5"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-['Inter']">
      {/* Google Fonts Import */}
      <SpeedInsights />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <Header />

      {/* Hero Section */}
      {/* <section className="relative h-30 md:h-48 mb-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-transparent" style={{ backgroundImage: "url('/hero.png')" }}></div>
        <div className="absolute inset-0 bg-cyan-400/60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] tracking-wide mb-4">
              Courses
            </h1>
          </div>
        </div>
      </section> */}

<section className="relative h-30 md:h-48 mb-0 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/hero.png')" }}
  ></div>

  {/* Dark overlay for better contrast */}
  <div className="absolute inset-0 bg-blue-900/55"></div>
  {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-500/30"></div> */}


  {/* Text */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white font-['Poppins'] tracking-wide mb-4">
        Courses
      </h1>
    </div>
  </div>
</section>


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              duration={card.duration}
              focus={card.focus}
              idealFor={card.idealFor}
              features={card.features}
              nextSession={card.nextSession}
              sessionType={card.sessionType}
              pricing={card.pricing}
              startDate={card.startDate}
              onBookMessage={handleBookMessage}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
