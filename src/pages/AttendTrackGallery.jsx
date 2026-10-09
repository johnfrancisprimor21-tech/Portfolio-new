import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from '../components/Icons'
import Lightbox from '../components/Lightbox'
import { galleryItems } from '../data/attendtrack'

export default function AttendTrackGallery() {
  const { theme, toggleTheme } = useTheme()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const isLightboxOpen = lightboxIndex !== null

  const closeLightbox = () => setLightboxIndex(null)
  const stepLightbox = (direction) =>
    setLightboxIndex((index) => (index === null ? index : (index + direction + galleryItems.length) % galleryItems.length))

  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isLightboxOpen])

  useEffect(() => {
    if (!isLightboxOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') stepLightbox(-1)
      if (event.key === 'ArrowRight') stepLightbox(1)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen])

  const [featured, ...screens] = galleryItems

  return (
    <div className="portfolio-site">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="site-brand" to="/" aria-label="John Francis Primor, home">
            <span className="site-brand__mark" aria-hidden="true">JF</span>
            <span className="site-brand__name">John Francis Primor</span>
          </Link>
          <div className="case-study-header-actions">
            <Link className="case-study-header-link" to="/#projects">Back to portfolio</Link>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <SunIcon size={17} /> : <MoonIcon size={17} />}
            </button>
          </div>
        </div>
      </header>

      <main className="site-container case-study-main">
        <Link className="case-study-back" to="/#projects">← All projects</Link>
        <div className="case-study-intro">
          <p className="section-kicker">Mini capstone · Cebu Eastern College</p>
          <h1 className="case-study-title">AttendTrack</h1>
          <p className="case-study-lede">
            An attendance management system for teachers and students, with separate views for taking attendance,
            reviewing records, and viewing reports.
          </p>
        </div>

        <dl className="case-study-facts">
          <div>
            <dt>Project</dt>
            <dd>Mini capstone</dd>
          </div>
          <div>
            <dt>Users</dt>
            <dd>Teachers and students</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Attendance · Records · Reports</dd>
          </div>
        </dl>

        <section className="case-study-gallery" aria-labelledby="screens-heading">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Interface</p>
              <h2 className="section-title" id="screens-heading">Project screens.</h2>
            </div>
            <p className="section-note">Select an image to view it at full size.</p>
          </div>

          <button className="gallery-feature" type="button" onClick={() => setLightboxIndex(0)}>
            <img src={featured.src} alt={featured.alt} />
            <span className="gallery-caption">
              <span><strong>{featured.title}</strong><small>{featured.sub}</small></span>
              <span aria-hidden="true">View image ↗</span>
            </span>
          </button>

          <div className="gallery-grid">
            {screens.map((item, index) => (
              <button className="gallery-card" type="button" key={item.title} onClick={() => setLightboxIndex(index + 1)}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-caption">
                  <span><strong>{item.title}</strong><small>{item.sub}</small></span>
                  <span aria-hidden="true">↗</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <Lightbox items={galleryItems} index={lightboxIndex} onClose={closeLightbox} onNavigate={stepLightbox} />

      <footer className="site-footer">
        <div className="site-container site-footer__inner">
          <span>© {new Date().getFullYear()} John Francis C. Primor</span>
          <span>AttendTrack · Mini capstone</span>
        </div>
      </footer>
    </div>
  )
}
