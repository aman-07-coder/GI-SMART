'use client'

import { motion } from 'framer-motion'

const videos = [
  {
    id: 1,
    title: "Parents' Message to the Tetr Tribe",
    description: "Meet the proud Parents of Tetr's first landmark cohort.",
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    id: 2,
    title: "Tetr Talks Ep 2: Sabeer Bhatia, Inventor of Email",
    description: "Sabeer Bhatia shares his insights on entrepreneurship, Silicon Valley and AI's future.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
  {
    id: 3,
    title: "Meet the Tetr Tribe: Class of 2028",
    description: "Our diverse cohort of 120 exceptional achievers come from 45 nations.",
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
  },
]

const TetrTalks = () => {
  return (
    <section className="py-24 bg-[#f0f8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${video.image})` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-2xl text-black ml-1">▶</span>
                  </motion.div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TetrTalks

