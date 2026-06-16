import { useEffect, useRef, useState } from 'react'

/**
 * Re-creates the original `.reveal` / `.reveal.vis` scroll animation using
 * Tailwind utilities instead of custom CSS. Attach the returned `ref` to any
 * element and merge in `className` to fade/slide it in once it scrolls into
 * view (28px slide-up, 650ms fade, fires once).
 */
export default function useReveal({ threshold = 0.1 } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const className = [
    'transition-all duration-[650ms] ease-out',
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7',
  ].join(' ')

  return { ref, className }
}
