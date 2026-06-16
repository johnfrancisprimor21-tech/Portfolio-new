import useScrollToTopVisible from '../hooks/useScrollToTopVisible'

export default function ScrollToTopButton() {
  const visible = useScrollToTopVisible(300)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`fixed bottom-5 right-5 z-[150] flex h-10 w-10 items-center justify-center rounded-full border-none bg-violet text-[1.2rem] text-white shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-[opacity,visibility,transform] duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(124,58,237,0.4)] md:bottom-[30px] md:right-[30px] md:h-11 md:w-11 md:text-[1.4rem] ${
        visible ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      title="Scroll to top"
      onClick={handleClick}
    >
      ↑
    </button>
  )
}
