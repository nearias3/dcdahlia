export default function InvestigationTimeline({ timeline = [] }) {
  if (!timeline.length) {
    return <p>No investigation timeline available yet.</p>;
  }

  return (
    <section className="case-section">
      <p className="eyebrow">Investigation Log</p>
      <h3>Case Timeline</h3>
      

      <ol className="investigation-timeline">
        {timeline.map((item) => (
          <li key={item.id}>
            <span className="timeline-time">{item.time}</span>
            <p>{item.event}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
