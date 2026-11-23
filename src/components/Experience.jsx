import { experience as e } from "../data/site";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-h">
      <div className="wrap">
        <h2 id="exp-h">Experience</h2>
        <article className="card timeline">
          <div className="row">
            <div>
              <h3>{e.role}</h3>
              <p className="muted">{e.org}</p>
            </div>
            <p className="muted right">{e.period}<br />{e.mode}</p>
          </div>
          <ul className="bullets">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}
