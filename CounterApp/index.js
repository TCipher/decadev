
let dispaly = document.querySelector('.counter')
let  btnIncrement = document.querySelector('.increment')
let btnDecrement = document.querySelector('.decrement')

let counter = 0
btnIncrement.addEventListener('click',function(){
    counter +=1
    dispaly.innerText = counter
})

btnDecrement.addEventListener('click',function(){
    counter -=1
    dispaly.innerText = counter
})