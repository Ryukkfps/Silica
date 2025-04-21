import React from 'react'
import { useNavigate } from 'react-router-dom'
import p1 from '../../assets/p1.jpeg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';
import p6 from '../../assets/p6.jpeg';
import p7 from '../../assets/p7.jpeg';
import p8 from '../../assets/p8.jpeg';

// Gallery data organized by sections
const galleryData = {
  production: [
    { image: p1, },
    { image: p2, alt: "Processing Facility" },
    { image: p3, alt: "Manufacturing Process" }
  ],
  quality: [
    { image: p4,},
    { image: p5, alt: "Laboratory Testing" },
    { image: p6, alt: "Quality Control" }
  ],
  applications: [
    { image: p7, },
    { image: p8, alt: "Product Applications" },
    { image: p4, alt: "Specialized Solutions" }
  ]
};

const Gallery = ({ limitImages = false, section = null }) => {
  // If section is provided, only show images from that section
  // If limitImages is true, only show 3 images (for LandingPage)
  const navigate = useNavigate();

  // Function to handle image click
  const handleImageClick = () => {
    // Only navigate if we're on the landing page (limitImages is true)
    if (limitImages) {
      navigate('/gallery');
    }
  };

  let imagesToDisplay = [];

  if (limitImages) {
    // For LandingPage, show one from each section (3 total)
    imagesToDisplay = [
      galleryData.production[0],
      galleryData.quality[0],
      galleryData.applications[0]
    ];
  } else if (section) {
    // Show images from a specific section
    imagesToDisplay = galleryData[section] || [];
  } else {
    // Show all images from all sections
    imagesToDisplay = [
      ...galleryData.production,
      ...galleryData.quality,
      ...galleryData.applications
    ];
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>

        {!limitImages && !section && (
          <div className="mb-12">
            {/* <h3 className="text-2xl font-semibold text-center mb-8">Production Facilities</h3> */}
            <div className="grid md:grid-cols-3 gap-8">
              {galleryData.production.map((item, index) => (
                <div key={`production-${index}`} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:border-4 hover:border-blue-500 transition-transform duration-300">
                  <img src={item.image} alt={item.alt} className="w-full h-64 object-cover" />
                  {/* <div className="p-4 bg-gray-50">
                    <p className="text-center font-medium">{item.alt}</p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        )}

        {!limitImages && !section && (
          <div className="mb-12">
            {/* <h3 className="text-2xl font-semibold text-center mb-8">Quality Control</h3> */}
            <div className="grid md:grid-cols-3 gap-8">
              {galleryData.quality.map((item, index) => (
                <div key={`quality-${index}`} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:border-4 hover:border-blue-500 transition-transform duration-300">
                  <img src={item.image} alt={item.alt} className="w-full h-64 object-cover" />
                  {/* <div className="p-4 bg-gray-50">
                    <p className="text-center font-medium">{item.alt}</p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        )}

        {!limitImages && !section && (
          <div className="mb-12">
            {/* <h3 className="text-2xl font-semibold text-center mb-8">Applications</h3> */}
            <div className="grid md:grid-cols-3 gap-8">
              {galleryData.applications.map((item, index) => (
                <div key={`applications-${index}`} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:border-4 hover:border-blue-500 transition-transform duration-300">
                  <img src={item.image} alt={item.alt} className="w-full h-64 object-cover" />
                  {/* <div className="p-4 bg-gray-50">
                    <p className="text-center font-medium">{item.alt}</p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        )}

        {(limitImages || section) && (
          <div className="grid md:grid-cols-3 gap-8">
            {imagesToDisplay.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:border-4 hover:border-blue-500 transition-transform duration-300 cursor-pointer"
                onClick={handleImageClick}
              >
                <img src={item.image} alt={item.alt} className="w-full h-64 object-cover" />
                {limitImages && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-lg">View Gallery</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
