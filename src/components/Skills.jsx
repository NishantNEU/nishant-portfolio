import { Code2, Monitor, Server, Cloud, Database, Brain } from "lucide-react";
import { skills } from "../assets/data";
import ScrollReveal from "./ScrollReveal";
import "../styles/skills.css";

const ICON_MAP = {
  Code2: Code2,
  Monitor: Monitor,
  Server: Server,
  Cloud: Cloud,
  Database: Database,
  Brain: Brain,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Expertise</p>
            <h2 className="section-title">Built to perform.</h2>
            <p className="section-subtitle">
              A deep and versatile toolkit honed across production systems,
              hackathons, and real-world engineering.
            </p>
          </div>
        </ScrollReveal>

        <div className="skills-grid">
          {skills.map((skill, i) => {
            const Icon = ICON_MAP[skill.icon] || Code2;
            return (
              <ScrollReveal key={skill.category} type="scale" delay={(i % 3) + 1}>
                <div className="skill-card">
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="skill-category">{skill.category}</h3>
                  <div className="skill-items">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}