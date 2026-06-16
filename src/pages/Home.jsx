import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import AttendTrackModal from '../components/AttendTrackModal'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'
import { usePageTransitionEnter } from '../hooks/usePageTransition'

export default function Home() {
  const [attendTrackOpen, setAttendTrackOpen] = useState(false)
  usePageTransitionEnter()

  return (
    <>
      <Navbar />
      <ScrollToTopButton />

      <Hero />
      <About />
      <Skills />
      <Projects onOpenAttendTrack={() => setAttendTrackOpen(true)} />
      <AttendTrackModal isOpen={attendTrackOpen} onClose={() => setAttendTrackOpen(false)} />
      <Experience />
      <Contact />

      <Footer />
    </>
  )
}
