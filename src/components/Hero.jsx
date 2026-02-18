import { ArrowDown } from "lucide-react";
import { personal } from "../assets/data";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated background orbs */}
      <div className="hero-glow" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        <p className="hero-eyebrow">{personal.title}</p>

        <h1 className="hero-title">
          {personal.tagline}
        </h1>

        <p className="hero-subtitle">
          {personal.subtitle}
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}