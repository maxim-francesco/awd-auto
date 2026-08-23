/**
 * Normalizes a video link or ID (YouTube, TikTok, Cloudinary, etc.) into a valid HTTP/HTTPS URL.
 * Returns null if the input is missing, empty, "N/A", or unrecognisable.
 */
export function formatVideoUrl(input?: string | null): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed || trimmed === "N/A") return null;

  // 1. Full HTTP / HTTPS URLs
  if (/^https?:\/\//i.test(trimmed)) {
    try {
      new URL(trimmed);
      return trimmed;
    } catch {
      return null;
    }
  }

  // 2. URLs missing scheme (e.g. www.youtube.com/..., youtube.com/..., youtu.be/..., tiktok.com/..., vm.tiktok.com/...)
  if (/^(www\.|youtube\.com|youtu\.be|tiktok\.com|vm\.tiktok\.com)/i.test(trimmed)) {
    const prefixed = `https://${trimmed}`;
    try {
      new URL(prefixed);
      return prefixed;
    } catch {
      return null;
    }
  }

  // 3. Bare YouTube ID (11 characters: alphanumeric, '_', '-')
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return `https://www.youtube.com/watch?v=${trimmed}`;
  }

  return null;
}
