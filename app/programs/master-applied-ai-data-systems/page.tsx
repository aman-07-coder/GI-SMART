import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MScAAIDSHero from '@/components/MScAAIDSHero'
import ProgramOverview from '@/components/ProgramOverview'
import MScAAIDSCurriculumSection from '@/components/MScAAIDSCurriculumSection'
import MScAAIDSSpecializations from '@/components/MScAAIDSSpecializations'
import MScAAIDSInfoSection from '@/components/MScAAIDSInfoSection'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import LearningInAction from '@/components/LearningInAction'
import ProgramFaculty from '@/components/ProgramFaculty'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import AIFeeStructure from '@/components/AIFeeStructure'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import TetrInTheNews from '@/components/TetrInTheNews'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function MScAppliedAIDataSystemsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <MScAAIDSHero />
      <ProgramOverview 
        duration="2 Years"
        location="Dubai (UAE) with Paris mobility"
        eligibility="Bachelor's Degree"
        format="Hybrid (6 Terms)"
        startDate="Q1 2026"
      />
      <MScAAIDSCurriculumSection />
      <MScAAIDSSpecializations />
      <MScAAIDSInfoSection />
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

