export default function Lightbox({ items, index, onClose, onNavigate }) {
  const isOpen = index !== null
  const current = isOpen ? items[index] : null
  const caption = current ? (current.sub ? `${current.title} — ${current.sub}` : current.title) : ''

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-black/92 px-4 py-6 backdrop-blur-[8px] transition-opacity duration-200 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-[1100px] animate-[scale-in_0.25s_cubic-bezier(0.34,1.56,0.64,1)]">
        {/* Prev */}
        <button
          className="absolute top-1/2 -left-14 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-xl text-white transition hover:border-cyan hover:bg-cyan/20 max-[900px]:-left-0 max-[900px]:left-2"
          onClick={() => onNavigate(-1)}
          aria-label="Previous image"
        >
          ‹
        </button>

        {/* Next */}
        <button
          className="absolute top-1/2 -right-14 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-xl text-white transition hover:border-cyan hover:bg-cyan/20 max-[900px]:right-2"
          onClick={() => onNavigate(1)}
          aria-label="Next image"
        >
          ›
        </button>

        {/* Close */}
        <button
          className="absolute -top-3.5 -right-3.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[1.1rem] text-white transition hover:border-red-400 hover:bg-red-500"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {current && (
          <img
            className="block w-full rounded-xl border border-cyan/20 shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
            src={current.src}
            alt={current.alt}
          />
        )}
        <div className="mt-4 text-center text-[0.9rem] text-white/70">{caption}</div>
      </div>
    </div>
  )
}
