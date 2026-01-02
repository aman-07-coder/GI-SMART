import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BachelorAIHero from '@/components/BachelorAIHero'
import ProgramOverview from '@/components/ProgramOverview'
import AICurriculumSection from '@/components/AICurriculumSection'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import WeekAtTetr from '@/components/WeekAtTetr'
import LearningInAction from '@/components/LearningInAction'
import AIProgramSpecializations from '@/components/AIProgramSpecializations'
import ProgramFaculty from '@/components/ProgramFaculty'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import AIFeeStructure from '@/components/AIFeeStructure'
import LivingCosts from '@/components/LivingCosts'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import TetrInTheNews from '@/components/TetrInTheNews'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BachelorScienceAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BachelorAIHero />
      <ProgramOverview />
      <AICurriculumSection />
      <AIDegreeAccreditation />
      <WeekAtTetr />
      <LearningInAction />
      <AIProgramSpecializations />
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

