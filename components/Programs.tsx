'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const programs = [
  {
    id: 1,
    title: 'Global MBA',
    duration: '2 Years',
    description: 'Comprehensive business leadership program with international exposure and industry immersion.',
    features: ['Global Campus', 'Industry Projects', 'Mentorship'],
  },
  {
    id: 2,
    title: 'Executive Education',
    duration: '6-12 Months',
    description: 'Advanced programs for working professionals seeking career acceleration.',
    features: ['Flexible Schedule', 'Online Options', 'Networking'],
  },
  {
    id: 3,
    title: 'Undergraduate Programs',
    duration: '4 Years',
    description: 'Foundation-building programs with modern curriculum and practical experience.',
    features: ['Internships', 'Study Abroad', 'Research'],
  },
  {
    id: 4,
    title: 'Specialized Certificates',
    duration: '3-6 Months',
    description: 'Focused skill development in emerging business domains.',
    features: ['Industry Focused', 'Certification', 'Career Support'],
  },
]

const ProgramCard = ({ program, index }: { program: typeof programs[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
            {program.title}
          </h3>
          <span className="text-sm text-white/60 font-medium">{program.duration}</span>
        </div>

        <p className="text-white/70 mb-6 leading-relaxed">{program.description}</p>

        <ul className="space-y-2 mb-6">
          {program.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-white/80 text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        <Link href={`/programs/${program.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-white/10 hover:bg-gradient-primary text-white hover:text-dark font-semibold rounded-lg transition-all duration-300 border border-white/20 hover:border-transparent"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

const Programs = () => {
  return (
    <section className="py-24 bg-dark-light/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Programs</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose from a diverse range of programs designed to shape tomorrow's leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs

