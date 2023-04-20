
async function consultaEndereco(cep){
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPJson = await consultaCEP.json()
        
        if(consultaCEPJson.erro) {
            throw Error('CEP não existente!')
        }

        console.log(consultaCEPJson)   

    } catch (erro) {

        console.log(erro)
    }
}

