import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EXIT_DURATION = 400 // ms, matches the .page-exit animation length

/**
 * Returns a `goTo(path)` function that plays the page-exit fade/slide
 * animation on <body> (as the original did) before navigating.
 */
export function usePageExitNavigate() {
  const navigate = useNavigate()

  return (to) => {
    document.body.classList.add('page-exit')
    setTimeout(() => navigate(to), EXIT_DURATION)
  }
}

/**
 * Run on every page's mount: clears any leftover page-exit class from the
 * previous navigation, and optionally plays the page-enter animation
 * (used by the AttendTrack gallery, matching its original inline script).
 */
export function usePageTransitionEnter(playEnter = false) {
  useEffect(() => {
    document.body.classList.remove('page-exit')
    if (playEnter) document.body.classList.add('page-enter')
    return () => document.body.classList.remove('page-enter')
  }, [playEnter])
}
