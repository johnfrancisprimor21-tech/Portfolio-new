// Shared `<section>` padding + `.si` (max-width: 1160px, centered) wrapper,
// reused by About/Skills/Projects/Experience/Contact.

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`px-3 py-11 sm:px-[18px] sm:py-14 md:px-[22px] md:py-18 lg:px-15 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-[1160px]">{children}</div>
    </section>
  )
}
