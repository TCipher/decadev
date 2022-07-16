// Challenge 2
// Implement the function numSwap(number) which takes a number of even length,
//  swaps pairs of its adjacent digits and returns the swapped number.

// Examples
// numSwap(1234) to return 2143
// numSwap(432156) to return 341265

function numSwap(number) {
   if(number % 2 !== 0){
    return false
   }
   
   while(number > 0){
      let swap = 0
    let x = 1
    let num1 = number % 10
    let num2 = ((number - num1)/10)%10
    swap += x*(10 * num1 + num2)
    number = Math.floor(number/100)
    x *= 100
   }
   console.log(swap)
}
numSwap(1234)
numSwap(432156)
