//Given an array of numbers, write a function that returns only the duplicated numbers in the array.
function findNonUnique(arr){
   let sorted = []
   arr = arr.sort((a,b) => a - b)
   //console.log(arr)
   for(i =0; i < arr.length;i++){
    if(arr[i] === arr[i + 1]){
        if(!sorted.includes(arr[i])){
            sorted.push(arr[i])
        }
    }
   }
   console.log(sorted)
}

findNonUnique([1,2,2,2,3,4,5,6,7,8,9,0,0,0])
