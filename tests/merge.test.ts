import { merge } from '../src/merge';

describe('merge()', () => {
  test('should merge three sorted arrays', () => {
    expect(
      merge([1, 3, 5], [2, 4, 6], [9, 7, 5])
    ).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
  });

  test('should handle empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test('should handle one empty array', () => {
    expect(
      merge([1, 3], [2, 4], [])
    ).toEqual([1, 2, 3, 4]);
  });

  test('should handle duplicate values', () => {
    expect(
      merge([1, 2, 2], [2, 3], [4, 2, 1])
    ).toEqual([1, 1, 2, 2, 2, 2, 3, 4]);
  });

  test('should handle negative numbers', () => {
    expect(
      merge([-5, -1, 3], [-4, 0, 2], [5, -2, -6])
    ).toEqual([-6, -5, -4, -2, -1, 0, 2, 3, 5]);
  });
});