// # Challenge 2

// A prime number is a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).

// Implement  a function  checkPrime(num) that returns true if a number is a prime number
//  and false if it is not

function checkPrime(num) {
    return num % 2 !== 0 || num === 2;
  }