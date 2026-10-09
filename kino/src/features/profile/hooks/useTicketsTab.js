import { useState } from "react"
import { refundOrder } from "../../../shared/services/ticketsService"

export function useTicketsTab(tickets) {
    const [subTab, setSubTab] = useState("upcoming");

    const onRefund = async (orderId) => {
        try {
            const res = await refundOrder(orderId)
            setSubTab(null)
        } catch (err) {
            alert("something went wrong with a refund!")
            alert(err?.message)
        }
    }

    const upcomingTickets = tickets.filter(t => t.status === "upcoming");
    const pastTickets = tickets.filter(t => t.status === "past");
    const displayedTickets = subTab === "upcoming" ? upcomingTickets : pastTickets;

    return {
        subTab, 
        setSubTab,
        onRefund,
        upcomingTickets,
        pastTickets,
        displayedTickets,
    }
}