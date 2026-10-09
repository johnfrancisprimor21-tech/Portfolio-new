import { CodeIcon, DownloadIcon, FacebookIcon, MailIcon } from '../components/Icons'

export default function Hero() {
  return (
    <section id="top" className="hero-section site-container">
      <div className="hero-copy">
        <div className="hero-availability" aria-label="Based in Cebu City, Philippines">
          <span className="hero-availability__badge">CEBU CITY</span>
          <span>Information Technology student</span>
        </div>

        <h1 className="hero-title">
          IT Student &amp; Developer.
          <span>Building useful web apps.</span>
        </h1>

        <h2 className="hero-identity">
          <span>Hi, I’m John Francis C. Primor</span>
          <a className="hero-identity__portrait" href="#about" aria-label="Learn more about John Francis C. Primor">
            <img src="/MyPic.jpg" alt="" fetchPriority="high" />
          </a>
          <span className="hero-identity__role">BS Information Technology</span>
        </h2>

        <div className="hero-actions">
          <a className="button button--primary" href="mailto:johnfrancisprimor21@gmail.com">
            <span className="hero-connect-dot" aria-hidden="true" />
            Let’s connect
          </a>
          <a className="button button--quiet" href="/John_Francis_Primor_CV.pdf" download="John_Francis_Primor_CV.pdf">
            <DownloadIcon size={15} aria-hidden="true" />
            Download CV
          </a>
          <a className="hero-email-link" href="mailto:johnfrancisprimor21@gmail.com">
            <MailIcon size={15} aria-hidden="true" />
            johnfrancisprimor21@gmail.com
          </a>
        </div>

        <nav className="hero-socials" aria-label="Social links">
          <a href="https://github.com/johnfrancisprimor21-tech" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
            <CodeIcon size={17} aria-hidden="true" />
          </a>
          <a href="https://www.facebook.com/jfcp21" target="_blank" rel="noreferrer" aria-label="Visit Facebook profile">
            <FacebookIcon size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </section>
  )
}
