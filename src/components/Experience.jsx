import { experience } from "../assets/data";
import ScrollReveal from "./ScrollReveal";
import "../styles/experience.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Where I've been.</h2>
            <p className="section-subtitle">
              A timeline of roles, education, and impact — each chapter shaping
              how I build today.
            </p>
          </div>
        </ScrollReveal>

        <div className="timeline">
          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 4)}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <span className={`timeline-type ${item.type}`}>
                  {item.type}
                </span>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <span className="timeline-meta-divider" />
                  <span>{item.location}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}