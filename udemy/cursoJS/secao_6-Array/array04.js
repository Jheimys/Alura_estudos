// ------------ Método push() -------------------
let arr = [1, 3, 5, 7, 9]

let teste  = arr.push(11, 13, true, "olá mundo") 

console.log(teste) // 9 => length do array teste
console.log(arr) // [ 1, 3, 5, 7, 9, 11, 13, true, 'olá mundo' ]


//------------- Método pop() ---------------------
let arr2 =  [ 1, 3, 5, 7, 9, 11, 13, true, 'olá mundo' ]
let ultimoItem = arr2.pop()

console.log(ultimoItem) //olá mundo
console.log(arr2) // [ 1, 3, 5, 7, 9, 11, 13, true ]

//----------- Método shift() -------------------------
let arr3 = [ 1, 3, 5, 7, 9, 11, 13, true ]

let primeiroItem = arr3.shift()

console.log(primeiroItem) // 1
console.log(arr3) //[3,    5,  7, 9,    11, 13, true]