import { Link, useParams } from "react-router-dom";
import books from "../data/books";
import Container from "../components/ui/Container";
import CaseFile from "../components/books/casefile/CaseFile";import BookHero from "../components/books/BookHero";

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
        <BookHero book={book} />

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

        <CaseFile caseFile={book.caseFile} />
      </article>
    </Container>
  );
}
