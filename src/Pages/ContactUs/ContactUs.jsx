import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending message...');
    try {
      const messageText = `New Contact Form Submission:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
      toast.success('Message sent successfully!', { id: loadingToast });
      setFormData({ name: '', email: '', message: '' });
      const response = await fetch(`http://api.callmebot.com/text.php?user=Kayjiii&text=${messageText}`);

    } catch (error) {
      setFormData({ name: '', email: '', message: '' });
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019244205672!2d81.8594736153165!3d25.45333333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c1ebd8e9f7a4d%3A0x9b7c82f7f2e1c6a8!2s25%C2%B027%2712.4%22N+81%C2%B051%2734.1%22E!5e0!3m2!1sen!2sus!4v1633078279365!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded text-black"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded text-black"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded text-black"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;