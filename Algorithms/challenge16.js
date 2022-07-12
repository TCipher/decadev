// Challenge 1
// Implement a function secondLargest(arr) that takes an array of
//  numbers and returns the second largest number.

function secondLargest(arr){
    let result = arr.sort((a,b) => a - b)
    return result[1] 
}