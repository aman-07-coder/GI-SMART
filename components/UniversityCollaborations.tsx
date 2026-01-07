'use client'

import { motion } from 'framer-motion'

const universities = [
  { name: 'Cornell University' },
  { name: 'UBI Business School' },
  { name: 'Illinois Tech' },
  { name: 'IIT Delhi / FITT' },
]

const UniversityCollaborations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our University <span className="italic font-bold">Collaborations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eligible GI-SMART students can enroll in programs at one of our highly ranked university partners.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 border-t border-b border-gray-300 py-12">
          {universities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-gray-900 border-r border-gray-300 pr-8 last:border-r-0 last:pr-0"
            >
              {university.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UniversityCollaborations

