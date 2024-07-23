/*

- indexOf
- lastindexof
- includes
- find
- findIndex

*/

let arr = [4,  5, 10, 15 , 10, 5, 10]

console.log(arr.indexOf(10)) //2
console.log(arr.indexOf(90)) //-1

console.log(arr.lastIndexOf(10)) //6
console.log(arr.lastIndexOf(90)) //-1

console.log(arr.includes(5)) //true
console.log(arr.includes(90)) // false

console.log(arr.find(function(e){
    return e > 10 //15
}))

console.log(arr.find(function(e){
    return e > 100 //undefined
}))

console.log(arr.findIndex(function(e){
    return e > 5 //2
}))
