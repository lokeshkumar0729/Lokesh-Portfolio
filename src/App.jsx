import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { useTheme } from "./hooks/useTheme";
import { useToast } from "./hooks/useToast";

export default function App() {
  const { theme, toggle } = useTheme();
  const toast = useToast();

  return (
    <>
      <a className="skip" href="#projects">
        Skip to projects
      </a>

      <Nav theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact showToast={toast.show} />
      </main>

      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
