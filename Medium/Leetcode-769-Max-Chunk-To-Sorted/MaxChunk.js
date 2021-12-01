var maxChunksToSorted = function (arr) {
  var max = 0;
  var chunk = 0;

  for (var i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);

    if (i == max) {
      chunk++;
    }
  }

  return chunk;
};

console.log("-----------------", maxChunksToSorted([1, 0, 2, 4, 3, 5]));
