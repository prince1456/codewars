// Given a number return the closest number to it that is divisible by 10.


const closestMultiple10 = num => {
var num2 = num / 10
  return Math.round(num2) * 10  ;
};
