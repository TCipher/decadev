// # Challenge 3
// Write a function `BinaryReversal` that takes a string parameter, which will be a positive integer.
// Take its binary representation (padded to the nearest N \* 8 bits), reverse that string of bits,
// and then finally return the new reversed string in decimal form.
// For example: if the parameter is `"47"` then the binary version of this integer is `101111` 
//but we pad it to be `00101111` so we have 8 numbers.
// Your program should reverse this binary string which then becomes: `11110100` and then finally 
//return the decimal version of this string, which is `244`.
// ### Examples
// ```
// Input: "213"
// Output: 171
// ```
// ```
// Input: "4567"
// Output: 60296
// ``` 
function BinaryReversal(value){
let num = parseInt(value)
let binaryNum = num.toString(2)

    let padded = binaryNum.padStart(8,0)
    let reversed = padded.split('').reverse().join('')
    let binaryDecimal = parseInt(reversed,2)
    console.log(binaryDecimal)

}
BinaryReversal(47)
BinaryReversal(213)
BinaryReversal(4567)
BinaryReversal(100)
