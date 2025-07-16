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

    </section>






  );
};

export default About;
