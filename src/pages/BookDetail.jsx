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
            {book.coverImage ? (
              <img src={book.coverImage} alt={`${book.title} book cover`} />
            ) : (
              <span>Cover Coming Soon</span>
            )}
          </div>

          <div className="book-hero__content">
            <p className="eyebrow">Case File</p>
            <h1>{book.title}</h1>
            <p>{book.genre}</p>
            <p>{book.synopsis || "Synopsis coming soon."}</p>

            <Link className="button-link" to="/books">
              Back to Books
            </Link>
          </div>
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
