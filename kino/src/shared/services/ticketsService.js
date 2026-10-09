import { ticketsApi } from "../api/ticketsApi";
import { transformTicketsData } from "../mappers/ticketsMapper";

var ticketsCache = null 


//must invalidate cache
async function refundOrder(orderId) {
    const result = await ticketsApi.refundOrder(orderId);
    ticketsCache = null
    return result;
}

async function getTickets() {

    if (ticketsCache) {
        return ticketsCache
    }

    const result = await ticketsApi.getTickets(); 
    const transformedRes =  transformTicketsData(result);

    ticketsCache = transformedRes
    return transformedRes
}

export { refundOrder, getTickets };