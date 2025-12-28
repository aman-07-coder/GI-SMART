'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.programs-dropdown')) {
        setIsProgramsDropdownOpen(false)
      }
    }

    if (isProgramsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isProgramsDropdownOpen])

  const programsMenuItems = [
    { href: '/programs/bachelor-management-technology', label: 'Bachelor of Management & Technology' },
    { href: '/programs/bachelor-science-ai', label: 'Bachelor of Science in Artificial Intelligence' },
    { href: '/programs/master-management-technology', label: 'Master in Management of Technology' },
    { href: '/programs/high-school-gap-year', label: 'High School & Gap Year Programs' },
  ]

  const overviewMenuItems = [
    { href: '/programs/curriculum', label: 'Curriculum' },
    { href: '/programs/accreditation', label: 'Accreditation' },
    { href: '/programs/week-at-tetr', label: 'Week at Tetr' },
    { href: '/programs/courses', label: 'Courses' },
    { href: '/programs/faculty', label: 'Faculty' },
    { href: '/programs/admission', label: 'Admission' },
  ]

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/programs', label: 'PROGRAMS', hasDropdown: true },
    { href: '/faculty', label: 'FACULTY' },
    { href: '/student-life', label: 'STUDENT LIFE' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-sm shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/gi-removebg-preview.png" 
                alt="GI-SMART Logo" 
                className="h-12 w-auto object-contain"
              />
              {/* <span className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>GI-SMART</span> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div key={link.href} className="relative programs-dropdown">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                        className={`hover:text-[#1a5d3a] transition-colors duration-300 font-medium text-sm uppercase tracking-wide flex items-center gap-1 ${
                          isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                        }`}
                      >
                        {link.label}
                        <span className="text-xs">▼</span>
                      </button>
                      <AnimatePresence>
                        {isProgramsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50"
                          >
                            <div className="grid grid-cols-2 gap-8 px-6">
                              {/* Left Column - Programs */}
                              <div>
                                {programsMenuItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsProgramsDropdownOpen(false)}
                                    className="block py-2 text-gray-800 hover:text-[#1a5d3a] transition-colors text-sm"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                              
                              {/* Right Column - Undergraduate Overview */}
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-purple-600"></div>
                                  <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wide">
                                    UNDERGRADUATE OVERVIEW
                                  </h3>
                                </div>
                                {overviewMenuItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsProgramsDropdownOpen(false)}
                                    className="block py-2 text-gray-800 hover:text-[#1a5d3a] transition-colors text-sm"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`hover:text-[#1a5d3a] transition-colors duration-300 font-medium text-sm uppercase tracking-wide ${
                        isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffd700] text-black px-6 py-2 rounded font-semibold text-sm hover:bg-[#ffed4e] transition-colors"
                >
                  APPLY NOW
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-2 rounded font-semibold text-sm border-2 border-[#ffd700] hover:bg-gray-50 transition-colors"
                >
                  CONTACT US
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-800' : 'bg-white'
                  } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-800' : 'bg-white'
                  } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-800' : 'bg-white'
                  } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.hasDropdown ? (
                      <div>
                        <div className="text-gray-800 font-medium uppercase tracking-wide mb-2">
                          {link.label}
                        </div>
                        <div className="pl-4 space-y-2 mb-4">
                          {programsMenuItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-600 hover:text-[#1a5d3a] transition-colors text-sm"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <div className="pl-4 space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-purple-600"></div>
                            <h3 className="text-gray-800 font-semibold text-xs uppercase tracking-wide">
                              UNDERGRADUATE OVERVIEW
                            </h3>
                          </div>
                          {overviewMenuItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-600 hover:text-[#1a5d3a] transition-colors text-sm pl-4"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-800 hover:text-[#1a5d3a] transition-colors font-medium uppercase tracking-wide"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <Link href="/admissions">
                    <button className="w-full py-2 bg-[#ffd700] text-black rounded font-semibold text-sm">
                      APPLY NOW
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="w-full py-2 bg-white text-black rounded font-semibold text-sm border-2 border-[#ffd700]">
                      CONTACT US
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar
