'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[125px] bg-gradient-to-b from-[#0a1f0f] to-[#1a5d3a]">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-4">
              <p className="text-lg md:text-xl text-[#ffd700] font-semibold mb-2">Welcome to the Future of Education</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
                Where Intelligence Meets Imagination
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-4">
              GI-SMART – The Global Institute for Strategic Management & Advanced Research Technologies
            </p>
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              In an age defined by artificial intelligence, data systems, and digital transformation, GI-SMART is more than an academic institution — it's a global innovation ecosystem. We are cultivating a new generation of thinkers, designers, and strategists who will lead the industries of the 21st century.
            </p>
            
            <Link href="/programs/bachelor-ai-design">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-lg mb-6 flex items-center gap-2 hover:bg-[#ffed4e] transition-all duration-300"
              >
                EXPLORE CURRICULUM
                <FaExternalLinkAlt />
              </motion.button>
            </Link>

            <p className="text-white/80 text-sm">
              Round 1 Deadline: 16th Feb 2026
            </p>
          </motion.div>

          {/* Right Content - Video/Screen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="aspect-video bg-gray-900 rounded relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h2 className="text-3xl font-bold text-[#ffd700] mb-4">
                      Letter to my 'Classmates'
                    </h2>
                    <p className="text-white/80">
                      A celebration of what is to come and who will be with us in each of those moments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Award Badge */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-[#1a5d3a] text-white p-4 rounded rotate-90 origin-center">
              <div className="text-xs font-bold mb-1">GOLD WINNER</div>
              <div className="text-xs">QS Gold Winner: Most Innovative Business School of 2025</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
