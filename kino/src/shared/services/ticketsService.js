import { ticketsApi } from "../api/ticketsApi";
import { transformTicketsData } from "../mappers/ticketsMapper";

var ticketsCache = null 

async function refundOrder(orderId) {
    const result = await ticketsApi.refundOrder(orderId);
    return result;
}

async function getTickets() {

    if (ticketsCache) {
        return ticketsCache
    }

    console.log("get tickets api")
    const result = await ticketsApi.getTickets(); 
    const transformedRes =  transformTicketsData(result);

    ticketsCache = transformedRes
    return transformedRes
}

export { refundOrder, getTickets };