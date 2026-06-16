import { useEffect, useState } from 'react'

/**
 * Returns true once the page has been scrolled past `threshold` px,
 * matching the original scroll-to-top button's `.show` toggle.
 */
export default function useScrollToTopVisible(threshold = 300) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > threshold)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return visible
}
