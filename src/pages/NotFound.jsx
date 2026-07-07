import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

export default function NotFound() {
  return (
    <Container>
      <section className="not-found">
        <p className="eyebrow">Case File Missing</p>
        <h1>404</h1>
        <p>This file seems to have disappeared from the evidence locker.</p>

        <Link className="button-link" to="/">
          Return Home
        </Link>
      </section>
    </Container>
  );
}
