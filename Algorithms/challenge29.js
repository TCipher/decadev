// # Challenge 5

//  A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward 
//  or forward. This includes capital letters, punctuation, and word dividers.Implement a function 
//  that checks if something is a palindrome. If the input is a number, convert it to string first.


function isPalindrome(line) {
    let str = line.toString();
    //console.log(typeof str)
    let str2 = str.toLowerCase().split("").reverse().join("");
    return str === str2 ? true : false;
  }

//   # Examples
//  isPalindrome("anna")   ==> true
//  isPalindrome("walter") ==> false
//  isPalindrome(12321)    ==> true
//  isPalindrome(123456)   ==> false