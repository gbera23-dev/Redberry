import { useState } from "react";
import TicketsFilter from "./TicketsFilter";
import TicketCard from "./TicketCard";
import "./TicketsTab.css";
import MOCK_DATA from "../../../shared/data/ticketsData";

const DEFAULT_PAST_COUNT = 10 

export default function TicketsTab({ active, tickets = MOCK_DATA.MOCK_TICKETS}) {
  const [subTab, setSubTab] = useState("upcoming");
  const onRefund = () => console.log("refund"); 

  if (active !== "tickets") {
    return null;
  }

  console.log(typeof(tickets))

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