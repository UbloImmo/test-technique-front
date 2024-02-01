type Currency = "$" | "€" | "¥";

/**
 * Formats the rent amount and appends the currency symbol.
 *
 * @param {number} rent - the rent amount to be formatted
 * @param {Currency} [currency = "€"] - the currency symbol to append (default is "€")
 * @return {string} the formatted rent amount with the currency symbol
 */
export const formatRent = (rent: number, currency: Currency = "€") => {
  const divided = rent / 100;
  const stringified = String(divided);
  const formatted = stringified.replace(".", ",");
  return `${formatted} ${currency}`;
};
