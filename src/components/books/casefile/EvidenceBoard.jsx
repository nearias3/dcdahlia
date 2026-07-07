export default function EvidenceBoard({ evidence = [] }) {
  if (!evidence.length) {
    return <p>No evidence files available yet.</p>;
  }

  return (
    <section className="case-section">
      <h3>Evidence Locker</h3>

      <div className="case-grid">
        {evidence.map((item) => (
          <article className="case-card evidence-card" key={item.id}>
            <p className="eyebrow">{item.type || "Evidence"}</p>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
