export default function SectionTitle({ eyebrow, title, description, id }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}