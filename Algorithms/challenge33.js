// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new
//  inhabitants per year come to live in the town. How many years does the town need to see its
//  population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p){
    for(var count = 0 ; p0 < p; count++){
        p0 += p0 * percent / 100 + aug | 0
    }
    console.log(count)
    //return count
}
// nbYear(1500, 5, 100, 5000), 15)
nbYear(1500, 5, 100, 5000)
// nbYear(1500000, 2.5, 10000, 2000000), 10)
nbYear(1500000, 2.5, 10000, 2000000)