import { DownloadIcon, ExternalLinkIcon, MailIcon } from '../components/Icons'

export default function Contact() {
  return (
    <section id="contact" className="site-section site-container contact-section">
      <div>
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Get in touch.</h2>
        <p className="contact-copy">
          For internships, collaborations, or questions about my projects, send me an email.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button button--primary" href="mailto:johnfrancisprimor21@gmail.com">
          <MailIcon size={15} aria-hidden="true" />
          johnfrancisprimor21@gmail.com
        </a>
        <a className="text-link" href="https://github.com/johnfrancisprimor21-tech" target="_blank" rel="noreferrer">
          Find me on GitHub <ExternalLinkIcon size={13} aria-hidden="true" />
        </a>
        <a className="text-link" href="/John_Francis_Primor_CV.pdf" download="John_Francis_Primor_CV.pdf">
          Download my CV (PDF) <DownloadIcon size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
