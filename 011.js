// 11. Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()
//     - 4 > 3 
//     - 4 >= 3
//     - 4 < 3 
//     - 4 <= 3 
//     - 4 == 4 
//     - 4 === 4
//     - 4 != 4 
//     - 4 !== 4 
//     - 4 != '4' 
//     - 4 == '4' 
//     - 4 === '4' 
//     - Find the length of python and jargon and make a falsy comparison statement.


console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==3)
console.log(4===4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')


let lengthOfPython = "python".length
console.log(lengthOfPython)
let lengthOfJargon = "jargon".length
console.log(lengthOfJargon)

if (lengthOfPython === undefined || lengthOfJargon === NaN) {
    console.log("hello world")
}