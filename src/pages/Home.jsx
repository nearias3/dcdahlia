import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import books from "../data/books";
import site from "../data/site";

export default function Home() {
  const featuredBook = books[0];

  return (
    <Container>
      <section className="home-hero">
        <div className="home-hero__content">
          <img
            className="home-logo"
            src={site.branding.logo}
            alt={`${site.author.name} logo`}
          />

          <p className="eyebrow">Official Author Website</p>

<p className="hero-tagline">
  Mysteries worth losing sleep over.
</p>

          <div className="button-row">
            <Link className="button-link" to="/books">
              View Books
            </Link>
            <Link className="button-link" to="/contact">
              Join Newsletter
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-book">
        <div>
          <p className="eyebrow">Featured Case File</p>
          <h2>{featuredBook.metadata.title}</h2>
          <p>{featuredBook.descriptions.short}</p>

          <Link className="button-link" to={`/books/${featuredBook.slug}`}>
            Open Case File
          </Link>
        </div>

        <div className="featured-book__cover">
          {featuredBook.media.coverImage ? (
            <img
              src={featuredBook.media.coverImage}
              alt={`${featuredBook.metadata.title} book cover`}
            />
          ) : (
            <span>Cover Coming Soon</span>
          )}
        </div>
      </section>
    </Container>
  );
}
