import { useState } from "react";
import TicketsFilter from "./TicketsFilter";
import TicketCard from "./TicketCard";
import "./TicketsTab.css";

const DEFAULT_PAST_COUNT = 0 

export default function TicketsTab({ active, tickets}) {
  const [subTab, setSubTab] = useState("upcoming");
  const onRefund = () => console.log("refund");
  console.log("tickets") 
  console.log(tickets)
  if (active !== "tickets") {
    return null;
  }

  const upcomingTickets = tickets.filter(t => t.status === "upcoming");
  const pastTickets = tickets.filter(t => t.status === "past");
  const displayedTickets = subTab === "upcoming" ? upcomingTickets : pastTickets;

  return (
    <div className="tickets-tab">
      <TicketsFilter
        activeSubTab={subTab}
        onSelectTab={setSubTab}
        upcomingCount={upcomingTickets.length}
        pastCount={pastTickets.length || DEFAULT_PAST_COUNT}
      />

      <div className="tickets-tab__list">
        {displayedTickets.map((ticket, index) => (
          <TicketCard
            key={`${ticket.id}-${index}`}
            ticket={ticket}
            onRefund={onRefund}
          />
        ))}
      </div>
    </div>
  );
}