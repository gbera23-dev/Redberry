

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
  },
  {
    id: "m5",
    title: "The Batman II",
    ageRating: "16+",
    runtime: "155 min",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s5-1", time: "11:00", date: "2026-10-16", venue: "Cavea City Mall", location: "Tbilisi", hall: "IMAX Hall", format: "IMAX", language: "Original + Subtitles", price: "₾26", seatsLeft: 42, isSoldOut: false },
      { id: "s5-2", time: "15:15", date: "2026-10-16", venue: "Cavea City Mall", location: "Tbilisi", hall: "IMAX Hall", format: "IMAX", language: "Original + Subtitles", price: "₾26", seatsLeft: 8, isSoldOut: false },
      { id: "s5-3", time: "18:45", date: "2026-10-16", venue: "Cavea City Mall", location: "Tbilisi", hall: "Hall 2", format: "Standard", language: "Georgian Dub", price: "₾20", seatsLeft: 0, isSoldOut: true },
      { id: "s5-4", time: "22:00", date: "2026-10-16", venue: "Cavea City Mall", location: "Tbilisi", hall: "IMAX Hall", format: "IMAX", language: "Original + Subtitles", price: "₾26", seatsLeft: 19, isSoldOut: false }
    ]
  },
  {
    id: "m6",
    title: "Interstellar: Re-Release",
    ageRating: "12+",
    runtime: "169 min",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s6-1", time: "12:30", date: "2026-10-16", venue: "Cavea East Point", location: "Tbilisi", hall: "Hall 1", format: "IMAX", language: "Original + Subtitles", price: "₾28", seatsLeft: 14, isSoldOut: false },
      { id: "s6-2", time: "16:15", date: "2026-10-16", venue: "Cavea East Point", location: "Tbilisi", hall: "Hall 1", format: "IMAX", language: "Original + Subtitles", price: "₾28", seatsLeft: 2, isSoldOut: false },
      { id: "s6-3", time: "20:00", date: "2026-10-16", venue: "Cavea East Point", location: "Tbilisi", hall: "Hall 1", format: "IMAX", language: "Original + Subtitles", price: "₾28", seatsLeft: 0, isSoldOut: true }
    ]
  },
  {
    id: "m7",
    title: "Gladiator II",
    ageRating: "18+",
    runtime: "148 min",
    poster: "https://images.unsplash.com/photo-1568819329830-321ae51b8883?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s7-1", time: "13:00", date: "2026-10-16", venue: "Amirani Cinema", location: "Tbilisi", hall: "Hall 1", format: "Standard", language: "Original + Subtitles", price: "₾18", seatsLeft: 50, isSoldOut: false },
      { id: "s7-2", time: "17:30", date: "2026-10-16", venue: "Amirani Cinema", location: "Tbilisi", hall: "Hall 1", format: "Standard", language: "Original + Subtitles", price: "₾18", seatsLeft: 28, isSoldOut: false },
      { id: "s7-3", time: "21:00", date: "2026-10-16", venue: "Amirani Cinema", location: "Tbilisi", hall: "VIP Hall", format: "VIP", language: "Original + Subtitles", price: "₾35", seatsLeft: 6, isSoldOut: false }
    ]
  },
  {
    id: "m8",
    title: "Cyberpunk: Neon City",
    ageRating: "16+",
    runtime: "118 min",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s8-1", time: "11:30", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall A", format: "3D", language: "Original + Subtitles", price: "₾24", seatsLeft: 38, isSoldOut: false },
      { id: "s8-2", time: "15:00", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall A", format: "3D", language: "Georgian Dub", price: "₾22", seatsLeft: 11, isSoldOut: false },
      { id: "s8-3", time: "18:30", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall A", format: "PANORAMA", language: "Original + Subtitles", price: "₾24", seatsLeft: 0, isSoldOut: true },
      { id: "s8-4", time: "21:45", date: "2026-10-16", venue: "Galleria Tbilisi", location: "Tbilisi", hall: "Hall A", format: "PANORAMA", language: "Original + Subtitles", price: "₾24", seatsLeft: 22, isSoldOut: false }
    ]
  },
  {
    id: "m9",
    title: "Spirited Away",
    ageRating: "6+",
    runtime: "125 min",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s9-1", time: "10:00", date: "2026-10-16", venue: "Amirani Cinema", location: "Tbilisi", hall: "Hall 3", format: "Standard", language: "Georgian Dub", price: "₾16", seatsLeft: 60, isSoldOut: false },
      { id: "s9-2", time: "13:30", date: "2026-10-16", venue: "Amirani Cinema", location: "Tbilisi", hall: "Hall 3", format: "Standard", language: "Original + Subtitles", price: "₾16", seatsLeft: 34, isSoldOut: false },
      { id: "s9-3", time: "16:45", date: "2026-10-16", venue: "Amirani Cinema", location: "Tbilisi", hall: "Hall 3", format: "Standard", language: "Georgian Dub", price: "₾16", seatsLeft: 15, isSoldOut: false }
    ]
  },
  {
    id: "m10",
    title: "Blade Runner 2099",
    ageRating: "16+",
    runtime: "142 min",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s10-1", time: "12:00", date: "2026-10-16", venue: "Cavea City Mall", location: "Tbilisi", hall: "Hall 5", format: "Standard", language: "Original + Subtitles", price: "₾22", seatsLeft: 29, isSoldOut: false },
      { id: "s10-2", time: "15:45", date: "2026-10-16", venue: "Cavea City Mall", location: "Tbilisi", hall: "Hall 5", format: "MAX", language: "Original + Subtitles", price: "₾24", seatsLeft: 7, isSoldOut: false },
      { id: "s10-3", time: "19:30", date: "2026-10-16", venue: "Cavea City Mall", location: "Tbilisi", hall: "Hall 5", format: "MAX", language: "Original + Subtitles", price: "₾24", seatsLeft: 0, isSoldOut: true },
      { id: "s10-4", time: "22:45", date: "2026-10-16", venue: "Cavea City Mall", location: "Tbilisi", hall: "Hall 5", format: "Standard", language: "Original + Subtitles", price: "₾22", seatsLeft: 18, isSoldOut: false }
    ]
  },
  {
    id: "m11",
    title: "Oppenheimer: Extended",
    ageRating: "16+",
    runtime: "180 min",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s11-1", time: "11:15", date: "2026-10-16", venue: "Cavea East Point", location: "Tbilisi", hall: "Hall 2", format: "IMAX", language: "Original + Subtitles", price: "₾25", seatsLeft: 40, isSoldOut: false },
      { id: "s11-2", time: "15:30", date: "2026-10-16", venue: "Cavea East Point", location: "Tbilisi", hall: "Hall 2", format: "IMAX", language: "Original + Subtitles", price: "₾25", seatsLeft: 12, isSoldOut: false },
      { id: "s11-3", time: "19:45", date: "2026-10-16", venue: "Cavea East Point", location: "Tbilisi", hall: "Hall 2", format: "IMAX", language: "Original + Subtitles", price: "₾25", seatsLeft: 5, isSoldOut: false }
    ]
  },
  {
    id: "m12",
    title: "The Last Horizon",
    ageRating: "12+",
    runtime: "110 min",
    poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=300&q=80",
    sessions: [
      { id: "s12-1", time: "10:45", date: "2026-10-16", venue: "Vake Park", location: "Tbilisi", hall: "Open Air", format: "Standard", language: "Original + Subtitles", price: "₾20", seatsLeft: 55, isSoldOut: false },
      { id: "s12-2", time: "14:15", date: "2026-10-16", venue: "Vake Park", location: "Tbilisi", hall: "Open Air", format: "Standard", language: "Georgian Dub", price: "₾20", seatsLeft: 20, isSoldOut: false },
      { id: "s12-3", time: "18:00", date: "2026-10-16", venue: "Vake Park", location: "Tbilisi", hall: "Open Air", format: "Standard", language: "Original + Subtitles", price: "₾20", seatsLeft: 0, isSoldOut: true },
      { id: "s12-4", time: "21:00", date: "2026-10-16", venue: "Vake Park", location: "Tbilisi", hall: "Open Air", format: "Standard", language: "Original + Subtitles", price: "₾20", seatsLeft: 32, isSoldOut: false }
    ]
  }
];

export default {MOCK_TICKETS, MOCK_SESSIONS};
