import httpClient from "./httpClient";

async function profile(requestData) {
  const response = await httpClient.put("/profile", requestData);
  return response.data;
}
