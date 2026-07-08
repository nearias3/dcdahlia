import { Link } from "react-router-dom";

export default function NewsletterCTA() {
  return (
    <section className="newsletter-cta">
      <p className="eyebrow">Newsletter</p>
      <h2>Never Miss a New Mystery</h2>
      <p>Get updates about new releases, events, bonus content, and more.</p>

      <Link className="button-link" to="/contact">
        Join the Newsletter
      </Link>
    </section>
  );
}
