// There is a queue for the self-checkout tills at the supermarket. 
// Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
    //TODO
    let arr = []
    for(let i =0; i < n; i++){
      arr[i] = 0
    }
    for(let i = 0; i < customers.length; i++){
      arr[0] += customers[i]
      arr.sort((a,b) => a - b)
    }
    return arr[arr.length - 1]
  }
// (queueTime([], 1), 0);
// (queueTime([1,2,3,4], 1), 10);
// (queueTime([2,2,3,3,4,4], 2), 9);
// (queueTime([1,2,3,4,5], 100), 5);
