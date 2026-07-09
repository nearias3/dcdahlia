export default function RelationshipBoard({
  suspects = [],
  relationships = [],
  setActiveSuspectId,
}) {
  if (!suspects.length) return null;

  return (
    <section className="relationship-board-section">
      <p className="eyebrow">Relationship Board</p>
      <h3>Connections & Motives</h3>

      <div className="corkboard corkboard--map">
        <svg
          className="relationship-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {relationships.map((relationship) => {
            const from = suspects.find((s) => s.id === relationship.from);
            const to = suspects.find((s) => s.id === relationship.to);

            if (!from?.boardPosition || !to?.boardPosition) return null;

            return (
              <line
                key={relationship.id}
                x1={from.boardPosition.x}
                y1={from.boardPosition.y}
                x2={to.boardPosition.x}
                y2={to.boardPosition.y}
              />
            );
          })}
        </svg>

        {suspects.map((suspect) => (
          <button
            className="corkboard-card corkboard-card--map"
            key={suspect.id}
            type="button"
            style={{
              left: `${suspect.boardPosition?.x || 50}%`,
              top: `${suspect.boardPosition?.y || 50}%`,
            }}
            onClick={() => setActiveSuspectId?.(suspect.id)}
          >
            <span className="push-pin" />
            <div className="corkboard-card__photo">
              {suspect.photo ? (
                <img src={suspect.photo} alt={suspect.name} />
              ) : (
                <span>No Photo</span>
              )}
            </div>
            <h4>{suspect.name}</h4>
            <p>{suspect.role}</p>
          </button>
        ))}

        {relationships.map((relationship) => {
          const from = suspects.find((s) => s.id === relationship.from);
          const to = suspects.find((s) => s.id === relationship.to);

          if (!from?.boardPosition || !to?.boardPosition) return null;

          const noteX = (from.boardPosition.x + to.boardPosition.x) / 2;
          const noteY = (from.boardPosition.y + to.boardPosition.y) / 2;

          return (
            <article
              className="sticky-note sticky-note--map"
              key={relationship.id}
              style={{
                left: `${noteX}%`,
                top: `${noteY}%`,
              }}
            >
              <h4>{relationship.label}</h4>
            </article>
          );
        })}
      </div>
    </section>
  );
}
