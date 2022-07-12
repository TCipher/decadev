// Implement the function missingNumber(numArr) 
// which returns the missing number in a given integer array between 1 and 9. 
// If there is no missing number, the function should return false. 
// If there is more than one missing number, the function should return 
// the result in an array sorted in ascending order.
function missingNumber(numArr) {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = num.filter((x) => !numArr.includes(x));
    if (result.length === 1) {
      return result[0];
    } else if (result.length > 1) {
      return result;
    } else {
      return false;
    }
  }
  
//   # Examples

//   missingNumber([1,2,3,4,6,7,8,9]) to return 5
//   missingNumber([1,2,3,4,5,6,8]) to return [7, 9]
//   missingNumber([1,2,3,4,5,6,7,8,9]) to return false
  