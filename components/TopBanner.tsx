'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const TopBanner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-[#1a5d3a] text-white py-3 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-sm font-medium">Round 1 Deadline: 16th Feb 2026</span>
        <Link href="/admissions">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffd700] text-black px-6 py-2 rounded font-semibold text-sm flex items-center gap-2 hover:bg-[#ffed4e] transition-colors"
          >
            APPLY NOW
            <span className="text-xs">↗</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default TopBanner

