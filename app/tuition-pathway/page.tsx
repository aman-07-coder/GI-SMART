'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function TuitionPathwayPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-[125px] pb-16 bg-gradient-to-b from-[#0a1f0f] to-[#1a5d3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              GI-SMART Program Investment Overview
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A progressive academic pathway that empowers learners to develop the skills, mindset, and global perspective required to thrive in the era of AI, Data Analytics, and Intelligent Systems Design.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The Global Institute for Strategic Management and Advanced Research Technologies (GI‑SMART) offers a progressive academic pathway that empowers learners to develop the skills, mindset, and global perspective required to thrive in the era of Artificial Intelligence, Data Analytics, and Intelligent Systems Design. Each program tier is structured for maximum flexibility, career alignment, and international opportunity.
          </p>
        </motion.div>

        {/* Undergraduate Pathway */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-[#f0f8f0] rounded-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              1️⃣ Undergraduate Pathway — Bachelor of Artificial Intelligence Design (BAID)
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#1a5d3a] mb-6">
              A Modular Learning Journey — Tailored to Your Ambition
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              Every learner's journey is unique. GI‑SMART offers a progressive pathway structure that allows students to begin at the level that best matches their goals and resources.
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-[#1a5d3a] text-white">
                    <th className="px-6 py-4 text-left font-bold">Tier</th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                    <th className="px-6 py-4 text-left font-bold">Award</th>
                    <th className="px-6 py-4 text-left font-bold">Tuition (€)</th>
                    <th className="px-6 py-4 text-left font-bold">Key Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Certificate</td>
                    <td className="px-6 py-4 text-gray-700">1 Year</td>
                    <td className="px-6 py-4 text-gray-700">Certificate in Artificial Intelligence Design Foundations</td>
                    <td className="px-6 py-4 font-bold text-[#1a5d3a]">€15,000</td>
                    <td className="px-6 py-4 text-gray-700">Ideal for entry-level learners seeking a foundation in AI Design and creative technologies. Credits fully transferable toward the Diploma or Degree.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Diploma</td>
                    <td className="px-6 py-4 text-gray-700">2 Years</td>
                    <td className="px-6 py-4 text-gray-700">Diploma in Applied Artificial Intelligence Design</td>
                    <td className="px-6 py-4 font-bold text-[#1a5d3a]">€25,000</td>
                    <td className="px-6 py-4 text-gray-700">A comprehensive 2-year qualification focusing on practical applications of AI in design and innovation.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-[#f0f8f0]">
                    <td className="px-6 py-4 font-semibold text-gray-900">Degree</td>
                    <td className="px-6 py-4 text-gray-700">4 Years</td>
                    <td className="px-6 py-4 text-gray-700">Bachelor of Artificial Intelligence Design</td>
                    <td className="px-6 py-4 font-bold text-[#1a5d3a]">€40,000</td>
                    <td className="px-6 py-4 text-gray-700">A globally recognized four-year degree integrating technology, design, and strategy for the AI-driven world. Includes cross-campus mobility options (Paris, Dubai, Germany, Bucharest).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#ffd700]/20 border-l-4 border-[#ffd700] p-4 rounded">
              <p className="text-gray-800">
                <span className="font-bold">💡 Students may begin with the Certificate or Diploma and later "stack" their learning toward the full BAID degree</span> — maintaining credit continuity and academic momentum.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Graduate Pathway */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-[#1a5d3a] to-[#0a1f0f] rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              2️⃣ Graduate Pathway — Master of Science in Data Analytics & Intelligent Systems Design
            </h2>

            {/* Table */}
            <div className="overflow-x-auto mt-8">
              <table className="w-full bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-white/20">
                    <th className="px-6 py-4 text-left font-bold">Track</th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                    <th className="px-6 py-4 text-left font-bold">Tuition (€)</th>
                    <th className="px-6 py-4 text-left font-bold">Eligibility & Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/20">
                  <tr className="hover:bg-white/10">
                    <td className="px-6 py-4 font-semibold">Standard Track</td>
                    <td className="px-6 py-4">18 Months</td>
                    <td className="px-6 py-4 font-bold text-[#ffd700]">€30,000</td>
                    <td className="px-6 py-4">Open to graduates from any recognized undergraduate program. Comprehensive MSc covering Data Analytics, Machine Learning, and AI-driven strategic design.</td>
                  </tr>
                  <tr className="hover:bg-white/10">
                    <td className="px-6 py-4 font-semibold">Accelerated Track</td>
                    <td className="px-6 py-4">12–14 Months</td>
                    <td className="px-6 py-4 font-bold text-[#ffd700]">€20,000</td>
                    <td className="px-6 py-4">Exclusive to BAID graduates. Recognizes prior coursework and professional competencies developed during BAID for faster completion and reduced tuition.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-white/10 border-l-4 border-[#ffd700] p-6 rounded">
              <p className="text-xl font-bold mb-2">🎓 Dual-Enrollment Advantage:</p>
              <p className="text-white/90">
                Enroll simultaneously in both the BAID and MSc programs and benefit from a combined tuition of <span className="font-bold text-[#ffd700]">€55,000</span> (instead of €60,000).
              </p>
            </div>
          </div>
        </motion.section>

        {/* Comprehensive Study Packages */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white border-2 border-[#1a5d3a] rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              3️⃣ Comprehensive Study Packages (Tuition + Accommodation)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1a5d3a] text-white">
                    <th className="px-6 py-4 text-left font-bold">Package</th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                    <th className="px-6 py-4 text-left font-bold">Includes</th>
                    <th className="px-6 py-4 text-left font-bold">Total (€)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">BAID + MSc Integrated Experience</td>
                    <td className="px-6 py-4 text-gray-700">5.5 Years</td>
                    <td className="px-6 py-4 text-gray-700">Tuition, premium student accommodation, campus access, and academic support</td>
                    <td className="px-6 py-4 font-bold text-[#1a5d3a] text-xl">€120,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Full BAID Residential Package</td>
                    <td className="px-6 py-4 text-gray-700">4 Years</td>
                    <td className="px-6 py-4 text-gray-700">Tuition + accommodation for all four years</td>
                    <td className="px-6 py-4 font-bold text-[#1a5d3a] text-xl">€90,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-gray-100 p-4 rounded">
              <p className="text-gray-700">
                <span className="font-bold">💬 Tuition fees do not include travel or personal expenses.</span> All accommodation options are safe, modern, and located near each GI‑SMART campus.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#1a5d3a] to-[#0a1f0f] rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Highlights for Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#ffd700]">Global Mobility & Multi-Campus Experience</h3>
                <p className="text-white/90">Anchor in one city, explore the others.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#ffd700]">Financial Flexibility & Tiered Pathways</h3>
                <p className="text-white/90">Start with a Certificate and advance seamlessly.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#ffd700]">Career ROI</h3>
                <p className="text-white/90">Each tier aligned with high-demand roles in AI, ML, Data Science, and Creative Technology.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#ffd700]">Immigration Pathways</h3>
                <p className="text-white/90">Graduates may explore post-study career opportunities in their anchor campus region.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#ffd700]">Personalized Learning</h3>
                <p className="text-white/90">Small cohorts (40–50 early years, 30–35 advanced years) ensure interactive mentorship.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  )
}

