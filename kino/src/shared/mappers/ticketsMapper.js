


function formatSessionDate(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const time = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  return `${weekday} ${day} ${month} - ${time}`;
}

function formatRefundableUntil(isoString, hoursBefore = 2) {
  if (!isoString) return "";
  const date = new Date(isoString);
  date.setHours(date.getHours() - hoursBefore);

  const time = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });

  return `${time}, ${weekday} ${day} ${month}`;
}

export function transformTicketsData(apiResponse) {
  if (!apiResponse || !Array.isArray(apiResponse.data)) {
    return [];
  }

  return apiResponse.data.map((item) => {
    const session = item.session || {};
    const movie = session.movie || {};
    const venue = session.venue || {};
    const hall = session.hall || {};
    const format = session.format || {};
    const language = session.language || {};
    const tickets = item.tickets || [];

    const ageRating = movie.ageRating?.minAge
      ? `${movie.ageRating.minAge}+`
      : movie.ageRating?.code || "12+";

    const seats = tickets.map((t) => {
      const typeName = t.ticketType?.name;
      return typeName && typeName !== "string" ? `${t.seatCode} - ${typeName}` : t.seatCode;
    });

    return {
      id: item.reference,
      title: movie.title,
      ageRating,
      duration: `${movie.runtimeMinutes} min`,
      date: formatSessionDate(session.startsAt),
      venue: `${venue.name} - Hall ${hall.name}`,
      format: `${format.name} · ${language.name}`,
      seats,
      poster: movie.posterUrl,
      totalPaid: `₾${item.totalPrice}`,
      refundableUntil: formatRefundableUntil(session.startsAt),
      status: item.isUpcoming ? "upcoming" : "past",
    };
  });
}