import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BachelorAIDHero from '@/components/BachelorAIDHero'
import ProgramOverview from '@/components/ProgramOverview'
import BAIDCurriculumSection from '@/components/BAIDCurriculumSection'
import BAIDSpecializations from '@/components/BAIDSpecializations'
import BAIDCampusMobility from '@/components/BAIDCampusMobility'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import WeekAtTetr from '@/components/WeekAtTetr'
import LearningInAction from '@/components/LearningInAction'
import ProgramFaculty from '@/components/ProgramFaculty'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import AIFeeStructure from '@/components/AIFeeStructure'
import LivingCosts from '@/components/LivingCosts'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import TetrInTheNews from '@/components/TetrInTheNews'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BachelorAIDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BachelorAIDHero />
      <ProgramOverview 
        duration="4 Years"
        location="Hybrid (Online + In-Lab + Studio)"
        eligibility="Grade XII"
        format="Trimester System"
        startDate="Fall 2026"
      />
      <BAIDCurriculumSection />
      <BAIDCampusMobility />
      <BAIDSpecializations />
      <AIDegreeAccreditation />
      <WeekAtTetr />
      <LearningInAction />
      <ProgramFaculty />
      <AdmissionsProcess />
      <AIFeeStructure />
      <LivingCosts />
      <ProgramScholarships />
      <ProgramCareers />
      <TetrInTheNews />
      <ProgramFAQ />
      <Footer />
    </main>
  )
}

