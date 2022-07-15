// //write a function camillize(str) that changes dash-seperated words like
//  "my-short-sorting" into Camel-Cased "myShortingString"
//  examples: Camalized("background-color")=== "backgroundColor"

function Camalized(str){
    str = str.split('-').map((word,index) => {
        if(index === 0){
          return   word.toLowerCase()
        }else
        if(index > 0){
          return  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
    }).join('')
    console.log(str)
}

Camalized('my-short-sorting')
Camalized("background-color")