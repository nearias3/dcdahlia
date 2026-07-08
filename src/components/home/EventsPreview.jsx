import { Link } from "react-router-dom";
import site from "../../data/site";

export default function EventsPreview() {
  const upcomingEvents = site.events.slice(0, 3);

  return (
    <section className="home-section events-preview">
      <p className="eyebrow">Upcoming Events</p>
      <h2>Appearances & Updates</h2>

      <div className="event-preview-list">
        {upcomingEvents.map((event) => (
          <article className="event-preview-card" key={event.id}>
            <p>{event.date}</p>
            <h3>{event.title}</h3>
            <span>{event.location}</span>
          </article>
        ))}
      </div>

      <Link className="button-link" to="/events">
        View Events
      </Link>
    </section>
  );
}
