describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3])).toEqual([[1,2],[3]]);
  });
})

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1,2],[3])).toEqual([1,2,3]);
  });
})

describe('Merge sort function', function() {
  it('is able to sort the array', function() {
    expect(mergeSort([9,8,7,6,5])).toEqual([5,6,7,8,9]);
  })
})
