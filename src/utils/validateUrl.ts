/**
 * URL validation for tag link field.
 * - Empty string is valid (optional link).
 * - Otherwise only http: or https: URLs are accepted (protocol required).
 */
export const isValidUrl = (value: string): boolean => {
  const trimmed = value.trim();
  if (trimmed === '') return true;
  try {
    const url = new URL(trimmed);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};
