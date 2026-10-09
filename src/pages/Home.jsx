import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="portfolio-site">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
