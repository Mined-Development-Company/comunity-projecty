/**
 * Utilities to format and mask BRL currency values.
 *
 * Example:
 *   formatCurrency(1234567.89) => "R$ 1.234.567,89"
 *   maskCurrency("123456")     => "R$ 1.234,56"
 * 
 * OBS:
 * Se o rogerinho ler isso ele vai ter que me da 100 conto
 */

/**
 * Formats a numeric value to currency using Intl.NumberFormat.
 */
export function formatCurrency(
  value: number,
  locale: string = 'pt-BR',
  currency: string = 'BRL'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value)
}

/**
 * Currency input mask helper.
 * - Accepts a string with any characters (e.g., user typing)
 * - Keeps only digits, converts to cents and formats as BRL
 * - Returns a formatted string (e.g., "R$ 1.234,56")
 */
export function maskCurrency(
  raw: string | number,
  locale: string = 'pt-BR',
  currency: string = 'BRL'
): string {
  const numeric = typeof raw === 'number' ? raw : toNumberFromRaw(raw)
  return formatCurrency(numeric, locale, currency)
}

function toNumberFromRaw(raw: string): number {
  const digits = raw.replace(/\D/g, '')
  const asNumber = Number(digits || '0')
  // interpret as cents
  return asNumber / 100
}
