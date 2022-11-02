function findUniq(arr) {
  let index = 0;
  arr.forEach((num, i) => {
    if (arr.lastIndexOf(num) === i && arr.indexOf(num) === i) {
      index = i;
    }
  });

  return arr[index];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
