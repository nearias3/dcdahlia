export default function SectionDivider({ number, title, subtitle }) {
  return (
    <div className="case-divider">
      <div className="case-divider__line" />

      <div className="case-divider__text">
        <p>Section {number}</p>
        <h3>{title}</h3>
        {subtitle && <span>{subtitle}</span>}
      </div>

      <div className="case-divider__line" />
    </div>
  );
}
