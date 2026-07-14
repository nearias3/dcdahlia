import Container from "../components/ui/Container";
import site from "../data/site";
import SocialLinks from "../components/ui/SocialLinks";

export default function About() {
  return (
    <Container>
      <section className="page-header">
        <p className="eyebrow">About the Author</p>
        <h1>{site.author.name}</h1>
      </section>

      <section className="about-grid">
        <div className="about-left">
          <div className="author-photo-placeholder">
            <img src={site.author.authorPhoto} alt={site.author.name} />
          </div>

          <section className="fun-facts">
            <h2>Random Facts</h2>

            <ul>
              {site.author.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="about-right">
          <div className="about-content">
            <h2>Meet D.C. Dahlia</h2>

            {site.author.fullBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <blockquote className="author-quote">
              “{site.author.quote}”
            </blockquote>
          </div>

          <SocialLinks
            heading="Continue the Investigation"
            description="Follow D.C. Dahlia for writing updates, behind-the-scenes clues, character playlists, events, and future mysteries."
          />
        </div>
      </section>
    </Container>
  );
}
