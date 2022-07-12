function  noOfMultiples(n,m,d){
    let multiples = []
   if(m%d === 0){
    d = 1
   }
   for(i = 0; i < n; i++){
    let multiple = m * (d * (i + 1))
    multiples.push(multiple)
   }
   console.log(multiples)
}

noOfMultiples(10,2,5) //[10,20,30,40,50,60,70,80,90,100]
noOfMultiples(5,3,3)   //[3,6,9,12,15]
noOfMultiples(5,4,5)
noOfMultiples(8,2,2)
