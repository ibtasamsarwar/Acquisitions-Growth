import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import businessProfileGraph from "../../Images/Business Profile interactions graph.jpeg";
import day1ToDay30Image from "../../Images/Day1toDay30.jpg";
import googleSearchConsoleImage from "../../Images/Goolglesearchconcole.jpg";

export default function CaseStudyGBP() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body,#root{background:#f5f4f0;color:#1a1a1a;font-family:'Barlow',sans-serif;line-height:1.6;overflow-x:hidden}.navbtn{background:none;border:none;color:#1a1a1a;font-family:'Barlow',sans-serif;font-size:.88rem;font-weight:600;cursor:pointer;text-decoration:none}.ctabtn,.ctaout{display:inline-flex;align-items:center;gap:6px;padding:.75rem 1.75rem;border-radius:2px;font-family:'Anton',sans-serif;font-size:.95rem;letter-spacing:2px;text-transform:uppercase;text-decoration:none;cursor:pointer}.ctabtn{background:#1a1a1a;color:#fff}.ctaout{background:transparent;color:#1a1a1a;border:2px solid #1a1a1a}@media (max-width:900px){.desk-nav{display:none!important}.nav-logo{height:58px!important}}@media (max-width:600px){.nav-logo{height:48px!important}}@media (min-width:901px){.mob-btn{display:none!important}}`}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: scrollY > 60 ? "rgba(245,244,240,.97)" : "transparent", borderBottom: scrollY > 60 ? "1.5px solid #e8e8e4" : "1.5px solid transparent", backdropFilter: scrollY > 60 ? "blur(16px)" : "none", transition: "all .3s", padding: "1rem 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center" }}>
            <img className="nav-logo" src="/logo.png" alt="Acquisitions Growth" style={{ height: 72, width: "auto", display: "block" }} />
          </Link>
          <div className="desk-nav" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            <Link className="navbtn" to="/">Home</Link>
            <Link className="ctabtn" to="/contact">Work With Us</Link>
          </div>
          <button className="mob-btn" onClick={() => setMobileMenuOpen((current) => !current)} style={{ background: "none", border: "none", fontSize: 28, cursor: "pointer" }}>{mobileMenuOpen ? "✕" : "☰"}</button>
        </div>
      </nav>
      {mobileMenuOpen ? <div style={{ position: "fixed", inset: 0, background: "#f5f4f0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2.5rem", zIndex: 999, padding: "2rem" }}><button style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", fontSize: 28, cursor: "pointer" }} onClick={() => setMobileMenuOpen(false)}>✕</button><Link to="/" style={{ background: "none", border: "none", fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "3px", textDecoration: "none", color: "#1a1a1a" }} onClick={() => setMobileMenuOpen(false)}>HOME</Link><Link to="/contact" style={{ background: "#1a1a1a", color: "#fff", padding: "1rem 2rem", fontFamily: "'Anton', sans-serif", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }} onClick={() => setMobileMenuOpen(false)}>Work With Us</Link></div> : null}

      {/* Hero Section */}
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem", background: "#fff", borderBottom: "1.5px solid #e8e8e4" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#666", fontSize: "0.85rem", textDecoration: "none", fontWeight: 600 }}>
              <span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: 18 }}>arrow_back</span>
              Back to Home
            </Link>
          </div>
          <div style={{ fontSize: "0.72rem", letterSpacing: "4px", textTransform: "uppercase", color: "#aaa", marginBottom: "1rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>Case Study • 30 Days</div>
          <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem,7vw,5rem)", lineHeight: 1.1, letterSpacing: "-1px", textTransform: "uppercase", marginBottom: "1.5rem" }}>68% Traffic Surge from Google Business Profile in 30 Days</h1>
          <p style={{ fontSize: "1.15rem", color: "#555", lineHeight: 1.7, maxWidth: 720 }}>How a simple daily engagement strategy transformed local visibility and drove measurable business growth.</p>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section style={{ background: "#1a1a1a", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem" }}>
          {[
            { label: "Traffic Increase", value: "+68%", color: "#4ade80" },
            { label: "Website Visits", value: "+80%", color: "#60a5fa" },
            { label: "Phone Calls", value: "+50%", color: "#a78bfa" },
            { label: "Timeline", value: "30 Days", color: "#fbbf24" }
          ].map((metric) => (
            <div key={metric.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "3rem", color: metric.color, marginBottom: "0.5rem" }}>{metric.value}</div>
              <div style={{ fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", color: "#666" }}>{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "6rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          
          {/* The Challenge */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.5px", textTransform: "uppercase", marginBottom: "1.5rem" }}>The Challenge</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "1.25rem" }}>
              The business had a Google Business Profile, but it was not getting good results. There were very few calls, low website traffic, and almost no engagement from customers. The profile was also not fully optimized and was missing important updates.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "1.5rem" }}>
              Our goals were simple:
            </p>
            <ul style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>Increase traffic from Google Maps and Search</li>
              <li style={{ marginBottom: "0.75rem" }}>Improve visibility for the right keywords"</li>
              <li style={{ marginBottom: "0.75rem" }}>Get more calls, website visits, and customer actions</li>
            </ul>
          </div>

          {/* The Strategy */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.5px", textTransform: "uppercase", marginBottom: "1.5rem" }}>Our Strategy: Daily Engagement</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "1.5rem" }}>
              We followed a simple approach — take action on the Google Business Profile every day for 30 days. Each update was done with a clear purpose to keep the profile active and improve visibility.
            </p>
            
            <div style={{ background: "#f5f4f0", border: "1.5px solid #e8e8e4", borderRadius: 4, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.5rem", textTransform: "uppercase", marginBottom: "1.25rem" }}>What We Did Every Day</h3>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  { icon: "add_photo_alternate", title: "Media Optimization", desc: "Added high-quality images regularly to keep the profile fresh and active" },
                  { icon: "edit_note", title: "Service Updates", desc: "Improved services with better keywords and clear descriptions" },
                  { icon: "campaign", title: "Weekly Posts", desc: "Shared updates, offers, and helpful content" },
                  { icon: "chat", title: "Customer Interaction", desc: "Encouraged reviews and responded to customer questions" },
                  { icon: "cleaning_services", title: "Profile Cleanup", desc: "Removed outdated content and fixed incorrect information" },
                  { icon: "tune", title: "Profile Enhancements", desc: "Updated business details like hours, categories, and services" }
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ flexShrink: 0, width: 40, height: 40, background: "#fff", border: "1.5px solid #e8e8e4", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: 20 }}>{item.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>{item.title}</div>
                      <div style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Results */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.5px", textTransform: "uppercase", marginBottom: "1.5rem" }}>The Results</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "2rem" }}>
              By the second week, we started seeing clear growth. By day 30, engagement increased significantly and the profile started generating real leads.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "0.5rem", fontWeight: 600 }}>
              GBP Performance Graph
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "2rem" }}>
              Google Business Profile interactions increased steadily over 30 days, showing the impact of consistent profile activity and customer engagement.
            </p>

            {/* Performance Graph */}
            <div style={{ marginBottom: "3rem" }}>
              <img src={businessProfileGraph} alt="Google Business Profile interactions graph" style={{ width: "100%", borderRadius: 4, border: "1.5px solid #e8e8e4" }} />
              <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "0.75rem", textAlign: "center", fontStyle: "italic" }}>Google Business Profile performance metrics showing steady growth over 30 days</p>
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "0.5rem", fontWeight: 600 }}>
                Search Performance
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "1.5rem" }}>
                The business also improved its visibility in Google search:
              </p>
              <div style={{ background: "#f5f4f0", border: "1.5px solid #e8e8e4", borderRadius: 4, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                  {[
                    { label: "Total Clicks", value: "8.88K" },
                    { label: "Impressions", value: "399K" },
                    { label: "CTR", value: "2.2%" },
                    { label: "Average Position", value: "8.8" }
                  ].map((item) => (
                    <div key={item.label} style={{ background: "#fff", border: "1.5px solid #e8e8e4", borderRadius: 4, padding: "1rem", textAlign: "center" }}>
                      <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.8rem", lineHeight: 1, marginBottom: "0.4rem" }}>{item.value}</div>
                      <div style={{ fontSize: "0.8rem", color: "#666", letterSpacing: "1px", textTransform: "uppercase" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <img src={googleSearchConsoleImage} alt="Google Search Console performance snapshot" style={{ width: "100%", borderRadius: 4, border: "1.5px solid #e8e8e4" }} />
              <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "0.75rem", textAlign: "center", fontStyle: "italic" }}>Google Search Console data highlighting improved search visibility</p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginTop: "1.5rem" }}>
                This means more people started seeing and clicking on the business online.
              </p>
            </div>

            {/* Metrics Table */}
            <div style={{ background: "#fff", border: "1.5px solid #e8e8e4", borderRadius: 4, overflow: "hidden", marginBottom: "2rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f5f4f0", borderBottom: "1.5px solid #e8e8e4" }}>
                    <th style={{ padding: "1rem", textAlign: "left", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>Metric</th>
                    <th style={{ padding: "1rem", textAlign: "center", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>Before</th>
                    <th style={{ padding: "1rem", textAlign: "center", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>After</th>
                    <th style={{ padding: "1rem", textAlign: "center", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>Change</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Total Interactions", before: "20", after: "28", change: "+40%", positive: true },
                    { metric: "Website Visits", before: "10", after: "18", change: "+80%", positive: true },
                    { metric: "Phone Calls", before: "3-4/day", after: "5-6/day", change: "+50%", positive: true },
                    { metric: "Messages Received", before: "0", after: "2", change: "New", positive: true },
                    { metric: "Direction Requests", before: "7", after: "7", change: "—", positive: false }
                  ].map((row, idx) => (
                    <tr key={row.metric} style={{ borderBottom: idx < 4 ? "1px solid #f0f0f0" : "none" }}>
                      <td style={{ padding: "1rem", fontSize: "0.95rem", fontWeight: 600 }}>{row.metric}</td>
                      <td style={{ padding: "1rem", textAlign: "center", fontSize: "0.95rem", color: "#666" }}>{row.before}</td>
                      <td style={{ padding: "1rem", textAlign: "center", fontSize: "0.95rem", color: "#666" }}>{row.after}</td>
                      <td style={{ padding: "1rem", textAlign: "center", fontSize: "0.95rem", fontWeight: 700, color: row.positive ? "#22c55e" : "#888" }}>{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "1rem" }}>
              Overall engagement increased by 68% in just 30 days.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
              These results show that consistent activity can turn a simple profile into a strong lead source.
            </p>
          </div>

          {/* Customer Growth */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.5px", textTransform: "uppercase", marginBottom: "1.5rem" }}>Customer Growth</h2>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ background: "#f5f4f0", padding: "1rem", borderRadius: 4, marginBottom: "1rem", border: "1.5px solid #e8e8e4" }}>
                <img src={day1ToDay30Image} alt="Day 1 to Day 30 comparison" style={{ width: "100%", borderRadius: 2 }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "0.35rem", fontWeight: 600 }}>Day 1 Analytics</div>
                  <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.25rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Day 1</div>
                  <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.75rem" }}>Low search activity and limited visibility</p>
                  <p style={{ fontSize: "0.95rem", color: "#444", fontWeight: 600 }}>Day 1: 186 searches</p>
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "0.35rem", fontWeight: 600 }}>Day 30 Analytics</div>
                  <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.25rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Day 30</div>
                  <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.75rem" }}>Significant increase in searches and customer discovery</p>
                  <p style={{ fontSize: "0.95rem", color: "#444", fontWeight: 600 }}>Day 30: 314 searches</p>
                </div>
              </div>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginTop: "1.5rem" }}>
                More people started finding the business through Google.
              </p>
            </div>
          </div>

          {/* Client Success */}
          <div style={{ marginBottom: "4rem", background: "#f5f4f0", border: "1.5px solid #e8e8e4", borderRadius: 4, padding: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.5px", textTransform: "uppercase", marginBottom: "1.5rem" }}>Client Success Story</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "1.5rem" }}>
              Encouraged by our results, we rolled out the same strategy for a local spa client. Here's what happened:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
              {[
                { value: "+80%", label: "Customer Actions in 60 Days" },
                { value: "3x", label: "Photo View Increase" },
                { value: "#1", label: "Local Search Rankings" }
              ].map((stat) => (
                <div key={stat.label} style={{ background: "#fff", padding: "1.5rem", borderRadius: 4, border: "1.5px solid #e8e8e4", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", color: "#1a1a1a", marginBottom: "0.5rem" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.85rem", color: "#666", letterSpacing: "1px", textTransform: "uppercase" }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
              The spa saw enhanced photo views, better post engagement, and improved rankings for localized search terms—all within 60 days.
            </p>
          </div>

          {/* Key Takeaways */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.5px", textTransform: "uppercase", marginBottom: "1.5rem" }}>Key Takeaways</h2>
            <div style={{ display: "grid", gap: "1.25rem" }}>
              {[
                { icon: "schedule", title: "Consistency Wins", desc: "Regular updates help your business stay active and visible on Google" },
                { icon: "photo_camera", title: "Images Matter", desc: "Adding new and high-quality photos improves engagement" },
                { icon: "forum", title: "Customer Engagement", desc: "Reviews and replies build trust and increase visibility" },
                { icon: "trending_up", title: "Stay Active", desc: "Google rewards businesses that update their profiles regularly" }
              ].map((takeaway) => (
                <div key={takeaway.title} style={{ display: "flex", gap: "1.25rem", padding: "1.5rem", background: "#fff", border: "1.5px solid #e8e8e4", borderRadius: 4 }}>
                  <div style={{ flexShrink: 0, width: 50, height: 50, background: "#1a1a1a", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Material Symbols Outlined'", fontSize: 24, color: "#fff" }}>{takeaway.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.3rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>{takeaway.title}</div>
                    <div style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.7 }}>{takeaway.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2.5rem", letterSpacing: "-0.5px", textTransform: "uppercase", marginBottom: "1.5rem" }}>The Bottom Line</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginBottom: "1.25rem" }}>
              Google Business Profile can drive real results if used properly. This case study shows that simple daily actions can lead to strong growth in a short time.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
              If you want to get more traffic, calls, and leads from your Google profile, this strategy works.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#1a1a1a", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2rem,6vw,4rem)", textTransform: "uppercase", lineHeight: 1, letterSpacing: "-1px", color: "#fff", marginBottom: "1.5rem" }}>Ready to Grow Your Local Visibility?</h2>
          <p style={{ color: "#888", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Let's build a Google Business Profile strategy that drives real results for your business.
          </p>
          <Link to="/contact" className="ctabtn" style={{ fontSize: "1.1rem", padding: "1.25rem 3rem", background: "#fff", color: "#1a1a1a" }}>Get Started Today</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1a1a1a", padding: "2rem", borderTop: "1.5px solid #2a2a2a" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <img src="/logo.png" alt="Acquisitions Growth" style={{ height: 60, width: "auto", display: "block", filter: "brightness(0) invert(1)" }} />
          <div style={{ color: "#444", fontSize: "0.78rem" }}>Copyright 2025 Acquisitions Growth Agency. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
