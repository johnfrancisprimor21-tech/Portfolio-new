import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently "active" based on scroll position,
 * matching the original updateActiveNav() logic (140px offset trigger).
 * Only meaningful on pages that contain the given section ids.
 */
export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState('')

  useEffect(() => {
    function update() {
      let current = ''
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) current = id
      })
      setActive(current)
    }

    update() // run once so the right link is highlighted on load
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')])

  return active
}
