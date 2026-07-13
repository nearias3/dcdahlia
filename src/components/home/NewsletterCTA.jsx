import { Link } from "react-router-dom";
import site from "../../data/site";

export default function NewsletterCTA() {
  return (
    <section className="newsletter-cta">
      <p className="eyebrow">Reader Dispatches</p>

      <h2>Join the Investigation</h2>

      <p>{site.author.newsletterText}</p>

      <Link className="button-link" to="/contact">
        Become an Investigator
      </Link>
    </section>
  );
}
