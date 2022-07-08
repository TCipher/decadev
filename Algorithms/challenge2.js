// Implement the function divisible(a) which returns the number 
//of the elements in that array a that are divisible by 2 and greater than 15.

// Examples
// divisible([2,3,12,18,42,24]) to return 3
// divisible([100,84,37]) to return 2
// divisible([5,8,6,12]) to return 0

function divisible(a){
    let noOfElements = a.filter(num => num % 2 === 0 && num > 15)
    console.log(noOfElements.length)
}
divisible([2,3,12,18,42,24]) 
 divisible([100,84,37])
divisible([5,8,6,12]) 