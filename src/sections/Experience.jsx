import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { Eyebrow, SEC_H_CLASS } from '../components/SectionHeading'
import { timeline } from '../data/timeline'

export default function Experience() {
  return (
    <Section id="experience">
      <Eyebrow>04 / Journey</Eyebrow>
      <Reveal as="h2" className={SEC_H_CLASS}>
        My <span className="text-violet">Timeline</span>
      </Reveal>
      <div className="relative pl-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-0.5 before:bg-border before:content-[''] sm:pl-8">
        {timeline.map((item) => (
          <Reveal as="div" className="relative mb-6 last:mb-0 sm:mb-8" delay={item.delay} key={item.role}>
            <div className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-[3px] border-bg bg-grad shadow-[0_0_0_2px_var(--violet)] sm:-left-8 sm:top-1 sm:h-4 sm:w-4"></div>
            <div className="rounded-[14px] border-[1.5px] border-border bg-bg px-5 py-[18px] transition-[border-color,box-shadow] hover:border-violet/25 hover:shadow-card sm:rounded-2xl sm:px-7 sm:py-6">
              <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[1px] text-violet">{item.date}</div>
              <div className="mb-1 text-[0.95rem] font-bold text-text sm:text-[1.05rem]">{item.role}</div>
              <div className="mb-3 text-[0.82rem] font-medium text-muted">{item.org}</div>
              <div className="text-[0.82rem] leading-[1.75] text-sub sm:text-[0.88rem]">{item.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
