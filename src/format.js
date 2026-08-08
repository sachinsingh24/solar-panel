/* Number + currency formatting helpers (Indian conventions). */

export const fmtInt = (n) => Math.round(n).toLocaleString('en-IN');

export const fmtINR = (n) => `₹${fmtInt(n)}`;

/* Compact rupees: ₹1.24 L / ₹3.10 Cr for big numbers, grouped ₹ otherwise. */
export function fmtINRShort(n) {
  const v = Math.round(n);
  if (v >= 10000000) return `₹${(v / 10000000).toFixed(2)} Cr`;
  if (v >= 100000) return `₹${(v / 100000).toFixed(2)} L`;
  return `₹${fmtInt(v)}`;
}
