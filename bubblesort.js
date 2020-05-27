const obj = {};

obj.bubbleSort = function (array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        obj.swap(array, i);
        sorted = false;
      }
    }
  }

  return array;
};

obj.swap = function (array, i) {
  const temp = array[i];

  array[i] = array[i + 1];
  array[i + 1] = temp;
};
