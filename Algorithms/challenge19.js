// Challenge 4
// Implement the function sumTwoSmallestNums(arr) that takes an array of numbers
//  and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr){
    let [num1,num2] = arr.filter(values => values > 0).sort((a,b) => a - b)
    return num1 + num2
}