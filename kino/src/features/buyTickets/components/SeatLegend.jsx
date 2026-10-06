import "./SeatLegend.css"


const LEGEND_OPTIONS = ["Available", "Selected", "Sold", "Held by another user"]

export default function SeatLegend() {
  return (
    <div className="seat-legend">
      <div className="seat-legend__item">
        <span className="seat-legend__swatch seat-legend__swatch--available" />
        <span>{LEGEND_OPTIONS[0]}</span>
      </div>
      <div className="seat-legend__item">
        <span className="seat-legend__swatch seat-legend__swatch--selected" />
        <span>{LEGEND_OPTIONS[1]}</span>
      </div>
      <div className="seat-legend__item">
        <span className="seat-legend__swatch seat-legend__swatch--sold" />
        <span>{LEGEND_OPTIONS[2]}</span>
      </div>
      <div className="seat-legend__item">
        <span className="seat-legend__swatch seat-legend__swatch--held" />
        <span>{LEGEND_OPTIONS[3]}</span>
      </div>
    </div>
  );
}