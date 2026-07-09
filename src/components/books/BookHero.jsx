import { Link } from "react-router-dom";

export default function BookHero({ book }) {
  return (
    <section className="book-hero case-hero">
      <div className="book-hero__cover">
        {book.media.coverImage ? (
          <img
            src={book.media.coverImage}
            alt={`${book.metadata.title} book cover`}
          />
        ) : (
          <span>Cover Coming Soon</span>
        )}
      </div>

      <div className="case-hero__content">
        <p className="eyebrow">Case File #001</p>
        <h1>{book.metadata.title}</h1>

        <div className="case-status">Status: Unsolved</div>

        <dl className="case-summary">
          <div>
            <dt>Genre</dt>
            <dd>{book.metadata.genre}</dd>
          </div>

          <div>
            <dt>Victim</dt>
            <dd>Roy Wilson</dd>
          </div>

          <div>
            <dt>Location</dt>
            <dd>Wrenford Academy</dd>
          </div>

          <div>
            <dt>Release</dt>
            <dd>{book.metadata.releaseDate}</dd>
          </div>
        </dl>

        <p>{book.descriptions.long || "Synopsis coming soon."}</p>

        <Link className="button-link" to="/books">
          Back to Case Files
        </Link>
      </div>
    </section>
  );
}
