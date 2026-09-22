import { useState } from "react";
import { profile, socials } from "../data/site-data";
import { useMailLink } from "../hooks/useMailLink";

async function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      /* fall through */
    }
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (e) {
    return false;
  }
}

export default function Contact({ showToast }) {
  const onMailClick = useMailLink(profile.email, showToast);
  const [copyLabel, setCopyLabel] = useState("Copy email address");

  const onCopyClick = () => {
    copyText(profile.email).then(() => {
      setCopyLabel("Copied to clipboard");
      setTimeout(() => setCopyLabel("Copy email address"), 2000);
    });
  };

  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="contact">
          <h2>Let's build something together.</h2>
          <p className="sub">I'm open to backend and full-stack opportunities. Email is the fastest way to reach me.</p>

          <a className="mail" href={`mailto:${profile.email}`} onClick={onMailClick}>
            {profile.email}
          </a>

          <div className="row2">
            <a className="btn primary" href={`mailto:${profile.email}`} onClick={onMailClick}>
              Send an email
            </a>
            <a className="btn line" href={profile.resumeFile} download={profile.resumeDownloadName}>
              Download resume
            </a>
            <button className="btn line" type="button" onClick={onCopyClick}>
              {copyLabel}
            </button>
            <span>
              <a className="tlink" href={socials.github} target="_blank" rel="noopener">
                GitHub
              </a>{" "}
              <a className="tlink" href={socials.linkedin} target="_blank" rel="noopener">
                LinkedIn
              </a>{" "}
              <a className="tlink" href={socials.leetcode} target="_blank" rel="noopener">
                LeetCode
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
