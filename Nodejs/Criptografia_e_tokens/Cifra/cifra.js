const mensagemSecreta = 'minhamensagemsecreta'
console.log(mensagemSecreta)

function cifraMensagem(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere + movimentos)
    })

    return mensagemCifrada.join('')
}

function decifraMensagem(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere - movimentos)
    })

    return mensagemCifrada.join('')
}

const mensagenCifrada = cifraMensagem(mensagemSecreta,3)
const  mensagenDecifrada= decifraMensagem(mensagenCifrada,3)

console.log(mensagenCifrada)
console.log(mensagenDecifrada)
