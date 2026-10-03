

const MOCK_TICKETS = [
  {
    id: "KX-48291",
    title: "THE ODYSSEY",
    ageRating: "12+",
    duration: "134 min",
    date: "Tue 15 Sep - 16:30",
    venue: "Galleria Tbilisi - Hall B",
    format: "MAX · Original + Subtitles",
    seats: ["B3 - Adult", "B4 - Adult", "B5 - Student"],
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80",
    totalPaid: "₾32",
    refundableUntil: "14:30, Tue 15 Sep",
    status: "upcoming",
  },
  {
    id: "KX-48291",
    title: "DUNE: Part Three",
    ageRating: "12+",
    duration: "134 min",
    date: "Tue 15 Sep - 16:30",
    venue: "Galleria Tbilisi - Hall B",
    format: "MAX · Original + Subtitles",
    seats: ["B3 - Adult", "B4 - Adult"],
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
    totalPaid: "₾32",
    refundableUntil: "14:30, Tue 15 Sep",
    status: "upcoming",
  },
    {
    id: "KX-48292",
    title: "Rick and Morty",
    ageRating: "12+",
    duration: "134 min",
    date: "Tue 8 Sep - 16:30",
    venue: "Galleria Tbilisi - Hall B",
    format: "MAX · Original + Subtitles",
    seats: ["B3 - Adult", "B4 - Adult"],
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    totalPaid: "₾32",
    refundableUntil: "14:30, Tue 15 Sep",
    status: "past",
  },
    {
    id: "KX-48293",
    title: "Breaking Bad",
    ageRating: "18+",
    duration: "134 min",
    date: "Tue 8 Sep - 16:30",
    venue: "Galleria Tbilisi - Hall B",
    format: "MAX · Original + Subtitles",
    seats: ["B3 - Adult", "B4 - Adult"],
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
    totalPaid: "₾32",
    refundableUntil: "14:30, Tue 15 Sep",
    status: "past",
  },
];

export const MOCK_SESSIONS = [
  {
    id: "m1",
    title: "The Odyssey",
    ageRating: "12+",
    runtime: "134 min",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s1-1", time: "10:15", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "Standard", language: "Original + Subtitles", price: "₾22", seatsLeft: 21, isSoldOut: false },
      { id: "s1-2", time: "14:00", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "MAX", language: "Original + Subtitles", price: "₾22", seatsLeft: 1, isSoldOut: false },
      { id: "s1-3", time: "16:30", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "PANORAMA", language: "Original + Subtitles", price: "₾22", seatsLeft: 45, isSoldOut: false },
      { id: "s1-4", time: "19:15", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "PANORAMA", language: "Original + Subtitles", price: "₾22", seatsLeft: 25, isSoldOut: false },
      { id: "s1-5", time: "21:15", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "PANORAMA", language: "Original + Subtitles", price: "₾22", seatsLeft: 18, isSoldOut: false }
    ]
  },
  {
    id: "m2",
    title: "Avengers: Doomsday",
    ageRating: "12+",
    runtime: "134 min",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s2-1", time: "10:15", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "PANORAMA", language: "Original + Subtitles", price: "₾22", seatsLeft: 3, isSoldOut: false },
      { id: "s2-2", time: "14:00", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "MAX", language: "Original + Subtitles", price: "₾22", seatsLeft: 31, isSoldOut: false },
      { id: "s2-3", time: "16:30", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "Standard", language: "Original + Subtitles", price: "₾22", seatsLeft: 0, isSoldOut: true },
      { id: "s2-4", time: "19:15", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "Standard", language: "Original + Subtitles", price: "₾22", seatsLeft: 17, isSoldOut: false },
      { id: "s2-5", time: "22:30", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "PANORAMA", language: "Original + Subtitles", price: "₾22", seatsLeft: 12, isSoldOut: false }
    ]
  },
  {
    id: "m3",
    title: "Spider-Man",
    ageRating: "12+",
    runtime: "134 min",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s3-1", time: "10:15", date: "2026-10-16", venue: "Vake Park", location: "Tbilisi", hall: "Hall D", format: "Standard", language: "Georgian Dub", price: "₾22", seatsLeft: 33, isSoldOut: false },
      { id: "s3-2", time: "14:00", date: "2026-10-16", venue: "Vake Park", location: "Tbilisi", hall: "Hall D", format: "MAX", language: "Georgian Dub", price: "₾22", seatsLeft: 0, isSoldOut: true },
      { id: "s3-3", time: "16:30", date: "2026-10-16", venue: "Vake Park", location: "Tbilisi", hall: "Hall D", format: "MAX", language: "Georgian Dub", price: "₾22", seatsLeft: 45, isSoldOut: false },
      { id: "s3-4", time: "19:15", date: "2026-10-16", venue: "Vake Park", location: "Tbilisi", hall: "Hall D", format: "Standard", language: "Georgian Dub", price: "₾22", seatsLeft: 23, isSoldOut: false }
    ]
  },
  {
    id: "m4",
    title: "Dune: Part Three",
    ageRating: "12+",
    runtime: "134 min",
    poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s4-1", time: "10:15", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "PANORAMA", language: "Original + Subtitles", price: "₾22", seatsLeft: 12, isSoldOut: false },
      { id: "s4-2", time: "14:00", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "MAX", language: "Original + Subtitles", price: "₾22", seatsLeft: 5, isSoldOut: false },
      { id: "s4-3", time: "16:30", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "Standard", language: "Original + Subtitles", price: "₾22", seatsLeft: 30, isSoldOut: false },
      { id: "s4-4", time: "19:15", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall D", format: "Standard", language: "Original + Subtitles", price: "₾22", seatsLeft: 15, isSoldOut: false }
    ]
  }
];


export default {MOCK_TICKETS, MOCK_SESSIONS};
