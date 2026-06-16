import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { Eyebrow, SEC_H_CLASS } from '../components/SectionHeading'
import { FileIcon, MonitorIcon } from '../components/Icons'
import { attendTrack, devFolio } from '../data/attendtrack'

const CARD_BASE =
  'rounded-2xl border-[1.5px] p-5 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-violet/25 hover:shadow-card sm:rounded-[20px] sm:p-8'

const ICON_BASE = 'mb-4 flex h-10 w-10 items-center justify-center rounded-[14px] bg-grad-2 text-violet sm:mb-5 sm:h-12 sm:w-12 dark:text-cyan'

export default function Projects({ onOpenAttendTrack }) {
  return (
    <Section id="projects">
      <Eyebrow>03 / Projects</Eyebrow>
      <Reveal as="h2" className={SEC_H_CLASS}>
        Things I've
        <br />
        <span className="text-violet">built</span>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal
          as="div"
          className={`group ${CARD_BASE} relative cursor-pointer border-violet/15 bg-[linear-gradient(145deg,#faf8ff,#f0fdff)] dark:bg-[linear-gradient(145deg,#16192b,#1a1e30)]`}
          role="button"
          tabIndex={0}
          onClick={onOpenAttendTrack}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onOpenAttendTrack()
          }}
        >
          <div className={ICON_BASE}>
            <FileIcon />
          </div>
          <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[1px] text-violet">{attendTrack.cardTag}</div>
          <div className="mb-3 font-display text-[1.3rem] font-extrabold text-text sm:text-2xl">
            <span className="text-violet">{attendTrack.title.prefix}</span>
            {attendTrack.title.rest}
          </div>
          <p className="mb-5 text-[0.85rem] leading-[1.75] text-sub sm:text-[0.9rem]">{attendTrack.cardDesc}</p>
          <div className="mb-5 flex gap-1.5 overflow-hidden rounded-xl sm:gap-2">
            {attendTrack.cardScreens.map((s) => (
              <img
                key={s.alt}
                src={s.src}
                alt={s.alt}
                className="h-20 w-1/3 rounded-lg object-cover object-top transition-transform group-hover:scale-105 sm:h-[120px]"
              />
            ))}
          </div>
          <div className="mb-4 flex items-center gap-1.5 text-[0.8rem] font-semibold text-violet">Click to view case study →</div>
          <div className="flex flex-wrap gap-2">
            {attendTrack.cardStack.map((chip) => (
              <span className="rounded-md border border-border bg-bg2 px-2.5 py-1 text-[0.65rem] font-semibold text-sub sm:px-3.5 sm:py-[5px] sm:text-[0.7rem]" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className={`${CARD_BASE} border-border bg-bg`} delay=".13s">
          <div className={ICON_BASE}>
            <MonitorIcon />
          </div>
          <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[1px] text-violet">{devFolio.tag}</div>
          <div className="mb-3 font-display text-[1.3rem] font-extrabold text-text sm:text-2xl">
            <span className="text-violet">{devFolio.title.prefix}</span>
            {devFolio.title.rest}
          </div>
          <p className="mb-5 text-[0.85rem] leading-[1.75] text-sub sm:text-[0.9rem]">{devFolio.desc}</p>
          <div className="flex flex-wrap gap-2">
            {devFolio.stack.map((chip) => (
              <span className="rounded-md border border-border bg-bg2 px-2.5 py-1 text-[0.65rem] font-semibold text-sub sm:px-3.5 sm:py-[5px] sm:text-[0.7rem]" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
