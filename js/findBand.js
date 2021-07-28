import { residentialTaxBands } from './config.js';

// Returns an array containing all tax bands with a range lower than the purchasePrice
export const findBands = function (purchasePrice) {
  const taxBands = [];
  residentialTaxBands.forEach(band => {
    const [lower] = band.range;
    if (purchasePrice < lower) return;
    taxBands.push(band);
  });
  return taxBands;
};
