export default function ReviewsPreview({ reviews = [] }) {
  if (!reviews.length) return null;

  return (
    <section className="reviews-preview">
      <p className="eyebrow">Praise for the Book</p>
      <h2>Reader Reviews</h2>

      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <p>“{review.quote}”</p>
            <span>— {review.source}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
