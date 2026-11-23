import { useRef, useState } from "react";
import { certificates, otherCertifications, achievements } from "../data/site";

const base = import.meta.env.BASE_URL;

export default function Certifications() {
  const dialog = useRef(null);
  const [active, setActive] = useState(null);
  const open = (c) => { setActive(c); dialog.current?.showModal(); };
  const close = () => dialog.current?.close();
  return (
    <section id="certifications" className="section" aria-labelledby="cert-h">
      <div className="wrap">
        <h2 id="cert-h">Certifications &amp; achievements</h2>
        <div className="grid cards-3">
          {certificates.map((c) => (
            <figure className="card cert" key={c.img}>
              <button className="thumb" onClick={() => open(c)} aria-label={`View certificate: ${c.title}`}>
                <img src={`${base}certificates/${c.img}`} alt={c.alt} loading="lazy" />
              </button>
              <figcaption>
                <span className="badge">{c.kind}</span>
                <h3>{c.title}</h3>
                <p className="muted small">{c.org} · {c.date}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="muted small note">
          Also on my resume: {otherCertifications.map((c) => `${c.title} (${c.org})`).join(", ")}.
        </p>
        <h3 className="sub">Achievements</h3>
        <ul className="bullets wide">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
      </div>
      <dialog ref={dialog} className="lightbox" onClick={(e) => e.target === dialog.current && close()} onClose={() => setActive(null)}>
        {active && (
          <div>
            <img src={`${base}certificates/${active.img}`} alt={active.alt} />
            <p>{active.title}, {active.org}</p>
            <button className="btn" onClick={close}>Close</button>
          </div>
        )}
      </dialog>
    </section>
  );
}
