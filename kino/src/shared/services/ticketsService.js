import { ticketsApi } from "../api/ticketsApi";

async function refundOrder(orderId) {
    const result = await ticketsApi.refundOrder(orderId);
    return result;
}

async function getTickets(filter) {
    const result = await ticketsApi.getTickets(filter);
    return result;
}

export { refundOrder, getTickets };