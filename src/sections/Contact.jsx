import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { FacebookIcon, MailIcon } from '../components/Icons'

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal
        as="div"
        className="relative flex flex-col gap-8 overflow-hidden rounded-[20px] bg-grad px-5 py-7 text-center sm:rounded-[28px] sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-15 lg:py-14 lg:text-left before:absolute before:-right-[10%] before:-top-1/2 before:h-[300px] before:w-[300px] before:rounded-full before:bg-white/[0.08] before:content-['']"
      >
        <div className="relative z-[2] w-full lg:w-auto">
          <h2 className="mb-3 font-display text-[clamp(1.4rem,4vw,2rem)] font-extrabold tracking-[-1px] text-white leading-[1.15] sm:text-[clamp(1.8rem,3.5vw,2.6rem)]">
            Let's Connect and
            <br />
            Build Together
          </h2>
          <p className="mx-auto mb-5 max-w-[440px] text-[0.85rem] leading-[1.7] text-white/85 sm:text-[0.95rem] lg:mx-0">
            Whether it's a collaboration, a project idea, or just saying hello. I'm always open. Find me on Facebook
            or send me a message anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="https://www.facebook.com/jfcp21"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-[18px] py-2 text-[0.82rem] font-semibold text-white no-underline transition-colors hover:bg-white/25"
            >
              <FacebookIcon size={13} />
              John Francis Primor II
            </a>
          </div>
        </div>
        <div className="relative z-[2] mx-auto flex w-full max-w-[320px] flex-col gap-3 lg:mx-0 lg:w-auto lg:max-w-none lg:shrink-0">
          <a
            href="https://www.facebook.com/jfcp21"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[14px] bg-white px-6 py-3 text-[0.85rem] font-bold text-violet no-underline shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] sm:px-8 sm:py-3.5 sm:text-[0.92rem]"
          >
            <FacebookIcon />
            Message on Facebook
          </a>
          <a
            href="mailto:johnfrancisprimor21@gmail.com"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[14px] border-[1.5px] border-white/30 bg-white/12 px-6 py-3 text-[0.85rem] font-bold text-white no-underline transition-[transform,box-shadow] hover:-translate-y-0.5 hover:bg-white/20 sm:px-8 sm:py-3.5 sm:text-[0.92rem]"
          >
            <MailIcon />
            Send an Email
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
