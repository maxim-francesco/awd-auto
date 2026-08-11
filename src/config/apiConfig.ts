// Centralized API base. Reads VITE_API_URL (root, no /api/public), falls back to production.
export const API_BASE_URL: string =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/+$/, '') ||
  'https://saas-platform-backend.onrender.com';

export const BUSINESS_ID = "cmg5ligro0175s52cn0jimm7s";
