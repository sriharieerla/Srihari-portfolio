import { education as e } from "../data/site";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="edu-h">
      <div className="wrap">
        <h2 id="edu-h">Education</h2>
        <article className="card">
          <div className="row">
            <div>
              <h3>{e.degree}</h3>
              <p className="muted">{e.school}, {e.place}</p>
            </div>
            <p className="muted right">{e.period}<br />GPA {e.gpa}</p>
          </div>
          <p className="muted small">Relevant coursework</p>
          <ul className="chips">{e.coursework.map((c) => <li key={c}>{c}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}
