'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendar, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'

const ApplyNowForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    passportNumber: '',
    passportExpiryDate: '',
    
    // Contact Information
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    
    // Academic Information
    programOfInterest: '',
    intake: '',
    previousEducationLevel: '',
    institutionName: '',
    graduationYear: '',
    gpaPercentage: '',
    englishProficiencyTest: '',
    testScore: '',
    workExperience: '',
    
    // Documents
    cvResume: null as File | null,
    passport: null as File | null,
    academicTranscripts: null as File | null,
    academicCertificates: null as File | null,
    englishTestCertificate: null as File | null,
    additionalInformation: '',
    
    agreeToPrivacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null
      setFormData(prev => ({ ...prev, [name]: file }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const steps = [
    { number: 1, label: 'PERSONAL' },
    { number: 2, label: 'CONTACT' },
    { number: 3, label: 'ACADEMIC' },
    { number: 4, label: 'DOCUMENTS' },
  ]

  return (
    <div className="max-w-4xl mx-auto bg-[#1a5d3a] rounded-lg shadow-xl overflow-hidden">
      {/* Progress Indicator */}
      <div className="bg-white px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-[#1a5d3a] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`text-xs font-semibold mt-2 ${
                    currentStep >= step.number ? 'text-[#1a5d3a]' : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-[#1a5d3a]' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Personal Information
              </h2>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="firstName" className="block text-white/90 font-semibold mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter First Name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white/90 font-semibold mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Last Name"
                  />
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="block text-white/90 font-semibold mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    />
                    <FaCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="gender" className="block text-white/90 font-semibold mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nationality" className="block text-white/90 font-semibold mb-2">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Nationality"
                  />
                </div>

                <div>
                  <label htmlFor="passportNumber" className="block text-white/90 font-semibold mb-2">
                    Passport Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Passport Number"
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="passportExpiryDate" className="block text-white/90 font-semibold mb-2">
                    Passport Expiry Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="passportExpiryDate"
                      name="passportExpiryDate"
                      value={formData.passportExpiryDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    />
                    <FaCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Contact Information
              </h2>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-white/90 font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/90 font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="address" className="block text-white/90 font-semibold mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Address"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-white/90 font-semibold mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter City"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-white/90 font-semibold mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Country"
                  />
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-white/90 font-semibold mb-2">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Zip/Postal Code"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Academic Information */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Academic Information
              </h2>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="programOfInterest" className="block text-white/90 font-semibold mb-2">
                    Program of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="programOfInterest"
                    name="programOfInterest"
                    value={formData.programOfInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select Program</option>
                    <option value="baid">Bachelor of Artificial Intelligence Design (BAID)</option>
                    <option value="bachelor-ai">Bachelor of Science in Artificial Intelligence</option>
                    <option value="msc-aaids">MSc in Applied AI & Data Systems</option>
                    <option value="bba-tourism">BBA in Tourism & Hospitality Innovation</option>
                    <option value="bsc-strategic">BSc in Strategic Management</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="intake" className="block text-white/90 font-semibold mb-2">
                    Intake <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="intake"
                    name="intake"
                    value={formData.intake}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select Intake</option>
                    <option value="fall-2026">Fall 2026</option>
                    <option value="spring-2027">Spring 2027</option>
                    <option value="fall-2027">Fall 2027</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="previousEducationLevel" className="block text-white/90 font-semibold mb-2">
                    Previous Education Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="previousEducationLevel"
                    name="previousEducationLevel"
                    value={formData.previousEducationLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select</option>
                    <option value="high-school">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="institutionName" className="block text-white/90 font-semibold mb-2">
                    Institution Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="institutionName"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Institution Name"
                  />
                </div>

                <div>
                  <label htmlFor="graduationYear" className="block text-gray-700 font-semibold mb-2">
                    Graduation Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="e.g., 2024"
                  />
                </div>

                <div>
                  <label htmlFor="gpaPercentage" className="block text-white/90 font-semibold mb-2">
                    GPA / Percentage
                  </label>
                  <input
                    type="text"
                    id="gpaPercentage"
                    name="gpaPercentage"
                    value={formData.gpaPercentage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="e.g., 3.5 or 85%"
                  />
                </div>

                <div>
                  <label htmlFor="englishProficiencyTest" className="block text-white/90 font-semibold mb-2">
                    English Proficiency Test <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="englishProficiencyTest"
                    name="englishProficiencyTest"
                    value={formData.englishProficiencyTest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select</option>
                    <option value="ielts">IELTS</option>
                    <option value="toefl">TOEFL</option>
                    <option value="duolingo">Duolingo</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="testScore" className="block text-white/90 font-semibold mb-2">
                    Test Score
                  </label>
                  <input
                    type="text"
                    id="testScore"
                    name="testScore"
                    value={formData.testScore}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="e.g., IELTS 5.5"
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="workExperience" className="block text-white/90 font-semibold mb-2">
                    Work Experience (if any)
                  </label>
                  <textarea
                    id="workExperience"
                    name="workExperience"
                    value={formData.workExperience}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#1a5d3a] focus:ring-2 focus:ring-[#1a5d3a]/20 transition-all resize-y"
                    placeholder="Describe your work experience..."
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Required Documents */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Required Documents
              </h2>

              <div className="bg-[#ffd700]/20 border-l-4 border-[#ffd700] p-4 mb-6 mt-6 rounded">
                <p className="text-sm text-white/90">
                  Please upload all required documents in PDF format (Max 5MB each)
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="cvResume" className="block text-white/90 font-semibold mb-2">
                    CV/Resume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="cvResume"
                    name="cvResume"
                    onChange={handleChange}
                    accept=".pdf"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="passport" className="block text-white/90 font-semibold mb-2">
                    Passport (Front & Back) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="passport"
                    name="passport"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="academicTranscripts" className="block text-white/90 font-semibold mb-2">
                    Academic Transcripts <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="academicTranscripts"
                    name="academicTranscripts"
                    onChange={handleChange}
                    accept=".pdf"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="academicCertificates" className="block text-white/90 font-semibold mb-2">
                    Academic Certificates <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="academicCertificates"
                    name="academicCertificates"
                    onChange={handleChange}
                    accept=".pdf"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="englishTestCertificate" className="block text-white/90 font-semibold mb-2">
                    English Proficiency Test Certificate
                  </label>
                  <input
                    type="file"
                    id="englishTestCertificate"
                    name="englishTestCertificate"
                    onChange={handleChange}
                    accept=".pdf"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInformation" className="block text-white/90 font-semibold mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInformation"
                    name="additionalInformation"
                    value={formData.additionalInformation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#1a5d3a] focus:ring-2 focus:ring-[#1a5d3a]/20 transition-all resize-y"
                    placeholder="Any additional information you would like to share..."
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 mt-8">
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleCheckboxChange}
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-300 bg-white text-[#1a5d3a] focus:ring-[#1a5d3a]"
                />
                <label htmlFor="agreeToPrivacy" className="text-white/90 text-sm leading-relaxed">
                  I agree to my details being processed in accordance with GI-SMART's{' '}
                  <a href="/privacy-policy" className="text-[#ffd700] hover:underline">
                    Privacy Policy
                  </a>
                  , and for GI-SMART and its affiliates to use my personal data to provide me with further information about its programs.
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/20">
          <button
            type="button"
            onClick={previousStep}
            disabled={currentStep === 1}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-white/20 text-white/50 cursor-not-allowed'
                : 'bg-white border-2 border-white text-[#1a5d3a] hover:bg-white/90'
            }`}
          >
            Previous
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-b from-[#1a5d3a] to-[#0a1f0f] text-white hover:from-[#0a1f0f] hover:to-[#1a5d3a] transition-all duration-300 flex items-center gap-2"
            >
              Next Step
              <FaExternalLinkAlt />
            </button>
          ) : (
            <button
              type="submit"
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-b from-[#1a5d3a] to-[#0a1f0f] text-white hover:from-[#0a1f0f] hover:to-[#1a5d3a] transition-all duration-300 flex items-center gap-2"
            >
              Submit Application
              <FaExternalLinkAlt />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default ApplyNowForm
