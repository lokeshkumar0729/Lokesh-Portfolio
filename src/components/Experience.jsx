import { experience, certifications } from "../data/site-data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head">
          <h2>Experience and education</h2>
          <p>Where I've worked and studied so far, newest first.</p>
        </div>

        <div className="timeline">
          {experience.map((e) => (
            <div className={`tl${e.current ? " now" : ""}`} key={e.title}>
              <div className="when">{e.when}</div>
              <div>
                <h3>{e.title}</h3>
                <p className="org">{e.org}</p>
                <p>{e.description}</p>
                {e.badge && <span className="grade">{e.badge}</span>}
              </div>
            </div>
          ))}
        </div>

        <h3 className="cert-title">Certifications</h3>
        <div className="certs" aria-label="Certifications">
          {certifications.map((c) => (
            <div className="cert" key={c.title}>
              <h4>{c.title}</h4>
              <span>{c.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
