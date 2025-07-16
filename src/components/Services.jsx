const services = [
  {
    title: "Web based ERP Systems",
    description: "Custom ERP solutions for business automation and data intelligence.",
  },
  {
    title: "Customer Service Sourcing",
    description: "Reliable outsourcing with CRM integration.",
  },
  {
    title: "Custom Software Solutions",
    description: "Tailor-made web & mobile apps for global businesses.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise"  className="bg-[#0b0f0f] text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Our Expertise
      </h2>
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
  {services.map((service, i) => (
    <div
      key={i}
      className="group bg-white dark:bg-[#0e0e0e] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 relative overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-300 pointer-events-none"></div>

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

export default Expertise;
