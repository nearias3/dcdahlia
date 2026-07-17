import Container from "../components/ui/Container";
import SocialLinks from "../components/ui/SocialLinks";
import site from "../data/site";

export default function About() {
  const { author } = site;
  const { dossier } = author;

  return (
    <Container>
      <section className="page-header about-page-header">
        <p className="eyebrow">Restricted Personnel File</p>
        <h1>Author Dossier</h1>
        <p>
          Background information, creative intelligence, and recorded statements concerning D.C. Dahlia.
        </p>
      </section>

      <article className="author-dossier">
        <header className="author-dossier__header">
          <div>
            <p className="author-dossier__classification">
              {dossier.classification}
            </p>

            <h2>{author.name}</h2>

            <p className="author-dossier__tagline">{author.tagline}</p>
          </div>

          <div className="author-dossier__file-data">
            <span>File No.</span>
            <strong>{dossier.fileNumber}</strong>
          </div>

          <span className="author-dossier__status">{dossier.status}</span>
        </header>

        <div className="author-dossier__body">
          <aside className="author-dossier__sidebar">
            <figure className="author-dossier__photo">
              <div className="author-dossier__photo-frame">
                <img
                  src={author.authorPhoto}
                  alt={`D.C. Dahlia, author of ${dossier.knownFor}`}
                />

                <span className="author-dossier__photo-label">
                  Subject Photograph
                </span>
              </div>

              <figcaption>
                Image retained for identification purposes.
              </figcaption>
            </figure>

            <section className="author-profile-card">
              <div className="author-profile-card__heading">
                <p className="eyebrow">Subject Profile</p>
                <h3>Identification</h3>
              </div>

              <dl className="author-profile-list">
                <div>
                  <dt>Name</dt>
                  <dd>{author.name}</dd>
                </div>

                <div>
                  <dt>Occupation</dt>
                  <dd>{dossier.occupation}</dd>
                </div>

                <div>
                  <dt>Specialty</dt>
                  <dd>{dossier.specialty}</dd>
                </div>

                <div>
                  <dt>Known For</dt>
                  <dd>{dossier.knownFor}</dd>
                </div>

                <div>
                  <dt>Current Assignment</dt>
                  <dd>{dossier.currentAssignment}</dd>
                </div>

                <div>
                  <dt>Creative Method</dt>
                  <dd>{dossier.creativeMethod}</dd>
                </div>
              </dl>
            </section>
          </aside>

          <div className="author-dossier__main">
            <section className="author-report">
              <div className="author-report__heading">
                <p className="eyebrow">Background Report</p>
                <h3>Subject Overview</h3>
              </div>

              <div className="author-report__content">
                {author.fullBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <span className="author-report__stamp">Archive Verified</span>
            </section>

            <section className="author-statement">
              <span className="author-statement__stamp">Recorded</span>

              <div className="author-statement__heading">
                <p className="eyebrow">Recorded Statement</p>
                <h3>In Her Own Words</h3>
              </div>

              <blockquote>“{author.quote}”</blockquote>

              <p className="author-statement__signature">— D.C. Dahlia</p>
            </section>

            <section className="author-intelligence">
              <div className="author-intelligence__heading">
                <p className="eyebrow">Supplemental Intelligence</p>
                <h3>Notable Findings</h3>
              </div>

              <ol className="author-intelligence__list">
                {author.facts.map((fact, index) => (
                  <li key={fact}>
                    <span className="author-intelligence__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{fact}</span>
                  </li>
                ))}
              </ol>
            </section>

            <SocialLinks
              heading="Continue the Investigation"
              description="Follow D.C. Dahlia for writing updates, behind-the-scenes clues, character playlists, events, and future mysteries."
            />
          </div>
        </div>

        <footer className="author-dossier__footer">
          <span>Official Case Archive</span>
          <span>Personnel record: {dossier.fileNumber}</span>
          <span>Access authorized</span>
        </footer>
      </article>
    </Container>
  );
}
