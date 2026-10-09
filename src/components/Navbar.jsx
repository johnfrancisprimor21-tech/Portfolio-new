import { useTheme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from './Icons'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#top" aria-label="John Francis Primor, home">
          <span className="site-brand__mark" aria-hidden="true">JF</span>
          <span className="site-brand__name">John Francis</span>
        </a>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <SunIcon size={17} /> : <MoonIcon size={17} />}
        </button>
      </div>
    </header>
  )
}
