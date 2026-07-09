import { useState } from "react";
import SuspectFile from "./SuspectFile";

export default function SuspectBoard({
  suspects = [],
  activeSuspectId,
  setActiveSuspectId,
}) {
  const [localActiveSuspectId, setLocalActiveSuspectId] = useState(
    suspects[0]?.id,
  );

  const currentActiveId = activeSuspectId || localActiveSuspectId;
  const updateActiveId = setActiveSuspectId || setLocalActiveSuspectId;

  const activeSuspect = suspects.find(
    (suspect) => suspect.id === currentActiveId,
  );

  if (!suspects.length) {
    return <p>No suspect files available yet.</p>;
  }

  return (
    <section className="suspect-board">
      <div className="folder-tabs">
        {suspects.map((suspect) => (
          <button
            key={suspect.id}
            className={`folder-tab ${
              suspect.id === currentActiveId ? "active" : ""
            }`}
            onClick={() => updateActiveId(suspect.id)}
          >
            <small>{suspect.role === "Victim" ? "Victim" : "POI"}</small>
            <span>{suspect.name}</span>
          </button>
        ))}
      </div>

      <div className="folder-body">
        <SuspectFile suspect={activeSuspect} />
      </div>
    </section>
  );
}
