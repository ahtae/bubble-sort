function split(wholeArray) {
  const length = wholeArray.length;
  const halfOfLength = Math.ceil(length / 2);
  const firstHalf = wholeArray.slice(0, halfOfLength);
  const secondHalf = wholeArray.slice(halfOfLength);

  return [firstHalf, secondHalf];
}

function merge(leftArray, rightArray) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedIndex = 0;
  const sortedArray = new Array(leftArray.length + rightArray.length);

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray[sortedIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      sortedArray[sortedIndex] = rightArray[rightIndex];
      rightIndex++;
    }
    sortedIndex++;
  }

  for (let i = leftIndex; i < leftArray.length; i++) {
    sortedArray[sortedIndex] = leftArray[i];
    sortedIndex++;
  }

  for (let i = rightIndex; i < rightArray.length; i++) {
    sortedArray[sortedIndex] = rightArray[i];
    sortedIndex++;
  }

  return sortedArray;
}

function mergeSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  const [leftArray, rightArray] = split(array);
  const leftSortedHalfOfArray = mergeSort(leftArray);
  const rightSortedHalfOfArray = mergeSort(rightArray);

  return merge(leftSortedHalfOfArray, rightSortedHalfOfArray);
}
