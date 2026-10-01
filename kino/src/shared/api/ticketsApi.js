import httpClient from "./httpClient";

async function refundOrder(order) {
  const response = await httpClient.post(`/orders/${order}/refund`);
  return response.data;
}

async function getTickets(filter) {
    const response = await httpClient.get("/tickets", { params : { filter } });
    return response.data; 
}

export const ticketsApi = { refundOrder, getTickets };