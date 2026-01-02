import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BScStrategicHero from '@/components/BScStrategicHero'
import ProgramOverview from '@/components/ProgramOverview'
import BScStrategicCurriculumSection from '@/components/BScStrategicCurriculumSection'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import WeekAtTetr from '@/components/WeekAtTetr'
import LearningInAction from '@/components/LearningInAction'
import ProgramFaculty from '@/components/ProgramFaculty'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import AIFeeStructure from '@/components/AIFeeStructure'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import TetrInTheNews from '@/components/TetrInTheNews'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BScStrategicManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BScStrategicHero />
      <ProgramOverview 
        duration="4 Years"
        location="Multi-Campus Global"
        eligibility="Grade XII"
        format="12 Terms (3 per Year)"
        startDate="Fall 2026"
      />
      <BScStrategicCurriculumSection />
      <AIDegreeAccreditation />
      <WeekAtTetr />
      <LearningInAction />
      <ProgramFaculty />
      <AdmissionsProcess />
      <AIFeeStructure />
      <ProgramScholarships />
      <ProgramCareers />
      <TetrInTheNews />
      <ProgramFAQ />
      <Footer />
    </main>
  )
}

