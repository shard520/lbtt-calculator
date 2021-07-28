import { calcLBTTAmount } from '../js/index.js';

describe('calcLBTTAmount function', () => {
  it('Should calculate 0 tax due on a purchase price of £140000', () => {
    expect(calcLBTTAmount(140000)).toEqual('There is no LBTT due.');
  });
  it('Should calculate £100 tax due on a purchase price of £150000', () => {
    expect(calcLBTTAmount(150000)).toEqual(
      'There is £100 LBTT due on a purchase price of £150000'
    );
  });
  it('Should calculate £4600 tax due on a purchase price of £300000', () => {
    expect(calcLBTTAmount(300000)).toEqual(
      'There is £4600 LBTT due on a purchase price of £300000'
    );
  });
});
