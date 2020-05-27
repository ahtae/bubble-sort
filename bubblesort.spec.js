describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(arr.bubbleSort([])).toEqual([]);
  });
  it("handles an array", function () {
    expect(arr.bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
});

describe("Bubble Sort Swap", function () {
  const nums = [4,3,2,1];

  beforeAll(function () {
    spyOn(arr, 'swap').and.callThrough();
  });

  it("sorting the array involves exactly 6 swaps", function () {
    arr.bubbleSort(nums);
    expect(arr.swap.calls.count()).toEqual(6);
  });
});
