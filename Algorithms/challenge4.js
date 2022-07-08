// Challenge 4
// Implement the function highestSum(x, y) where x and y are both arrays,
//  return the sum of the array with the highest value when it's elements are summed respectively.

// Examples
// highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]) to return 20
// highestSum([15,7], [12,17]) to return 29
// highestSum([30], [3,6,2,6]) to return 30

function highestSum(x, y){
    let arr1Sum = x.reduce((a,b) => a+b,0)
    let arr2Sum = y.reduce((a,b) => a+b,0)
    result = (arr1Sum > arr2Sum)? arr1Sum : arr2Sum

    return result

   // console.log(result)

    // let num = []
    // let arr1 = x.reduce((a,b) => a + b,0)
    // let arr2 = y.reduce((a,b) => a + b)
    //     num.push(arr1, arr2)
    // return (Math.max(...num))
}
highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]) 
highestSum([15,7], [12,17]) 
highestSum([30], [3,6,2,6]) 
