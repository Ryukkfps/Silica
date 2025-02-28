import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">Silica</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                Products
                <FaChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/products/category1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Category 1
                    </Link>
                    <Link
                      to="/products/category2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Category 2
                    </Link>
                    <Link
                      to="/products/category3"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Category 3
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
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
            <Link to="/" className="block py-2 text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-900">About</Link>
            
            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="flex items-center w-full py-2 text-gray-600 hover:text-gray-900"
              >
                Products
                <FaChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {dropdownOpen && (
                <div className="pl-4">
                  <Link
                    to="/products/category1"
                    className="block py-2 text-gray-600 hover:text-gray-900"
                  >
                    Category 1
                  </Link>
                  <Link
                    to="/products/category2"
                    className="block py-2 text-gray-600 hover:text-gray-900"
                  >
                    Category 2
                  </Link>
                  <Link
                    to="/products/category3"
                    className="block py-2 text-gray-600 hover:text-gray-900"
                  >
                    Category 3
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar