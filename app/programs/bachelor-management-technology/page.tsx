import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BachelorProgramHero from '@/components/BachelorProgramHero'
import CurriculumSection from '@/components/CurriculumSection'
import DegreeAccreditation from '@/components/DegreeAccreditation'
import WeekAtTetr from '@/components/WeekAtTetr'
import LearningInAction from '@/components/LearningInAction'
import ProgramSpecializations from '@/components/ProgramSpecializations'
import ProgramFaculty from '@/components/ProgramFaculty'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import FeeStructure from '@/components/FeeStructure'
import LivingCosts from '@/components/LivingCosts'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import TetrInTheNews from '@/components/TetrInTheNews'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BachelorManagementTechnologyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BachelorProgramHero />
      <CurriculumSection />
      <DegreeAccreditation />
      <WeekAtTetr />
      <LearningInAction />
      <ProgramSpecializations />
      <ProgramFaculty />
      <AdmissionsProcess />
      <FeeStructure />
      <LivingCosts />
      <ProgramScholarships />
      <ProgramCareers />
      <TetrInTheNews />
      <ProgramFAQ />
      <Footer />
    </main>
  )
}

