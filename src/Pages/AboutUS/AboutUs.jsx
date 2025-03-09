import React, { useEffect } from 'react'
import Carousel from '../../Components/Carousel'

const AboutUs = () => {

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

  return (
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
    </section>
  )
}

export default AboutUs