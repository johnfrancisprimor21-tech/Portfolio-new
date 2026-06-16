import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { Eyebrow, SEC_H_CLASS } from '../components/SectionHeading'
import { CheckCircleIcon, ExternalLinkIcon, GraduationCapIcon, LocationIcon, SchoolIcon } from '../components/Icons'
import { aboutChips, aboutInfoCards } from '../data/about'

const ICONS = {
  cap: GraduationCapIcon,
  school: SchoolIcon,
  location: LocationIcon,
  link: ExternalLinkIcon,
  check: CheckCircleIcon,
}

export default function About() {
  return (
    <Section id="about">
      <Eyebrow>01 / About Me</Eyebrow>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-18">
        <Reveal>
          <h2 className={SEC_H_CLASS}>
            A student who
            <br />
            <span className="text-violet">builds things</span>
          </h2>
          <p className="mb-4 text-[0.9rem] leading-[1.9] text-sub sm:text-base">
            I'm <strong className="font-semibold text-text">John Francis C. Primor</strong>, a{' '}
            <strong className="font-semibold text-text">BS Information Technology</strong> student at Cebu Eastern
            College in Cebu City, Philippines. I'm driven by a genuine love for technology and the thrill of
            building software that works.
          </p>
          <p className="mb-4 text-[0.9rem] leading-[1.9] text-sub sm:text-base">
            From studying programming fundamentals and database design to systems analysis and web development, my
            coursework has given me the tools to create and I take every chance to apply them. My mini-capstone
            project <strong className="font-semibold text-text">AttendTrack</strong> is proof of that.
          </p>
          <p className="mb-4 text-[0.9rem] leading-[1.9] text-sub sm:text-base">
            I'm collaborative by nature, a fast learner, and always looking for the next challenge to grow through.
          </p>
          <div className="mt-7 flex flex-wrap gap-1.5 sm:gap-2">
            {aboutChips.map((chip) => (
              <span
                key={chip.text}
                className={`rounded-md border-[1.5px] px-3 py-1 text-[0.65rem] font-semibold transition-colors sm:px-4 sm:py-1.5 sm:text-[0.72rem] ${
                  chip.accent ? 'border-violet/30 bg-vlight text-violet' : 'border-border bg-bg2 text-sub'
                }`}
              >
                {chip.text}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-2.5 sm:gap-3" delay=".15s">
          {aboutInfoCards.map((card) => {
            const Icon = ICONS[card.icon]
            return (
              <div
                className="flex items-center gap-3 rounded-2xl border-[1.5px] border-border bg-bg px-4 py-3.5 transition-[border-color,box-shadow,transform] hover:translate-x-1 hover:border-violet/30 hover:shadow-card sm:gap-4 sm:px-[22px] sm:py-[18px]"
                key={card.label}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-grad-2 text-[0.95rem] text-violet sm:h-[42px] sm:w-[42px] sm:text-[1.1rem] dark:text-cyan">
                  <Icon />
                </div>
                <div>
                  <div className="mb-[3px] text-[0.68rem] font-bold uppercase tracking-[1px] text-muted">{card.label}</div>
                  {card.link ? (
                    <div className="text-[0.9rem] font-semibold text-text">
                      <a className="text-violet no-underline hover:underline" href={card.link.href} target="_blank" rel="noreferrer">
                        {card.link.text}
                      </a>
                    </div>
                  ) : (
                    <div className={`text-[0.9rem] font-semibold ${card.accentValue ? 'text-[#059669]' : 'text-text'}`}>
                      {card.value}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </Section>
  )
}
