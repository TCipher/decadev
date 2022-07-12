// Implement the function replaceDivisible(x, y) which replaces all numbers in an array, 
// x divisible by an integer,y with string “isDivisible”

function replaceDivisible(x, y) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
      if (x[i] % y !== 0) {
        result.push(x[i]);
      } else {
        result.push("isDivisible");
      }
    }
    return result;
  }


//   # Examples
// replaceDivisible([2,4,3,6,5], 3) => [2, 4, “isDivisible”, “isDivisible”, 5]
// replaceDivisible([12,4,3,6,5], 2) => [“isDivisible”, “isDivisible”, 3, “isDivisible”, 5]