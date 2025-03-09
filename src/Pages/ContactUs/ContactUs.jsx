import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-white">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019244205672!2d144.9630578153165!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633078279365!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
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
  );
};

export default ContactUs;