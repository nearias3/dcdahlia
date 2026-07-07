import { Link, useParams } from "react-router-dom";
import books from "../data/books";
import Container from "../components/ui/Container";
import CaseFile from "../components/books/casefile/CaseFile";import BookHero from "../components/books/BookHero";
import PurchaseLinks from "../components/books/PurchaseLinks";
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
        <PurchaseLinks links={book.links} />
        <CaseFile caseFile={book.caseFile} />
      </article>
    </Container>
  );
}
