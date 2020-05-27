function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i);
        sorted = false;
      }
    }
  }

  return array;
}

function swap(array, i) {
  const temp = array[i];

  array[i] = array[i + 1];
  array[i + 1] = temp;
}
