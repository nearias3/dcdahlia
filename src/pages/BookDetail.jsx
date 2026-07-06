import { useParams } from "react-router-dom";
import books from "../data/books";
import Container from "../components/ui/Container";

export default function BookDetail() {
  const { slug } = useParams();

  const book = books.find((book) => book.slug === slug);

  if (!book) {
    return (
      <section>
        <h1>Book Not Found</h1>
        <p>We couldn&apos;t find that book.</p>
      </section>
    );
  }

  return (
    <Container>
        <section>
        <h1>{book.title}</h1>
        <p>{book.genre}</p>

        <h2>Synopsis</h2>
        <p>{book.synopsis || "Synopsis coming soon."}</p>

        <h2>Detective Board</h2>
        <p>Characters, clues, and case files coming soon.</p>
        </section>
    </Container>
  );
}
