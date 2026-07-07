import Container from "../components/ui/Container";

export default function Events() {
  return (
    <Container>
      <section className="page-header">
        <p className="eyebrow">Events</p>
        <h1>Upcoming Events</h1>
        <p>Appearances, signings, launches, and reader events.</p>
      </section>

      <section className="calendar-card">
        <h2>Event Calendar</h2>
        <p>
          Calendar coming soon. This section will display D.C. Dahlia&apos;s
          upcoming events.
        </p>

        <div className="calendar-placeholder">
          <p>Google Calendar Embed Placeholder</p>
          {/* THIS WILL BECOME THE PLACEHOLDER CODE WHEN WE CREATE THE CALENDAR AND HAVE A URL
          <iframe
            title="D.C. Dahlia Events Calendar"
            src="PASTE_GOOGLE_CALENDAR_EMBED_URL_HERE"
            className="calendar-embed"
          ></iframe> */}
        </div>
      </section>
    </Container>
  );
}
