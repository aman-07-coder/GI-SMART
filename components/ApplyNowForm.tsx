'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
    country: 'India',
    mobile: '',
    agreeToPrivacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1a5d3a] rounded-lg p-8 md:p-10 shadow-2xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        Begin Your <span className="text-[#00ff88]">🚀 Tetr Application</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-white/90 mb-2 font-medium">
            Enter First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all"
            placeholder="Enter First Name"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-white/90 mb-2 font-medium">
            Enter Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all"
            placeholder="Enter Last Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white/90 mb-2 font-medium">
            Enter Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all"
            placeholder="Enter Email Address"
          />
        </div>

        <div>
          <label htmlFor="program" className="block text-white/90 mb-2 font-medium">
            What program are you interested in?*
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all"
          >
            <option value="">Select Program</option>
            <option value="bachelor-ai">Bachelor of Science - AI</option>
            <option value="bachelor-mt">Bachelor of Management & Technology</option>
            <option value="master-mt">Master of Management & Technology</option>
            <option value="gap-year">High School Gap Year</option>
          </select>
        </div>

        <div>
          <label htmlFor="country" className="block text-white/90 mb-2 font-medium">
            Country*
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all"
          >
            <option value="India">India</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="UAE">United Arab Emirates</option>
            <option value="Singapore">Singapore</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="mobile" className="block text-white/90 mb-2 font-medium">
            Mobile Number*
          </label>
          <div className="flex gap-2">
            <select
              id="countryCode"
              name="countryCode"
              className="px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all"
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+971">+971 (UAE)</option>
              <option value="+65">+65 (Singapore)</option>
            </select>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all"
              placeholder="Enter Mobile No"
            />
          </div>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agreeToPrivacy"
            name="agreeToPrivacy"
            checked={formData.agreeToPrivacy}
            onChange={handleChange}
            required
            className="mt-1 w-5 h-5 rounded border-gray-300 bg-white text-[#1a5d3a] focus:ring-[#00ff88]"
          />
          <label htmlFor="agreeToPrivacy" className="text-white text-sm leading-relaxed">
            I agree to my details being processed in accordance with Tetr's{' '}
            <a href="/privacy-policy" className="text-[#00ff88] hover:underline">
              Privacy Policy
            </a>
            , and for Tetr and its affiliates to use my personal data to provide me with further information about its programs.
          </label>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#ffd700] text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ffed4e] transition-all duration-300"
        >
          REGISTER
          <span>↗</span>
        </motion.button>

        <p className="text-center text-white text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-white font-semibold hover:underline">
            Log In
          </a>
        </p>
      </form>
    </motion.div>
  )
}

export default ApplyNowForm

