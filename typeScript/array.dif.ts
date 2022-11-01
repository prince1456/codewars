export function arrayDiff(a: number[], b: number[]): number[] {
  if (!a.length) {
    return a;
  }
  const result: number[] = [];
  a.forEach((elm, i) => !b.includes(elm) && result.push(elm));
  return result;
}
// useFIlter
export function arrayDiff2(a: number[], b: number[]): number[] {
  return a.filter((e) => !b.includes(e));
}
// useSet to solve problem
export function arrayDiff3(a: number[], b: number[]): number[] {
  const bSet = new Set(b);
  return a.filter((value) => !bSet.has(value));
}
console.log(
  arrayDiff(
    [
      98, 26, 42, 40, 78, 54, 25, 17, 36, 98, 12, 25, 69, 46, 23, 77, 33, 79,
      53, 58, 48, 77, 26, 30, 57, 99, 58, 2, 79,
    ],
    [49, 2, 94, 61]
  )
);
console.log(arrayDiff([4, 3], [4]));
