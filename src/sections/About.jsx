export default function About() {
  return (
    <section id="about" className="site-section site-container">
      <div className="about-layout">
        <div>
          <p className="section-kicker">Background</p>
          <h2 className="section-title">About me.</h2>
        </div>
        <div className="about-copy">
          <p>
            I’m studying Information Technology at Cebu Eastern College in Cebu City. Classes in programming,
            databases, systems analysis, and web development give me a foundation to build on.
          </p>
          <p>
            AttendTrack was my mini capstone: an attendance system with separate tools for teachers and students.
            I’m continuing to build experience with web development and database-backed applications through
            hands-on projects.
          </p>
        </div>
      </div>

      <dl className="about-facts">
        <div>
          <dt>Education</dt>
          <dd>BS Information Technology</dd>
          <dd>Cebu Eastern College</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>Cebu City, Philippines</dd>
        </div>
        <div>
          <dt>Interests</dt>
          <dd>Web applications · Databases · UI development</dd>
        </div>
      </dl>
    </section>
  )
}
