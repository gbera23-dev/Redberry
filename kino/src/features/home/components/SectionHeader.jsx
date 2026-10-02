import './SectionHeader.css'

export default function SectionHeader({ title, actionLabel, href }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {actionLabel && (
        <a href={href}>
          {actionLabel}
        </a>
      )}
    </div>
  )
}