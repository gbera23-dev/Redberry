import { useState } from "react";
// import TicketFilters from "./TicketFilters";
// import TicketCard from "./TicketCard";
import "./TicketsTab.css";

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
];

export default function TicketsTab({ active, tickets = MOCK_TICKETS, onRefund }) {
  const [subTab, setSubTab] = useState("upcoming");

  if (active !== "tickets") {
    return null;
  }

  const upcomingTickets = tickets.filter((t) => t.status === "upcoming");
  const pastTickets = tickets.filter((t) => t.status === "past");
  const displayedTickets = subTab === "upcoming" ? upcomingTickets : pastTickets;

  return (
    <div className="tickets-tab">
      {/* <TicketFilters
        activeSubTab={subTab}
        onSelectTab={setSubTab}
        upcomingCount={upcomingTickets.length}
        pastCount={pastTickets.length || 10}
      />

      <div className="tickets-tab__list">
        {displayedTickets.map((ticket, index) => (
          <TicketCard
            key={`${ticket.id}-${index}`}
            ticket={ticket}
            onRefund={onRefund}
          />
        ))}
      </div> */}
    </div>
  );
}