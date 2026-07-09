export default function RelationshipBoard({
  suspects = [],
  relationships = [],
}) {
  if (!suspects.length) return null;

  return (
    <section className="relationship-board-section">
      <p className="eyebrow">Relationship Board</p>
      <h3>Connections & Motives</h3>

      <div className="corkboard">
        <div className="corkboard__photos">
          {suspects.map((suspect) => (
            <article className="corkboard-card" key={suspect.id}>
              <div className="corkboard-card__photo">
                {suspect.photo ? (
                  <img src={suspect.photo} alt={suspect.name} />
                ) : (
                  <span>No Photo</span>
                )}
              </div>

              <h4>{suspect.name}</h4>
              <p>{suspect.role}</p>
            </article>
          ))}
        </div>

        <div className="sticky-notes">
          {relationships.map((relationship) => {
            const from = suspects.find(
              (suspect) => suspect.id === relationship.from,
            );
            const to = suspects.find(
              (suspect) => suspect.id === relationship.to,
            );

            return (
              <article className="sticky-note" key={relationship.id}>
                <h4>{relationship.label}</h4>
                <p>
                  {from?.name || "Unknown"} → {to?.name || "Unknown"}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
