describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(obj.bubbleSort([])).toEqual([]);
  });
  it("handles an array", function () {
    expect(obj.bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
});

describe("Bubble Sort Swap", function () {
  const nums = [4, 3, 2, 1];

  beforeAll(function () {
    spyOn(obj, "swap").and.callThrough();
  });

  it("sorting the array involves exactly 6 swaps", function () {
    obj.bubbleSort(nums);
    expect(obj.swap.calls.count()).toEqual(6);
  });
});
