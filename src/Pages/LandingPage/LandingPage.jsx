import React, { useEffect } from 'react'
import { FaIndustry, FaCheckCircle, FaPhone, FaEnvelope, FaWarehouse, FaTruck, FaFlask } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Carousel from '../../Components/Carousel'

const heroCarouselData = [
  {
    image: "/images/slide1.jpg",
    alt: "Innovators in Silica Sand",
    content: (
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          Innovators in Silica Sand & Resin Coated Sand
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-white"
        >
          Taking the Industry Forward with Innovation & Technology
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Contact Us
        </motion.button>
      </div>
    )
  },
  {
    image: "/images/slide2.jpg",
    alt: "Premium Quality Products",
    content: (
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          Premium Quality Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-white"
        >
          Meeting International Standards with Excellence
        </motion.p>
      </div>
    )
  },
  {
    image: "/images/slide3.jpg",
    alt: "Global Reach",
    content: (
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          Global Reach, Local Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-white"
        >
          Serving Industries Worldwide with Dedication
        </motion.p>
      </div>
    )
  }
];

const aboutCarouselData = [
  {
    image: "/images/about1.jpg",
    alt: "Our Facility"
  },
  {
    image: "/images/about2.jpg",
    alt: "Production Process"
  },
  {
    image: "/images/about3.jpg",
    alt: "Quality Testing"
  }
];

const stats = [
  { number: "30,000 MT", label: "Total Storage Capacity" },
  { number: "10,000 MT", label: "Monthly Supply" },
  { number: "15,000 MT", label: "Monthly Supply Capacity" },
  { number: "20 MT/hr", label: "Automatic Dryers Capacity" }
]

const LandingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <Carousel 
          data={heroCarouselData}
          height="75vh"
          interval={5000}
          showOverlay={true}
          overlayColor="bg-black/50"
        />
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">About Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 fade-in">
              <p className="mb-8">
                Premier Silica Industries is a renowned producer and supplier of high-quality silica sand, backed by 35 years of expertise in the industry. Our deep-rooted experience, commitment to quality, and customer-centric approach have earned us a strong reputation as a trusted and reliable name in silica sand supply across India.
              </p>
              <p className="mb-8">
                Our state-of-the-art processing plant is strategically located in the village of Kachari, near Shankargarh, Prayagraj (Allahabad), Uttar Pradesh. This region is naturally gifted with some of the finest quality silica sand deposits, making it an ideal hub for sourcing premium-grade silica sand.
              </p>
              <p className="mb-8">
                Over the years, we have established ourselves as a leading player in the industry, catering to diverse sectors with our superior-quality products.
              </p>
              <p className="mb-8">
                The Shankargarh region is widely recognized for its high-purity silica sand, containing a silica percentage of over 98% and extremely low Fe₂O₃ (iron oxide) levels, making it highly sought after for various industrial applications. Silica, scientifically known as silicon dioxide (SiO₂), is composed of one silicon atom and two oxygen atoms, forming the fundamental building block of many essential industrial materials.
              </p>
              <p className="mb-8">
                At Premier Silica Industries, we take pride in maintaining stringent quality control measures at every stage of production. Our advanced infrastructure, which includes cutting-edge mechanical washing, screening, and drying units, ensures that our silica sand meets the highest industry standards.
              </p>
              <p className="mb-8">
                Whether it is for foundries, glass manufacturing, construction, or other industrial applications, our consistent supply and superior quality make us a preferred choice for clients across India.
              </p>
              <p className="mb-8">
                With decades of experience and an unwavering commitment to excellence, Premier Silica Industries continues to lead the way in providing high-purity, high-performance silica sand, fulfilling the evolving demands of industries with precision, reliability, and trust.
              </p>
            </div>

            <div className="md:w-1/2">
              <Carousel 
                data={aboutCarouselData}
                height="700px"
                interval={4000}
                showOverlay={true}
              />
            </div>
          </div>
          <div className="md:w-full mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 fade-in">Quality Control</h2>
              <p className="mb-8 fade-in">
                Premier Silica Industries takes immense pride in its state-of-the-art laboratory, equipped with advanced testing facilities and operated by a team of highly qualified and experienced chemists. Our dedication to maintaining uncompromised quality standards has made us a trusted name in the silica sand industry.
              </p>
              <p className="mb-8 fade-in">
                Our laboratory is ISO-certified, allowing us to exercise rigorous quality control over raw materials right from the extraction stage. This ensures that only the finest silica sand reaches our clients, meeting their specific industry requirements with consistency and precision.
              </p>
              <p className="mb-8 fade-in">
                To uphold the highest quality standards, we follow a multi-stage quality control process at every step of production:
              </p>
              <ul className="list-disc mb-8 fade-in">
                <li>Raw Material Testing: Before processing, the raw silica sand undergoes detailed analysis to check for silica content, impurities, grain size distribution, and Fe₂O₃ (iron oxide) levels.</li>
                <li>In-Process Quality Checks: At every stage of washing, screening, grading, and drying, intermediate quality checks are conducted to ensure adherence to required specifications.</li>
                <li>Final Product Inspection: The finished silica sand undergoes comprehensive testing, including chemical composition analysis, moisture content verification, and particle size distribution checks before being approved for dispatch.</li>
                <li>Certification & Compliance: As part of our ISO certification, we strictly adhere to industry standards and specifications, ensuring reliable, high-purity silica sand for our customers.</li>
              </ul>
              <p className="mb-8 fade-in">
                Our commitment to excellence enables us to supply high-performance silica sand that meets the stringent demands of industries such as foundries, glass manufacturing, construction, ceramics, paints, coatings, and more. By leveraging cutting-edge technology and expert supervision, Premier Silica Industries continues to set benchmarks in quality, ensuring customer satisfaction and long-term partnerships.
              </p>
            </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <style jsx>{`
              .fade-in {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 1s ease-out, transform 1s ease-out;
              }
              .fade-in.visible {
                opacity: 1;
                transform: translateY(0);
              }
            `}</style>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg fade-in">
              <FaWarehouse className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Trusted Silica Sand Supplier</h3>
              <p>Over 35 years of experience in silica sand production</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg fade-in">
              <FaFlask className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Quality Certified</h3>
            <p>ISO 9001:2015 certified company, providing Premium Quality silica sand</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg fade-in">
              <FaTruck className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Reliable Supply</h3>
              <p>Robust infrastructure ensuring timely delivery and consistent quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:border-4 hover:border-blue-500 transition-transform duration-300">
              <img src="https://placehold.co/400" alt="Placeholder 1" className="w-full h-auto" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:border-4 hover:border-blue-500 transition-transform duration-300">
              <img src="https://placehold.co/400" alt="Placeholder 2" className="w-full h-auto" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:border-4 hover:border-blue-500 transition-transform duration-300">
              <img src="https://placehold.co/400" alt="Placeholder 3" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Premium Products</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Washed, Dry & Graded Silica Sand</h3>
              <p className="text-gray-600 mb-6">Ideal for multiple sectors, our high-purity sand is processed for uniform particle size.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Resin Coated Sand</h3>
              <p className="text-gray-600 mb-6">Perfect for Foundries and Casting Processes, enhancing mold strength, precision, and surface finish.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Automotive', 'Construction', 'Foundries', 'Glass Manufacturing'].map((industry, index) => (
              <div key={index} className="text-center p-6">
                <FaIndustry className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl" />
                <span>+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl" />
                <span>info@yourcompany.com</span>
              </div>
              <p className="mt-4">Based in Shankargarh, Prayagraj (Allahabad)</p>
            </div>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-black" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-black" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded text-black"></textarea>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage