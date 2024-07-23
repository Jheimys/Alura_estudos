let arr = [1, 2, 3]
arr.reverse()
console.log(arr)

const nomes = ["Daniel", "Maria", "Joana", "João"]

let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    //console.log(primeiraLetra)
    
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }  else {
        nomes[primeiraLetra] = 1 
    }

    return nomes

}, {})


console.log(nomesPorOrdem)