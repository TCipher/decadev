// # Challenge 4
// You have been given an array of size `N` consisting of integers. In addition you have been given an element `M`. You need to find and print the index of the last occurrence of this element `M` in the array if it exists in it, otherwise print `-1`.
// Input Format:
// `needle` - The element to be searched for in the array.
// `haystack` - An integer array.
// Output Format:
// Return a integer denoting the index of the last occurrence of integer `M` in the array if it exists, otherwise print `-1`. For multi dimensional arrays, return an array with the first index being the row the integer was found and the second index being the column like `[row, column]`
// ### Examples
// Input:
// ```js
// needle: 5;
// haystack: [1, 2, 3, 4, 5];
// ```
// Output: `4`
// Input:
// ```js
// needle: 5;
// haystack: [
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5],
// ];
// ```
// Output: `[2, 4]`
// _Explanation: `Row 2, Column 4` is the index of the last index of 5. Remember that indexes are 0 based._

function listSorting(needle, haystack) {
  if(!Array.isArray(haystack[0])){
    return haystack[0].lastIndex(needle)
  }
  for(row = haystack.length -1; row >= 1; row--){
    let col = haystack[row].lastIndex(needle)
    if(col !== -1){
        return [row,col]
    }
  }
  return -1
}
// function listSorting(needle, haystack) {
//     if(!Array.isArray(haystack[0])){
//         return haystack.lastIndexOf(needle)
//     }
//     for(row = haystack.length -1; row >= 0; row--){
//         let col = haystack[row].lastIndexOf(needle)
//         if(col !== -1){
//             return [row,col]
//         }
//     }
//     return -1
// }
