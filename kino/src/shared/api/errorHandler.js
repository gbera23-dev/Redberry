import { clearToken } from "../utils/tokenUtils";

export const handleApiError = (error) => {
  const status = error.response ? error.response.status : null;
  const data = error.response ? error.response.data : null;
  const requestUrl = error.config?.url || "";

  const cleanMessage =
    data?.message || 
    data?.error || 
    error.message || 
    "An unexpected error occurred.";

  error.cleanMessage = cleanMessage;

  if (status === 401) {
    if (!requestUrl.includes("/login")) {
      clearToken();
      window.dispatchEvent(
        new CustomEvent("auth:required", { detail: { failedRequest: error.config } })
      );
    }
  }

  return Promise.reject(error);
};