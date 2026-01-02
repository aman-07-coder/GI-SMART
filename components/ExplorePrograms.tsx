'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const programs = [
  {
    id: 1,
    title: 'Bachelor of Artificial Intelligence Design (BAID)',
    tags: ['4 Years', '12 Terms', 'Hybrid Model'],
    partner: 'PEARSON HIGHER EDUCATION',
    partnerText: 'Anchor Publisher: Pearson Higher Education',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    link: '/programs/bachelor-ai-design',
  },
  {
    id: 2,
    title: 'Bachelor of Science in Artificial Intelligence',
    tags: ['4 Years', '7 Countries', 'US Degree (STEM)'],
    partner: 'ILLINOIS TECH',
    partnerText: 'Bachelor\'s Degree Awarded by Illinois Tech, Chicago',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    link: '/programs/bachelor-science-ai',
  },
  {
    id: 3,
    title: 'MSc in Applied AI & Data Systems',
    tags: ['2 Years', '6 Terms', 'Hybrid Model'],
    partner: 'RNCP LEVEL 7 / UAE NQF 9',
    partnerText: 'Dubai-first global program with Paris mobility',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/programs/master-applied-ai-data-systems',
  },
  {
    id: 4,
    title: 'BBA in Tourism & Hospitality Innovation',
    tags: ['4 Years', '12 Terms', 'Global Service'],
    partner: 'GI-SMART',
    partnerText: 'Smart tourism, luxury experiences & sustainable hospitality',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/programs/bachelor-tourism-hospitality',
  },
  {
    id: 5,
    title: 'BSc in Strategic Management',
    tags: ['4 Years', '12 Terms', 'Global Leadership'],
    partner: 'GI-SMART',
    partnerText: 'Strategic analysis, financial literacy & technological innovation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/programs/bachelor-strategic-management',
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

                <Link href={program.link || `/programs/${program.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#ffd700] text-black py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-[#ffed4e] transition-colors"
                  >
                    LEARN MORE
                    <FaExternalLinkAlt />
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

