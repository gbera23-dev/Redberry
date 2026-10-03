

const VENUES = [
  { id: "Galleria Tbilisi", label: "Galleria Tbilisi", city: "Tbilisi" },
  { id: "Rustaveli Palace", label: "Rustaveli Palace", city: "Tbilisi" },
  { id: "Vake Park", label: "Vake Park", city: "Tbilisi" },
  { id: "Batumi Boulevard", label: "Batumi Boulevard", city: "Batumi" }
];

const DATES = [
  { day: "Mon", date: "15", full: "2026-10-15" },
  { day: "Tue", date: "16", full: "2026-10-16" },
  { day: "Wed", date: "17", full: "2026-10-17" },
  { day: "Thu", date: "18", full: "2026-10-18" },
  { day: "Fri", date: "19", full: "2026-10-19" },
  { day: "Sat", date: "20", full: "2026-10-20" },
  { day: "Sun", date: "21", full: "2026-10-21" }
];

const FORMATS = ["Standard", "MAX", "ATMOS", "PANORAMA", "MOTION"];

const LANGUAGES = [
  "Georgian Dub",
  "Georgian Sub",
  "Original + Subtitles",
  "English Dub"
];

const TIMES = [
  { id: "morning", label: "Morning", info: "before 12:00" },
  { id: "afternoon", label: "Afternoon", info: "12:00–18:00" },
  { id: "evening", label: "Evening", info: "after 18:00" }
];


export { VENUES, DATES, FORMATS, LANGUAGES, TIMES }