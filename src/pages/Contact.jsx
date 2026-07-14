import { useState } from "react";
import Container from "../components/ui/Container";
import NewsletterForm from "../components/newsletter/NewsletterForm";
import SocialLinks from "../components/ui/SocialLinks";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgqnjaz";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <Container>
      <section className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Send a Message</h1>
        <p>
          Questions, event inquiries, and messages for D.C. Dahlia are welcome.
        </p>
      </section>

      <section className="contact-card">
        {status === "success" ? (
          <div className="form-success" role="status" aria-live="polite">
            <h2>Message received</h2>
            <p>Thank you! Your message has been sent to D.C. Dahlia.</p>

            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setErrorMessage("");
              }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" type="text" required />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="7" required />
            </div>

            <input
              type="hidden"
              name="_subject"
              value="New message from the D.C. Dahlia website"
            />

            <input
              type="text"
              name="_gotcha"
              className="form-honeypot"
              tabIndex="-1"
              autoComplete="off"
            />

            {status === "error" && (
              <p className="form-error" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              aria-busy={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </section>

      <SocialLinks
        heading="Follow the Case"
        description="Prefer social media? Keep up with D.C. Dahlia's latest clues, announcements, and behind-the-scenes updates."
      />
      
      <NewsletterForm />
    </Container>
  );
}
