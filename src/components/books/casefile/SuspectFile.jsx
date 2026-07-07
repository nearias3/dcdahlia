export default function SuspectFile({ suspect }) {
  if (!suspect) return null;

  return (
    <article className="suspect-file">
      <div className="suspect-file__photo">
        {suspect.photo ? (
          <img src={suspect.photo} alt={suspect.name} />
        ) : (
          <span>Photo Coming Soon</span>
        )}
      </div>

      <div className="suspect-file__details">
        <p className="eyebrow">Suspect File</p>
        <h3>{suspect.name}</h3>
        <p className="status-stamp">{suspect.status}</p>

        <dl className="suspect-details-list">
          <div>
            <dt>Role</dt>
            <dd>{suspect.role || "Unknown"}</dd>
          </div>
          <div>
            <dt>Age</dt>
            <dd>{suspect.age || "Unknown"}</dd>
          </div>
          <div>
            <dt>Grade</dt>
            <dd>{suspect.grade || "Unknown"}</dd>
          </div>
          <div>
            <dt>Known For</dt>
            <dd>{suspect.knownFor || "Unknown"}</dd>
          </div>
          <div>
            <dt>Last Seen</dt>
            <dd>{suspect.lastSeen || "Unknown"}</dd>
          </div>
          <div>
            <dt>Alibi</dt>
            <dd>{suspect.alibi || "Unknown"}</dd>
          </div>
        </dl>

        <div className="suspect-notes">
          <h4>Notes</h4>
          <p>{suspect.notes}</p>
        </div>
      </div>
    </article>
  );
}
