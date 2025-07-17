import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies",
    features: [
      "React & Next.js Applications",
      "Full-Stack Development",
      "Progressive Web Apps",
      "E-commerce Solutions"
    ],
    startingPrice: "$5,000",
    cta: "Learn More"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: [
      "React Native Development",
      "iOS & Android Native",
      "Cross-Platform Solutions",
      "App Store Optimization"
    ],
    startingPrice: "$8,000",
    cta: "Learn More"
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment solutions",
    features: [
      "AWS & Azure Setup",
      "DevOps & CI/CD",
      "Microservices Architecture",
      "Auto-scaling Solutions"
    ],
    startingPrice: "$3,000",
    cta: "Learn More"
  },
  {
    title: "AI Integration",
    description: "Artificial intelligence and machine learning solutions",
    features: [
      "Custom AI Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics"
    ],
    startingPrice: "$10,000",
    cta: "Learn More"
  },
  {
    title: "Data Solutions",
    description: "Database design, optimization, and analytics platforms",
    features: [
      "Database Architecture",
      "Data Migration",
      "Analytics Dashboards",
      "Real-time Processing"
    ],
    startingPrice: "$4,000",
    cta: "Learn More"
  },
  {
    title: "Security & Compliance",
    description: "Comprehensive security audits and compliance solutions",
    features: [
      "Security Audits",
      "GDPR Compliance",
      "Penetration Testing",
      "Data Protection"
    ],
    startingPrice: "$2,500",
    cta: "Learn More"
  }
];


const Services = () => {
  return (
    <section id="service"  className="bg-[#0b0f0f] text-white py-20 px-6">
 <div className="max-w-4xl mx-auto px-4 py-8 text-center text-white">
  <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
    Our Services

  </h1>

  <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
   Comprehensive digital solutions tailored to your business needs. From concept to deployment, we've got you covered.
  </p>
</div>


{/* card of service */}

<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
  <div className="flex flex-wrap justify-center">
    {services.map((service, index) => (
      <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="group relative bg-gray-900 rounded-xl p-6 text-white shadow-lg transition-transform transform hover:scale-105 duration-300 border border-transparent hover:border-blue-600 hover:shadow-purple-500/40">
          
          {/* Icon */}
          <div className="flex items-center justify-center mb-4 text-5xl">
            🤖
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold mb-2 text-blue-500 group-hover:text-cyan-300 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-4 text-sm">
            {service.description}
          </p>

          {/* Features */}
          <ul className="list-none text-sm mb-4 space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-purple-500 mr-2">✔</span> {feature}
              </li>
            ))}
          </ul>

          {/* Price */}
          <p className="text-gray-400 mb-4 font-medium">
            Starting at <span className="text-white">{service.startingPrice}</span>
          </p>

          {/* CTA */}
          <button className="cursor-pointer w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white font-semibold shadow-md transition-all duration-300">
            {service.cta} →
          </button>

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-xl border border-purple-500 opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-500 pointer-events-none"></div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* custom solution */}

<div className="max-w-5xl mx-auto mt-16 px-6 py-12 bg-white dark:bg-[#0e0e0e] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
  {/* Glow effect on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-10 blur-xl transition duration-300 pointer-events-none"></div>

  <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
    Need a Custom Solution?
  </h1>
  <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
    Every business is unique. Let’s talk about your goals and build a personalized solution that’s just right for you.
  </p>
<button className="py-2 px-4  transform hover:scale-105  rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600  text-white font-semibold shadow-md transition-all duration-300">
 <span className="flex items-center justify-center gap-2">
   Schedule Consultation <FaArrowRightLong />
 </span>
</button>

</div>





    </section>
  );
};

export default Services;
