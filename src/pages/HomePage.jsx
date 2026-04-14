import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";


const services = [
  [
    "01",
    "search",
    "Search Engine Optimization (SEO)",
    "We help your website rank higher on Google so more people can find your business and visit your site."
  ],
  [
    "02",
    "code",
    "Website Design",
    "We build fast, modern websites that look great and turn visitors into customers."
  ],
  [
    "03",
    "share",
    "Social Media Marketing (SMM)",
    "We grow your audience and keep your brand active on social media to bring in more leads."
  ],
  [
    "04",
    "ads_click",
    "Google Ads Management",
    "We run targeted ads that reach people ready to buy, helping you get more calls and sales."
  ],
  [
    "05",
    "location_on",
    "Google Business Profile Optimization (GBP)",
    "We optimize your Google profile so your business shows up in local searches and gets more calls and leads."
  ]
];

const faqs = [
  [
    "How fast can I see results?",
    "Most businesses start seeing more calls, traffic, and engagement within 30 days. SEO results take longer and usually grow over 2–3 months."
  ],
  [
    "Do you work with small businesses or startups?",
    "Yes. We work with both small businesses and growing companies. If you're serious about getting more leads, we can help."
  ],
  [
    "How much does it cost?",
    "Pricing depends on your goals and the services you need. We focus on what will bring you the best results based on your business."
  ],
  [
    "What makes you different from other agencies?",
    "We focus on real results like calls, leads, and sales. Instead of just running campaigns, we improve your full online presence to help your business grow."
  ]
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body,#root{background:#f5f4f0;color:#1a1a1a;font-family:'Barlow',sans-serif;line-height:1.6;overflow-x:hidden}.mso{font-family:'Material Symbols Outlined';font-style:normal;line-height:1;display:inline-block}.navbtn{background:none;border:none;color:#1a1a1a;font-family:'Barlow',sans-serif;font-size:.88rem;font-weight:600;cursor:pointer;text-decoration:none}.ctabtn,.ctaout{display:inline-flex;align-items:center;gap:6px;padding:.75rem 1.75rem;border-radius:2px;font-family:'Anton',sans-serif;font-size:.95rem;letter-spacing:2px;text-transform:uppercase;text-decoration:none;cursor:pointer}.ctabtn{background:#1a1a1a;color:#fff}.ctaout{background:transparent;color:#1a1a1a;border:2px solid #1a1a1a}.svc-card,.case-card{background:#fff;border:1.5px solid #e8e8e4;border-radius:4px}.svc-card{position:relative;padding:2rem;transition:.25s;overflow:hidden;isolation:isolate}.svc-card::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(26,26,26,.03) 0%,rgba(26,26,26,.12) 100%);opacity:0;transition:opacity .25s ease;z-index:0}.svc-card::after{content:"";position:absolute;inset:auto -20% -35% auto;width:140px;height:140px;border-radius:50%;background:rgba(26,26,26,.06);filter:blur(10px);opacity:0;transform:translateY(20px);transition:opacity .25s ease,transform .25s ease;z-index:0}.svc-card>*{position:relative;z-index:1}.svc-card:hover{transform:translateY(-6px);box-shadow:0 16px 44px rgba(0,0,0,.1);border-color:#d7d7d0}.svc-card:hover::before,.svc-card:hover::after{opacity:1}.svc-card:hover::after{transform:translateY(0)}.case-card{overflow:hidden;transition:.25s}.case-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.08)}.faq-item{border-bottom:1.5px solid #e8e8e4}.faq-btn{width:100%;display:flex;justify-content:space-between;align-items:center;padding:1.5rem 0;background:none;border:none;color:#1a1a1a;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.2rem;text-align:left;cursor:pointer}.marquee-inner{display:inline-flex;animation:marquee 24s linear infinite}@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@keyframes fadeUp{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)}}.fu{animation:fadeUp .85s cubic-bezier(.22,1,.36,1) both}.d1{animation-delay:.06s}.d2{animation-delay:.18s}@media (max-width:1100px){.stats-grid,.service-pill-grid{grid-template-columns:1fr 1fr!important}}@media (max-width:900px){.hero-h{font-size:clamp(2.9rem,9.5vw,5.4rem)!important;line-height:.88!important;letter-spacing:-2px!important}.cta-title{font-size:clamp(2.6rem,11vw,5rem)!important;line-height:.94!important;max-width:520px;margin-left:auto!important;margin-right:auto!important}.cta-copy{font-size:1rem!important;max-width:420px!important}.svc-grid,.contact-grid,.case-grid{grid-template-columns:1fr!important}.desk-nav{display:none!important}.hero-wrap{min-height:auto!important;padding-bottom:3.5rem!important;padding-top:6.5rem!important}.nav-logo{height:58px!important}.footer-logo{height:56px!important}}@media (max-width:600px){.svc-grid,.stats-grid,.form-row,.service-pill-grid{grid-template-columns:1fr!important}.hero-aux{flex-direction:column!important;gap:1.25rem!important}.hero-actions{gap:.6rem!important;flex-wrap:nowrap!important}.hero-actions a,.hero-actions button{width:auto!important;justify-content:center;font-size:.82rem!important;padding:.9rem 1rem!important;letter-spacing:1.2px!important;white-space:nowrap}.hero-h{font-size:clamp(2.35rem,10vw,3.9rem)!important;line-height:.92!important}.cta-title{font-size:clamp(2.15rem,12vw,3.5rem)!important;line-height:.98!important;letter-spacing:-1px!important}.cta-copy{font-size:.95rem!important;line-height:1.7!important}.nav-logo{height:48px!important}.footer-logo{height:44px!important}}@media (min-width:901px){.mob-btn{display:none!important}}`}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: scrollY > 60 ? "rgba(245,244,240,.97)" : "transparent", borderBottom: scrollY > 60 ? "1.5px solid #e8e8e4" : "1.5px solid transparent", backdropFilter: scrollY > 60 ? "blur(16px)" : "none", transition: "all .3s", padding: "1rem 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center" }}>
            <img className="nav-logo" src="/logo.png" alt="Acquisitions Growth" style={{ height: 72, width: "auto", display: "block" }} />
          </Link>
          <div className="desk-nav" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            <button className="navbtn" onClick={() => scrollTo("case-studies")}>Results</button>
            <Link className="ctabtn" to="/contact">Work With Us</Link>
          </div>
          <button className="mob-btn" onClick={() => setMobileMenuOpen((current) => !current)} style={{ background: "none", border: "none", fontSize: 28, cursor: "pointer" }}>{mobileMenuOpen ? "✕" : "☰"}</button>
        </div>
        {mobileMenuOpen ? <div style={{ position: "fixed", inset: 0, background: "#f5f4f0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2.5rem", zIndex: 999 }}><button style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", fontSize: 28, cursor: "pointer" }} onClick={() => setMobileMenuOpen(false)}>✕</button><button style={{ background: "none", border: "none", fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "3px", cursor: "pointer" }} onClick={() => scrollTo("case-studies")}>RESULTS</button><Link to="/contact" style={{ background: "#1a1a1a", color: "#fff", padding: "1rem 2rem", fontFamily: "'Anton', sans-serif", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }} onClick={() => setMobileMenuOpen(false)}>Work With Us</Link></div> : null}
      </nav>

      <section className="hero-wrap" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "4rem", paddingTop: "6.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0", left: "-2%", fontFamily: "'Anton', sans-serif", fontSize: "clamp(18rem,38vw,52rem)", color: "rgba(0,0,0,0.045)", lineHeight: .88, pointerEvents: "none", letterSpacing: "-4px" }}>GROW</div>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%", position: "relative", zIndex: 1 }}>
          <h1 className="fu d1 hero-h" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(4.1rem,10vw,10rem)", lineHeight: 0.86, letterSpacing: "-3px", textTransform: "uppercase" }}>Scale<br />Your<br /><span style={{ WebkitTextStroke: "3px #1a1a1a", color: "transparent" }}>Business.</span></h1>
          <div className="fu d2 hero-aux" style={{ display: "flex", alignItems: "flex-start", gap: "2.5rem", marginTop: "1.75rem", flexWrap: "wrap" }}>
            <div style={{ maxWidth: 420 }}>
              <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7, marginBottom: "1.75rem" }}>We bridge the gap between ambitious businesses and elite marketing teams. Our strategic partnerships drive high-quality lead generation that fuels sustainable growth.</p>
              <div className="hero-actions" style={{ display: "flex", gap: "0.75rem", flexWrap: "nowrap" }}>
                <Link className="ctabtn" style={{ fontSize: "0.95rem", padding: "0.95rem 1.8rem", whiteSpace: "nowrap" }} to="/contact">Book Free Consultation</Link>
                <button className="ctaout" style={{ fontSize: "0.95rem", padding: "0.95rem 1.8rem", whiteSpace: "nowrap" }} onClick={() => scrollTo("case-studies")}>View Results</button>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", paddingTop: "0.25rem" }}>
              {[["Trusted By", "100+ Clients"], ["Experience", "5+ Years"]].map(([label, value]) => <div key={label}><div style={{ fontSize: "0.65rem", letterSpacing: "3px", textTransform: "uppercase", color: "#aaa", marginBottom: "0.25rem" }}>{label}</div><div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.25rem", letterSpacing: "1px" }}>{value}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1.5px solid #1a1a1a", borderBottom: "1.5px solid #1a1a1a", padding: "1rem 0", background: "#1a1a1a", overflow: "hidden" }}><div className="marquee-inner">{[...Array(2)].map((_, index) => <div key={index} style={{ display: "flex", gap: "4rem", paddingRight: "4rem" }}>{["SEO DOMINATION", "PAID ACQUISITION", "WEB DEVELOPMENT", "GOOGLE ADS", "GBP OPTIMIZATION", "SCALE STRATEGY", "GROWTH SYSTEMS", "CONVERSION OPS"].map((text) => <span key={text} style={{ fontFamily: "'Anton', sans-serif", fontSize: "1rem", letterSpacing: "4px", color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>{text} <span style={{ color: "#444", marginLeft: "2rem" }}>✦</span></span>)}</div>)}</div></div>

      <section id="services" style={{ padding: "8rem 2rem", background: "#f5f4f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", gap: "2rem", flexWrap: "wrap" }}>
            <div><div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "4px", color: "#aaa", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Services</div><h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 0.9 }}>ENGINEERED<br />FOR GROWTH</h2></div>
            <p style={{ maxWidth: 360, color: "#666", fontSize: "1rem", lineHeight: 1.65 }}>We combine all our services to help you get more leads, more calls, and more sales.</p>
          </div>
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1.25rem" }}>
            {services.map(([num, icon, title, text]) => <article className="svc-card" key={title}><div style={{ fontFamily: "'Anton', sans-serif", fontSize: "4rem", color: "#f0efe9", lineHeight: 1, marginBottom: "1.25rem" }}>{num}</div><div style={{ width: 44, height: 44, background: "#f5f4f0", border: "1.5px solid #e8e8e4", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}><span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: 20, fontStyle: "normal" }}>{icon}</span></div><h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.6rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem" }}>{title}</h3><p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.65 }}>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="case-studies" style={{ padding: "8rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div><div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "4px", color: "#aaa", textTransform: "uppercase", marginBottom: "0.75rem" }}>Case Studies</div><h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 0.9 }}>REAL<br />RESULTS</h2></div>
            <Link className="ctaout" to="/contact">Start Your Story</Link>
          </div>
          
          <article className="case-card" style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ height: 280, overflow: "hidden", background: "#f5f4f0" }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=280&fit=crop" alt="Google Business Profile Analytics Dashboard" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ padding: "2.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                <div style={{ fontSize: "0.68rem", letterSpacing: "3px", textTransform: "uppercase", color: "#aaa" }}>LOCAL SEO SUCCESS</div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "3px", textTransform: "uppercase", color: "#aaa" }}>30 DAYS</div>
              </div>
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "4.5rem", lineHeight: 1, marginBottom: "0.5rem", color: "#1a1a1a" }}>+68%</div>
              <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.8rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "1rem", lineHeight: 1.2 }}>Traffic Growth from Google Business Profile</h3>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                With simple daily updates, we increased traffic by 68% in 30 days, along with 80% more website visits and 50% more calls.
              </p>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                {["Google Business Profile", "Local SEO", "Lead Generation"].map((tag) => <span key={tag} style={{ border: "1.5px solid #e8e8e4", padding: "0.4rem 0.85rem", fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", color: "#777", borderRadius: 2 }}>{tag}</span>)}
              </div>
              <Link to="/case-study-gbp" className="ctabtn" style={{ marginTop: "2rem", display: "inline-flex" }}>View Full Case Study</Link>
            </div>
          </article>
        </div>
      </section>

      <section style={{ background: "#1a1a1a", padding: "8rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Anton', sans-serif", fontSize: "clamp(10rem,25vw,35rem)", color: "rgba(255,255,255,0.03)", lineHeight: 1, whiteSpace: "nowrap", pointerEvents: "none", letterSpacing: "-4px" }}>NOW</div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "4px", textTransform: "uppercase", color: "#555", marginBottom: "1.25rem" }}>Ready to Start?</p>
          <h2 className="cta-title" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(3rem,9vw,9rem)", textTransform: "uppercase", lineHeight: 0.88, letterSpacing: "-2px", color: "#fff", marginBottom: "1.5rem" }}>DO YOU WANT<br />TO SCALE YOUR<br />BUSINESS?</h2>
          <p className="cta-copy" style={{ color: "#666", fontSize: "1.1rem", maxWidth: 500, margin: "0 auto 2.5rem", lineHeight: 1.65 }}>Stop guessing. We use proven strategies to help you get more customers and grow faster.</p>
          <button style={{ padding: "1.25rem 4rem", background: "#fff", color: "#1a1a1a", borderRadius: 2, fontFamily: "'Anton', sans-serif", fontSize: "1.25rem", letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer" }} onClick={() => navigate("/contact")}>I&apos;M READY TO SCALE</button>
        </div>
      </section>

      <section style={{ padding: "8rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}><div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "4px", color: "#aaa", textTransform: "uppercase", marginBottom: "0.75rem" }}>FAQ</div><h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 0.9 }}>FREQUENTLY ASKED</h2></div>
          <div style={{ borderTop: "1.5px solid #e8e8e4" }}>{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button className="faq-btn" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: 20, fontStyle: "normal", flexShrink: 0 }}>{openFaq === index ? "remove" : "add"}</span></button>{openFaq === index ? <p style={{ color: "#666", paddingBottom: "1.5rem", lineHeight: 1.7, fontSize: "0.95rem" }}>{answer}</p> : null}</div>)}</div>
        </div>
      </section>

      <section id="contact" style={{ padding: "8rem 2rem", background: "#f5f4f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
            <div><div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "4px", color: "#aaa", textTransform: "uppercase", marginBottom: "0.75rem" }}>Get In Touch</div><h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "-1px", textTransform: "uppercase", lineHeight: 0.9, marginBottom: "1.5rem" }}>LET&apos;S GROW<br />YOUR<br />BUSINESS</h2><p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 380 }}>Book a strategy session and get a clear, step-by-step plan to reach your next growth goal.</p><div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>{[{ icon: "call", value: "+1 (555) GROWTH-AG" }, { icon: "mail", value: "hello@acquisitionsgrowth.com" }].map((item) => <div key={item.icon} style={{ display: "flex", alignItems: "center", gap: "1rem" }}><div style={{ width: 42, height: 42, background: "#fff", border: "1.5px solid #e8e8e4", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: 18, fontStyle: "normal" }}>{item.icon}</span></div><span style={{ color: "#555", fontSize: "0.9rem" }}>{item.value}</span></div>)}</div></div>
            <div style={{ background: "#fff", border: "1.5px solid #e8e8e4", borderRadius: 4, padding: "2.5rem" }}><h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.5rem", textTransform: "uppercase", marginBottom: "0.4rem" }}>Start Your Strategy Session</h3><p style={{ color: "#aaa", fontSize: "0.85rem", marginBottom: "2rem" }}>No sales reps. No runaround. Direct access to our senior growth team.</p><ContactForm submitLabel="Submit Inquiry" /></div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#1a1a1a", padding: "2rem", borderTop: "1.5px solid #2a2a2a" }}><div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}><img className="footer-logo" src="/logo.png" alt="Acquisitions Growth" style={{ height: 60, width: "auto", display: "block", filter: "brightness(0) invert(1)" }} /><div style={{ color: "#444", fontSize: "0.78rem" }}>Copyright 2025 Acquisitions Growth Agency. All rights reserved.</div></div></footer>
    </>
  );
}
