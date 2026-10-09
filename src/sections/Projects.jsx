import { Link } from 'react-router-dom'
import { devFolio, portfolioProjects } from '../data/attendtrack'

const projects = [
  {
    title: 'AttendTrack',
    tag: 'Mini capstone',
    desc: 'An attendance management system for teachers and students, with role-specific dashboards, attendance records, and reporting.',
    stack: ['Attendance System', 'Admin Dashboard', 'Database'],
    image: '/PicTeacher.jpg',
    imageAlt: 'AttendTrack teacher dashboard with attendance and student management tools',
    gallery: true,
  },
  ...portfolioProjects.map((project) => ({
    ...project,
    image: project.screenshots?.[0]?.src,
    imageAlt: project.screenshots?.[0]?.alt ?? `${project.title} project preview`,
  })),
  {
    title: devFolio.title.prefix + devFolio.title.rest,
    tag: 'Personal project',
    desc: 'A responsive portfolio website built with plain HTML, CSS, and JavaScript to present projects, skills, and background.',
    stack: devFolio.stack,
    visualLabel: 'DEVFOLIO',
  },
]

function ProjectTags({ items }) {
  return (
    <ul className="project-tags">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card__visual">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{project.visualLabel}</span>
            <small>{project.stack.join(' · ')}</small>
          </div>
        )}
      </div>
      <div className="project-card__content">
        <p className="project-card__eyebrow"><span>{String(index).padStart(2, '0')}</span>{project.tag}</p>
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.desc}</p>
        <ProjectTags items={project.stack} />
        <div className="project-card__links">
          {project.gallery && (
            <Link to="/attendtrack-gallery">View project <span aria-hidden="true">↗</span></Link>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="site-section site-container">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title">Featured projects.</h2>
        </div>
        <p className="section-note">A few applications and websites I’ve built while studying IT.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index + 1} key={project.title} />)}
      </div>
    </section>
  )
}
