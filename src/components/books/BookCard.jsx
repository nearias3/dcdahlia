import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-card__cover">
        {book.coverImage ? (
          <img src={book.coverImage} alt={`${book.title} book cover`} />
        ) : (
          <span>Cover Coming Soon</span>
        )}
      </div>

      <div className="book-card__content">
        <p className="book-card__genre">{book.genre}</p>

        <h2>{book.title}</h2>

        <p>{book.synopsis || "Book details coming soon."}</p>

        <Link className="button-link" to={`/books/${book.slug}`}>
          View Case File
        </Link>
      </div>
    </article>
  );
}
