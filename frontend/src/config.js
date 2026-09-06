export const API_BASE = "https://shreecloudstorage-1.onrender.com";

export function apiUrl(path = "") {
  if (!path) return API_BASE;
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
