import { person } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap row">
        <p>© {new Date().getFullYear()} {person.name}</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}
