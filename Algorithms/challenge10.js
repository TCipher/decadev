// Challenge 1
// Implement the function missingNumber(numArr) which returns the missing 
// number in a given integer array between 1 and 9. If there is no missing 
// number, the function should return false. If there is more than one missing
//  number, the function should return the result in an array sorted in ascending order.

// Examples
// missingNumber([1,2,3,4,6,7,8,9]) to return 5
// missingNumber([1,2,3,4,5,6,8]) to return [7, 9]
// missingNumber([1,2,3,4,5,6,7,8,9]) to return false

function missingNumber(numArr){
    let num = [1,2,3,4,5,6,7,8,9]
    let missingValue = num.filter(values => !numArr.includes(values))
        if(missingValue.length === 1){
        return missingValue[0]
           //console.log(missingValue[0])
        }else if(missingValue.length > 1){
            return missingValue
            //console.log(missingValue)
        }else{
            //console.log(false)
            return -1
        }
       
    }

    missingNumber([1,2,3,4,6,7,8,9])
    missingNumber([1,2,3,4,5,6,8]) 
    missingNumber([1,2,3,4,5,6,7,8,9])     
