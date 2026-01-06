const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
// Remove trailing slash if present to avoid double slashes in requests
const API_BASE_URL = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

export default API_BASE_URL;
