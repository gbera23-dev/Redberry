
export const mapCheckoutToApiRequest = ({ holdData, formData = {} }) => {
  const holdId = typeof holdData === "string" 
    ? holdData 
    : holdData?.holdId || holdData?.data?.holdId || "";

  return {
    holdId,
    fullName: formData.fullName || formData.name || "",
    email: formData.email || "",
    mobileNumber: formData.mobileNumber || formData.phone || "",
    cardNumber: formData.cardNumber || "",
    expiry: formData.expiry || formData.expirationDate || "",
    cvv: formData.cvv || formData.cvc || "",
  };
};


export const mapPaymentResponseToConfirmation = (apiResponse) => {
  const data = apiResponse?.data || apiResponse || {};
  const session = data.session || {};
  const movie = session.movie || {};
  const venue = session.venue || {};
  const hall = session.hall || {};
  const tickets = data.tickets || [];

  const ticketCounts = {};
  tickets.forEach((t) => {
    const typeName = t.ticketType?.name || "Standard";
    ticketCounts[typeName] = (ticketCounts[typeName] || 0) + 1;
  });

  const ticketSummary = Object.entries(ticketCounts)
    .map(([type, count]) => `${count} x ${type}`)
    .join(", ");

  return {
    orderNumber: data.reference || String(data.id || ""),
    totalPaid: data.totalPrice || 0,
    seats: tickets.map((t) => t.seatCode),
    ticketSummary,
    movieDetails: {
      title: movie.title || "",
      hall: `${venue.name || ""} · Hall ${hall.name || ""}`,
      dateTime: `${session.date || ""} · ${session.time || ""}`,
      posterUrl: movie.posterUrl || "",
    },
  };
};