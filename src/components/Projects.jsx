import { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../assets/data";
import ScrollReveal from "./ScrollReveal";
import "../styles/projects.css";

const INITIAL_SHOW = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);
  const hasMore = projects.length > INITIAL_SHOW;

  return (
    <section className="projects section section-alt" id="projects">
      <div className="container-wide">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Projects</p>
            <h2 className="section-title">What I've built.</h2>
            <p className="section-subtitle">
              Hackathon winners, production systems, and products that serve
              thousands — each crafted with precision.
            </p>
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <ScrollReveal key={project.title} type="scale" delay={(i % 3) + 1}>
              <div className="project-card">
                <div
                  className="project-accent"
                  style={{ background: project.color }}
                />

                

                <p
                  className="project-tagline"
                  style={{ color: project.color }}
                >
                  {project.tagline}
                </p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="project-tech-tag"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {hasMore && (
          <div className="projects-toggle">
            <button
              className="projects-toggle-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Show All {projects.length} Projects <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}