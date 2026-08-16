import { profile, experience, education, skills } from "./data";
import "./App.css";

function Header() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="avatar" aria-hidden="true">
          {initials}
        </div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="location">{profile.location}</p>
        <div className="hero-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a
            href="https://github.com/koppuchan"
            target="_blank"
            rel="noreferrer"
          >
            github.com/koppuchan
          </a>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2>About</h2>
        {profile.summary.map((p, i) => (
          <p className="about-text" key={i}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div className="job" key={job.company + job.title}>
              <div className="job-header">
                <div>
                  <h3>{job.title}</h3>
                  <p className="job-company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="job-period">{job.period}</span>
              </div>
              <p className="job-summary">{job.summary}</p>
              <div className="projects">
                {job.projects.map((p) => (
                  <div className="project" key={p.name}>
                    <h4>{p.name}</h4>
                    <p>{p.description}</p>
                    <div className="tags">
                      {p.stack.map((s) => (
                        <span className="tag" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h4>{group.category}</h4>
              <div className="tags">
                {group.items.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="edu-card">
          <h3>{education.school}</h3>
          <p>
            {education.degree} · {education.date}
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          {profile.name} · <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
