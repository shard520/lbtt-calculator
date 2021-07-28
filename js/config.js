// Rate information from:
// https://www.gov.scot/policies/taxes/land-and-buildings-transaction-tax/
export const residentialTaxBands = [
  {
    range: [0, 145000],
    amount: 0,
  },
  {
    range: [145001, 250000],
    amount: 2,
  },
  {
    range: [250001, 325000],
    amount: 5,
  },
  {
    range: [325001, 750000],
    amount: 10,
  },
  {
    range: [750000, Infinity],
    amount: 12,
  },
];
