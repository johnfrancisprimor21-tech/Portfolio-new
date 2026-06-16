import useReveal from '../hooks/useReveal'

/**
 * Wraps content with the scroll-reveal fade/slide-up animation that the
 * original site applied via the `.reveal` / `.reveal.vis` classes and an
 * IntersectionObserver in script.js.
 *
 * Usage: <Reveal as="div" delay=".15s" className="about-text"> ... </Reveal>
 */
export default function Reveal({ as: Component = 'div', delay, className = '', children, ...rest }) {
  const { ref, className: revealClass } = useReveal()

  const combined = [revealClass, className].filter(Boolean).join(' ')
  const style = delay ? { transitionDelay: delay, ...rest.style } : rest.style

  return (
    <Component ref={ref} className={combined} {...rest} style={style}>
      {children}
    </Component>
  )
}
