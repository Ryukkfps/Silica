import React from 'react'

const Gallery = () => {
  return (
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
  )
}

export default Gallery
