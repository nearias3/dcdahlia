import { Link } from "react-router-dom";

export default function BookHero({ book }) {
  return (
    <section className="book-hero">
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

      <div className="book-hero__content">
        <p className="eyebrow">Case File</p>
        <h1>{book.metadata.title}</h1>
        <p>{book.metadata.genre}</p>
        <p>{book.descriptions.long || "Synopsis coming soon."}</p>

        <div className="book-meta-list">
          <p>
            <strong>Genre:</strong> {book.metadata.genre}
          </p>
          <p>
            <strong>Release:</strong> {book.metadata.releaseDate}
          </p>
          <p>
            <strong>Series:</strong> {book.metadata.series || "Standalone"}
          </p>
        </div>

        <Link className="button-link" to="/books">
          Back to Books
        </Link>
      </div>
    </section>
  );
}
