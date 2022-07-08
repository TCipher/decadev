// Challenge 1
// Given a Roman numeral less than `4,000`, convert it to a decimal number. This [Wikipedia article](roman-numerals) describes Roman numerals in details, but here is a brief description:
// Roman numerals consist of the following symbols:
// ```
// I is 1
// V is 5
// X is 10
// L is 50
// C is 100
// D is 500
// M is 1,000
// ```
// A numeral is formed by a sequence of these symbols, where each symbol can be used up to 3 times to contribute to the total. Symbols are ordered left-to-right from larger to smaller, except for the following cases:
// `I` placed before `V` or `X` indicates one less, so `4` is `IV` (one less than 5) and `9` is `IX` (one less than 10).
// `X` placed before `L` or `C` indicates ten less, so 40 is `XL` (ten less than 50) and 90 is `XC` (ten less than 100).
// `C` placed before `D` or `M` indicates a hundred less, so 400 is `CD` (a hundred less than 500) and `900` is `CM` (a hundred less than 1,000)
// For example, 11 is `XI`, `98` is `XCVIII`, `99` is `XCIX` and 1944 is `MCMXLIV`.
// [roman-numerals]: https://en.wikipedia.org/wiki/Roman_numerals

function romanToDecimal(roman){
    let total = 0;
    let index = 0;
    let input = roman.toLowerCase()

let converter = {
    i:1,
    v: 5,
    x: 10,
    l:50,
    c:100,
    d:500,
    m:1000

}

while(index < input.length){
let current = input[index]
let next = input[index + 1]
if(converter[current] < converter[next]){
    total += converter[next] - converter[current]
    index += 2
}else{
    total += converter[current]
    index++
}
}
console.log(total)
}
romanToDecimal('M')
romanToDecimal('IXX')
romanToDecimal('XD')