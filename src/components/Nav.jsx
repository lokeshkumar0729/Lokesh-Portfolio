import { useEffect, useState } from "react";
import { profile } from "../data/site-data";

const SECTIONS = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!("IntersectionObserver" in window) || els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav${open ? " open" : ""}`} id="nav">
      <a className="logo" href="#top" aria-label={`${profile.name}, home`}>
        {profile.name}
      </a>

      <nav className="links" id="links" aria-label="Main">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={active === s.id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="icon-btn"
          type="button"
          aria-label="Switch between light and dark theme"
          onClick={onToggleTheme}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>

        <a
  className="btn line"
  id="resume-nav"
  href={profile.resumeFile}
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>
        <a className="btn ink" href="#contact">
          Get in touch
        </a>

        <button
          className="icon-btn menu-btn"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="links"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
