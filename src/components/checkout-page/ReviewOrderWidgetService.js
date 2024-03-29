/**
 * converts a price to a formatted string
 * @param {number} price
 * @returns {string} formatted price
 */
export const toPrice = (price) => `$${price.toFixed(2)}`;

/**
 * Gets the subtotal of an order
 * @param {Object []} products
 * @returns Number
 */
export const getSubtotal = (products) => {
  if (products.length) {
    return toPrice(products.reduce(
      (acc, item) => acc + (item.quantity * item.price), 0
    ));
  }
  // changed return from error message that breaks app
  return '$0.00';
};
