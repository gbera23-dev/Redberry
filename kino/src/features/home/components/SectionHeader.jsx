import './SectionHeader.css'

export default function SectionHeader({ title, actionLabel, navFn }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {actionLabel && (
        <a onClick={navFn}>
          {actionLabel}
        </a>
      )}
    </div>
  )
}