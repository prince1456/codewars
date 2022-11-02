function validate(n) {
  const listOfNumber = n.toString().split("");
  const doubleList = [];
  for (let i = 0; i < listOfNumber.length; i++) {
    if (listOfNumber.length % 2 === 0) {
      if (isEven(i)) {
        const num = listOfNumber[i] * 2;
        doubleList.push(num > 9 ? num - 9 : num);
      } else {
        doubleList.push(listOfNumber[i]);
      }
    } else {
      if (!isEven(i)) {
        const num = listOfNumber[i] * 2;
        doubleList.push(num > 9 ? num - 9 : num);
      } else {
        doubleList.push(listOfNumber[i]);
      }
    }
  }

  return doubleList.reduce((sum, current) => Number(sum) + Number(current), 0) %
    10 ===
    0
    ? true
    : false;
}
function isEven(n) {
  return n % 2 == 0;
}

// second shorter Solutions

function validate(n) {
  return [...String(n)]
    .reverse()
    .map((val, index) => (index % 2 ? val * 2 : Number(val)))
    .map((val, index) => (val > 9 ? val - 9 : val))
    .reduce((prev, curr) => prev + curr) % 10
    ? false
    : true;
}

console.log(validate(1230));
console.log(validate(1));
console.log(validate(2121));
console.log(validate(1230));
