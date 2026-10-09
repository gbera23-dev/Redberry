import { useState } from "react";
import TicketsFilter from "./TicketsFilter";
import TicketCard from "./TicketCard";
import "./TicketsTab.css";
import { useTicketsTab } from "../hooks/useTicketsTab";

const DEFAULT_PAST_COUNT = 0 

export default function TicketsTab({ active, tickets }) {
  if (active !== "tickets" || !tickets) {
    return null;
  }

  const { subTab, setSubTab, onRefund, upcomingTickets, pastTickets, displayedTickets,} = useTicketsTab(tickets)

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
            isUpcoming={ticket.status=="upcoming"}
          />
        ))}
      </div>
    </div>
  );
}