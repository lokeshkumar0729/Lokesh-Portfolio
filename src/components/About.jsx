import { about, profile } from "../data/site-data";
import portraitImg from "../assets/portrait.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="portrait">
          <img src={portraitImg} alt={`Portrait of ${profile.name}`} width="900" height="1125" loading="lazy" />
        </div>
        <div className="about-copy">
          <h2 style={{ marginBottom: 28 }}>About me</h2>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <dl className="facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
