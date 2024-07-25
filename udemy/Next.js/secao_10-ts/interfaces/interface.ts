interface Humano {
    nome: string
    idade?: number
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá, ' + pessoa.nome + '!') 
}

function mudarNOme(pessoa: Humano){
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome:'James',
    idade:40,
    saudar(sobrenome: string){
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNOme(pessoa)
saudarComOla(pessoa)

pessoa.saudar('Skywalker')

//---- Interface função -------------

interface funcaoCalculo {
    (a: number, b: number): number
}

let potencia: funcaoCalculo

potencia = function(base: number, exp: number): number {
    return base ** exp
}


console.log(potencia(2, 3))