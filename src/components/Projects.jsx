import { featuredProject, projects } from "../data/site-data";
import flashSaleImg from "../assets/flash-sale.jpg";
import { THUMBS } from "./ProjectThumbs";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <h2>Selected work</h2>
          <p>Four projects that show how I design APIs, secure them, and build the screens people use.</p>
        </div>

        <article className="feature">
          <div className="feature-img">
            <img src={flashSaleImg} alt={featuredProject.imageAlt} width="1300" height="1128" />
          </div>
          <div>
            <span className="pill">
              <i></i>
              {featuredProject.tag}
            </span>
            <h3>{featuredProject.name}</h3>
            <p className="d">{featuredProject.description}</p>
            <ul className="points">
              {featuredProject.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p className="stack">
              <b>Built with</b> {featuredProject.stack}
            </p>
            <div className="btns">
              {featuredProject.liveDemo && (
                <a className="btn primary" href={featuredProject.liveDemo} target="_blank" rel="noopener">
                  Open live demo
                </a>
              )}
              {featuredProject.source && (
                <a className="btn line" href={featuredProject.source} target="_blank" rel="noopener">
                  View source
                </a>
              )}
            </div>
          </div>
        </article>

        <div className="list">
          {projects.map((p) => {
            const Thumb = THUMBS[p.thumb];
            const hasLinks = p.liveDemo || p.source || p.extraLink;
            return (
              <article className="item" key={p.name}>
                <div className="thumb">{Thumb ? <Thumb /> : null}</div>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <p className="stack">
                    <b>Built with</b> {p.stack}
                  </p>
                </div>
                {hasLinks ? (
                  <div className="item-links">
                    {p.liveDemo && (
                      <a className="tlink" href={p.liveDemo} target="_blank" rel="noopener">
                        {p.liveDemoLabel || "Live demo"}
                      </a>
                    )}
                    {p.source && (
                      <a className="tlink" href={p.source} target="_blank" rel="noopener">
                        Source
                      </a>
                    )}
                    {p.extraLink && (
                      <a className="tlink" href={p.extraLink.href} target="_blank" rel="noopener">
                        {p.extraLink.label}
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="item-links empty" />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
