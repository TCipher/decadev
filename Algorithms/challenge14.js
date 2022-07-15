// Challenge 5
// Implement the function arraySum(arr1, arr2) that takes two arrays as 
// arguments and returns an array of the sum of the values in the first array 
// with the values in the second array in repeating order.

// Examples
// arraySum([1,2,4,5,6,2,1], [2,3,5]) to return [3,5,9,7,9,7,3]
// arraySum([10,20,30,40,50], [20,40,60]) to return [30,60,90,60,90]

function arraySum(arr1, arr2){
  let sum = []
  for(i = 0; i < arr1.length; i++){
    sum.push(arr1[i] + arr2[i % arr2.length])
  }
  console.log(sum)
}
arraySum([1,2,4,5,6,2,1],[2,3,5])