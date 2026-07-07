import { Link, useParams } from "react-router-dom";
import books from "../data/books";
import Container from "../components/ui/Container";
import DetectiveBoard from "../components/books/DetectiveBoard";
export default function BookDetail() {
  const { slug } = useParams();
  const book = books.find((book) => book.slug === slug);

  if (!book) {
    return (
      <Container>
        <h1>Book Not Found</h1>
        <p>We couldn&apos;t find that case file.</p>
        <Link className="button-link" to="/books">
          Back to Books
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <article className="book-detail">
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

        <section className="purchase-section">
          <h2>Get the Book</h2>
          <div className="button-row">
            {book.links.amazon && (
              <a className="button-link" href={book.links.amazon}>
                Amazon
              </a>
            )}
            {book.links.barnesAndNoble && (
              <a className="button-link" href={book.links.barnesAndNoble}>
                Barnes & Noble
              </a>
            )}
            {book.links.bookshop && (
              <a className="button-link" href={book.links.bookshop}>
                Bookshop
              </a>
            )}
          </div>

          {!book.links.amazon &&
            !book.links.barnesAndNoble &&
            !book.links.bookshop && <p>Purchase links coming soon.</p>}
        </section>

        <section className="case-preview">
          <h2>Detective Board</h2>
          <p>Explore suspects, clues, and the unfolding timeline.</p>

          <DetectiveBoard board={book.detectiveBoard} />
        </section>
      </article>
    </Container>
  );
}
