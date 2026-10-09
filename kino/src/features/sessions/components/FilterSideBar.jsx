import "./FilterSideBar.css";
import { VENUES, DATES, FORMATS, LANGUAGES, TIMES } from "../../../shared/data/filterData"

export default function FilterSideBar({
  filters,
  setFilters,
  selectedDate,
  setSelectedDate
}) {
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const currentList = prev[category] || [];
      const exists = currentList.includes(value);
      return {
        ...prev,
        [category]: exists
          ? currentList.filter((item) => item !== value)
          : [...currentList, value]
      };
    });
  };

  const handleDateSelect = (dateVal) => {
    if (selectedDate != dateVal) {
      setSelectedDate(dateVal);
    }
  };

  const activeCount =
    (filters.venues?.length || 0) +
    (filters.formats?.length || 0) +
    (filters.languages?.length || 0) +
    (filters.times?.length || 0) +
    (selectedDate ? 1 : 0);

    console.log("filters are %s %s %s %d", filters.venues, filters.formats, 
        filters.languages, filters.times );
    console.log("date is %s", selectedDate); 
  return (
    <aside className="filter-sidebar">
      <h2 className="filter-title">Filters</h2>

      <div className="filter-group">
        <h3 className="filter-group-title">VENUE</h3>
        <div className="filter-options">
          {VENUES.map((venue) => (
            <label key={venue.id} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.venues?.includes(venue.id) || false}
                onChange={() => handleCheckboxChange("venues", venue.id)}
              />
              <span className="checkbox-text">
                <span className="venue-name">{venue.label}</span>
                <span className="venue-city"> · {venue.city}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-group-title">DATE</h3>
        <div className="date-strip">
          {DATES.map((d) => (
            <button
              key={d.full}
              type="button"
              className={`date-pill ${
                selectedDate === d.full ? "active" : ""
              }`}
              onClick={() => handleDateSelect(d.full)}
            >
              <span className="date-day">{d.day}</span>
              <span className="date-num">{d.date}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-group-title">FORMAT</h3>
        <div className="filter-options">
          {FORMATS.map((format) => (
            <label key={format} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.formats?.includes(format) || false}
                onChange={() => handleCheckboxChange("formats", format)}
              />
              <span className="checkbox-text">{format}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-group-title">LANGUAGE</h3>
        <div className="filter-options">
          {LANGUAGES.map((lang) => (
            <label key={lang} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.languages?.includes(lang) || false}
                onChange={() => handleCheckboxChange("languages", lang)}
              />
              <span className="checkbox-text">{lang}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-group-title">TIME OF DAY</h3>
        <div className="filter-options">
          {TIMES.map((time) => (
            <label key={time.id} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.times?.includes(time.id) || false}
                onChange={() => handleCheckboxChange("times", time.id)}
              />
              <span className="checkbox-text">
                {time.label}{" "}
                <span className="time-info">{time.info}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-footer">
        <span>{activeCount} filters active</span>
      </div>
    </aside>
  );
};
