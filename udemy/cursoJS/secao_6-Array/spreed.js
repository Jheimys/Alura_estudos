const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

arr1.push(arr2)

console.log(arr1) //[ 1, 2, 3, [ 4, 5, 6 ] ]

//------- Usando o spreed --------------------------

const arr3 = [1, 2, 3]
const arr4 = [4, 5, 6]

arr3.push(...arr4)

console.log(arr3) //[ 1, 2, 3, 4, 5, 6 ]