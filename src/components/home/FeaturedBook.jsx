import { Link } from "react-router-dom";

export default function FeaturedBook({ book }) {
  return (
    <section className="featured-book">
      <div>
        <p className="eyebrow">Featured Release</p>
        <h2>{book.metadata.title}</h2>
        <p>{book.descriptions.short}</p>

        <Link className="button-link" to={`/books/${book.slug}`}>
          Open Case File
        </Link>
      </div>

      <div className="featured-book__cover">
        {book.media.coverImage ? (
          <img
            src={book.media.coverImage}
            alt={`${book.metadata.title} book cover`}
          />
        ) : (
          <span>Cover Coming Soon</span>
        )}
      </div>
    </section>
  );
}
