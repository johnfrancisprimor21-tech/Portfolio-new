// Shared "eyebrow" label (e.g. "01 / About Me") and the className for the
// big `<h2>` section headings — both originally `.eyebrow` / `.sec-h` in
// index.css, reused across About/Skills/Projects/Experience/Contact.

export function Eyebrow({ children }) {
  return (
    <div className="mb-3 flex items-center gap-2.5 text-[0.65rem] font-bold uppercase tracking-[2px] text-violet sm:text-[0.72rem]">
      <span className="h-0.5 w-7 rounded-full bg-violet"></span>
      {children}
    </div>
  )
}

export const SEC_H_CLASS =
  'mb-8 font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-1px] text-text sm:mb-12 sm:text-[clamp(1.8rem,3.5vw,2.6rem)]'
