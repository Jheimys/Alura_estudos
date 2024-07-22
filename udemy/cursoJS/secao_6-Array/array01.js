/*
 (1) every e some => usados para verificar os elementos de um array o retorno é um 
     boleano.

 (2) filter => gera um novo array, não altera o original

 (3) forEach => percorre o array, não altera o original. retorna udefined

*/
const arr = [1,  5, 10, true, "olá"]

const sohNumeros = arr.every(function (e){
    return typeof e === "number"
})

const sohNumeros1 = arr.some(function (e){
    return typeof e === "number"
})

let arr1 = arr.filter(element => {
   return typeof element === "number"
})


arr1 = arr1.map(function(e){
    return e * e
})

console.log(sohNumeros)   //false

console.log(sohNumeros1)  //true

console.log(arr1)

