"use strict";
exports.__esModule = true;
exports.digitalRoot = void 0;
var digitalRoot = function (n) {
    if (n < 10) {
        return n;
    }
    var nextNumber = n.toString().split('').map((function (a) { return Number(a); }))
        .reduce(function (sum, num) { return Number(sum) + Number(num); });
    return (0, exports.digitalRoot)(nextNumber);
};
exports.digitalRoot = digitalRoot;
console.log((0, exports.digitalRoot)(35));
//   const digitalRoot = (n) => {
//     if(n < 10 ) { 
//         return n
//     }
//         const nextNumber = n.toString().split('')
//         .map((a => Number(a)))
//         .reduce((sum, num) => Number(sum) + Number(num) )
//         return digitalRoot(nextNumber)
//   };
