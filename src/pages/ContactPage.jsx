import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body,#root{background:#f5f4f0;color:#1a1a1a;font-family:'Barlow',sans-serif;line-height:1.6;overflow-x:hidden}.mso{font-family:'Material Symbols Outlined';font-style:normal;line-height:1;display:inline-block}.navbtn{text-decoration:none;color:#1a1a1a;font-family:'Barlow',sans-serif;font-size:.88rem;font-weight:600}.ctabtn{display:inline-flex;align-items:center;padding:.75rem 1.75rem;background:#1a1a1a;color:#fff;border-radius:2px;font-family:'Anton',sans-serif;font-size:.95rem;letter-spacing:2px;text-transform:uppercase;text-decoration:none}.info-row{display:flex;align-items:center;gap:1rem}.info-icon{width:42px;height:42px;background:#fff;border:1.5px solid #e8e8e4;border-radius:3px;display:flex;align-items:center;justify-content:center;flex-shrink:0}@media (max-width:1100px){.service-pill-grid{grid-template-columns:1fr 1fr!important}}@media (max-width:900px){.hero-grid{grid-template-columns:1fr!important}.desk-nav{display:none!important}.nav-logo{height:58px!important}.footer-logo{height:56px!important}}@media (max-width:600px){.form-row,.service-pill-grid{grid-template-columns:1fr!important}.nav-logo{height:48px!important}.footer-logo{height:44px!important}}`}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 200, background: "rgba(245,244,240,.97)", borderBottom: "1.5px solid #e8e8e4", backdropFilter: "blur(16px)", padding: "1rem 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center" }}>
            <img className="nav-logo" src="/logo.png" alt="Acquisitions Growth" style={{ height: 72, width: "auto", display: "block" }} />
          </Link>
          <div className="desk-nav" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            <Link to="/#case-studies" className="navbtn">Results</Link>
            <Link to="/contact" className="ctabtn">Work With Us</Link>
          </div>
        </div>
      </nav>

      <section style={{ padding: "7rem 2rem 5rem", position: "relative", overflow: "hidden", background: "#f5f4f0" }}>
        <div style={{ position: "absolute", top: "-5%", right: "-5%", fontFamily: "'Anton', sans-serif", fontSize: "clamp(12rem,28vw,38rem)", color: "rgba(0,0,0,0.04)", lineHeight: 1, pointerEvents: "none", letterSpacing: "-4px" }}>TALK</div>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1a1a", display: "inline-block" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#888" }}>Scale Your Vision</span>
              </div>
              <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(4rem,10vw,10rem)", lineHeight: 0.87, letterSpacing: "-2px", textTransform: "uppercase", marginBottom: "1.5rem" }}>LET&apos;S<br />TALK<br /><span style={{ WebkitTextStroke: "3px #1a1a1a", color: "transparent" }}>GROWTH.</span></h1>
              <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7, maxWidth: 400, marginBottom: "2.5rem" }}>Ready to grow your business? Our team is here to help you get more leads and customers.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {[{ icon: "call", value: "+1 (555) GROWTH-AG" }, { icon: "mail", value: "hello@acquisitionsgrowth.com" }, { icon: "schedule", value: "Response within 24 hours" }].map((item) => (
                  <div className="info-row" key={item.icon}>
                    <div className="info-icon"><span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: 18, fontStyle: "normal" }}>{item.icon}</span></div>
                    <span style={{ color: "#555", fontSize: "0.9rem" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#fff", border: "1.5px solid #e8e8e4", borderRadius: 4, padding: "2.75rem" }}>
              <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.6rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.4rem" }}>Start Your Strategy Session</h2>
              <p style={{ color: "#aaa", fontSize: "0.85rem", marginBottom: "2rem" }}>Direct access to our senior growth team.</p>
              <ContactForm submitLabel="Submit Inquiry" />
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#1a1a1a", padding: "2rem", borderTop: "1.5px solid #2a2a2a" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <img className="footer-logo" src="/logo.png" alt="Acquisitions Growth" style={{ height: 60, width: "auto", display: "block", filter: "brightness(0) invert(1)" }} />
          <div style={{ color: "#444", fontSize: "0.78rem" }}>Copyright 2025 Acquisitions Growth Agency. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
