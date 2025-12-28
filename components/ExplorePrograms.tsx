'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const programs = [
  {
    id: 1,
    title: 'Bachelor of Science in Artificial Intelligence',
    tags: ['4 Years', '7 Countries', 'US Degree (STEM)'],
    partner: 'ILLINOIS TECH',
    partnerText: 'Bachelor\'s Degree Awarded by Illinois Tech, Chicago',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
  },
  {
    id: 2,
    title: 'Bachelor of Management & Technology',
    tags: ['4 Years', '7 Countries', 'UK Degree'],
    partner: 'UBI BUSINESS SCHOOL',
    partnerText: 'In Collaboration with UBI, Brussels',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    id: 3,
    title: 'Master in Management of Technology',
    tags: ['1 Year', '3 Countries'],
    partner: 'UBI BUSINESS SCHOOL',
    partnerText: 'In Collaboration with UBI, Brussels',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
]

const ExplorePrograms = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Explore Programs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#1a5d3a] rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a5d3a] to-transparent" />
              </div>

              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 text-white text-xs px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <div className="text-xs font-semibold mb-1">{program.partner}</div>
                  <div className="text-xs text-white/80">{program.partnerText}</div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-white/80">Round 1 Deadline: 16th Feb 2026</p>
                </div>

                <Link href={`/programs/${program.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#ffd700] text-black py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-[#ffed4e] transition-colors"
                  >
                    LEARN MORE
                    <span>↗</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExplorePrograms

