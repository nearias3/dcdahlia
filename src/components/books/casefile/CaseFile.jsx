import SuspectBoard from "./SuspectBoard";
import EvidenceBoard from "./EvidenceBoard";
import InvestigationTimeline from "./InvestigationTimeline";
import RelationshipBoard from "./RelationshipBoard";
export default function CaseFile({ caseFile = {} }) {
  return (
    <section className="case-file">
      <div className="case-file__header">
        <p className="eyebrow">Reader Investigation</p>
        <h2>Detective Board</h2>
        <p>Explore suspects, clues, and the unfolding timeline.</p>
      </div>

      <div className="case-file__content">
        <SuspectBoard suspects={caseFile.suspects || []} />
        <RelationshipBoard
          suspects={caseFile.suspects || []}
          relationships={caseFile.relationships || []}
        />
        <EvidenceBoard evidence={caseFile.clues || []} />
        <InvestigationTimeline timeline={caseFile.timeline || []} />
      </div>
    </section>
  );
}
