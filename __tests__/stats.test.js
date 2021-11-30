import { max, min } from '../stats';

describe('stats', () => {
  it('gets maximum value', () => {
    expect(max([1, 2, 3, 4])).toBe(4);
  });
  it('gets minimum value', () => {
    expect(min([1, 2, 3, 4])).toBe(1);
  });
});