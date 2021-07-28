import { findBands } from './findBand.js';

export const calcLBTTAmount = function (purchasePrice) {
  try {
    if (purchasePrice < 0) throw new Error('Please enter a positive number');
    if (!typeof purchasePrice === 'number')
      throw new Error('Please enter a valid number');

    const bands = findBands(purchasePrice);

    if (bands.length === 1) return 'There is no LBTT due.';

    let taxDue = 0;
    let currentPrice = purchasePrice;

    for (let currentBand = bands.length - 1; currentBand > 0; currentBand--) {
      const {
        range: [lower],
        amount,
      } = bands[currentBand];

      // Get portion of purchasePrice applicable at current band rate
      const bandThreshold = currentPrice - lower;
      // Get amount of tax due at current band rate
      const bandTax = Math.round(bandThreshold * (amount / 100));
      // Update sum of tax due
      taxDue += bandTax;
      // Update currentPrice to work out tax due at lower band rates
      currentPrice = currentPrice - bandThreshold;
    }

    return `There is £${taxDue} LBTT due on a purchase price of £${purchasePrice}`;
  } catch (err) {
    console.error(err);
  }
};

// console.log(calcLBTTAmount(140000)); // 0
// console.log(calcLBTTAmount(150000)); // 100
// console.log(calcLBTTAmount(300000)); // 4600
