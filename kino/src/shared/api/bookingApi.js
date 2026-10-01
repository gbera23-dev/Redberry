import httpClient from "./httpClient";

async function holdSessionSeats(session, payload) {
    const response = await httpClient.post(`/sessions/${session}/holds`, payload);
    return response.data; 
}

async function readHold(hold) {
    const response = await httpClient.get(`/holds/${hold}`);
    return response.data; 
}

async function releaseHold(hold) {
    const response = await httpClient.delete(`/holds/${hold}`);
    return response.data; 
}

async function payAndCompleteOrder(payload) {
    const response = await httpClient.post("/orders", payload);
    return response.data; 
}

export const bookingApi = { holdSessionSeats, readHold, releaseHold, payAndCompleteOrder };