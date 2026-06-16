import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { Eyebrow, SEC_H_CLASS } from '../components/SectionHeading'
import { CodeIcon, DatabaseIcon } from '../components/Icons'
import { skillGroups } from '../data/skills'

const ICONS = {
  code: CodeIcon,
  database: DatabaseIcon,
}

// .lv-a / .lv-g / .lv-d / .lv-e badge color variants, mapped to Tailwind's
// default palette (the original hex values were these Tailwind shades).
const LEVEL_CLASSES = {
  'lv-a': 'bg-blue-100 text-blue-700 dark:bg-cyan-500/12 dark:text-cyan-300',
  'lv-g': 'bg-green-100 text-green-700 dark:bg-green-500/12 dark:text-green-300',
  'lv-d': 'bg-yellow-100 text-yellow-700 dark:bg-amber-600/12 dark:text-amber-300',
  'lv-e': 'bg-violet-100 text-violet-700 dark:bg-purple-500/15 dark:text-purple-300',
}

export default function Skills() {
  return (
    <Section id="skills">
      <Eyebrow>02 / Skills</Eyebrow>
      <Reveal as="h2" className={SEC_H_CLASS}>
        What I bring
        <br />
        <span className="text-violet">to the table</span>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = ICONS[group.icon]
          return (
            <Reveal
              as="div"
              className="rounded-2xl border-[1.5px] border-border bg-bg p-5 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-violet/25 hover:shadow-card sm:rounded-[20px] sm:p-8"
              delay={i === 1 ? '.12s' : undefined}
              key={group.title}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[14px] bg-grad-2 text-violet sm:mb-5 sm:h-12 sm:w-12 dark:text-cyan">
                <Icon />
              </div>
              <div className="mb-4 text-base font-bold text-text sm:mb-5 sm:text-[1.1rem]">{group.title}</div>
              {group.rows.map((row) => (
                <div className="flex items-center justify-between border-b border-border py-2.5 last:border-b-0 sm:py-3" key={row.name}>
                  <span className="text-[0.82rem] font-medium text-text sm:text-[0.9rem]">{row.name}</span>
                  <span className={`rounded-full px-2.5 py-[3px] text-[0.62rem] font-bold sm:px-3 sm:py-1 sm:text-[0.7rem] ${LEVEL_CLASSES[row.levelClass]}`}>
                    {row.level}
                  </span>
                </div>
              ))}
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
