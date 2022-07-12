// Challenge 3
// Implement the function sumMix(arr) that given an array of integers as strings and numbers, 
// returns the sum of the array values as if all were numbers.

function sumMix(arr){
const allNum = []
const num = arr.filter(values => typeof values === 'number')
const strToNum = arr.filter(values => typeof values !== 'number').map(a => Number(a))
allNum.push(...num,...strToNum)

const z = 0
let sumTotal = allNum.reduce((a,b) => a + b, z)
return sumTotal
}