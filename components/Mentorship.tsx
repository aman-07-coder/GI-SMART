'use client'

import { motion } from 'framer-motion'

const Mentorship = () => {
  return (
    <section className="py-24 bg-[#1a5d3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Access Real-Time Mentorship from <span className="font-bold">100+ Experts</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From <strong>cybersecurity</strong> to <strong>generative AI</strong>, our mentors span a wide range of industries from across the globe.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-4 h-4 bg-pink-500 rounded mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 leading-relaxed">
                    Whether you're building a startup or exploring jobs, our mentors provide <strong>tailored 1:1 mentorship</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-4 h-4 bg-blue-400 rounded mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 leading-relaxed">
                    Mentors can assist with <strong>last-minute assignments</strong>, interview prep or even emotional support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Placeholder Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square border-4 border-[#00ff88] rounded-lg bg-transparent flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-[#00ff88] text-4xl mb-4">👥</div>
                <p className="text-white/60 text-sm">Mentorship Platform</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mentorship

