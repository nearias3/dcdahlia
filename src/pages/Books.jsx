import { Link } from "react-router-dom";
import books from "../data/books";

export default function Books() {
  return (
    <section>
      <h1>Books</h1>

      {books.map((book) => (
        <article key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.genre}</p>
          <Link to={`/books/${book.slug}`}>View Book</Link>
        </article>
      ))}
    </section>
  );
}
