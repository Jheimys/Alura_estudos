"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome + '!');
}
function mudarNOme(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'James',
    idade: 40,
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNOme(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Skywalker');
let potencia;
potencia = function (base, exp) {
    return base ** exp;
};
console.log(potencia(2, 3));
