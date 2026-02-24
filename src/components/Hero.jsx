import { personal } from "../assets/data";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated mesh gradient */}
      <div className="hero-glow">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-content">
        <span className="hero-eyebrow">
          ● Available for Opportunities
        </span>

        <h1 className="hero-name">
          {personal.name}
        </h1>

        <p className="hero-title-line">
          Software Engineer · Full-Stack · AI/ML
        </p>

        <p className="hero-subtitle">
          Building scalable systems and AI-powered products at Northeastern
          University. Previously shipped payment infra handling 500K+ daily transactions.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-mouse" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}