import { useRef, useState } from "react";
import SuspectBoard from "./SuspectBoard";
import EvidenceBoard from "./EvidenceBoard";
import InvestigationTimeline from "./InvestigationTimeline";
import RelationshipBoard from "./RelationshipBoard";

export default function CaseFile({ caseFile = {} }) {
  const suspects = caseFile.suspects || [];
  const [activeSuspectId, setActiveSuspectId] = useState(suspects[0]?.id);
  const suspectBoardRef = useRef(null);

  function handleSelectSuspect(id) {
    setActiveSuspectId(id);

    suspectBoardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="case-file">
      <div className="case-file__header">
        <p className="eyebrow">Reader Investigation</p>
        <h2>Detective Board</h2>
        <p>Explore suspects, clues, and the unfolding timeline.</p>
      </div>

      <div className="case-file__content">
        <div ref={suspectBoardRef}>
          <SuspectBoard
            suspects={suspects}
            activeSuspectId={activeSuspectId}
            setActiveSuspectId={setActiveSuspectId}
          />
        </div>

        <RelationshipBoard
          suspects={caseFile.suspects}
          relationships={caseFile.relationships}
          evidencePhotos={caseFile.evidencePhotos}
          setActiveSuspectId={setActiveSuspectId}
        />

        <EvidenceBoard evidence={caseFile.clues || []} />
        <InvestigationTimeline timeline={caseFile.timeline || []} />
      </div>
    </section>
  );
}
