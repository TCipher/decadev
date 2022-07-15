//Find the factorial of Numbers
function factorial(n){
 
   let result = n
 if(n <= 1){
   return 1
 }
 while(n> 1){
   n--
   result *= n
 }
 
 console.log(result)
 }
 factorial(5)
   