# Acquisitions Growth React Website

A responsive React + Vite website built from the provided HTML designs.

## Pages

- `/` Home page
- `/contact` Contact page

## Tech

- React
- Vite
- React Router

## Run Locally

```bash
npm install
npm run dev
```

## Contact Form Email Setup

The contact form sends submissions through FormSubmit.

1. Copy `.env.example` to `.env` if needed.
2. Set `VITE_CONTACT_RECIPIENT_EMAIL` to the inbox that should receive new inquiries.
3. Restart the dev server after changing env values.
4. Submit the form once and confirm the activation email FormSubmit sends to that inbox.

The current setup sends:

- Name
- Email
- Phone
- Selected services

The email subject is set automatically from the sender name, and the message uses FormSubmit's table template.

## Build

```bash
npm run build
```

## Project Structure

```text
src/
  components/
    ContactForm.jsx
  pages/
    HomePage.jsx
    ContactPage.jsx
  App.jsx
  main.jsx
```

## Assets

- `logo.png` for site branding
- `favicon.png` for browser tab icon
