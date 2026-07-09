import { useRef, useState } from "react";
import SuspectBoard from "./SuspectBoard";
import EvidenceBoard from "./EvidenceBoard";
import InvestigationTimeline from "./InvestigationTimeline";
import RelationshipBoard from "./RelationshipBoard";
import SectionDivider from "./SectionDivider";

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
        <SectionDivider
          number="01"
          title="Suspect Dossiers"
          subtitle="Click a suspect to inspect their file."
        />

        <div ref={suspectBoardRef}>
          <SuspectBoard
            suspects={suspects}
            activeSuspectId={activeSuspectId}
            setActiveSuspectId={setActiveSuspectId}
          />
        </div>

        <SectionDivider
          number="02"
          title="Relationship Board"
          subtitle="Trace connections, motives, and secrets."
        />

        <RelationshipBoard
          suspects={caseFile.suspects}
          relationships={caseFile.relationships}
          evidencePhotos={caseFile.evidencePhotos}
          setActiveSuspectId={handleSelectSuspect}
        />

        <SectionDivider
          number="03"
          title="Evidence Locker"
          subtitle="Known clues recovered so far."
        />

        <EvidenceBoard evidence={caseFile.clues || []} />

        <SectionDivider
          number="04"
          title="Case Timeline"
          subtitle="Events leading up to Roy Wilson's death."
        />

        <InvestigationTimeline timeline={caseFile.timeline || []} />
      </div>
    </section>
  );
}
