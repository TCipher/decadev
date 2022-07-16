// // buble sortA bubble sort, or a “sinking sort,” 
// is a simple sorting algorithm that compares a pair of adjacent elements in a list.
//  If an element is not in the right order, we swap the element 
//  with the one before. Otherwise, the element remains in the same place

function bubbleSort(arr){
   for(i =0; i < arr.length; i++){
    for(j =0; j < arr.length; j++){
        if([arr[j]] > arr[j + 1]){
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] 
        }
    }
   }

    //return arr
    console.log(arr)
}
bubbleSort([6,2,3,7,5,4,1]) 

