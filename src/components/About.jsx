import React from "react";
import { FaCode , FaCloud  } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { MdDataThresholding } from "react-icons/md";



const services = [
  {
    logo : <FaCode />,
    title: "Web based ERP Systems",
    description: "Custom ERP solutions for business automation and data intelligence.",
  },
  {
    logo : <IoIosFlash />,
    title: "Customer Service Sourcing",
    description: "Reliable outsourcing with CRM integration.",
  },
  {
    logo : <CiGlobe />,
    title: "Custom Software Solutions",
    description: "Tailor-made web & mobile apps for global businesses.",
  },
  {
    logo : <TbUsers />,
    title: "User Experience Design",
    description: "Creating intuitive and engaging user experiences.",
  },
  {
    logo : <FaCloud />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services.",
  },
  {
    logo : <MdDataThresholding />,
    title: "Data Analytics",
    description: "Transforming data into actionable insights.",
  },
]

const About = () => {
  return (
    <section id="about" className="bg-black py-20 px-6 text-center ">
<div className="max-w-4xl mx-auto text-white pb-12">
      <h1 class="pb-4 text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
 About Us
</h1>


      <p className="max-w-3xl mx-auto text-gray-600 text-lg">
        Slash International executes projects worldwide and drives sustainable
        solutions since 2012. We’re passionate about building impactful, future-ready platforms and custom enterprise solutions.
      </p>
</div>

     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 items-center py-6">
  {/* Left Side: Text */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-start">
      Transforming Ideas Into Reality
    </h2>
    <p className="text-gray-400 text-start leading-relaxed">
      Since our founding, Slash Internationals has been at the forefront of digital innovation.
      We combine creative vision with technical expertise to deliver solutions that exceed expectations.
      <br /><br />
      Our agile approach ensures rapid development cycles while maintaining the highest quality standards.
      We believe in transparent communication and collaborative partnerships with our clients.
      <br /><br />
      From startups to enterprise companies, we've helped hundreds of businesses achieve their digital
      transformation goals through custom software solutions.
    </p>
  </div>

  {/* Right Side: Image */}
  <div className="flex justify-center md:justify-end">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Digital Innovation"
      className="rounded-xl max-w-full h-auto w-[90%] md:w-[100%]"
    />
  </div>
</div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
  {services.map((service, i) => (
    <div
      key={i}
      className="group bg-white dark:bg-[#0e0e0e] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 relative overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-300 pointer-events-none"></div>
<div className="mb-4 flex items-center justify-center">
  <div className="w-14 h-14 flex items-center justify-center bg-blue-700 text-white rounded-2xl text-3xl">
    {service.logo}
  </div>
</div>

      <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-300">
        {service.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-400">{service.description}</p>
    </div>
  ))}
</div>

    </section>






  );
};

export default About;
