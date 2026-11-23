import { resumes } from "../data/site";
import { DownloadIcon } from "./Icons";

export default function Resume({ profile }) {
  return (
    <section id="resume" className="section" aria-labelledby="resume-h">
      <div className="wrap">
        <h2 id="resume-h">Resume</h2>
        <p className="muted narrow">Two resumes, each focused on a different set of roles.</p>
        <div className="grid cards-2">
          {["se", "ai"].map((k) => (
            <div key={k} className={`card ${profile === k ? "selected" : ""}`}>
              <h3>{resumes[k].label}</h3>
              <p className="muted">For {resumes[k].roles} applications.</p>
              <a className="btn primary with-icon" href={resumes[k].file} download><DownloadIcon /> Download {resumes[k].label}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
