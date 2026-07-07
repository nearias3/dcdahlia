import Container from "../components/ui/Container";
import site from "../data/site";

export default function Contact() {
  return (
    <Container>
      <section className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Get in Touch</h1>
        <p>For reader messages, media inquiries, and newsletter updates.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h2>Contact</h2>

          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required />

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-card">
          <h2>Newsletter</h2>
          <p>
            Newsletter signup coming soon. This will link to{" "}
            {site.author.substack || "D.C. Dahlia’s newsletter"}.
          </p>

          <a className="button-link" href="#newsletter">
            Join the Newsletter
          </a>
        </div>
      </section>
    </Container>
  );
}
