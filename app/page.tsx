import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Curriculum from '@/components/Curriculum'
import ExplorePrograms from '@/components/ExplorePrograms'
import FourCampuses from '@/components/FourCampuses'
import WhyChooseGI from '@/components/WhyChooseGI'
import UniversityCollaborations from '@/components/UniversityCollaborations'
import TetrWay from '@/components/TetrWay'
import EducationTetrWay from '@/components/EducationTetrWay'
import Startups from '@/components/Startups'
import TetrNews from '@/components/TetrNews'
import BuildBusinesses from '@/components/BuildBusinesses'
import CareerLabs from '@/components/CareerLabs'
import BehindScenes from '@/components/BehindScenes'
import TetrTalks from '@/components/TetrTalks'
import Mentorship from '@/components/Mentorship'
import TetrLaunchpad from '@/components/TetrLaunchpad'
import DemoDays from '@/components/DemoDays'
import MeetTheTribe from '@/components/MeetTheTribe'
import StudentCreators from '@/components/StudentCreators'
import Immersions from '@/components/Immersions'
import AllInOneJourney from '@/components/AllInOneJourney'
import EventsAtTetr from '@/components/EventsAtTetr'
import ScholarshipsSection from '@/components/ScholarshipsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <Navbar />
      <Hero />
      <Curriculum />
      <ExplorePrograms />
      <FourCampuses />
      <WhyChooseGI />
      <UniversityCollaborations />
      <TetrWay />
      <EducationTetrWay />
      <Startups />
      <TetrNews />
      <BuildBusinesses />
      <CareerLabs />
      <BehindScenes />
      <TetrTalks />
      <Mentorship />
      <TetrLaunchpad />
      <DemoDays />
      <MeetTheTribe />
      <StudentCreators />
      <Immersions />
      <AllInOneJourney />
      <EventsAtTetr />
      <ScholarshipsSection />
      <Footer />
    </main>
  )
}
