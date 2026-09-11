import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#nursery", label: "Nursery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-list"
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span> Menu
      </button>

      <div className="nav-inner">
        <ul id="nav-list" className={`nav-list ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
}
