import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { slug } = useParams();

  return (
    <section>
      <h1>A Killer Time</h1>
      <p>Current book slug: {slug}</p>
    </section>
  );
}
