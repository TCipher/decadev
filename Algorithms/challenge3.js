// implement the function isDivisbleByN(arr, n) which extracts all the values 
// in the input array arr that are divisible by n into another array and returns the new array.

// Examples
// isDivisbleByN([1,3,5,6,3,6,7,4], 2) to return [6, 6, 4]
// isDivisbleByN([21,3,5,6,3,6,7,4], 7) to return [21, 7]

function isDivisbleByN(arr, n){
    let divisible = arr.filter(num => num % n === 0)
    return divisible
    //console.log(divisible)
}
isDivisbleByN([1,3,5,6,3,6,7,4], 2) 
isDivisbleByN([21,3,5,6,3,6,7,4], 7) 