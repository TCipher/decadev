// //write a function camillize(str) that changes dash-seperated words like
//  "my-short-sorting" into Camel-Cased "myShortingString"
//  examples: Camalized("background-color")=== "backgroundColor"

function camillize(str){
    let result = str.split('-').map((word,index) => {
        if(index === 0){
            return word.toLowerCase()
        }
        if(index > 0){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
    }).join('')
    //return result
    console.log(result)
}

camillize('my-short-sorting')