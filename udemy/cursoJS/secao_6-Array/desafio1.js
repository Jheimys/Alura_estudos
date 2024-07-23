//-------------------soculação 1
const numeros = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8,  9, 10, 10]

let numerosUnicos = numeros.reduce(function(acc, numeroAtual){
    //console.log(acc)
    //console.log(numeroAtual)

    if(!acc.includes(numeroAtual)){
        acc.push(numeroAtual)
    }

    return acc

}, [])

console.log(numerosUnicos)

//-------------------soculação 2 -------------------------------------
const numeros2 = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8,  9, 10, 10]

let numerosUnicos2 = numeros2.reduce(function(acc, numeroAtual){
    
    //console.log(acc.indexOf(numeroAtual))

    if(acc.indexOf(numeroAtual) < 0){
        acc.push(numeroAtual)
    }

    return acc

}, [])

console.log(numerosUnicos2)