export default function EvidenceBoard({ evidence = [] }) {
  if (!evidence.length) {
    return <p>No evidence files available yet.</p>;
  }

  return (
    <section className="case-section">
      <p className="eyebrow">Evidence Locker</p>
      <h3>Collected Clues</h3>

      <div className="case-grid">
        {evidence.map((item) => (
          <article className="case-card evidence-card" key={item.id}>
            <span className="evidence-tag">{item.type || "Evidence"}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
