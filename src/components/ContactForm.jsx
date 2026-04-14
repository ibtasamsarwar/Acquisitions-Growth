import { useState } from "react";
import { getMissingContactEmailConfig, sendContactEmail } from "../lib/contactEmail";

const options = [
  "SEO & Content",
  "Paid Advertising",
  "Web Development",
  "Google Ads",
  "Google Business Profile (GBP)",
  "Scale Strategy"
];

const labelStyle = { display: "flex", flexDirection: "column", gap: "0.35rem" };
const labelTextStyle = { fontSize: "0.68rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#999" };
const inputStyle = {
  background: "#fff",
  border: "1.5px solid #e0e0e0",
  borderRadius: 3,
  padding: "0.8rem 1rem",
  color: "#1a1a1a",
  fontSize: "0.95rem",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "'Barlow', sans-serif"
};

export default function ContactForm({ submitLabel = "Submit Inquiry" }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", services: [] });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (service) => {
    setFormData((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service]
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const missingConfig = getMissingContactEmailConfig();

    if (missingConfig.length > 0) {
      setErrorMessage("Contact email is not configured yet. Add the recipient email to your env file to enable submissions.");
      return;
    }

    try {
      setSubmitting(true);
      await sendContactEmail(formData);
      setSubmitted(true);
    } catch (error) {
      setErrorMessage("We could not send your inquiry right now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
          <span className="mso" style={{ color: "#fff", fontSize: 30 }}>check</span>
        </div>
        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2rem", letterSpacing: "1px", color: "#1a1a1a", marginBottom: "0.5rem" }}>YOU&apos;RE IN.</h3>
        <p style={{ color: "#666", fontSize: "1rem" }}>Our growth team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
      <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <label style={labelStyle}>
          <span style={labelTextStyle}>Full Name</span>
          <input type="text" placeholder="John Doe" value={formData.name} onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))} required style={inputStyle} />
        </label>
        <label style={labelStyle}>
          <span style={labelTextStyle}>Email Address</span>
          <input type="email" placeholder="john@company.com" value={formData.email} onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))} required style={inputStyle} />
        </label>
      </div>
      <label style={labelStyle}>
        <span style={labelTextStyle}>Phone Number</span>
        <input type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))} style={inputStyle} />
      </label>
      <div>
        <span style={{ ...labelTextStyle, display: "block", marginBottom: "0.65rem" }}>Services Interested In</span>
        <div className="service-pill-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "0.6rem" }}>
          {options.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              style={{
                padding: "0.8rem 0.95rem",
                borderRadius: 2,
                border: `2px solid ${formData.services.includes(service) ? "#1a1a1a" : "#e0e0e0"}`,
                background: formData.services.includes(service) ? "#1a1a1a" : "#fff",
                color: formData.services.includes(service) ? "#fff" : "#555",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'Barlow', sans-serif",
                minHeight: "54px"
              }}
            >
              {service}
            </button>
          ))}
        </div>
      </div>
      {errorMessage ? (
        <p style={{ color: "#b42318", fontSize: "0.9rem", lineHeight: 1.6 }}>
          {errorMessage}
        </p>
      ) : null}
      <button type="submit" disabled={submitting} style={{ marginTop: "0.5rem", padding: "1.1rem 2rem", background: "#1a1a1a", color: "#fff", borderRadius: 3, fontFamily: "'Anton', sans-serif", fontSize: "1.1rem", letterSpacing: "2px", textTransform: "uppercase", cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.75 : 1, border: "none" }}>
        {submitting ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
