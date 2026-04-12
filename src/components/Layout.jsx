import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Process", href: "/#process" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#contact" }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" to="/">
          Acquisitions Growth
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <NavLink className="button button-primary button-small" to="/contact">
            Book Free Call
          </NavLink>
        </nav>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open ? (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <NavLink className="button button-primary" to="/contact" onClick={() => setOpen(false)}>
            Book Free Call
          </NavLink>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">Acquisitions Growth</div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">LinkedIn</a>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-copy">Copyright 2024 Acquisitions Growth. All rights reserved.</div>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
