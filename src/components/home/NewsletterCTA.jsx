import { Link } from "react-router-dom";
import site from "../../data/site";

export default function NewsletterCTA() {
  return (
    <section className="newsletter-cta">
      <p className="eyebrow">Newsletter</p>
      <h2>Never Miss a New Mystery</h2>
      <p>{site.author.newsletterText}</p>

      <Link className="button-link" to="/contact">
        Join the Newsletter
      </Link>
    </section>
  );
}
