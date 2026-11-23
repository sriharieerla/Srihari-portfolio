import { skills } from "../data/site";

export default function Skills({ profile }) {
  const match = (p) => profile === "all" || p === "both" || p === profile;
  return (
    <section id="skills" className="section" aria-labelledby="skills-h">
      <div className="wrap">
        <h2 id="skills-h">Technical skills</h2>
        <p className="muted narrow">{profile === "all" ? "Everything I work with, grouped by area." : "Skills outside the selected profile are dimmed."}</p>
        <div className="grid cards-3">
          {skills.map(([cat, items]) => (
            <div className="card" key={cat}>
              <h3>{cat}</h3>
              <ul className="chips">
                {items.map(([name, p]) => (
                  <li key={name} className={match(p) ? "" : "dim"}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
