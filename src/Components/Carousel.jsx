import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const Carousel = ({
  data,
  height = '250px',
  interval = 5000,
  showOverlay = true,
  overlayColor = 'bg-black/50',
  dotColor = 'bg-yellow-500',
  inactiveDotColor = 'bg-white/50'
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, interval);
    return () => clearInterval(timer);
  }, [data.length, interval]);

  return (
    <div style={{ height }} className="w-full bg-gray-200 rounded-lg overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {showOverlay && <div className={`absolute inset-0 ${overlayColor} z-10`} />}
          <img 
            src={data[currentSlide].image} 
            alt={data[currentSlide].alt || ''}
            className="absolute inset-0 w-full h-full object-cover" 
          />
          {data[currentSlide].content && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              {data[currentSlide].content}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? `${dotColor} scale-125` : inactiveDotColor
            }`}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
      content: PropTypes.node
    })
  ).isRequired,
  height: PropTypes.string,
  interval: PropTypes.number,
  showOverlay: PropTypes.bool,
  overlayColor: PropTypes.string,
  dotColor: PropTypes.string,
  inactiveDotColor: PropTypes.string
};

export default Carousel;
