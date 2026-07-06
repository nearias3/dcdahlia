import books from "../data/books";
import BookCard from "../components/books/BookCard";
import Container from "../components/ui/Container";

export default function Books() {
  return (
    <Container>
      <section className="page-header">
        <p className="eyebrow">Books</p>

        <h1>The Case Files</h1>

        <p>Explore the mysteries of D.C. Dahlia.</p>
      </section>

      <section className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
    </Container>
  );
}
