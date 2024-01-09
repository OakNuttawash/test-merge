export function merge(collection1: number[], collection2: number[]): number[] {
  const merge: number[] = [];
  let i = 0;
  let j = 0;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] < collection2[j]) {
      merge.push(collection1[i]);
      i++;
    } else {
      merge.push(collection2[j]);
      j++;
    }
  }

  while (i < collection1.length) {
    merge.push(collection1[i]);
    i++;
  }

  while (j < collection2.length) {
    merge.push(collection2[j]);
    j++;
  }

  return merge;
}
