import { FileText, Download, ExternalLink, FileCheck, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import "../styles/resume.css";

export default function Resume() {
  // ──────────────────────────────────────────
  // HOW TO ADD YOUR RESUME:
  //
  // 1. Put your resume PDF in: public/resume.pdf
  // 2. The download + view buttons will work automatically
  //
  // To link to a Google Drive / Dropbox instead:
  //   Set resumeUrl = "https://drive.google.com/..."
  // ──────────────────────────────────────────

  const resumeUrl = "/Nishant_Resume_Chewy.pdf";

  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <ScrollReveal type="scale">
          <div className="resume-card">
            <div className="resume-icon">
              <FileText size={28} />
            </div>

            <p className="resume-label">Resume</p>
            <h2 className="resume-title">Get the full picture.</h2>
            <p className="resume-subtitle">
              Download my resume for a detailed look at my experience,
              education, skills, and everything in between.
            </p>

            <div className="resume-cta">
              <a
                href={resumeUrl}
                download="Nishant_Patil_Resume.pdf"
                className="resume-btn-download"
                aria-label="Download resume as PDF"
              >
                <Download size={18} />
                Download PDF
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn-view"
                aria-label="View resume in new tab"
              >
                <ExternalLink size={16} />
                View Online
              </a>
            </div>

            <div className="resume-meta">
              <span className="resume-meta-item">
                <FileCheck size={13} />
                PDF Format
              </span>
              <span className="resume-meta-item">
                <Calendar size={13} />
                Updated Feb 2026
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}