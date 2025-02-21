export function getFirstLetter(name: string) {
  return name.charAt(0).toUpperCase();
}

/**
 * Format price to currency
 * @param price
 * @returns
 */
export function formatPrice(price: number) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}