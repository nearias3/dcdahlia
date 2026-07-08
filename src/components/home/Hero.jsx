import { Link } from "react-router-dom";
import site from "../../data/site";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <img
          className="home-logo"
          src={site.branding.logo}
          alt={`${site.author.name} logo`}
        />

        <p className="eyebrow">Official Author Website</p>
        <p className="hero-tagline">{site.author.tagline}</p>

        <div className="button-row">
          <Link className="button-link" to="/books">
            Explore Books
          </Link>
          <Link className="button-link" to="/contact">
            Join Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
}
