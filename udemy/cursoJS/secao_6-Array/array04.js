// ------------ Método push() -------------------
//add no final

let arr = [1, 3, 5, 7, 9]

let teste  = arr.push(11, 13, true, "olá mundo") 

console.log(teste) // 9 => length do array teste
console.log(arr) // [ 1, 3, 5, 7, 9, 11, 13, true, 'olá mundo' ]


//------------- Método pop() ---------------------
//remove do final

let arr2 =  [ 1, 3, 5, 7, 9, 11, 13, true, 'olá mundo' ]
let ultimoItem = arr2.pop()

console.log(ultimoItem) //olá mundo
console.log(arr2) // [ 1, 3, 5, 7, 9, 11, 13, true ]

//----------- Método shift() -------------------------
// remove do início

let arr3 = [ 1, 3, 5, 7, 9, 11, 13, true ]

let primeiroItem = arr3.shift()

console.log(primeiroItem) // 1
console.log(arr3) //[3,    5,  7, 9,    11, 13, true]

//----------- Método unshift() -------------------------
//add no início

let arr4 = [3, 5, 7, 9, 11, 13, true]

let newArr4 = arr4.unshift(1, 2)

console.log(newArr4) // 9 => length de newArr4
console.log(arr4) // [1, 2, 3, 5, 7, 9, 11, 13, true]

//----------- Método slice() -------------------------
let arr5 = [1, 2, 3, 5, 7, 9, 11, 13, true]

let newArr5 = arr5.slice(2, 6) //[2, 6)

console.log(newArr5) //[ 3, 5, 7, 9 ]
console.log(arr5)  // não altera o original

//----------- Método splice() -------------------------
let arr6 = [1, 2, 3, 5, 7, 9, 11, 13]

let newArr6 = arr6.splice(2)

console.log(newArr6) //[ 3, 5, 7, 9, 11, 13 ]
console.log(arr6) // [ 1, 2 ]

let arr7 = [1, 2, 3, 5, 7, 9, 11, 13]

let newArr7 = arr7.splice(2, 4)

console.log(newArr7) //[ 3, 5, 7, 9 ]
console.log(arr7) // [ 1, 2, 11, 13 ]


let arr8 = [1, 2, 3, 5, 7, 9, 11, 13]

let newArr8 = arr8.splice(2, 4, "olá mundo")

console.log(newArr8) // [ 3, 5, 7, 9 ]
console.log(arr8) // [ 1, 2, 'olá mundo', 11, 13 ]
