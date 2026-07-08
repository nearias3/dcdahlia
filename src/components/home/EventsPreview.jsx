import { Link } from "react-router-dom";

export default function EventsPreview() {
  return (
    <section className="home-section events-preview">
      <div>
        <p className="eyebrow">Upcoming Events</p>
        <h2>Appearances & Updates</h2>
        <p>
          Event announcements, signings, launches, and reader events will appear
          here.
        </p>

        <Link className="button-link" to="/events">
          View Events
        </Link>
      </div>
    </section>
  );
}
