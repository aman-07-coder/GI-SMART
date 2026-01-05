'use client'

import Link from 'next/link'
import { FaExternalLinkAlt, FaInstagram, FaPlay, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#1a5d3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and CTA */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/gi-removebg-preview.png" 
                alt="GI-SMART Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-white font-bold text-xl">GI-SMART</span>
            </div>
            <Link href="/admissions">
              <button className="bg-[#ffd700] text-black px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-[#ffed4e] transition-colors mb-8">
                APPLY NOW
                <FaExternalLinkAlt />
              </button>
            </Link>
          </div>

          {/* About Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link href="/faculty" className="text-white/70 hover:text-white text-sm transition-colors">Faculty</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link href="/events" className="text-white/70 hover:text-white text-sm transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/news" className="text-white/70 hover:text-white text-sm transition-colors">News</Link></li>
              <li><Link href="/reviews" className="text-white/70 hover:text-white text-sm transition-colors">Reviews</Link></li>
              <li><Link href="/career-labs" className="text-white/70 hover:text-white text-sm transition-colors">Career Labs</Link></li>
              <li><Link href="/tuition-pathway" className="text-white/70 hover:text-white text-sm transition-colors">Tuition Pathway</Link></li>
            </ul>
          </div>

          {/* Reports/Brochures Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Reports & Brochures</h4>
            <ul className="space-y-2">
              <li><Link href="/reports/dropshipping" className="text-white/70 hover:text-white text-sm transition-colors">Dropshipping Report</Link></li>
              <li><Link href="/reports/d2c" className="text-white/70 hover:text-white text-sm transition-colors">D2C Report</Link></li>
              <li><Link href="/brochures/ug" className="text-white/70 hover:text-white text-sm transition-colors">UG Brochure</Link></li>
              <li><Link href="/brochures/pg" className="text-white/70 hover:text-white text-sm transition-colors">PG Brochure</Link></li>
            </ul>
          </div>

          {/* Experiences Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Experiences</h4>
            <ul className="space-y-2">
              <li><Link href="/experiences" className="text-white/70 hover:text-white text-sm transition-colors">Experiences at GI-SMART</Link></li>
              <li><Link href="/experiences/kickstarter" className="text-white/70 hover:text-white text-sm transition-colors">Kickstarter</Link></li>
              <li><Link href="/experiences/dropshipping" className="text-white/70 hover:text-white text-sm transition-colors">Dropshipping</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-6">
            <div className="flex flex-col gap-4 items-start md:items-end">
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <FaPlay className="text-white text-xl" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <FaLinkedin className="text-white text-xl" />
                </a>
              </div>
              <div className="text-white/80 text-sm">
                Email: info@gismart.org
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 mb-6"></div>

        {/* Bottom Footer */}
        <div className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex flex-wrap gap-6 text-white/70 text-sm">
              <Link href="/contact" className="hover:text-white transition-colors uppercase">CONTACT US</Link>
              <Link href="/tuition-pathway" className="hover:text-white transition-colors uppercase">TUITION PATHWAY</Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors uppercase">REFUND POLICY</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors uppercase">PRIVACY POLICY</Link>
              <Link href="/terms" className="hover:text-white transition-colors uppercase">TERMS & CONDITIONS</Link>
            </div>
            <div className="text-white/60 text-xs">
              Copyright© {new Date().getFullYear()} GI-SMART. All rights reserved.
            </div>
          </div>
          <div className="text-white/60 text-xs mb-4">
            * GI-SMART reserves the right to adjust the program location for this term due to prevailing visa restrictions. Participants will be notified accordingly.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


