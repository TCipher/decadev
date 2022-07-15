// Challenge 4
// An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed.
//  Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 
//  10 and assuming that the ATM wants to use as few bills as possible.

// Implement the function withdraw(amount) that returns the minimal number of 100, 50 and 20 
// Naira bills the ATM needs to dispense (in that order) in an array.

function withdraw(amount){
   let noHundred = Math.floor(amount/100)
   let noFifty = Math.floor((amount - noHundred * 100)/50) 
   let noTwenty = Math.floor((amount  - (noHundred * 100) - (noFifty * 50))/20)
   console.log(noHundred,noFifty,noTwenty)
}

withdraw(250)
withdraw(370)