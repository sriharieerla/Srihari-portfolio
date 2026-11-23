import { useState } from "react";
import { contact } from "../data/site";
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    if (contact.formEndpoint) {
      setStatus({ state: "sending", msg: "Sending…" });
      try {
        const res = await fetch(contact.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
        if (!res.ok) throw new Error();
        form.reset();
        setStatus({ state: "ok", msg: "Message sent." });
      } catch {
        setStatus({ state: "error", msg: `Message not sent. Email me directly at ${contact.email}.` });
      }
      return;
    }
    const body = `${d.message}\n\nFrom: ${d.name} (${d.email})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio message from ${d.name}`)}&body=${encodeURIComponent(body)}`;
    setStatus({ state: "ok", msg: "Your email app should open with the message filled in. Press send there to deliver it." });
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="wrap two-col">
        <div>
          <h2 id="contact-h">Contact</h2>
          <p className="muted">Open to entry-level software engineering and AI/ML roles.</p>
          <ul className="plain contact-list">
            <li><a href={`mailto:${contact.email}`}><MailIcon /> {contact.email}</a></li>
            <li><a href={`tel:${contact.phoneHref}`}><PhoneIcon /> {contact.phone}</a></li>
            <li><a href={contact.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a></li>
            <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a></li>
          </ul>
          <p className="muted small">{contact.location}</p>
        </div>
        <form onSubmit={onSubmit} className="form">
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn primary" type="submit" disabled={status.state === "sending"}>
            {contact.formEndpoint ? "Send message" : "Compose email"}
          </button>
          <p className={`status ${status.state}`} role="status" aria-live="polite">{status.msg}</p>
        </form>
      </div>
    </section>
  );
}
