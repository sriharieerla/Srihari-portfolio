import { useState } from "react";
import { projects, projectFilters, profileFilter } from "../data/site";
import { GitHubIcon } from "./Icons";

// Parent passes key={profile}, so the filter resets to the profile default on change.
export default function Projects({ profile }) {
  const [filter, setFilter] = useState(profileFilter[profile]);
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));
  return (
    <section id="projects" className="section" aria-labelledby="proj-h">
      <div className="wrap">
        <h2 id="proj-h">Projects</h2>
        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="grid cards-2">
          {shown.map((p) => (
            <article className="card project" key={p.name}>
              <h3>{p.name}</h3>
              <p className="muted small">{p.kind}</p>
              <p>{p.summary}</p>
              <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <details>
                <summary>View details</summary>
                <dl>
                  <dt>Goal</dt><dd>{p.goal}</dd>
                  <dt>Implementation</dt><dd>{p.how}</dd>
                  <dt>Key features</dt>
                  <dd><ul className="bullets">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></dd>
                </dl>
              </details>
              {p.repo && (
                <a className="text-link with-icon" href={p.repo} target="_blank" rel="noopener noreferrer"><GitHubIcon /> View on GitHub</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
