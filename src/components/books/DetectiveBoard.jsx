export default function DetectiveBoard({ board }) {
  return (
    <section className="detective-board">
      <div className="case-section">
        <h3>Suspects</h3>
        <div className="case-grid">
          {board.characters.map((character) => (
            <article className="case-card" key={character.id}>
              <p className="eyebrow">{character.role}</p>
              <h4>{character.name}</h4>
              <p>{character.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="case-section">
        <h3>Clues</h3>
        <div className="case-grid">
          {board.clues.map((clue) => (
            <article className="case-card" key={clue.id}>
              <h4>{clue.title}</h4>
              <p>{clue.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="case-section">
        <h3>Timeline</h3>
        <ul className="case-timeline">
          {board.timeline.map((item) => (
            <li key={item.id}>
              <strong>{item.time}:</strong> {item.event}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
