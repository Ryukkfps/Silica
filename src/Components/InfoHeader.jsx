import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const InfoHeader = () => {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center space-x-6 text-sm">
          <a href="tel:+1234567890" className="flex items-center hover:text-gray-300 transition-colors">
            <FaPhone className="mr-2" />
            <span>+1 (234) 567-890</span>
          </a>
          <a href="mailto:info@silica.com" className="flex items-center hover:text-gray-300 transition-colors">
            <FaEnvelope className="mr-2" />
            <span>info@silica.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoHeader