import { skillGroups } from '../data/skills'

const SKILL_LOGOS = {
  'HTML & CSS': ['html5', 'css3'],
  Java: ['java'],
  'C#': ['csharp'],
  C: ['c'],
  JavaScript: ['javascript'],
  PHP: ['php'],
  'Laravel / Blade': ['laravel'],
  'SQL / PostgreSQL': ['postgresql'],
  Supabase: ['supabase'],
  'Firebase / Firestore': ['firebase'],
  Git: ['git'],
  Vite: ['vite'],
  'Tailwind CSS': ['tailwindcss'],
  'IntelliJ IDEA': ['intellij-idea'],
  'Visual Studio': ['visualstudio'],
}

export default function Skills() {
  return (
    <section id="skills" className="site-section site-container">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Tech stack</p>
          <h2 className="section-title">Technologies I use.</h2>
        </div>
        <p className="section-note">A growing toolkit, built through coursework and projects.</p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li className="skill-item" key={item}>
                  <span className="skill-item__logos" aria-hidden="true">
                    {(SKILL_LOGOS[item] ?? []).map((logo) => (
                      <img key={logo} src={`/tech-logos/${logo}.svg`} alt="" loading="lazy" />
                    ))}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
