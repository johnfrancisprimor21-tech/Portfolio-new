import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import useActiveSection from '../hooks/useActiveSection'
import { usePageExitNavigate } from '../hooks/usePageTransition'
import { MoonIcon, SunIcon } from './Icons'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Journey' },
]

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

const LINK_CLASS =
  'block md:inline-block text-[0.82rem] font-medium text-sub no-underline px-5 md:px-3.5 py-3 md:py-[7px] rounded-none md:rounded-lg transition-colors hover:text-violet hover:bg-vlight'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(SECTION_IDS)
  const goTo = usePageExitNavigate()

  const [menuOpen, setMenuOpen] = useState(false)
  const navMenuRef = useRef(null)
  const toggleBtnRef = useRef(null)

  // Close mobile menu on outside click, matching the original script.js behaviour
  useEffect(() => {
    function handleClick(e) {
      if (
        menuOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(e.target) &&
        e.target !== toggleBtnRef.current
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  const handleBrandClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAttendTrackClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    goTo('/attendtrack-gallery')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex h-16 items-center justify-between border-b border-border bg-white/90 px-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] backdrop-blur-lg md:h-17 md:px-[22px] lg:px-15 dark:bg-bg/95">
      <a className="flex items-center gap-2.5 no-underline" href="#" onClick={handleBrandClick}>
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
          <img className="h-full w-full object-cover object-top" src="/MyPic.jpg" alt="JF" />
        </div>
        <span className="text-[0.85rem] font-bold text-text sm:text-[0.93rem]">John Francis C. Primor</span>
      </a>

      <ul
        ref={navMenuRef}
        className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-16 z-[199] flex-col border-b border-border bg-bg py-3 md:relative md:left-auto md:right-auto md:top-auto md:z-auto md:flex md:flex-row md:items-center md:gap-1.5 md:border-0 md:bg-transparent md:py-0`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`${LINK_CLASS} ${active === link.href.slice(1) ? 'text-violet' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="/attendtrack-gallery" className={LINK_CLASS} onClick={handleAttendTrackClick}>
            AttendTrack
          </a>
        </li>
        <li className="px-5 pt-2 md:px-0 md:pt-0">
          <a
            href="#contact"
            className="block w-full rounded-full bg-grad px-[22px] py-2 text-center text-[0.82rem] font-semibold text-white no-underline shadow-[0_4px_14px_rgba(124,58,237,0.3)] transition-opacity hover:opacity-90 md:inline-block md:w-auto"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <button
          className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--violet),var(--cyan))] text-white transition-transform after:absolute after:-inset-[3px] after:rounded-full after:border-[2.5px] after:border-transparent after:[border-right-color:var(--violet)] after:[border-top-color:var(--cyan)] after:animate-[theme-spin_1.8s_linear_infinite] after:content-[''] hover:scale-110 sm:h-9 sm:w-9"
          title="Toggle theme"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          className="z-[201] flex p-2 text-[1.4rem] text-text transition-colors hover:text-violet md:hidden"
          title="Toggle menu"
          ref={toggleBtnRef}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
      </div>
    </nav>
  )
}
