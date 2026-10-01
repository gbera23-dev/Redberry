import httpClient from "./httpClient";

async function profile(payload) {
  const response = await httpClient.put("/profile", payload);
  return response.data;
}
