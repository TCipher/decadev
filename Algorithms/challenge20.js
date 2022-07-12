// Challenge 5
// Implement the function filterList(arr) that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.

function filterList(arr){
    return arr.filter(num => typeof num === 'number')
}