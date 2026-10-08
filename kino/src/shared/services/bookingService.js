import { bookingApi } from "../api/bookingApi";

async function holdSessionSeats(sessionId, payload) {
    const result = await bookingApi.holdSessionSeats(sessionId, payload);
    return result;
}

async function readHold(holdId) {
    const result = await bookingApi.readHold(holdId);
    return result;
}

async function releaseHold(holdId) {
    const result = await bookingApi.releaseHold(holdId);
    return result;
}

async function payAndCompleteOrder(payload) {
    const result = await bookingApi.payAndCompleteOrder(payload);
    return result;
}

export { holdSessionSeats, readHold, releaseHold, payAndCompleteOrder };