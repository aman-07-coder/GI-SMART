'use client'

import { motion } from 'framer-motion'
import { FaBullseye, FaGlobe, FaBriefcase, FaHandshake, FaRocket, FaMapMarkerAlt, FaCompass } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

const WhyChooseGI = () => {
  const reasons = [
    {
      icon: FaBullseye,
      title: '21st-Century Curriculum',
      description: 'AI, design, data, and innovation — aligned with the industries of tomorrow'
    },
    {
      icon: FaGlobe,
      title: 'Global Recognition',
      description: 'Built on Bologna and RNCP frameworks for European and international mobility'
    },
    {
      icon: FaBriefcase,
      title: 'Employability-Driven Learning',
      description: 'Each course mapped to high-demand career pathways'
    },
    {
      icon: FaHandshake,
      title: 'Multinational Cohorts',
      description: 'Experience an environment where collaboration crosses languages and borders'
    },
    {
      icon: FaRocket,
      title: 'Professional & Life Opportunities',
      description: 'Build international networks that extend far beyond graduation'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose GI-SMART?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Education is evolving — and so must you. At GI-SMART, you don't just learn how to adapt to the future; you become the one designing it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#f0f8f0] to-white rounded-xl p-8 border-2 border-[#8b1538]/20 hover:border-[#8b1538] transition-all duration-300"
            >
              <div className="mb-4">
                {reason.icon && <reason.icon className="text-5xl text-[#8b1538]" />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] rounded-xl p-8 md:p-12 text-white text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaRocket className="text-4xl text-[#ffd700]" />
            <h3 className="text-3xl md:text-4xl font-bold">
              Your Future Starts Here
            </h3>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether your ambition is to create, innovate, lead, or explore, our programs are your launchpad to a world without boundaries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <FaStar className="text-xl text-[#ffd700]" />
              <span>Applications Now Open</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-xl text-[#ffd700]" />
              <span>Choose Your Anchor Campus</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-xl text-[#ffd700]" />
              <span>Study Across Four Continents</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCompass className="text-xl text-[#ffd700]" />
              <span>Shape the Future of AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseGI

