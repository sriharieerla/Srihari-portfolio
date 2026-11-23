import { useState } from "react";
import { person } from "../data/site";
import { MenuIcon, CloseIcon } from "./Icons";

const links = [
  ["about", "About"], ["skills", "Skills"], ["experience", "Experience"], ["projects", "Projects"],
  ["certifications", "Certifications"], ["education", "Education"], ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home">{person.short}</a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="nav-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav id="nav-menu" aria-label="Primary" className={open ? "open" : ""}>
          <ul>
            {links.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
