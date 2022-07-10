// Challenge 3
// Implement the function increment(arr, value) which increments the
 //value of val key in every object inside the array by the given value and returns the new array

// Examples
// increment([{ val: 1 }, { val: 2}, { val: 3 }], 2) to return [{ val: 3 }, { val: 4 }, { val: 5 }]
// increment([{ val: 10 }, { val: 20}, { val: 30 }], 5) to return [{val: 15 }, { val: 25 }, { val: 35 }]

function increment(arr, value) {
    let result = arr.map(items => items.val += value)
    console.log(result)
}

module.exports = increment

increment([{ val: 10 }, { val: 20}, { val: 30 }], 5)