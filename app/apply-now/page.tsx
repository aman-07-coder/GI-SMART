import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ApplyNowPromo from '@/components/ApplyNowPromo'
import ApplyNowForm from '@/components/ApplyNowForm'
import ScholarshipBanner from '@/components/ScholarshipBanner'
import ThreeStepProcess from '@/components/ThreeStepProcess'
import MeetTheTribe from '@/components/MeetTheTribe'
import TetrInNews from '@/components/TetrInNews'
import Scholarships from '@/components/Scholarships'

export default function ApplyNowPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScholarshipBanner />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ApplyNowPromo />
            <ApplyNowForm />
          </div>
        </div>
      </section>

      <ThreeStepProcess />
      <MeetTheTribe />
      <TetrInNews />
      <Scholarships />
      <Footer />
    </main>
  )
}

