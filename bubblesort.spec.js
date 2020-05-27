describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles an array", function () {
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
});

describe("Bubble Sort Swap", function () {
  let swapper = null;
  const arr = [4, 3, 2, 1];

  beforeAll(function () {
    swapper = {
      swap: function swap(array, i) {
        const temp = array[i];

        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }

    spyOn(swapper, "swap").and.callThrough();
  });

  it("sorting the array involves exactly 6 swaps", function () {
    expect(bubbleSort.calls.count()).toEqual(6);
  });
});
