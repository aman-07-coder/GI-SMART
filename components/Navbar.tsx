'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOverHero, setIsOverHero] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false)

  useEffect(() => {
    const checkIfOverGreenBackground = () => {
      const navbarHeight = 64 // navbar height in pixels
      const scrollPosition = window.scrollY
      const navbarBottom = scrollPosition + navbarHeight
      
      // Find all sections with dark backgrounds
      const darkSections = document.querySelectorAll('section[class*="bg-gradient-to-b"], section[class*="bg-[#0a1628]"], section[class*="bg-[#0a0a0a]"]')
      
      // Check if navbar is over any green section
      let isOverGreen = false
      
      darkSections.forEach((section) => {
        const element = section as HTMLElement
        const sectionTop = element.offsetTop
        const sectionBottom = sectionTop + element.offsetHeight
        
        // Check if navbar bottom is within the green section
        if (navbarBottom >= sectionTop && scrollPosition < sectionBottom) {
          isOverGreen = true
        }
      })
      
      setIsOverHero(isOverGreen)
    }

    // Check initial state
    checkIfOverGreenBackground()
    
    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkIfOverGreenBackground()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    // Also check on resize in case layout changes
    window.addEventListener('resize', throttledHandleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      window.removeEventListener('resize', throttledHandleScroll)
    }
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
    { href: '/programs/bachelor-ai-design', label: 'Bachelor of Artificial Intelligence Design (BAID)' },
    { href: '/programs/bachelor-science-ai', label: 'Bachelor of Science in Artificial Intelligence' },
    { href: '/programs/master-applied-ai-data-systems', label: 'MSc in Applied AI & Data Systems' },
    { href: '/programs/bachelor-tourism-hospitality', label: 'BBA in Tourism & Hospitality Innovation' },
    { href: '/programs/bachelor-strategic-management', label: 'BSc in Strategic Management' },
  ]

  const overviewMenuItems = [
    { href: '/programs/curriculum', label: 'Curriculum' },
    { href: '/programs/accreditation', label: 'Accreditation' },
    { href: '/programs/week-at-GI-SMART', label: 'Week at GI-SMART' },
    { href: '/programs/courses', label: 'Courses' },
    { href: '/programs/faculty', label: 'Faculty' },
    { href: '/programs/admission', label: 'Admission' },
  ]

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/programs', label: 'PROGRAMS', hasDropdown: true },
    { href: '/admissions', label: 'ADMISSIONS' },
    { href: '/international', label: 'INTERNATIONAL' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm ${
          isOverHero 
            ? 'bg-white/50 shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
                        className={`transition-colors duration-300 font-medium text-sm uppercase tracking-wide flex items-center gap-1 ${
                          isOverHero 
                            ? 'text-black hover:text-[#8b1538]' 
                            : 'text-white hover:text-[#ffd700] drop-shadow-md'
                        }`}
                      >
                        {link.label}
                      </button>
                      <AnimatePresence>
                        {isProgramsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-[90vw] max-w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-6">
                              {/* Left Column - Programs */}
                              <div>
                                {programsMenuItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsProgramsDropdownOpen(false)}
                                    className="block py-2 text-gray-900 font-bold hover:text-[#8b1538] transition-colors text-sm"
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
                                  <div
                                    key={item.href}
                                    className="block py-2 text-gray-900 font-bold text-sm cursor-default"
                                  >
                                    {item.label}
                                  </div>
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
                      className={`transition-colors duration-300 font-medium text-sm uppercase tracking-wide ${
                        isOverHero 
                          ? 'text-black hover:text-[#8b1538]' 
                          : 'text-white hover:text-[#ffd700] drop-shadow-md'
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
                isOverHero ? 'text-black' : 'text-white'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isOverHero ? 'bg-black' : 'bg-white'
                  } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isOverHero ? 'bg-black' : 'bg-white'
                  } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isOverHero ? 'bg-black' : 'bg-white'
                  } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              />
              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl md:hidden overflow-y-auto"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <img 
                      src="/gi-removebg-preview.png" 
                      alt="GI-SMART Logo" 
                      className="h-8 sm:h-10 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-800 hover:text-gray-600 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="px-4 py-6 space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.href} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                      {link.hasDropdown ? (
                        <div>
                          <div className="text-gray-800 font-semibold uppercase tracking-wide mb-3 text-sm">
                            {link.label}
                          </div>
                          <div className="space-y-2 mb-4">
                            {programsMenuItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-700 hover:text-[#8b1538] transition-colors text-xs sm:text-sm pl-2"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-3 pl-2">
                              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                              <h3 className="text-gray-800 font-semibold text-[10px] sm:text-xs uppercase tracking-wide">
                                UNDERGRADUATE OVERVIEW
                              </h3>
                            </div>
                            {overviewMenuItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-700 hover:text-[#8b1538] transition-colors text-xs sm:text-sm pl-4"
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
                          className="block py-3 text-gray-800 hover:text-[#8b1538] transition-colors font-semibold uppercase tracking-wide text-sm"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* CTA Buttons */}
                  <div className="pt-6 space-y-3 border-t border-gray-200 mt-4">
                    <Link href="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full py-3 bg-[#ffd700] text-black rounded font-semibold text-sm hover:bg-[#ffed4e] transition-colors">
                        APPLY NOW
                      </button>
                    </Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full py-3 bg-white text-black rounded font-semibold text-sm border-2 border-[#ffd700] hover:bg-gray-50 transition-colors">
                        CONTACT US
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar
