// Is Prime
//
// Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.
//
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
// Example
//
// isPrime(5)
// => true
function isPrime(n) {

    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}


// or THis best answer from reggna


function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}
