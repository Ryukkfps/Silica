import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (name) => {
    setFocused(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleBlur = (name) => {
    // Keep focus state true if there's a value
    if (formData[name]) {
      setFocused(prev => ({
        ...prev,
        [name]: true
      }));
    } else {
      setFocused(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const data = new FormData(form);
  
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxY8SvWSC1TVCzYDcBLrwq0MOGb5pJsA0JW-NqnuWop2veZY-Nv4Ak5RfPaR7TJ14Hj/exec",
        data
      );
  
      const result = response.data;
      if (result.result === "success") {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Form submission failed:", result.error);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <section className="py-16 bg-white">
      <Toaster position="top-right" toastOptions={{
        success: {
          style: {
            background: '#10B981',
            color: 'white',
          },
        },
        error: {
          style: {
            background: '#EF4444',
            color: 'white',
          },
        },
        loading: {
          style: {
            background: '#3B82F6',
            color: 'white',
          },
        },
      }} />
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <span className="text-xl">📞</span>
              <a
                href="https://wa.me/+919415237103?text=I%20Have%20an%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
              >
                +91 9415237103
              </a>
              <a
                href="https://wa.me/+919721016161?text=I%20Have%20an%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
              >
                +91 9721016161
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl">✉️</span>
              <span>info@premiersilicaindustries.com</span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">Our Address</h3>
              <p>George Town,</p>
              <p>Prayagraj, Uttar Pradesh, India</p>
              <p>PIN: 211002</p>
            </div>
            <div className="mt-4">
              <iframe
                //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019244205672!2d81.8594736153165!3d25.45333333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c1ebd8e9f7a4d%3A0x9b7c82f7f2e1c6a8!2s25%C2%B027%2712.4%22N+81%C2%B051%2734.1%22E!5e0!3m2!1sen!2sus!4v1633078279365!5m2!1sen!2sus"
                //width="100%"
                //height="300"
                //style={{ border: 0 }}
                //allowFullScreen=""
                //loading="lazy"
                //title="Google Maps Location"
              ></iframe>
            </div>
          </div>
          <form className="space-y-6 bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Send Us a Message</h3>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                placeholder="Your Name"
                className={`w-full pl-10 pr-4 py-3 border ${focused.name ? 'border-blue-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                placeholder="Your Email"
                className={`w-full pl-10 pr-4 py-3 border ${focused.email ? 'border-blue-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={() => handleBlur('phone')}
                placeholder="Your Phone Number (Optional)"
                className={`w-full pl-10 pr-4 py-3 border ${focused.phone ? 'border-blue-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaComment className="text-gray-400" />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                placeholder="Subject"
                className={`w-full pl-10 pr-4 py-3 border ${focused.subject ? 'border-blue-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none">
                <FaComment className="text-gray-400" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                placeholder="Your Message"
                rows="5"
                className={`w-full pl-10 pr-4 py-3 border ${focused.message ? 'border-blue-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                required
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;