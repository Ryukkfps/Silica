import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">Premiers Silica Industries</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 relative z-10">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 relative z-10">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 relative z-10">Contact</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-gray-900 relative z-10">Gallery</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none relative z-10"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-gray-600 hover:text-gray-900 relative z-10">Home</Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-900 relative z-10">About</Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-900 relative z-10">Contact</Link>
            <Link to="/gallery" className="block py-2 text-gray-600 hover:text-gray-900 relative z-10">Gallery</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar