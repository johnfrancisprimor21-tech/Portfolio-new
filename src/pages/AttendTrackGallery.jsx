import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { usePageExitNavigate, usePageTransitionEnter } from '../hooks/usePageTransition'
import { FileIcon, MoonIcon, SunIcon } from '../components/Icons'
import Lightbox from '../components/Lightbox'
import { galleryItems } from '../data/attendtrack'

/*
 * Gallery page uses its own mini design system (cyan accent, dark-first palette)
 * that's different from the main portfolio. We define the tokens as Tailwind
 * arbitrary-value classes and [data-theme] variants rather than a separate CSS file.
 */
export default function AttendTrackGallery() {
  const { theme, toggleTheme } = useTheme()
  const goTo = usePageExitNavigate()
  usePageTransitionEnter(true)

  const [lightboxIndex, setLightboxIndex] = useState(null)
  const isLightboxOpen = lightboxIndex !== null

  const closeLightbox = () => setLightboxIndex(null)
  const stepLightbox = (dir) =>
    setLightboxIndex((i) => (i === null ? i : (i + dir + galleryItems.length) % galleryItems.length))

  // Lock scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isLightboxOpen])

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') stepLightbox(-1)
      if (e.key === 'ArrowRight') stepLightbox(1)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isLightboxOpen])

  const handlePortfolioClick = (e) => {
    e.preventDefault()
    goTo('/')
  }

  const [featured, ...gridItems] = galleryItems

  // Gallery uses its own token vars scoped via inline CSS on root
  const SURFACE      = theme === 'dark' ? '#141728' : '#ffffff'
  const SURFACE2     = theme === 'dark' ? '#1a1e30' : '#e8edf5'
  const BG           = theme === 'dark' ? '#0d0f1a' : '#f0f4f8'
  const BORDER       = theme === 'dark' ? 'rgba(0,220,255,.12)' : 'rgba(0,150,200,.18)'
  const CYAN         = theme === 'dark' ? '#00dcff' : '#0284c7'
  const TEXT         = theme === 'dark' ? '#e2e8f0' : '#1e293b'
  const MUTED        = '#64748b'
  const CARD_SHADOW  = theme === 'dark' ? '0 8px 32px rgba(0,0,0,.5)' : '0 8px 32px rgba(0,0,0,.12)'
  const HOVER_GLOW   = theme === 'dark' ? '0 20px 60px rgba(0,220,255,.12)' : '0 20px 60px rgba(0,150,200,.12)'

  const SECTION_LABEL = 'mb-4 flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[.12em] after:h-px after:flex-1 after:bg-[var(--g-border)] after:content-[\'\']'
  const CARD_BASE     = `overflow-hidden rounded-[14px] border bg-[var(--g-surface)] cursor-pointer transition-[transform,border-color,box-shadow] duration-[250ms]`

  const style = {
    '--g-bg':     BG,
    '--g-surface': SURFACE,
    '--g-surface2': SURFACE2,
    '--g-border': BORDER,
    '--g-cyan':   CYAN,
    '--g-text':   TEXT,
    '--g-muted':  MUTED,
    '--g-shadow': CARD_SHADOW,
    '--g-hover-glow': HOVER_GLOW,
  }

  return (
    <div
      className="min-h-screen font-sans transition-[background,color] duration-300"
      style={{ ...style, background: BG, color: TEXT }}
    >
      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-[100] flex items-center justify-between border-b px-8 py-5 backdrop-blur-[10px]"
        style={{ background: `${SURFACE}e6`, borderColor: BORDER }}
      >
        <div className="flex items-center gap-3 text-[1.2rem] font-bold tracking-[-0.02em]" style={{ color: CYAN }}>
          <FileIcon size={18} />
          AttendTrack
        </div>
        <div className="flex items-center gap-4">
          <span
            className="rounded-[6px] border px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[.08em] hidden sm:inline"
            style={{ background: `${CYAN}1a`, borderColor: BORDER, color: CYAN }}
          >
            Capstone Project
          </span>
          <a
            href="/"
            className="rounded-lg border px-3.5 py-[7px] text-[0.82rem] font-semibold no-underline transition-colors hover:border-[var(--g-cyan)] hover:bg-[var(--g-surface2)]"
            style={{ color: CYAN, borderColor: BORDER }}
            onClick={handlePortfolioClick}
          >
            Portfolio
          </a>
          <button
            className="relative flex h-9 w-9 items-center justify-center overflow-visible rounded-full text-white transition-transform hover:scale-110 after:absolute after:-inset-[3px] after:animate-[theme-spin_1.8s_linear_infinite] after:rounded-full after:border-[2.5px] after:border-transparent after:content-[''] after:[border-top-color:var(--g-cyan)] after:[border-right-color:#a855f7]"
            style={{ background: `linear-gradient(135deg, #7c3aed, ${CYAN})` }}
            title="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
        </div>
      </header>

      {/* ── HERO ── */}
      <div className="px-8 pb-12 pt-16 text-center">
        <h1
          className="mb-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em]"
          style={{ color: TEXT }}
        >
          Smart Attendance
          <br />
          for Modern Classes
        </h1>
        <p className="mx-auto max-w-[480px] text-base leading-[1.6]" style={{ color: MUTED }}>
          A full-stack attendance management system built for students and teachers. Click any screenshot to view
          fullscreen.
        </p>
      </div>

      {/* ── GALLERY ── */}
      <div className="mx-auto max-w-[1200px] px-6 pb-20">

        {/* Featured card */}
        <div className={SECTION_LABEL} style={{ color: CYAN }}>Landing Page</div>
        <div
          className={`${CARD_BASE} mb-5 border hover:-translate-y-1`}
          style={{ borderColor: BORDER, boxShadow: CARD_SHADOW }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = HOVER_GLOW}
          onMouseLeave={e => e.currentTarget.style.boxShadow = CARD_SHADOW}
          onClick={() => setLightboxIndex(0)}
        >
          <img
            src={featured.src}
            alt={featured.alt}
            loading="lazy"
            className="block w-full object-cover object-top"
            style={{ aspectRatio: '16/7' }}
          />
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <div className="font-bold" style={{ color: TEXT }}>{featured.title}</div>
              <div className="mt-0.5 text-[0.8rem]" style={{ color: MUTED }}>{featured.sub}</div>
            </div>
            <div className="text-[0.75rem]" style={{ color: CYAN }}>Click to expand →</div>
          </div>
        </div>

        {/* 2×2 Grid */}
        <div className={`${SECTION_LABEL} mt-2`} style={{ color: CYAN }}>App Screens</div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {gridItems.map((item, i) => (
            <div
              key={item.alt}
              className={`${CARD_BASE} border hover:-translate-y-1`}
              style={{ borderColor: BORDER, boxShadow: CARD_SHADOW }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = HOVER_GLOW}
              onMouseLeave={e => e.currentTarget.style.boxShadow = CARD_SHADOW}
              onClick={() => setLightboxIndex(i + 1)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="block w-full object-cover object-top"
                style={{ aspectRatio: '16/8' }}
              />
              <div className="px-4 py-3.5">
                <div className="text-[0.9rem] font-bold" style={{ color: TEXT }}>{item.title}</div>
                <div className="mt-0.5 text-[0.8rem]" style={{ color: MUTED }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox items={galleryItems} index={lightboxIndex} onClose={closeLightbox} onNavigate={stepLightbox} />

      <footer
        className="border-t px-8 py-8 text-center text-[0.8rem]"
        style={{ borderColor: BORDER, color: MUTED }}
      >
        AttendTrack | Mini-Capstone | Project
      </footer>
    </div>
  )
}
