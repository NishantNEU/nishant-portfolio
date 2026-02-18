import { Sparkles, Users, Rocket, GraduationCap } from "lucide-react";
import { about } from "../assets/data";
import ScrollReveal from "./ScrollReveal";
import "../styles/about.css";

const ICON_MAP = {
  Sparkles: Sparkles,
  Users: Users,
  Rocket: Rocket,
  GraduationCap: GraduationCap,
};

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <ScrollReveal>
          <h2 className="about-headline">{about.headline}</h2>
        </ScrollReveal>

        <div className="about-body">
          {about.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <p>{p}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="values-label">What Drives Me</p>
        </ScrollReveal>

        <div className="values-grid">
          {about.values.map((val, i) => {
            const Icon = ICON_MAP[val.icon] || Sparkles;
            return (
              <ScrollReveal key={val.title} type="scale" delay={(i % 2) + 1}>
                <div className="value-card">
                  <div className="value-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}