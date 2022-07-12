// Challenge 2
// Implement a function filterArray(arr) that takes an array of non-negative
//  integers and strings and return a new array without the strings.

function filterArray(arr){
    return arr.filter(value => typeof value === 'number')

    // let result = []
    // for(let i =0; i < arr.length; i++){
    //     if(typeof arr[i] === 'number'){
    //         result.push(arr[i])
    //     }
    // }
    // return result
}