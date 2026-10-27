const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  maximumFractionDigits: 0,
});

/**
 * Formats an integer amount as "Rp49.000" to match the copy used on the site.
 */
export function formatRupiah(amount: number): string {
  return `Rp${rupiahFormatter.format(amount)}`;
}
