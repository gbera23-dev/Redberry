import { bookingApi } from "../api/bookingApi";
import { mapCheckoutToApiRequest, mapPaymentResponseToConfirmation } from "../mappers/bookingMapper";

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

async function payAndCompleteOrder({holdData, formData}) {
    const requestBody = mapCheckoutToApiRequest({holdData:holdData, formData:formData})
    const result = await bookingApi.payAndCompleteOrder(requestBody);
    const transRes = mapPaymentResponseToConfirmation(result);
    return transRes
}

export { holdSessionSeats, readHold, releaseHold, payAndCompleteOrder };