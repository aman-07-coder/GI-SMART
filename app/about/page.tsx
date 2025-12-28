import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutTopHero from '@/components/AboutTopHero'
import AboutHero from '@/components/AboutHero'
import AcademicCouncil from '@/components/AcademicCouncil'
import AmbitiousMission from '@/components/AmbitiousMission'
import ContactSection from '@/components/ContactSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutTopHero />
      <AboutHero />
      <AcademicCouncil />
      <AmbitiousMission />
      <ContactSection />
      <Footer />
    </main>
  )
}

