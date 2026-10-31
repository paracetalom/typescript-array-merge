
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;

  while (
    i < collection_1.length ||
    j < collection_2.length ||
    k >= 0
  ) {
    let min = Infinity;
    let source = -1;

    if (i < collection_1.length && collection_1[i]! < min) {
      min = collection_1[i]!;
      source = 1;
    }

    if (j < collection_2.length && collection_2[j]! < min) {
      min = collection_2[j]!;
      source = 2;
    }

    if (k >= 0 && collection_3[k]! < min) {
      min = collection_3[k]!;
      source = 3;
    }

    result.push(min);

    if (source === 1) {
      i++;
    } else if (source === 2) {
      j++;
    } else if (source === 3) {
      k--;
    }
  }

  return result;
}
