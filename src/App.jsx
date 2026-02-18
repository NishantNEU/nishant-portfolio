import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Photo from "./components/Photo";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import { personal } from "./assets/data";
import "./App.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Photo />
        <About />
        <hr className="section-divider" />
        <Skills />
        <Projects />
        <hr className="section-divider" />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {personal.name}. Crafted with precision
            in Boston.
          </p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}