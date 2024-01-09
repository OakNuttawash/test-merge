import { merge } from "./merge";

describe("merge", () => {
  it("merged", () => {
    const collection1: number[] = [];
    const collection2: number[] = [2, 4, 6, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([2, 4, 6, 8]);
  });

  it("merged", () => {
    const collection1: number[] = [1, 3, 5];
    const collection2: number[] = [2, 4, 6, 8];
    const result = merge(collection1, collection2);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });

  it("merged", () => {
    const collection1: number[] = [];
    const collection2: number[] = [2, 4, 6, 8];
    const result = merge(collection1, collection2);

    expect(result).toEqual([2, 4, 6, 8]);
  });

  it("merged", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const result = merge(collection1, collection2);

    expect(result).toEqual([]);
  });

  it("merged", () => {
    const collection1: number[] = [0];
    const collection2: number[] = [0];
    const result = merge(collection1, collection2);

    expect(result).toEqual([0, 0]);
  });
});
