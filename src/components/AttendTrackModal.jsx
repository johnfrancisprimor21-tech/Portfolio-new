import { useEffect } from 'react'
import { attendTrack } from '../data/attendtrack'

export default function AttendTrackModal({ isOpen, onClose }) {
  // Lock page scroll while open, and let Escape close it (matches script.js)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (!isOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-[500] flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm transition-opacity ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative max-h-[90vh] w-full max-w-[900px] overflow-y-auto rounded-[18px] bg-bg p-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] transition-transform sm:rounded-3xl sm:p-10 ${
          isOpen ? 'translate-y-0' : 'translate-y-6'
        }`}
      >
        <button
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-bg2 text-[1.1rem] text-text transition-colors hover:bg-border"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-[1.5px] text-violet">{attendTrack.tag}</div>
        <div className="mb-4 font-display text-2xl font-extrabold text-text sm:text-[2rem] dark:text-slate-100">
          <span className="text-violet">{attendTrack.title.prefix}</span>
          {attendTrack.title.rest}
        </div>
        <p className="mb-6 text-[0.88rem] leading-[1.8] text-sub sm:text-[0.95rem] dark:text-slate-300">{attendTrack.modalDesc}</p>
        <img src={attendTrack.mainScreenshot.src} alt={attendTrack.mainScreenshot.alt} className="mb-4 w-full rounded-[14px]" />
        <div className="mb-7 grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-4">
          {attendTrack.modalScreenshots.map((s) => (
            <img key={s.alt} src={s.src} alt={s.alt} className="h-[90px] w-full rounded-[10px] border border-border object-cover object-top" />
          ))}
        </div>
        <div className="mb-7 flex flex-wrap gap-2">
          {attendTrack.modalStack.map((chip) => (
            <span className="rounded-full bg-vlight px-4 py-1.5 text-xs font-semibold text-violet" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <div className="rounded-2xl bg-bg2 p-[18px] sm:p-6">
          <h4 className="mb-3 text-base font-bold text-text dark:text-slate-200">Key Features</h4>
          <ul>
            {attendTrack.features.map((feature) => (
              <li
                key={feature}
                className="relative mb-2 pl-5 text-[0.88rem] leading-[1.8] text-sub before:absolute before:left-0 before:font-bold before:text-violet before:content-['✓'] dark:text-slate-300"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
