import site from "../data/site";
import Container from "../components/ui/Container";

export default function Events() {
  const calendarUrl = site.calendar?.embedUrl;
  const upcomingEvents = site.events || [];

  return (
    <Container>
      <section className="page-header">
        <p className="eyebrow">Appearances & Events</p>
        <h1>Join the Investigation</h1>
        <p>
          Find upcoming signings, readings, performances, and appearances
          featuring D.C. Dahlia.
        </p>
      </section>

      <section className="events-calendar-card">
        <div className="events-calendar-card__header">
          <div>
            <p className="eyebrow">Public Calendar</p>
            <h2>Upcoming Events</h2>
          </div>

          <p>
            Select an event in the calendar to view its full details.
          </p>
        </div>

        {calendarUrl ? (
          <div className="calendar-frame">
            <iframe
              className="calendar-embed"
              src={calendarUrl}
              title="D.C. Dahlia public events calendar"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="calendar-placeholder">
            <div>
              <h2>New evidence pending</h2>
              <p>The public events calendar will appear here soon.</p>
            </div>
          </div>
        )}
      </section>

      {upcomingEvents.length > 0 && (
        <section className="event-highlights">
          <div className="event-highlights__header">
            <p className="eyebrow">Case Notes</p>
            <h2>Featured Appearances</h2>
          </div>

          <div className="event-preview-list">
            {upcomingEvents.map((event) => (
              <article className="event-preview-card" key={event.id}>
                <p className="event-preview-card__date">{event.date}</p>
                <h3>{event.title}</h3>
                <p>{event.location}</p>

                {event.description && <p>{event.description}</p>}

                {event.link && (
                  <a
                    className="button-link"
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Event Details
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
