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
    <section id="expertise" className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Our Expertise
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-900">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
