'use client'

import { motion } from 'framer-motion'

const CareerLabs = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Career Labs at <span className="italic font-bold">Tetr</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '💼',
              color: 'bg-pink-500',
              title: 'Shadow Top CXOs & Teams',
              description: 'Work with business leaders and companies while enriching your resume.',
            },
            {
              icon: '📋',
              color: 'bg-blue-400',
              title: 'Work on Real Life Assignments',
              description: 'From EV mobility to large real estate deals, witness the world change firsthand',
            },
            {
              icon: '🤝',
              color: 'bg-purple-500',
              title: 'Collaborate Across Functions',
              description: 'Gain executive-level exposure by working with cross-functional teams and understanding what drives real business success',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center text-3xl mb-6 transform rotate-[-5deg]`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] bg-cover bg-center" />
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a5d3a] text-white p-12 rounded-lg"
          >
            <h3 className="text-3xl font-bold mb-8">In Term Internships</h3>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-5xl font-bold text-[#ffd700] mb-2">110+</div>
                <div className="text-white/80">Internships (in the first year)</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#ffd700] mb-2">15+</div>
                <div className="text-white/80">Countries</div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-8">Career Outcomes</h3>
            <div className="mb-4">
              <div className="text-white/80 mb-2">Bachelor's Program</div>
              <div className="text-5xl font-bold text-[#ffd700]">131.760 USD</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CareerLabs

