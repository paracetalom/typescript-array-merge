# TypeScript Array Merge

## Project Overview

A TypeScript implementation of `merge()`, which combines three integer arrays into a single array sorted in ascending order. The built-in `sort()` is deliberately not used. The project is tested with Jest and ts-jest.

## Problem Description

Implement the following function:

```typescript
merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[]
```

Return one array containing every element from the three inputs, in ascending order. Duplicates are kept.

**Restriction:** the built-in `sort()` must not be used.

Example:

```typescript
merge([1, 3, 5], [2, 4, 6], [9, 7, 5]);
// [1, 2, 3, 4, 5, 5, 6, 7, 9]
```

## Input Requirements

- `collection_1` is sorted in ascending order.
- `collection_2` is sorted in ascending order.
- `collection_3` is sorted in descending order.
- Elements are numbers (integers). Any array may be empty.

The function assumes these ordering guarantees and does not validate them.

## Algorithm Approach

A three-pointer merge, similar to the merge step of merge sort:

1. Pointers `i` and `j` start at the beginning of the two ascending arrays.
2. Pointer `k` starts at the **end** of the descending array, so it also reads values from smallest to largest.
3. On each iteration the smallest value among the three current positions is appended to the result, and only that pointer advances.
4. The loop ends when all three arrays are exhausted.

## Time and Space Complexity

Let `n`, `m` and `k` be the lengths of the three arrays.

- **Time:** O(n + m + k). Each element is visited once, with a constant number of comparisons.
- **Auxiliary space:** O(1), excluding the output array.
- **Output space:** O(n + m + k).

## Installation

Requires Node.js and npm.

```bash
npm install
```

## How to Run Tests

```bash
npm test
```

Type-check without emitting files:

```bash
npx tsc --noEmit
```

Compile to `dist/`:

```bash
npm run build
```

The tests cover: three sorted arrays, all-empty input, one empty array, duplicate values, and negative numbers.

## Technologies Used

- TypeScript
- Node.js
- Jest
- ts-jest
