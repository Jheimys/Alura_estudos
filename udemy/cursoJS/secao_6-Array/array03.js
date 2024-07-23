//concat()
// join()
//toString()

let arr1 = [1, 2, 3]
let arr2 = [5, 6, 7]
let arr3 = arr1.concat(arr2)

console.log(arr1.toString()) //1,2,3
console.log(typeof arr1.toString()) //string

console.log(arr1.join("-")) //1-2-3

console.log(arr3) // [ 1, 2, 3, 5, 6, 7 ]
