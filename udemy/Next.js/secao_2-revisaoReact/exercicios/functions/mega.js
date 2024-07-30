export function mega(qtde = 6, numeros = [] ){
    if(qtde < 6 && qtde > 60){
        throw "Quandidade inválida"
    }

    if(numeros.length === qtde){
        return numeros.sort((n1, n2) => n1 - n2) 
    }

    const numerosAleatorios = parseInt(Math.random() * 60) + 1

    if(!numeros.includes(numerosAleatorios)){
        return mega(qtde, [...numeros, numerosAleatorios])
    } else {
        return mega(qtde, numeros)
    }
}


console.log(mega())