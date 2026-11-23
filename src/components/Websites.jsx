import { websites } from "../data/site";

export default function Websites() {
  return (
    <section id="websites" className="section" aria-labelledby="web-h">
      <div className="wrap">
        <h2 id="web-h">Websites</h2>
        <p className="muted narrow">Live websites from my web development work.</p>
        <ul className="grid cards-4 plain">
          {websites.map((w) => (
            <li key={w.url}>
              <a className="card link-card" href={w.url} target="_blank" rel="noopener noreferrer">
                <h3>{w.name}</h3>
                <p className="muted small">{w.type}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
