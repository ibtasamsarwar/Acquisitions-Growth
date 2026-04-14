const FORMSUBMIT_BASE_URL = "https://formsubmit.co/ajax/";

export function getMissingContactEmailConfig() {
  return import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL?.trim()
    ? []
    : ["VITE_CONTACT_RECIPIENT_EMAIL"];
}

export async function sendContactEmail({ name, email, phone, services }) {
  const recipientEmail = import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL?.trim();
  const missingConfig = getMissingContactEmailConfig();

  if (missingConfig.length > 0) {
    throw new Error(`Missing email configuration: ${missingConfig.join(", ")}`);
  }

  const response = await fetch(`${FORMSUBMIT_BASE_URL}${encodeURIComponent(recipientEmail)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      phone: phone || "Not provided",
      services: services.length > 0 ? services.join(", ") : "Not specified",
      _subject: `New inquiry from ${name}`,
      _template: "table",
      _captcha: "false"
    })
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === "false") {
    throw new Error(result?.message || "Failed to send contact form email.");
  }

  return result;
}
