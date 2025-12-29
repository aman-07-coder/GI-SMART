import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MScStrategicHero from '@/components/MScStrategicHero'
import ProgramOverview from '@/components/ProgramOverview'
import MScStrategicCurriculumSection from '@/components/MScStrategicCurriculumSection'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import LearningInAction from '@/components/LearningInAction'
import ProgramFaculty from '@/components/ProgramFaculty'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import AIFeeStructure from '@/components/AIFeeStructure'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import TetrInTheNews from '@/components/TetrInTheNews'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function MScStrategicManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <MScStrategicHero />
      <ProgramOverview 
        duration="18 Months"
        location="Multi-Campus Global"
        eligibility="Bachelor's Degree"
        format="6 Terms"
        startDate="Fall 2026"
      />
      <MScStrategicCurriculumSection />
      <AIDegreeAccreditation />
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

