import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, CheckCircle } from "lucide-react";
import { personal } from "../assets/data";
import ScrollReveal from "./ScrollReveal";
import "../styles/contact.css";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSending(true);

    try {
      // Netlify Forms submission
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...form,
        }).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }

    setSending(false);
  };

  return (
    <section className="contact section section-alt" id="contact">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's connect.</h2>
            <p className="section-subtitle">
              Have an opportunity, idea, or just want to say hello? I'd love to
              hear from you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal type="scale">
          <div className="contact-wrapper">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <CheckCircle size={28} />
                </div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact-row">
                  <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && (
                      <p className="input-error-text">{errors.name}</p>
                    )}
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <p className="input-error-text">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                  />
                  {errors.message && (
                    <p className="input-error-text">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary contact-submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}

            <div className="contact-links">
              <a
                href={`mailto:${personal.email}`}
                className="contact-link"
                aria-label="Email"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="GitHub"
              >
                <Github size={16} />
                GitHub
              </a>
              <span className="contact-link">
                <MapPin size={16} />
                {personal.location}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}