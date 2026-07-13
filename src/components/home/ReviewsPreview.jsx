export default function ReviewsPreview({ reviews = [] }) {
  if (!reviews.length) return null;

  return (
    <section className="reviews-preview">
      <p className="eyebrow">Praise for the Book</p>
      <h2>Reader Reviews</h2>

      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <h3 className="review-title">{review.title}</h3>

            <p className="review-body">{review.body}</p>

            <p className="review-source">— {review.source}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
