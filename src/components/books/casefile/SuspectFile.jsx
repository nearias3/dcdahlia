export default function SuspectFile({ suspect }) {
  if (!suspect) return null;

  const roleClass = suspect.role.toLowerCase();
  const suspicionClass = suspect.suspicionLevel?.toLowerCase() || "unknown";

  return (
    <article className="suspect-file dossier">
      <div className="dossier-photo">
        <div className="dossier-photo__clip">📎</div>

        {suspect.photo ? (
          <img src={suspect.photo} alt={suspect.name} />
        ) : (
          <span>Photo Coming Soon</span>
        )}

        <p>Case File Photo</p>
      </div>

      <div className="dossier-details">
        <p className="eyebrow">Case File</p>
        <h3>{suspect.name}</h3>

        <div className={`status-stamp status-stamp--${roleClass}`}>
          {suspect.status}
        </div>

        {suspect.suspicionLevel && (
          <div className={`suspicion-stamp suspicion-stamp--${suspicionClass}`}>
            {suspect.suspicionLevel === "Victim"
              ? "Victim File"
              : `${suspect.suspicionLevel} Suspicion`}
          </div>
        )}

        <dl className="dossier-list">
          <div>
            <dt>Role</dt>
            <dd>{suspect.role || "Unknown"}</dd>
          </div>

          <div>
            <dt>Age</dt>
            <dd>{suspect.age || "Unknown"}</dd>
          </div>

          <div>
            <dt>Case Designation</dt>
            <dd>{suspect.knownAs || "Unknown"}</dd>
          </div>

          <div>
            <dt>Alibi</dt>
            <dd>{suspect.alibi || "Unknown"}</dd>
          </div>
        </dl>

        <section className="case-notes">
          <h4>Detective&apos;s Notes</h4>
          <p>{suspect.notes}</p>
        </section>

        {suspect.playlistLink && (
          <a
            className="button-link playlist-link"
            href={suspect.playlistLink}
            target="_blank"
            rel="noreferrer"
          >
            Open Character Playlist
          </a>
        )}
      </div>
    </article>
  );
}
