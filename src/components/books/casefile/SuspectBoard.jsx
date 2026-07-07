import { useState } from "react";
import SuspectFile from "./SuspectFile";

export default function SuspectBoard({ suspects = [] }) {
  const [activeSuspectId, setActiveSuspectId] = useState(suspects[0]?.id);

  const activeSuspect = suspects.find(
    (suspect) => suspect.id === activeSuspectId,
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
              suspect.id === activeSuspectId ? "active" : ""
            }`}
            onClick={() => setActiveSuspectId(suspect.id)}
          >
            {suspect.name}
          </button>
        ))}
      </div>

      <div className="folder-body">
        <SuspectFile suspect={activeSuspect} />
      </div>
    </section>
  );
}
