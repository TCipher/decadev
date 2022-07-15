// you have an arrray of objects that contains 
// name, age and gender of different students your task is to
// return total ages of male and female students that are not older than 25,
// i.e people that are aged 25 or less
const students =
[
    { name: 'Mary', age:35, gender: 'female'},
    { name: 'Stephen', age:20, gender: 'male'},
    { name: 'Dave', age:15, gender: 'male'},
    { name: 'Jane', age:25, gender: 'female'},
    { name: 'John', age:10, gender: 'male'},
    { name: 'fred', age:50, gender: 'female'},
    { name: 'caleb', age:46, gender: 'female'},
   
]

function sumOfAges(students){
    male = 0;
    female = 0;
    for(let i = 0; i< students.length; i++){
        const student = students[i]
        if(student.age <= 25 ){
            if(student.gender === 'male'){
                male += student.age
            }else{
                female += student.age
            }
        }
    }
     console.log({males: male, females: female})

}
sumOfAges(students)
