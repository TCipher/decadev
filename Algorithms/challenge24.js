//Given an array of numbers, write a function that returns only the duplicated numbers in the array.
function findNonUnique(arr){
    let sorted = []
    let num = arr.sort()
    for(i = 0; i < num.length; i++){
        if(num[i] === num[i +1]){
            if(!sorted.includes(num[i]))
            sorted.push(num[i])
        }
    }

    console.log(sorted)
}

findNonUnique([1,2,2,2,3,4,5,6,7,8,9,0,0,0])
