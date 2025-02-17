export function getFirstLetter(name: string) {
  return name.charAt(0).toUpperCase();
}

export function formatPrice(price: number) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}