import { skills } from "../data/site-data";

// One small line icon per skill group. Falls back to a generic dot icon
// if a group name doesn't match (e.g. if you rename a group in site-data.js).
const ICONS = {
  "Backend and security": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Languages: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </svg>
  ),
  "Frontend and web": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </svg>
  ),
  "Computer science": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="8" width="8" height="8" rx="1.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M19 5l-2 2M5 19l2-2M19 19l-2-2" />
    </svg>
  ),
  Tools: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  ),
};

const DEFAULT_ICON = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" />
  </svg>
);

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <h2>Skills</h2>
          <p>Java and Spring Boot are my core. Highlighted tags are what I reach for first.</p>
        </div>

        <div className="skills-grid">
          {skills.map((row, i) => (
            <div className="skill-card" key={row.group}>
              <div className="skill-top">
                <span className="skill-icon">{ICONS[row.group] || DEFAULT_ICON}</span>
                <span className="skill-idx">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{row.group}</h3>
              <ul className="chips">
                {row.items.map((item) => (
                  <li className={row.bold.includes(item) ? "chip core" : "chip"} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
