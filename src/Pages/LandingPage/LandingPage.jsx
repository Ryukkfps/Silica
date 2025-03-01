import React from 'react'
import { FaIndustry, FaCheckCircle, FaPhone, FaEnvelope, FaWarehouse, FaTruck, FaFlask } from 'react-icons/fa'
import { motion } from 'framer-motion'

const LandingPage = () => {
  const stats = [
    { number: "30,000 MT", label: "Total Storage Capacity" },
    { number: "10,000 MT", label: "Monthly Supply" },
    { number: "15,000 MT", label: "Monthly Supply Capacity" },
    { number: "20 MT/hr", label: "Automatic Dryers Capacity" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Innovators in Silica Sand & Resin Coated Sand
          </motion.h1>
          <p className="text-xl md:text-2xl mb-8">Taking the Industry Forward with Innovation & Technology</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* Stats Section */}
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
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <FaWarehouse className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Largest Mine Owner</h3>
              <p>India's largest lease holder of Silica Sand mines with vast reserves ensuring consistent supply</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <FaFlask className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Quality Certified</h3>
              <p>ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified company</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <FaTruck className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Reliable Supply</h3>
              <p>Robust infrastructure ensuring timely delivery and consistent quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
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
      </section>

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