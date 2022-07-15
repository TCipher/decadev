// Challenge 5
// Implement the function replaceDivisible(x, y) which replaces
//  all numbers in an array, x divisible by an integer, y with string “isDivisible”

// Examples
// replaceDivisible([2,4,3,6,5], 3) => [2, 4, “isDivisible”, “isDivisible”, 5]
// replaceDivisible([12,4,3,6,5], 2) => [“isDivisible”, “isDivisible”, 3, “isDivisible”, 5]

function replaceDivisible(x, y){
    let divisible = []
    for(i = 0; i < x.length; i++){
        if(x[i] % y === 0){
            divisible.push("isDivisible")
        }else{
            divisible.push(x[i])
        }
    }
    console.log(divisible)
}

replaceDivisible([2,4,3,6,5], 3)
replaceDivisible([12,4,3,6,5], 2) 

