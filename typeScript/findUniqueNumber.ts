function findUniq(arr: Array<number>): number {
  let index = 0;
  arr.forEach((num: number, i: number) => {
    if (arr.lastIndexOf(num) === i && arr.indexOf(num) === i) {
      index = i;
    }
  });

  return arr[index];
}
//second solution
export function findUniq2(arr: Array<number>): number {
  arr = arr.sort();
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}
console.log(findUniq([1, 1, 1, 2, 1, 1]));
