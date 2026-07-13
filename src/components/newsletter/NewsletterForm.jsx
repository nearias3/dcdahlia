import site from "../../data/site";

export default function NewsletterForm() {
  const embedUrl = site.newsletter?.embedUrl;

  return (
    <section className="newsletter-signup">
      <div className="newsletter-signup__content">
        <p className="eyebrow">Reader Dispatches</p>

        <h2>Become an Investigator</h2>

        <p>
          Join D.C. Dahlia&apos;s mailing list for new releases, event news,
          bonus case files, character playlists, and behind-the-scenes updates.
        </p>

        <ul className="newsletter-list">
          <li>New book announcements</li>
          <li>Bonus case files and deleted scenes</li>
          <li>Character playlists</li>
          <li>Event announcements</li>
        </ul>
      </div>

      <div className="newsletter-signup__form">
        {embedUrl ? (
          <iframe
            className="brevo-form"
            src={embedUrl}
            title="Subscribe to D.C. Dahlia's newsletter"
            loading="lazy"
            scrolling="auto"
            allowFullScreen
          />
        ) : (
          <p className="newsletter-placeholder">
            Newsletter signup coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
