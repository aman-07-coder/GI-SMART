'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const FourCampuses = () => {
  const campuses = [
    {
      id: 1,
      name: 'Paris',
      description: 'The creative capital of Europe — design thinking, culture, and advanced AI research',
      specialization: 'AI Design & Cognitive Systems',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      name: 'Dubai',
      description: 'The hub of innovation and entrepreneurship in the smart economy',
      specialization: 'Data Analytics & Business Intelligence',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 3,
      name: 'Germany',
      description: 'The home of precision engineering and robotics excellence',
      specialization: 'Robotics, Automation & Mechatronics',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 4,
      name: 'Bucharest',
      description: 'The rising European tech hub for digital transformation and systems integration',
      specialization: 'Systems Innovation & Applied Research',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-green-500 to-emerald-600'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f0f8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Four Campuses, One Global Identity
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At GI-SMART, your education transcends borders. Each campus offers a unique cultural and professional context — yet all share a unified academic vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {campuses.map((campus, index) => (
            <motion.div
              key={campus.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${campus.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{campus.name}</h3>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className={`w-full px-3 py-1.5 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${campus.color} text-white text-center whitespace-nowrap`}>
                  {campus.specialization}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                  {campus.description}
                </p>
                <div className="pt-4 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    Choose as your anchor campus or rotate during your program
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Global Agility Through Multi-Campus Learning
          </h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            This structure ensures every graduate embodies global agility — academically strong, culturally aware, and professionally adaptable. By graduation, you will not only be educated globally, but also connected globally — equipped with the experience to live and work anywhere in the world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FourCampuses

