import { profiles, resumes } from "../data/site";

const order = ["se", "ai", "all"];

export default function ProfileSelector({ profile, setProfile }) {
  const current = profiles[profile];
  return (
    <section id="profiles" className="section" aria-labelledby="profiles-h">
      <div className="wrap">
        <h2 id="profiles-h">Choose a profile</h2>
        <p className="muted narrow">Pick the role you&apos;re hiring for. Skills, projects and the resume below follow your choice.</p>
        <div className="segmented" role="tablist" aria-label="Professional profile">
          {order.map((key) => (
            <button key={key} role="tab" id={`tab-${key}`} aria-selected={profile === key} aria-controls="profile-panel" tabIndex={profile === key ? 0 : -1} onClick={() => setProfile(key)}>
              {profiles[key].label}
            </button>
          ))}
        </div>
        <div id="profile-panel" role="tabpanel" aria-labelledby={`tab-${profile}`} className="panel">
          <p className="panel-intro">{current.intro}</p>
          <ul className="chips">{current.focus.map((f) => <li key={f}>{f}</li>)}</ul>
          {profile !== "all" && (
            <a className="text-link" href={resumes[profile].file} download>Download the {resumes[profile].label}</a>
          )}
        </div>
      </div>
    </section>
  );
}
