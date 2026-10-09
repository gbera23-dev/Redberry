import "./InfoTab.css"
import useInfoTab from "../hooks/useInfoTab.js"
import {VENUES} from "../../../shared/data/filterData.js"

export default function InfoTab({ form, setForm, active}) {

  if (active !== "info") {
        return null; 
    }
    console.log("venues")
    console.log(VENUES)
    const { handleChange, handleSubmit, saveChanges } = useInfoTab({form, setForm})
    
    return (
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__field">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="profile__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} disabled />
            <span className="profile__hint">Set at registration and cannot be changed</span>
          </div>

          <div className="profile__field">
            <label htmlFor="mobile">Mobile number</label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="profile__field">
            <label htmlFor="dob">Date of birth</label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              className="profile__date"
            />
          </div>

          <div className="profile__field">
            <label htmlFor="venue">Preferred Venue (Optional)</label>
            <div className="profile__select-wrap">
              <select id="venue" name="venue" value={form.venue} onChange={handleChange}>
                <option value="">e.g. Text</option>
                {VENUES.map((v) => (
                  <option key={v.id} value={v.label}>
                    {v.label}
                  </option>
                ))}
              </select>
              <svg
                className="profile__chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          <button type="submit" className="profile__submit" onClick={saveChanges}>
            Save changes
          </button>
        </form>
      );
}