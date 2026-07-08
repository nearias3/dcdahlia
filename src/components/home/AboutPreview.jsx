import { Link } from "react-router-dom";
import site from "../../data/site";

export default function AboutPreview() {
  return (
    <section className="home-section about-preview">
      <div>
        <p className="eyebrow">Meet the Author</p>
        <h2>{site.author.name}</h2>
        <p>
          Author biography preview coming soon.
        </p>

        <Link className="button-link" to="/about">
          Read More
        </Link>
      </div>
    </section>
  );
}
